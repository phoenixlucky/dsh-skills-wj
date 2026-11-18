# dsh-skills-wj

版本化的 DeepSeek Harness skill 源目录：既是一个可浏览、可编辑的普通文件夹，又是一个可随版本发布的 DSH bundle。

| | |
| --- | --- |
| 仓库 | <https://github.com/phoenixlucky/dsh-skills-wj>（公开） |
| 版本 | `1.1.0` |
| 许可 | MIT |
| 最近更新 | 2026-11-18 |

## 包含的 skill

| skill | 触发场景 | 作用 |
| --- | --- | --- |
| `zuowang-skill` | 多轮任务带着前文：接着做之前的事、按更正改口径、依赖先前的决定或未结事项、旧细节已经比当前任务还多 | 重新锚定当前目标，把前文分成「生效 / 被取代 / 未结 / 噪声」四类，按类型而非新旧解决冲突，压缩时从低价值往上丢 |
| `chrome-extensions` | 写、改、调试、发布 Chrome 扩展（Manifest V3、content script、service worker、side panel、chrome.* API） | 按 MV3 最佳实践给出结构、权限、调试与上架流程 |
| `modern-web-guidance` | HTML/CSS 与客户端 JS 任务（弹层、表格、深色模式、容器查询、view transitions、表单、可访问性、CWV 等） | 可检索的现代 Web 实践库，先查再写，避免用过时 API |

`official/` 下是官方 14 个 skill 的镜像（`bug-hunt`、`code-review`、`figma-design-skill`、`github`、`moon-lovers`、`officecli`、`ponytail`、`release-notes`、`superpowers`、`taste-skill`、`ui-ux-pro-max`、`vision-liao-memory`、`weiliaozi-skill`、`zerotoken-skill`），内容随 DSH 上游同步，不在 `skills/` 里。

## 结构

```
skills/<name>/SKILL.md   个人 skill（每个目录一个，直接增删）
official/                官方内置 14 个 skill 的正文镜像（assetRoot 指向这里）
cordis.patch.yml         挂载层：host 级 skill-filesystem（bundledSkillDir 指向 skills/）+ tool-skill
package.json             dsh.bundle 声明，使这个仓库可以作为 profile 的一个 bundle 被安装
MEMORY.md                工作记忆文件，不是 skill，不参与扫描
```

## 安装与更新

### 方式一：作为 bundle 安装（推荐）

```sh
git clone https://github.com/phoenixlucky/dsh-skills-wj.git
dsh plugin --profile desktop add file:<克隆目录>
```

安装后确认 profile 的 `package.json` 同时出现依赖与 bundles 条目：

```json
"dependencies": { "@tinyforge/dsh-skills-wj": "file:<克隆目录>" },
"dsh": { "profile": { "bundles": ["...", "@tinyforge/dsh-skills-wj"] } }
```

更新：在克隆目录 `git pull`，新会话即读到新内容；若某个 skill 的 frontmatter 改了名，重启 DSH 最稳妥。

### 方式二：只在 profile 里挂目录（不装 bundle）

profile 的 `cordis.patch.yml` 里显式两行：

```yaml
- id: skill-filesystem
  name: '@deepseek-ai/dsh-skill-filesystem'
  disabled: false
  config:
    bundledSkillDir: '<本仓库检出路径>/skills'
- id: tool-skill
  name: '@deepseek-ai/dsh-tool-skill'
  disabled: false
```

仓库内的 `cordis.patch.yml` 保留的是维护者本机的绝对路径，其他机器请改成自己的检出路径。

### 官方目录（`official/`）

官方 14 个 skill（13 个 WJ Forge + `figma-design-skill`）的正文也镜像在本仓库，profile 里让官方提供方读这份副本即可——Settings 的逐项开关、Figma 固定源更新通道都保持不变：

```yaml
- id: official-skills
  name: '@deepseek-ai/dsh-skill-official'
  config:
    assetRoot: '<本仓库检出路径>/official'
```

目录结构必须与包内 `assets/` 一致：`wj-forge/<name>/SKILL.md` 加 `figma-design-skill/`（含 `references/`）。**任何一份缺 `SKILL.md` 或 frontmatter 非法，都会让整个提供方加载失败、14 个一起消失**——改完先自查文件是否齐全。

DSH 升级后，官方技能可能已更新；不同步就会一直用旧正文：

```powershell
Copy-Item '<DSH 源码检出>/packages/skill/skill-official/assets/*' '<本仓库>/official/' -Recurse -Force
git commit -am "sync official catalog"
```

## 写一个新 skill

在 `skills/` 下建 `<name>/SKILL.md`，frontmatter 必须有 `name`（kebab-case）与 `description`（写成“什么时候该用它”，而不是“它是什么”）。运行中的会话会被文件监视器热发现，无需重启。新增 skill 是次版本号变更。

## 示例：`zuowang-skill` 的输出形态

该 skill 默认不输出上下文总结，只在“下一步依赖前文、而最近几轮已看不清”时给三行：

```
Goal: <当前要做的事，一行>
Binding: <仍然生效的约束、决定、被更正的事实>
Next: <未结事项或下一步>
```

它不删历史、不写记忆；判断只作用于当前对话里的注意力分配。

## 版本与变更

语义化版本。`1.0.0` 起以下约定保持不变：目录布局 `skills/<name>/SKILL.md`、bundle 挂载方式、`package.json` 的 `dsh.bundle` 声明。新增 skill 走次版本号，破坏上述约定的改动走主版本号。

- **1.0.0**（2026-11-18）首个稳定版本：`zuowang-skill` 定稿；补齐 README 与 MIT 许可证；发布到公开仓库并打 `v1.0.0` Release。
- **1.1.0**（2026-11-18）统一管理：`chrome-extensions`、`modern-web-guidance` 迁入 `skills/`（原用户目录副本已删除）；新增 `official/` 镜像官方 14 个 skill，profile 用 `assetRoot` 指过来，保留 Settings 开关与 Figma 更新通道；README 补目录结构、同步步骤与"任一文件缺失会让 14 个一起消失"的风险说明。

## 优先级

内置/打包根 rank 600；用户目录 `~/.dsh/skills` 为 400，同名 skill 会被用户目录**覆盖**（数字小者胜）。需要某个 skill 临时压过版本源时，放进用户目录即可。

## 边界

只放提示词类 skill；需要工具或服务的分发走 plugin，而不是这里。

## 许可

[MIT](./LICENSE)
