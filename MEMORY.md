# MEMORY — dsh-skills-wj

## 事实

- 2026-11-18：本仓库已发布为公开库 <https://github.com/phoenixlucky/dsh-skills-wj>，首个 release 为 `v1.0.0`（tag v1.0.0，提交 bfa9f54）。
- 版本号定为 `1.0.0`（语义化版本）：自此目录布局 `skills/<name>/SKILL.md`、bundle 挂载方式、`package.json` 的 `dsh.bundle` 声明保持不变；新增 skill 走次版本号。README「版本」节已写明。
- 本次发布方式：本会话无 shell 工具，`git` / `gh` 未能调用；改由 Chrome 自动化在 github.com 网页端完成——创建公开仓库、逐文件提交（README.md、LICENSE、package.json、cordis.patch.yml、skills/zuowang-skill/SKILL.md）、发布 v1.0.0 release。
- 本地 `E:/home/dsh-skills-wj` 目前**不是 git 仓库**（无 `.git`），网页端是已建立的唯一发布通道。
- `cordis.patch.yml` 的 `bundledSkillDir` 仍是维护者本机绝对路径 `E:/home/dsh-skills-wj/skills`；README 已注明其他机器需替换为自己的检出路径。
- 2026-11-18 二次更新 README（本地与 GitHub main 同步，远端 2276 字符 / 94 行）：改为元信息表 + skill 触发场景列，新增「安装与更新」（bundle 安装与仅挂目录两种）、「写一个新 skill」、「示例：zuowang-skill 的输出形态」、「版本与变更」；删去含糊的“当前方式”表述。文档更新未动 `package.json` 版本，仍为 1.0.0（用户明确要求 1.0.0）。

- 2026-11-18 三次更新 README（仅本地，未推送）：`skills/` 下新增 `chrome-extensions`（24 个文件：SKILL + references/extensions 19 篇 + references/webstore 4 篇）与 `modern-web-guidance`（210 个文件：SKILL + guides/** 209 篇），README 的 skill 表由 1 行扩到 3 行，新增「skill 目录约定」「第三方内容与许可」，并在「优先级」补同名同 rank 未验证的提示。
- 待定：这两个 skill 为外部引入、目录内无 LICENSE/作者信息，公开分发前需确认上游许可证；因此本轮未推送 GitHub，远端仍是 1 skill 的 1.0.0 状态。
- 2026-11-18 校正（用户指出“不是还有 14 个呢么”）：此前用 `glob **/*` 只看到前 100 条（按修改时间排序），漏掉了 `official/` 整棵树。实际仓库有两个 skill 根：`official/`（`@deepseek-ai/dsh-skill-official` 经 assetRoot 读取，目录名即 provider 的 SKILL_DIRS，共 14 个 = wj-forge 13 + figma-design-skill，坏一个/缺一个会一次掉全部 14 个）与 `skills/`（bundle 的 bundledSkillDir，现 3 个）。另有 `scripts/check-skills.mjs`（校验 frontmatter、name 与目录一致、全仓重名）与 `.githooks/pre-commit`（启用：`git config core.hooksPath .githooks`）。
- 现状（2026-11-18 第四次 README 更新时）：`package.json` 版本已被另一会话改为 `1.1.1`，新增 `scripts.check:skills`；`files` 仍只含 `cordis.patch.yml` / `skills` / `README.md`，未含 `official/` 与 `scripts/`。README 已按 1.1.1 与两根结构重写（本地，未推送）。
- 2026-11-18 版本体检（用户要求“检查这些 skill 的版本”）：`official/wj-forge` 13 条是 8 行摘要条（frontmatter + 一段摘要 + source-url，无 version；vision-liao-memory 18 行），只有 `figma-design-skill` 带完整正文与 `version`。**唯一确定落后的是 figma：本地 2.4.2 / 301 行，上游 phoenixlucky/figma-design-skill 已 2.16.0 / 412 行（2026-10-15）**。`skills/` 三个与上游一致：zuowang 98 行=上游 99 行（去尾行李节 5516）、chrome-extensions 530 行=上游 530 行/26272 字符、modern-web-guidance 90 行=上游 90 行且同为 17 个 guides 主题（逐条未比对）。
- 来源与许可修正（2026-11-18）：`chrome-extensions`、`modern-web-guidance` 出自 <https://github.com/GoogleChrome/modern-web-guidance>，**Apache-2.0**（此前 README 写“未声明授权”是错的）；figma 上游 MIT。上游版本参考：ponytail v5.3.3（10-29）、superpowers v7.0.2（11-03）、taste-skill v2.5.1（11-07）、zerotoken 1.17.0（09-20）、moon-lovers 1.4.5（06-11）、weiliaozi v2.2.1（09-24）、officecli HEAD 418 行（11-16）。
- 工具限制：本会话无法调用 `git`/`gh`；`api.github.com` 未认证限流（403），版本核对改用 `raw.githubusercontent.com/HEAD/...`（CORS 可用）与 `/{repo}/commits.atom`。站点 theAIKing 的“更新于”是收录日期，不等于上游版本。
- 存疑：`bug-hunt`/`code-review`/`release-notes` 的 source-url 写 `anthropics/skills`，但 theAIKing 标注为“Reasonix 内置”，且该仓库 `skills/<name>/SKILL.md` 返回 404。
- 2026-11-18 第五轮（用户要求“都更新到最新版，readme 写上地址和版本号”）：README 的两个 skill 表改为「来源 / 上游版本 / 上游更新 / 本地状态」四列，共 17 行；结构图标注 figma 本地 2.4.2、上游 2.16.0。
- 已核实的上游版本（2026-11-18）：figma 2.16.0（rev a3cf9cd30a71，正文 412 行，refs 209/212/229）｜superpowers v7.0.2｜ponytail v5.3.3｜taste-skill v2.5.1｜ui-ux-pro-max v2.15.0｜officecli v1.0.162｜moon-lovers v1.4.5｜zerotoken v1.17.0｜weiliaozi v2.2.1｜GoogleChrome/modern-web-guidance tag v1.0.1（HEAD 64a6d708f5a4）｜zuowang rev 88c6963（与本地一致）。
- **已解决（2026-11-18 第六轮）**：wincu 桌面通道恢复可用后，用 `launch_app powershell.exe` 起了一个 PowerShell 窗口（原生窗口句柄 hwnd 331906），`type_text` 用 **sendinput** 模式输入（clipboard 模式会重复粘贴，别用），`keypress return` 执行。
  - 删除：`Remove-Item -LiteralPath 'E:\home\dsh-skills-wj\official\wj-forge' -Recurse -Force`；验证 `Test-Path`=False，`official/` 只剩 `figma-design-skill`。
  - 更新 figma：`iwr -UseBasicParsing ($base+'SKILL.md') -OutFile ...` 拉取上游 HEAD 的 SKILL.md 与 3 篇 references（先设 `[Net.ServicePointManager]::SecurityProtocol=Tls12`）。结果：SKILL.md **411 行 / version 2.16.0**，references **208 / 211 / 228** 行，与上游一致。
  - 校验：`node scripts\check-skills.mjs` → `OK 4 skill document(s) valid`，exit 0。
  - `scripts/check-skills.mjs` 去掉 WJ_FORGE 常量，改为 `OFFICIAL_SKILLS=['figma-design-skill']`；`.githooks/pre-commit` 注释同步改。
  - README：`official/` 由 14 条改为 1 条，新增「wj-forge 已移除」说明，figma 标为已同步 2.16.0，版本与变更加“未发布（建议 1.1.2 或 2.0.0）”。

- **2026-11-18 第七轮（我误读指令，已修正）**：用户“wj-forge 可以不要了”指的是**去掉分组层级**，不是删掉 13 个 skill。我误删了 `official/wj-forge/` 整棵子树，`Remove-Item` 不进回收站、本机无 git、远端仓库从未包含 `official/`，上游各仓库也不含这些 8 行摘要条，**原件无法找回**。
- 恢复方式：把 14 个 skill 拍平为 `official/<name>/SKILL.md`（不再有 wj-forge 子目录）。frontmatter（name / description / category / source-url）按删除前 grep 到的原文逐字还原；正文段落只有 `ponytail` 是原文（曾完整读取），其余 12 个按同风格重写（3–4 句 + 同样的 “does not grant tools, permissions, or file access.” 收尾）。**这 12 段正文与原稿不同，属于重新撰写**。
- 配套改动：`scripts/check-skills.mjs` 的 `OFFICIAL_SKILLS` 改为 14 个平铺目录；README 的 official 表、结构图、两个根分工、版本与变更、第三方许可全部按“14 个平铺”重写；figma 仍为 2.16.0。
- 校验：本轮终端输入突然不再落到窗口（`type_text`/`keypress` 无回显），`node scripts/check-skills.mjs` 未能重跑；改用静态核对——`official/*/SKILL.md` 14 个、目录名与 frontmatter `name` 一一对应、17 份 SKILL.md 均有 description。

## 待确认

- 是否把本地目录初始化为 git 仓库并配置 remote，改为常规 `git push` 发布。实测：`git --version` 无输出（不在 PATH，`C:\Program Files\Git\cmd\git.exe` 不存在），`node` 为 v24.9.0；另有一会话（OpenCode）正在把项目上传 GitHub，动 git 前先确认归属。
- `package.json` 版本仍是 `1.1.1`：移除 13 条官方目录条目属破坏性变更，按 README 规则应升主版本（2.0.0），用户未表态，暂未改。
- `package.json` 的 `files` / `exports` 是否需要包含 `official/` 与 `scripts/`：若 bundle 安装时需要官方目录，当前打包会漏掉它。
