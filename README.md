# dsh-skills-wj

版本化的 DeepSeek Harness skill 源目录：既是一个可浏览、可编辑的普通文件夹，又是一个可随版本发布的 DSH bundle。

## 结构

```
skills/<name>/SKILL.md   实际 skill 内容（每个目录一个 skill，直接增删）
cordis.patch.yml         挂载层：host 级 skill-filesystem（bundledSkillDir 指向 skills/）+ tool-skill
package.json             dsh.bundle 声明，使这个仓库可以作为 profile 的一个 bundle 被安装
```

## 使用

**加一个 skill**：在 `skills/` 下建 `<name>/SKILL.md`，frontmatter 必须有 `name`（kebab-case）与 `description`；提交即可。运行中的会话会被文件监视器热发现，无需重启。

**取用**（两种，二者择一）：

1. 当前方式 —— profile 的 `cordis.patch.yml` 里显式两行：

   ```yaml
   - id: skill-filesystem
     name: '@deepseek-ai/dsh-skill-filesystem'
     disabled: false
     config:
       bundledSkillDir: 'E:/home/dsh-skills-wj/skills'
   - id: tool-skill
     name: '@deepseek-ai/dsh-tool-skill'
     disabled: false
   ```

2. 版本化方式 —— 把本仓库作为 bundle 安装进 profile，profile 里只留包名，不再手写上面两行：

   ```sh
   dsh plugin --profile desktop add file:E:/home/dsh-skills-wj
   ```

   安装后确认 profile 的 `package.json` 同时出现依赖与 bundles 条目：

   ```json
   "dependencies": { "@tinyforge/dsh-skills-wj": "file:E:/home/dsh-skills-wj" },
   "dsh": { "profile": { "bundles": ["...", "@tinyforge/dsh-skills-wj"] } }
   ```

## 优先级

内置/打包根 rank 600；用户目录 `~/.dsh/skills` 为 400，同名 skill 会被用户目录**覆盖**（数字小者胜）。需要某个 skill 临时压过版本源时，放进用户目录即可。

## 边界

只放提示词类 skill；需要工具或服务的分发走 plugin，而不是这里。
