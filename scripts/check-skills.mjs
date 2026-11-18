#!/usr/bin/env node
/**
 * Validate every skill document in this repository before it reaches a running Harness.
 *
 * `@deepseek-ai/dsh-skill-official` parses its whole catalog in one pass, so a single
 * missing or malformed file removes the entire official catalog at once. This check runs
 * ahead of that: it verifies `official/` holds exactly the catalog the provider reads and
 * that every SKILL.md carries the frontmatter each provider needs. Exit code 1 means do
 * not restart, do not ship.
 */

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const OFFICIAL_ROOT = join(ROOT, 'official')
const SKILLS_ROOT = join(ROOT, 'skills')

/** Directory names the official provider reads, mirroring its `SKILL_DIRS`. */
const OFFICIAL_SKILLS = [
  'figma-design-skill',
  'bug-hunt',
  'code-review',
  'github',
  'moon-lovers',
  'officecli',
  'ponytail',
  'release-notes',
  'superpowers',
  'taste-skill',
  'ui-ux-pro-max',
  'vision-liao-memory',
  'weiliaozi-skill',
  'zerotoken-skill',
]
const FIGMA = 'figma-design-skill'
const KEBAB = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u

const errors = []
const warnings = []
const seen = new Map()

/** Path relative to the repository root, for readable reports. */
function rel(path) {
  return path.slice(ROOT.length + 1).replaceAll('\\', '/')
}

/** Read `name` and `description` from leading YAML frontmatter without a YAML dependency. */
function readFrontmatter(text) {
  const body = text.replace(/^\uFEFF/u, '')
  const match = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/u.exec(body)
  if (match === null) return { ok: false, reason: 'no YAML frontmatter block' }
  const lines = match[1].split(/\r?\n/u)
  const values = {}
  for (let index = 0; index < lines.length; index += 1) {
    const field = /^([A-Za-z0-9_-]+):[ \t]*(.*)$/u.exec(lines[index])
    if (field === null) continue
    const [, key, raw] = field
    if (key !== 'name' && key !== 'description') continue
    const inline = raw.trim()
    if (/^[|>][+-]?$/u.test(inline)) {
      const block = []
      for (let next = index + 1; next < lines.length; next += 1) {
        if (lines[next].trim() === '') continue
        if (!/^[ \t]/u.test(lines[next])) break
        block.push(lines[next].trim())
        index = next
      }
      values[key] = block.join(' ').trim()
      continue
    }
    const quoted = /^(['"])(.*)\1$/u.exec(inline)
    values[key] = quoted === null ? inline : quoted[2]
  }
  return { ok: true, values }
}

/** Validate one SKILL.md and record its skill name. */
function checkSkillFile(path, expected) {
  if (!existsSync(path)) {
    errors.push(`${rel(path)}: missing`)
    return
  }
  if (!statSync(path).isFile()) {
    errors.push(`${rel(path)}: not a file`)
    return
  }
  const frontmatter = readFrontmatter(readFileSync(path, 'utf8'))
  if (!frontmatter.ok) {
    errors.push(`${rel(path)}: ${frontmatter.reason}`)
    return
  }
  const { name, description } = frontmatter.values
  if (name === undefined || name === '') {
    errors.push(`${rel(path)}: frontmatter has no name`)
  } else if (!KEBAB.test(name)) {
    errors.push(`${rel(path)}: name "${name}" is not kebab-case`)
  } else if (expected !== undefined && name !== expected) {
    errors.push(`${rel(path)}: name "${name}" does not match directory "${expected}"`)
  }
  if (description === undefined || description === '') errors.push(`${rel(path)}: frontmatter has no description`)
  if (name === undefined || name === '') return
  const previous = seen.get(name)
  if (previous !== undefined) errors.push(`${rel(path)}: skill name "${name}" is also defined by ${previous}`)
  else seen.set(name, rel(path))
}

if (!existsSync(OFFICIAL_ROOT)) {
  errors.push('official/: directory is missing, so the official provider has no catalog to read')
} else {
  for (const name of OFFICIAL_SKILLS) checkSkillFile(join(OFFICIAL_ROOT, name, 'SKILL.md'), name)
  for (const entry of readdirSync(OFFICIAL_ROOT)) {
    if (!OFFICIAL_SKILLS.includes(entry)) warnings.push(`official/${entry}: unexpected entry beside the catalog`)
  }
  const references = join(OFFICIAL_ROOT, FIGMA, 'references')
  if (!existsSync(references)) warnings.push('official/figma-design-skill/references: missing, the Figma skill links into it')
}

if (existsSync(SKILLS_ROOT)) {
  for (const entry of readdirSync(SKILLS_ROOT)) {
    const path = join(SKILLS_ROOT, entry)
    if (statSync(path).isDirectory()) {
      const file = join(path, 'SKILL.md')
      if (!existsSync(file)) warnings.push(`skills/${entry}/: no SKILL.md, the provider skips this directory`)
      else checkSkillFile(file, entry)
      continue
    }
    if (entry.endsWith('.md')) checkSkillFile(path, entry.slice(0, -'.md'.length))
    else warnings.push(`skills/${entry}: neither a directory bundle nor a flat .md skill`)
  }
} else {
  warnings.push('skills/: directory is missing, only the official catalog will load')
}

for (const warning of warnings) console.warn(`warn  ${warning}`)
for (const error of errors) console.error(`FAIL  ${error}`)

if (errors.length > 0) {
  console.error(`\n${errors.length} problem(s) found. Fix them before restarting: a broken official file removes the whole official catalog at once.`)
  process.exitCode = 1
} else {
  console.log(`OK  ${seen.size} skill document(s) valid${warnings.length > 0 ? `, ${warnings.length} warning(s)` : ''}`)
}
