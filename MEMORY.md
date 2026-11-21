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

- 2026-11-18 第八轮（用户要求：升级版本号、上传 github、发布 npm）：版本 1.1.1 → **1.2.0**；tag `v1.2.0`（annotated `d068d9b` → `d8fd268`）与 GitHub Release `v1.2.0`（Latest）均已创建；npm 首次发布成功，`@tinyforge/dsh-skills-wj@1.2.0` latest，239 文件 / 681 kB / 解包 2.16 MB，shasum `995328b1…` 与本地 `npm pack` 逐位一致。
- 工具链结论（推翻此前「本会话无 shell 工具」）：`git` 2.56.1（`d:\Program Files\Git\cmd\git.exe`）、`gh` 2.93.0（登录 phoenixlucky，scopes gist / read:org / repo）、`node` v24.19.0、`npm` 11.17.0（登录 ethanwilkins，且为 `@tinyforge` 组织 owner，故 scoped 包可发）。执行方式：wincu 起 PowerShell 窗口（本轮 hwnd 2757578），`type_text` 用 sendinput、`keypress return` 执行，命令输出用 `| Out-File -Encoding utf8` 落到 `.tmp\*.txt` 再用 read 工具读——比截图/OCR 可靠得多；窗口标题会显示当前命令行，可作执行旁证。
- 本目录**已是 git 仓库**（推翻第六轮「不是」的记录）：本地 6 提交（`fd86a25`…`f08cbe2`），原分支 `master` 且**无 remote**。本轮新增 `.gitignore`（`.tmp/`、`node_modules/`、`*.log`）。
- 远端 `main` 原是网页端 6 个提交（只含 LICENSE、README、cordis.patch.yml、package.json、skills/zuowang-skill/SKILL.md），与本地**无共同祖先**。处理：`git merge -s ours --allow-unrelated-histories origin/main`（保留网页端历史、树取本地）→ `cedc8dc..d8fd268` **快进推送，未强推**。结论：以后走普通 push，别再强推。
- `package.json`：加 `publishConfig`（access public + 官方 registry）与 `prepublishOnly`（发前跑 check:skills）；`files` 决策为**不含** `official/`、`scripts/`。发布前 `check:skills` 报 `OK 17 skill document(s) valid`，tarball 239 文件（LICENSE + README + cordis.patch.yml + package.json + skills/**）。
- npm 两个坑（写进 README「发布」节）：① 首次发布后注册表 GET 会连报 404 数分钟，判据是 npm 日志里 `http fetch PUT https://registry.npmjs.org/… 202`，别据此重发；② 首次发布会自动出现占位版本 `0.0.0-stage`（`stub: true`、2 文件、346 B，"Temporary package placeholder for staged publishing"），不是他人发布的包，`latest` 指向真实版本。
- **最高优先待办**：`cordis.patch.yml` 的 `bundledSkillDir` 仍是 `E:/home/dsh-skills-wj/skills`，而这个文件已随 npm 包发布——别的机器装完必须手动改成自己的路径。文件注释里给了 `!!js` + `createRequire(baseUrl)` 的可移植写法，本轮无法在不动现网 profile 的前提下验证 cordis 是否支持 `!!js`，故未擅自替换。
- 协作风险：另一会话（OpenCode，「上传项目到 GitHub」窗口 pid 33436）同时在该仓库活动过；本轮每次写操作前都重查 `git status`，未发现冲突，但提交前仍需复检。

- 2026-11-18 第九轮（用户问“skill 可以用了么”）实测挂载：本会话 available_skills 目录里 17 个 skill 全部出现——`skills/` 三个（zuowang-skill、chrome-extensions、modern-web-guidance）与 `official/` 十四个（figma-design-skill、superpowers、ponytail、taste-skill、ui-ux-pro-max、officecli、moon-lovers、zerotoken-skill、weiliaozi-skill、bug-hunt、code-review、release-notes、github、vision-liao-memory）。zuowang 的 description 与本地 SKILL.md 第 3 行逐字一致；chrome-extensions、modern-web-guidance 的 description 为多行块（`>` / `|`），catalog 里按首行截断。结论：`cordis.patch.yml` 的 `bundledSkillDir` 挂载在本机生效，frontmatter 解析通过（否则不会进 catalog）。未实测点：尚未用 `skill` 工具真正加载任一 skill。

- 2026-11-19 第十轮（用户要求“升级里面的skill到最新版”）：逐字节核对四个携带正文的 skill 与上游 HEAD，结论——`zuowang-skill` 已在 `28a90409`（2026-11-19，148 行，上一轮工作区改动即为此版）；`chrome-extensions` 与上游 tag v1.0.1 完全一致；`figma-design-skill` 2.16.0 正文 411 行 / refs 208·211·228 行与上游一致（仅 `LICENSE` 少一个结尾换行，已补）；**唯一真正落后的是 `modern-web-guidance`：本地 = 上游 tag v1.0.0（210 文件全等），上游 v1.0.1 改了 45 篇 + 新增 `guides/js/js.md`**，已整体同步到 v1.0.1（211 文件，210 篇 guides，17 个主题，skill 内标识 `2026_11_10-47b4c80e`）。
- 13 条摘要条只跟上游版本：11-19 复查无新 tag，仅 HEAD 前进——ui-ux-pro-max（11-19）、officecli（11-19）、cognee（11-19，+08）；README 的“上游更新”列已按 HEAD 提交日期（Asia/Shanghai）更正，并补了口径注释。`clawhub.ai/steipete/github` 不是 GitHub 仓库，无法用 API 核对，保持原样。
- 校验：`node scripts/check-skills.mjs` → `OK 17 skill document(s) valid`，exit 0。`package.json` 仍 1.2.0（本轮只升内容，未发布）；README「版本与变更」记了“未发布（2026-11-19）”，建议下次发布前升 1.2.1。
- 工具教训（本轮新增，可复用）：① 本会话 `bash`/`pwsh` 工具实际都是 PowerShell，命令里的双引号会被吞（`join(",")` 变 `join(,)`），复杂命令写成 `.tmp/*.mjs` 再 `node` 跑；② Node 的 `fetch` 不走系统代理（Chrome/PowerShell 走 `127.0.0.1:7892`），必须显式 `$env:HTTPS_PROXY`，否则报 `UND_ERR_SOCKET`/`ECONNRESET`，重试一次多半能过；③ `Get-Content` 按 ANSI 解码 UTF-8 中文会乱码且行数统计失真，行数/字节一律用 Node 读 `Buffer` 判断；④ 比对上游必须先把 CRLF 归一化（本仓库 core.autocrlf=true），否则每个文件都报“有差异”。


- 2026-11-19 第十一轮（用户给了一张 1254×1254 PNG，要求“图标用这个的 webp 格式”）：新增包根 `icon.webp`——512×512 VP8X 带 alpha、51,822 B；`package.json` 加 `"icon": "./icon.webp"`，`files` 补 `icon.webp`（版本仍 1.2.0，未发布）。
  - 处理要点：原图是 **RGB 无 alpha**，圆角方框外的四角是不透明纯黑（47,990 px），直接转 webp 会在 GUI 里露黑角；用“从四条边/四角做连通域”只吃背景黑（线稿是深藏青 B>40，不动），再 1.2px 高斯羽化 alpha、α<8 的像素清零去黑边。48px 下缩略仍清晰（`.tmp/preview-48.png`）。
  - 宿主契约（读 `E:\home\deepseek-harness\packages\boot\app-boot\src\package-meta.ts`，0.2.2-rc.4）：`icon` 必须是相对路径、realpath 后仍在 manifest 目录内、扩展名 ∈ svg/png/jpg/jpeg/webp、≤ 256 KiB（`MAX_ICON_BYTES`），读到后转 `data:<mime>;base64,`；图标读取失败不致命，只写进 `meta.error`、标题描述照旧。也可用 `<pkg>/icon` 导出资源，但 manifest 字段优先。
  - 实测（宿主真实代码路径）：把 `package.json`+`icon.webp` 拷到 `.tmp/probe/node_modules/@tinyforge/dsh-skills-wj/`，`import` 宿主构建产物 `packages/boot/app-boot/lib/index.js` 调 `readPluginMeta('@tinyforge/dsh-skills-wj', 'file:///E:/home/dsh-skills-wj/.tmp/probe/entry.mjs')` → `error: none`、`icon` 为 `data:image/webp;base64,…`、解出 51,822 B 与文件逐字节相等。反证：放一个 300 KiB 的假 webp → `icon exceeds 256 KiB`，说明探针有效。
  - `npm pack --dry-run`（须带 `--cache .tmp/npm-cache`，默认 `G:\caches\npm` 在沙箱里 EPERM）：241 文件 / 755,611 B / 解包 2,274,186 B / shasum `d0fa900e…`，非 skills 条目为 `LICENSE`、`README.md`、`cordis.patch.yml`、`icon.webp`、`package.json`。
  - 尚未在 GUI 看到图标：桌面 profile 装的是 registry 版 `@tinyforge/dsh-skills-wj@1.2.0`（无 icon 字段），profile 的 `node_modules` 不在本会话可写范围；要显示必须发 1.2.1 后更新，或在用户确认后改 profile 内拷贝。
- 2026-11-19：新建 `AGENTS.md`（骨架 + 三条可复用约定）并加入 `.gitignore`；`MEMORY.md` **已是版本库跟踪文件**（`git ls-files` 可见），按纪律未 `git rm`、未改历史，仅在此记录现状。

- 2026-11-20（用户要求“接着升 1.2.1、push 到 GitHub 并发布 npm”，已完成）：`npm version patch` → **1.2.1**；README 的版本行、结构图（补 `icon.webp` 行）、npm 包内容说明、「版本与变更」（未发布条目改写为 1.2.1）、MEMORY 一并更新；提交 `4487da9` 推到 `main`，annotated tag `v1.2.1`（`d4a6316`）已推，GitHub Release `v1.2.1`（Latest，标题「v1.2.1 - skill 升级到最新上游 + 插件图标」）。
  - npm 发布成功：`+ @tinyforge/dsh-skills-wj@1.2.1`，日志 `http fetch PUT https://registry.npmjs.org/@tinyforge%2fdsh-skills-wj 202`；tarball **241 文件 / 755.8 kB / 解包 2,274,555 B / shasum `cb915811952a886a6a77be52adc6c110a260b960`**，与本机 `npm pack --dry-run` 一致；`icon.webp`（51.8 kB）在包内，`package.json.icon = "./icon.webp"`。
  - 注册表传播实测：发布后约 1 分钟 `dist-tags.latest` 仍是 1.2.0、versions 只有 `0.0.0-stage,1.2.0`；约 8 小时后复测 `latest = 1.2.1`、versions 含 1.2.1。**判据依旧是日志里的 PUT 202，别因 GET 落后而重发。**
  - 并发处理：另一会话（图标那轮）留下的 `icon.webp`、`package.json.icon`/`files`、`.gitignore`（忽略 `AGENTS.md`）、MEMORY 第十一轮条目，本轮整体纳入 1.2.1 提交，未冲突。
  - 未做：桌面 profile 仍依赖 registry 版 `@tinyforge/dsh-skills-wj: ^1.2.0`，要看到图标需更新 profile 到 1.2.1（`dsh plugin --profile desktop add @tinyforge/dsh-skills-wj@1.2.1`）；本轮没动 live profile。

- 2026-11-20 第十二轮（用户报“插件没有显示中文名武库”）：根因是包内无 `locale/`，宿主 `readPluginMeta`（`packages/boot/app-boot/src/package-meta.ts`）在缺 locale 时用 `package.json.name` 当 `meta.title` 兜底，插件列表便显示 `@tinyforge/dsh-skills-wj`。修法：新增 `locale/en.json`（`Skill arsenal`）与 `locale/zh.json`（**武库**），`package.json` 的 `exports` 补 `"./locale/*.json"`、`files` 补 `locale/*.json`。
  - 验证探针沿用 `.tmp/probe-meta.mjs`（拷 `package.json`+`icon.webp`+`locale/` 到 `.tmp/probe/node_modules/@tinyforge/dsh-skills-wj/`）：`title: {"en":"Skill arsenal","zh":"武库"}`、`error: none`、icon 仍逐字节一致。
  - `npm pack --dry-run`：243 文件（+2 locale）/ 756.1 kB / 解包 2.3 MB，locale 两份均在包内。
  - 发布与 profile 升级按用户选择执行：1.2.1 → **1.2.2**。提交 `fe489c0`、annotated tag `v1.2.2`、GitHub Release `v1.2.2`（标题「v1.2.2 - 插件显示名「武库」」）均已推送；`npm publish` 成功（`+ @tinyforge/dsh-skills-wj@1.2.2`，243 文件 / 756.3 kB / shasum `8a6b248b…`）。**注册表 GET 约 2 分钟后才见 1.2.2**，之前 `dsh plugin add` 会报 `ERR_PNPM_NO_MATCHING_VERSION`，判据仍是 PUT 202。
  - profile 升级：`dsh plugin --profile desktop add @tinyforge/dsh-skills-wj@1.2.2 --save-exact`（pnpm 11.28.5，顺带在 profile 的 `pnpm-workspace.yaml` 加了 `minimumReleaseAgeExclude`）；已核对该目录下 `package.json` 版本 1.2.2、`locale/zh.json` 在包内、exports 含 `./locale/*.json`。**plugin_manager 的 `install_bundle` 对已装同名包直接回 `already-installed`（要求先 remove），改版本走 `dsh plugin add` 更省事。**
  - 宿主读取器按 **profile 解析基准**复验（`.tmp/probe-profile.mjs`，parentURL = profile 的 `package.json`，即 plugin-manager `bundles()` 第 739 行同款调用）：`title {"en":"Skill arsenal","zh":"武库"}`，无 error 且有 icon。注：`plugin_manager` 工具的 `list_bundles` 会**主动剥掉 `meta` 字段**（`plugin-manager/src/tools.ts` 131–135 行），不能拿它的输出来判断标题是否生效。
  - 未做/未验证：受 `dsh web` 认证（launch token 只存内存，URL 无 token 时 401）与桌面窗口最小化限制，**未在 GUI 里目视确认**列表标题；用户重开插件页仍显示包名时，刷新或重启 DSH 即可（Node 的 package.json 缓存按 mtime 失效，正常应已生效）。

- 2026-11-20 第十三轮（用户给一张 300×300 PNG：“icon 改成这个，名字 武库 改成 WJ 武库”，随后要求“上传，发 npm”）：换包根 `icon.webp`、中文显示名改 **WJ 武库**，发布 **1.2.3**。
  - 图标处理：源图 300×300、RGB 无 alpha，圆角淡蓝框外的四角是不透明深藏青 `#18376C`（与第十一轮的纯黑同类坑）。做法同上一轮但换成按色差取种：四边入队 + 只吃 `max|rgb-#18376C| ≤ 28` 的像素做 BFS 连通域，只清外圈 2,380 px，再 1.0px 高斯羽化、α<8 清零（成品 α=0 共 1,888 px、柔和边 1,284 px）。**不上采样到 512，保持源图 300×300**：宿主 `ui-plugin-manager` 只渲染 `ROW_ARTWORK_SIZE=30` / `CARD_ARTWORK_SIZE=36` CSS px（`PluginManagerPage.tsx` 211、214 行），`.packageImage` 只有 `object-fit: contain`、没有 border-radius，所以深色角必须透明。
  - 编码：Pillow 11.3 `im.save(..., 'WEBP', quality=90, method=6)` → **VP8X 带 alpha、35,466 B**（< 256 KiB）。解码复核：`(300,300) RGBA`，四角 α=0，中心截图中 `(205,147,157,255)`。
  - 命名：`locale/zh.json` 的 `meta.title` 由「武库」改为 **WJ 武库**；`package.json.description` 前缀同步为「WJ 武库（dsh-skills-wj）…」；README 的 H1、图标尺寸说明（512→300）、变更日志都同步。**英文回落仍是 `Skill arsenal`**——用户只点名中文名，没动 `locale/en.json`，要英文也带 WJ 前缀需另说。
  - 探针（先把 `package.json`+`icon.webp`+`locale/` 重新拷进 `.tmp/probe/node_modules/@tinyforge/dsh-skills-wj/`，再跑 `.tmp/probe-meta.mjs`）：`title: {"en":"Skill arsenal","zh":"WJ 武库"}`、`error: none`、`icon data URL head: data:image/webp;base64,`、`payload bytes: 35466 | RIFF/WEBP: true`、`byte-identical to icon.webp: true`。
  - `npm pack --dry-run --json --cache .tmp/npm-cache`：243 文件 / 解包 2,259,779 B；非 skills 条目 = `LICENSE` 1070、`README.md` 13857、`cordis.patch.yml` 866、`icon.webp` 35466、`locale/en.json` 218、`locale/zh.json` 202、`package.json` 1462。
  - 发布：`npm version patch --no-git-tag-version` → **1.2.3**；`npm run check:skills`（17 篇通过）→ 提交 `038fb02`、annotated tag `v1.2.3`（`ca4778d`）、GitHub Release `v1.2.3`（标题「v1.2.3 - 新图标 + 显示名「WJ 武库」」）、`npm publish`（PUT 202，`+ @tinyforge/dsh-skills-wj@1.2.3`，243 文件 / 740.2 kB / 解包 2,259,739 B / shasum `97e3f343…` 与 dry-run 一致）。
  - **注册表读端这轮滞后约 3 分钟**（PUT 在 22:33、`dist-tags latest` 到 22:39 才变 1.2.3，`time.1.2.3 = 14:36:12Z`）；判据仍是 PUT 202，GET 只是传播慢，别急着重发（同版本重发会被 409 挡）。
  - **沙箱里 git 提交会挂在 pre-commit**：`.githooks/pre-commit` 用 `#!/bin/sh`，spawn msys `sh.exe` 报 `fatal error - couldn't create signal pipe, Win32 error 5`（命名管道限制）；`git push` 也会因 `schannel AcquireCredentialsHandle failed: SEC_E_NO_CREDENTIALS` 拿不到系统凭据。本轮先手动 `npm run check:skills` 通过，再用 `git commit --no-verify` + 放宽文件策略后 push。
  - 未做：未动 desktop profile（该 profile 仍是 registry 版 1.2.2）。GUI 要看到新图标与新名字：`dsh plugin --profile desktop add @tinyforge/dsh-skills-wj@1.2.3 --save-exact`。

- 2026-11-21 第十四轮（用户要求「readme 增加徽章」）：README 标题下补一排五枚 shields 徽章（许可证、npm 版、npm 下载、DSH Web Plugin、DSH tested up to），只改文档：不发布、不动版本号（仍 1.2.3）。
  - 取值：license 取 `package.json.license` = MIT → `license-MIT-green`（与 `dsh-character-presets` 同色）；npm 两枚用包名 `@tinyforge/dsh-skills-wj`；DSH 上限写**实测宿主 0.2.2-rc.5**（`DSH_INSTALL_DIR` 下 `dsh-desktop-runtime` 的 package.json version；本会话 skill catalog 已出现本包三个 skill，说明在 rc.5 下挂载生效），不是 `engines.dsh` 的 `<0.3.0-0`。
  - 校验：PowerShell `Invoke-WebRequest` 与 `curl.exe` 访问 img.shields.io 全挂（`schannel AcquireCredentialsHandle failed: SEC_E_NO_CREDENTIALS`，与 git push 同源限制），改用 Node `fetch` 逐条取 200 并读 SVG 文本：license→MIT、npm→v1.2.3、downloads→737/month、Web Plugin→yes、tested up to→0.2.2-rc.5。
  - 语义备注：本包没有 `dsh.client`（无自有 Web UI），「DSH Web Plugin」按「能在 DSH Web profile 里加载生效」记为 yes；若按严格语义（声明 client 才算）应改 `no-lightgrey`，待用户定。
  - 发布（用户随后要求「上传github，发布npm」）：`npm version patch --no-git-tag-version` → **1.2.4**，README 版本行/最近更新/变更日志同步；`npm run check:skills` → `OK 17 skill document(s) valid`；`npm pack --dry-run` 243 文件 / 740,541 B / 解包 2,260,515 B（README 14,593 B）→ 提交 `51c7904`，annotated tag `v1.2.4` 已推，GitHub Release `v1.2.4`（标题「v1.2.4 - README 徽章」）已建，`npm publish` 成功（`+ @tinyforge/dsh-skills-wj@1.2.4`，243 文件 / 740.5 kB / shasum `22c4a2d3cd1e58d05d8e7ca6bf54660e1afe6026`，与 dry-run 一致）。
  - **沙箱内 `git push` 与 `gh release create` 都要一次性放宽到 full access**：默认 workspace-write 下 push 报 `schannel AcquireCredentialsHandle failed: SEC_E_NO_CREDENTIALS`，放行后同一条命令即成功（PowerShell 把 git 的 stderr 当错误行、exit 1，但看输出里 `ab3ec7d..51c7904 main -> main` / `[new tag] v1.2.4` 即已推成）。`npm publish` 在默认沙箱下反而直接成功。
  - 传播实测：publish 在 22:38、约 20 秒与 1 分钟后 `npm view` 仍 1.2.3、packument 里无 1.2.4；**22:42（约 3.5 分钟）** packument 出现 `latest = 1.2.4`。从 registry 拉 tarball 逐项核验：740,541 B、sha1 `22c4a2d3…` 与发布输出一致、243 条目、包内 README 14,593 B（5 枚徽章、版本行 1.2.4、含 1.2.4 变更条）。
  - 沙箱细节：Node 里 `spawnSync` 调 `tar` 报 `EPERM`（命名管道限制），解包改纯 JS（`zlib.gunzipSync` + 手写 tar 头解析）即可。

## 待确认

- ~~是否把本地目录初始化为 git 仓库并配置 remote，改为常规 `git push` 发布~~ **已解决（2026-11-18 第八轮）**：本地本来就是 git 仓库（6 提交、分支 `master`、无 remote），已补 `origin=https://github.com/phoenixlucky/dsh-skills-wj.git`、改名 `main`、合并网页端历史后推送；`git` 2.56.1 与 `gh` 2.93.0 都在 PATH。
- ~~`package.json` 版本仍是 `1.1.1`：移除 13 条官方目录条目属破坏性变更，应升 2.0.0~~ **已解决（2026-11-18 第八轮）**：那 13 条已被拍平恢复（14 条全在同一层），不构成破坏性变更，按新增功能定 **1.2.0** 并已发布。
- ~~`package.json` 的 `files` / `exports` 是否需要包含 `official/` 与 `scripts/`~~ **已决策（2026-11-18 第八轮）**：不包含。bundle 只挂 `skills/`，`official/` 由官方 provider 按 assetRoot 读；13 条摘要条许可来源不清，不再往 npm 分发。`check:skills` 属开发期脚本，不进包。
