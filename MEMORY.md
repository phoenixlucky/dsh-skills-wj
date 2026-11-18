# MEMORY — dsh-skills-wj

## 事实

- 2026-11-18：本仓库已发布为公开库 <https://github.com/phoenixlucky/dsh-skills-wj>，首个 release 为 `v1.0.0`（tag v1.0.0，提交 bfa9f54）。
- 版本号定为 `1.0.0`（语义化版本）：自此目录布局 `skills/<name>/SKILL.md`、bundle 挂载方式、`package.json` 的 `dsh.bundle` 声明保持不变；新增 skill 走次版本号。README「版本」节已写明。
- 本次发布方式：本会话无 shell 工具，`git` / `gh` 未能调用；改由 Chrome 自动化在 github.com 网页端完成——创建公开仓库、逐文件提交（README.md、LICENSE、package.json、cordis.patch.yml、skills/zuowang-skill/SKILL.md）、发布 v1.0.0 release。
- 本地 `E:/home/dsh-skills-wj` 目前**不是 git 仓库**（无 `.git`），网页端是已建立的唯一发布通道。
- `cordis.patch.yml` 的 `bundledSkillDir` 仍是维护者本机绝对路径 `E:/home/dsh-skills-wj/skills`；README 已注明其他机器需替换为自己的检出路径。
- 2026-11-18 二次更新 README（本地与 GitHub main 同步，远端 2276 字符 / 94 行）：改为元信息表 + skill 触发场景列，新增「安装与更新」（bundle 安装与仅挂目录两种）、「写一个新 skill」、「示例：zuowang-skill 的输出形态」、「版本与变更」；删去含糊的“当前方式”表述。文档更新未动 `package.json` 版本，仍为 1.0.0（用户明确要求 1.0.0）。

## 待确认

- 是否把本地目录初始化为 git 仓库并配置 remote，改为常规 `git push` 发布（本会话无法执行 git 命令，需在有 shell 的会话里做）。在此之前，远端与本地的一致性只能靠逐文件网页提交维持。
