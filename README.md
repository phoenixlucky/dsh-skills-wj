# dsh-skills-wj

版本化的 DeepSeek Harness skill 源目录：既是一个可浏览、可编辑的普通文件夹，又是一个可随版本发布的 DSH bundle。

- 仓库：<https://github.com/phoenixlucky/dsh-skills-wj>（公开）
- 当前版本：**1.0.0**
- 许可：MIT

## 包含的 skill

| skill | 用途 |
| --- | --- |
| `zuowang-skill` | 多轮任务中的上下文取舍。重新锚定当前目标，把先前上下文分成「生效 / 被取代 / 未结 / 噪声」四类，压缩时从低价值往上丢，避免把最新一句话当成全部事实。 |

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
       bundledSkillDir: '<本仓库检出路径>/skills'
   - id: tool-skill
     name: '@deepseek-ai/dsh-tool-skill'
     disabled: false
   ```

   仓库内的 `cordis.patch.yml` 保留的是维护者本机的绝对路径，其他机器请改成自己的检出路径。

2. 版本化方式 —— 把本仓库作为 bundle 安装进 profile，profile 里只留包名，不再手写上面两行：

   ```sh
   git clone https://github.com/phoenixlucky/dsh-skills-wj.git
   dsh plugin --profile desktop add file:<克隆目录>
   ```

   安装后确认 profile 的 `package.json` 同时出现依赖与 bundles 条目：

   ```json
   "dependencies": { "@tinyforge/dsh-skills-wj": "file:<克隆目录>" },
   "dsh": { "profile": { "bundles": ["...", "@tinyforge/dsh-skills-wj"] } }
   ```

## 版本

语义化版本。`1.0.0` 为首个稳定版本：目录布局（`skills/<name>/SKILL.md`）、bundle 挂载方式与 `package.json` 的 `dsh.bundle` 声明自此保持不变；新增 skill 走次版本号，破坏上述约定的改动走主版本号。

## 优先级

内置/打包根 rank 600；用户目录 `~/.dsh/skills` 为 400，同名 skill 会被用户目录**覆盖**（数字小者胜）。需要某个 skill 临时压过版本源时，放进用户目录即可。

## 边界

只放提示词类 skill；需要工具或服务的分发走 plugin，而不是这里。

## 许可

[MIT](./LICENSE)
