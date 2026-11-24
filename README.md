# WJ 武库 · dsh-skills-wj

![license](https://img.shields.io/badge/license-MIT-green) ![npm](https://img.shields.io/npm/v/@tinyforge/dsh-skills-wj?label=npm) ![downloads](https://img.shields.io/npm/dm/@tinyforge/dsh-skills-wj?label=downloads) ![DSH Web Plugin](https://img.shields.io/badge/DSH_Web_Plugin-yes-brightgreen) ![DSH tested up to](https://img.shields.io/badge/DSH_tested_up_to-0.2.2--rc.5-blue)

> 杜预号「武库」，满腹兵甲，取用不竭。库里各色 skill 同源不同途——官定条目、自有、引入，同库版本化，按需取用。

版本化的 DeepSeek Harness skill 源目录：`official/` 放官方目录条目（14 个：`figma-design-skill` 与另外 6 条为上游全文，剩余 7 条因上游无源、无许可或体积过大仍是摘要条），`skills/` 放自有与引入的 skill（7 个），整仓库可作为一个 DSH bundle 安装。

| | |
| --- | --- |
| 仓库 | <https://github.com/phoenixlucky/dsh-skills-wj>（公开） |
| 包 | npm [`@tinyforge/dsh-skills-wj`](https://www.npmjs.com/package/@tinyforge/dsh-skills-wj) |
| 版本 | `1.2.6` |
| 许可 | 自有内容 MIT；`figma-design-skill` 上游 MIT；`chrome-extensions`、`modern-web-guidance` 上游 Apache-2.0（GoogleChrome/modern-web-guidance） |
| 最近更新 | 2026-11-24 |

## 结构

```
official/                        官方目录：由 @deepseek-ai/dsh-skill-official 读取（14 个，平铺）
  figma-design-skill/            SKILL.md（v2.16.0）+ references/ 3 篇（自带 LICENSE、source-url）
  <name>/SKILL.md                6 个已是上游全文（含 reference/、scripts/、LICENSE）；7 个仍是摘要条
skills/                          bundle 根：SKILL.md + 可选 references/、guides/
  zuowang-skill/                 自有
  chrome-extensions/             外部引入（SKILL.md + 19 篇 references/extensions + 4 篇 webstore）
  modern-web-guidance/           外部引入（SKILL.md + 211 篇 guides/**）
  mcp-builder/                   外部引入 anthropics/skills（SKILL.md + reference/ 5 篇 + scripts/ 4 个，11 个文件）
  webapp-testing/                外部引入 anthropics/skills（SKILL.md + scripts/with_server.py + examples/ 3 个，6 个文件）
  frontend-design/               外部引入 anthropics/skills（SKILL.md + LICENSE.txt，2 个文件）
  pdf/                           外部引入 anthropics/skills（SKILL.md + REFERENCE.md、FORMS.md + scripts/，12 个文件）
scripts/check-skills.mjs         提交前校验：缺文件、缺 frontmatter、name 与目录不符、重名
.githooks/pre-commit             调用上面的校验，坏文件不许进仓库
cordis.patch.yml                 挂载层：host 级 skill-filesystem（bundledSkillDir 指向 skills/）+ tool-skill
icon.webp                         插件图标（300×300、webp、带 alpha），由 package.json 的 icon 字段引用
locale/en.json、locale/zh.json    插件显示名与描述（meta.title / meta.description），英文 / 中文
package.json                     dsh.bundle 声明与 check:skills 脚本
```

## 两个根的分工

| | `official/` | `skills/` |
| --- | --- | --- |
| 谁读 | `@deepseek-ai/dsh-skill-official`（通过 assetRoot） | `@deepseek-ai/dsh-skill-filesystem` 的 `bundledSkillDir` |
| 数量 | 当前 14 个（平铺，无子分组） | 当前 7 个，可随时增删 |
| 能否改名/移动 | 不能。目录名即 provider 的 `SKILL_DIRS` | 可以，目录名与 frontmatter `name` 保持一致即可 |
| 来源 | 上游镜像，改动应回到上游仓库 | 本仓库自有或明确引入 |

## `official/` 的 14 个 skill

`figma-design-skill` 是完整正文并标注 `version`。**另有 6 条已由摘要条升级为上游全文镜像**：`superpowers`（15 个 skill 归档在 `reference/`）、`ponytail`、`officecli`、`ui-ux-pro-max`、`weiliaozi-skill`、`vision-liao-memory`（cognee `cognee-recall` 作正文 + `reference/cognee-improve-sessions.md`）；这些目录带 `synced-from` 记录上游提交。**仍是摘要条的 7 条**：`taste-skill`（上游 35 MiB）、`zerotoken-skill`（上游 GPL-3.0）、`moon-lovers`（上游无 LICENSE）、`bug-hunt` / `code-review` / `release-notes`（上游无源）、`github`（clawhub 非仓库），各目录内 `source-note` / `source-url` 记明原因。

| skill | 来源 | 上游版本 | 上游更新 | 本地 |
| --- | --- | --- | --- | --- |
| `figma-design-skill` | [phoenixlucky/figma-design-skill](https://github.com/phoenixlucky/figma-design-skill) | **2.16.0** | 2026-10-15 | 已同步（正文 411 行 + references 208 / 211 / 228 行） |
| `bug-hunt` | 来源未明（原标 [anthropics/skills](https://github.com/anthropics/skills)，该仓库无此 skill） | 未知 | 未知 | 摘要条，`source-note` 记待补 |
| `code-review` | 同上 | 未知 | 未知 | 摘要条，`source-note` 记待补 |
| `release-notes` | 同上 | 未知 | 未知 | 摘要条，`source-note` 记待补 |
| `superpowers` | [obra/superpowers](https://github.com/obra/superpowers) | **v7.0.2** | 2026-11-04 | 全文：15 个 skill 归档于 `reference/`（rev `22f0b463`） |
| `ponytail` | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | **v5.3.3** | 2026-11-22 | 全文（rev `ebd8654c`） |
| `taste-skill` | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | **v2.5.1** | 2026-11-23 | 摘要条（上游 1631 文件 / 34.9 MiB，未镜像） |
| `ui-ux-pro-max` | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | **v2.15.0** | 2026-11-24 | 全文：81 文件 / 3.6 MiB（rev `f2f7266b`） |
| `officecli` | [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | **v1.0.163** | 2026-11-20 | 全文（rev `fecece3e`，SKILL.md 25.8 KiB） |
| `vision-liao-memory` | [topoteretes/cognee](https://github.com/topoteretes/cognee) · `.agents/skills/` | 无 tag | 2026-11-20 | 全文：`cognee-recall` 作正文 + `reference/cognee-improve-sessions.md`（rev `1961133d`） |
| `github` | [clawhub.ai/steipete/github](https://clawhub.ai/steipete/github) | 无版本号 | 2026-06-17 | 摘要条（非 GitHub 仓库，无法核对） |
| `moon-lovers` | [phoenixlucky/moon-lovers-skill](https://github.com/phoenixlucky/moon-lovers-skill) | **v1.4.5** | 2026-06-18 | 摘要条（上游仓库**无 LICENSE**，未获再分发授权） |
| `zerotoken-skill` | [phoenixlucky/zerotoken-skill](https://github.com/phoenixlucky/zerotoken-skill) | **v1.17.0** | 2026-10-16 | 摘要条（上游 **GPL-3.0**，与本库 MIT 不兼容，未镜像） |
| `weiliaozi-skill` | [phoenixlucky/weiliaozi-skill](https://github.com/phoenixlucky/weiliaozi-skill) | **v2.2.1** | 2026-09-24 | 全文：8 文件 / 2.9 MiB（rev `0f96cdcd`） |

> 「上游更新」取上游默认分支最新提交时间（Asia/Shanghai）；有 tag 的写 tag，无 tag 的写最新提交。摘要条只跟版本，不携带上游正文。来源未确认的三个标「未知」，不做推测。

## `skills/` 的 3 个 skill

| skill | 来源 | 版本 | 上游更新 | 本地 |
| --- | --- | --- | --- | --- |
| `zuowang-skill` | [phoenixlucky/zuowang-skill](https://github.com/phoenixlucky/zuowang-skill) | 无版本号（rev `28a90409`） | 2026-11-19 | 与上游一致（148 行） |
| `chrome-extensions` | [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) · `skills/chrome-extensions` | 仓库 tag **v1.0.2** | 2026-11-23 | 与上游一致（24 个文件） |
| `modern-web-guidance` | 同上 · `skills/modern-web-guidance` | 仓库 tag **v1.0.2**；skill 内标识 **`2026_11_16-268fb9ea`** | 2026-11-23 | 与上游一致（17 个 guides 主题 / 211 篇） |
| `mcp-builder` | [anthropics/skills](https://github.com/anthropics/skills) · `skills/mcp-builder` | 无 tag（rev `e4bb5d96`） | 2026-11-16 | 与上游一致（11 个文件） |
| `webapp-testing` | 同上 · `skills/webapp-testing` | 无 tag（rev `e4bb5d96`） | 2026-11-16 | 与上游一致（6 个文件） |
| `frontend-design` | 同上 · `skills/frontend-design` | 无 tag（rev `e4bb5d96`） | 2026-11-16 | 与上游一致（2 个文件） |
| `pdf` | 同上 · `skills/pdf` | 无 tag（rev `e4bb5d96`） | 2026-11-16 | 与上游一致（12 个文件） |

## 提交前校验

任何 SKILL.md 的缺失或格式错误都会让整份目录解析失败，所以改完先跑校验再交付：

```sh
npm run check:skills      # 等价于 node scripts/check-skills.mjs
```

校验内容：文件存在、能读到 YAML frontmatter、`name` 为 kebab-case 且与目录名一致、`description` 非空、全仓库无重名；`official/` 里多出或缺少目录只报警告，`skills/` 下没有 SKILL.md 的目录也会提示。

启用提交钩子（一次即可）：

```sh
git config core.hooksPath .githooks
```

退出码非 0 表示不要重启、不要发布。

## 发布

改完 skill 或说明后按这个顺序走，命令都在仓库根执行：

```sh
npm run check:skills                          # 1. 校验不过就停
npm version minor --no-git-tag-version        # 2. 只改 package.json 版本
#   再手工同步本文件「版本」行与「版本与变更」节
git add -A && git commit -m "x.y.z: <一句话>"
git push origin main
git tag -a vx.y.z -m "x.y.z: <一句话>" && git push origin vx.y.z
gh release create vx.y.z --title "vx.y.z - <一句话>" --notes-file <说明文件>
npm publish                                   # 3. prepublishOnly 会再跑一次校验
```

要点：

- `main` 是唯一发布分支。远端最初是网页端建库（与本地历史无共同祖先），已用 `git merge -s ours --allow-unrelated-histories` 合并过，**不要再强推**。
- tag 必须与 `package.json` 版本一致；`npm publish` 成功后该版本号只能升不能改。
- 发布后 `npm view @tinyforge/dsh-skills-wj version` 有 1–5 分钟注册表延迟，此时 404 不代表失败：先看 npm 日志目录里那次 publish 的 `http fetch PUT` 状态码（201/202 即已被接受），再等 packument 生成。
- 首次发布会自动出现占位版本 `0.0.0-stage`（`"stub": true`，2 个文件），那是 npm 的分阶段发布占位，不是别人发的包，`latest` 指向真实版本。

## 安装与更新

### 方式一：作为 bundle 安装（推荐）

从 npm 装（不落源码树）：

```sh
dsh plugin --profile desktop add @tinyforge/dsh-skills-wj
```

或从 git 装（能拿到 `official/`、`scripts/`、`.githooks/`）：

```sh
git clone https://github.com/phoenixlucky/dsh-skills-wj.git
dsh plugin --profile desktop add file:<克隆目录>
```

npm 包里只有 `cordis.patch.yml` + `icon.webp` + `locale/*.json` + `skills/` + `README.md`（即 `package.json` 的 `files`），因为 bundle 只挂 `skills/`；`official/` 由官方 provider 自己按 assetRoot 读，不需要随包分发。`icon.webp`（300×300、带 alpha、约 35 KiB）由宿主按 `package.json.icon` 读取，用来在插件列表里显示图标；`locale/zh.json` 的 `meta.title` 为「WJ 武库」，插件列表与详情页按宿主语言取用，`locale/en.json` 是英文回落（Skill arsenal）。

安装后确认 profile 的 `package.json` 同时出现依赖与 bundles 条目：

```json
"dependencies": { "@tinyforge/dsh-skills-wj": "file:<克隆目录>" },
"dsh": { "profile": { "bundles": ["...", "@tinyforge/dsh-skills-wj"] } }
```

更新：在克隆目录 `git pull`，新会话即读到新内容；改过 skill 的 frontmatter 名称时重启 DSH 最稳妥。

### 方式二：只在 profile 里挂目录（不装 bundle）

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

仓库内的 `cordis.patch.yml` 保留的是维护者本机绝对路径，其他机器请改成自己的检出路径。注意这一行只挂 `skills/`，`official/` 由官方 provider 自己按 assetRoot 读，两者互不影响。

## 新增或调整 skill

1. `skills/` 下建 `<name>/SKILL.md`：frontmatter 必须有 `name`（kebab-case，与目录同名）与 `description`（写“什么时候该用它”）。
2. 子资料放同目录（`references/`、`guides/`），SKILL.md 内用相对路径引用。
3. 跑 `npm run check:skills`，通过后再提交。
4. `official/` 不要手改：要更新就先改上游仓库，再整体镜像回来。

## 版本与变更

语义化版本。`1.0.0` 起以下约定保持不变：`skills/<name>/SKILL.md` 布局、bundle 挂载方式、`package.json` 的 `dsh.bundle` 声明。

- **1.0.0**（2026-11-18）首个稳定版本：`zuowang-skill` 定稿，README 与 MIT 许可证补齐，发布公开仓库并打 `v1.0.0` Release。
- **1.1.x**：引入 `official/` 官方目录、`chrome-extensions` 与 `modern-web-guidance`；新增 `scripts/check-skills.mjs` 与 `.githooks/pre-commit`。
- **1.2.0**（2026-11-18）首个 npm 版本：将 `official/wj-forge/<name>/` 拍平为 `official/<name>/`（14 条全部保留在同一层），`figma-design-skill` 同时由 2.4.2 升级到 **2.16.0**（正文 411 行 + references 208/211/228 行）；`check-skills.mjs` 的 `OFFICIAL_SKILLS` 同步为 14 个平铺目录；`package.json` 新增 `publishConfig`（public）与 `prepublishOnly`（发布前强制跑 `check:skills`）；本机仓库首次接上 `origin`，与网页端建库历史合并后统一推到 `main`。
- **1.2.1**（2026-11-19）skill 内容升级 + 插件图标：`zuowang-skill` 同步到上游 `28a90409`（坐忘×尉缭子版，148 行）；`modern-web-guidance` 由仓库 tag v1.0.0 升到 **v1.0.1**（45 篇 guides 改写 + 新增 `guides/js/js.md`，skill 内版本标识 `2026_11_09-5bcc021b` → `2026_11_10-47b4c80e`，共 210 篇）；`chrome-extensions` 与 `figma-design-skill`（2.16.0）逐字节核验与上游一致；`official/figma-design-skill/LICENSE` 补回上游的结尾换行。新增包根 `icon.webp`（512×512 VP8X 带 alpha，51,822 B）并在 `package.json` 声明 `"icon": "./icon.webp"`、`files` 补 `icon.webp`。
- **1.2.2**（2026-11-20）插件显示名：新增 `locale/zh.json`（`meta.title` = **武库**）与 `locale/en.json`（`meta.title` = `Skill arsenal`），`package.json` 的 `exports` / `files` 补 `./locale/*.json`。此前缺 locale 时插件列表按宿主规则回落到包名 `@tinyforge/dsh-skills-wj`，装上本版后中文界面显示「武库」、英文界面显示 `Skill arsenal`。
- **1.2.3**（2026-11-20）换图标、改显示名：`icon.webp` 换成新图（300×300 VP8X 带 alpha，35,466 B；源图圆角外是不透明深藏青 `#18376C`，已从四边连通域去成透明），`locale/zh.json` 的 `meta.title` 由「武库」改为 **WJ 武库**，`package.json` 的 `description` 前缀同步；英文回落仍为 `Skill arsenal`。
- **1.2.4**（2026-11-21）README 徽章：标题下新增一排五枚 shields 徽章——许可证（取自 `package.json` 的 MIT）、npm 版本、npm 月下载、DSH Web Plugin、DSH 实测上限 **0.2.2-rc.5**（本包在 rc.5 宿主下挂载、`skills/` 三个 skill 已进会话目录）。纯文档改动，`skills/` 内容与挂载方式不变；npm 页面的 README 随本版同步。
- **1.2.5**（2026-11-24）`modern-web-guidance` 同步上游 v1.0.2 + 摘要条来源事实修正：`modern-web-guidance` 同步到上游 tag **v1.0.2**——共 33 项差异：新增 `guides/ui-components/context-menu.md`、`guides/visual-design/teaser.md`，删除 `guides/visual-design/soft-edge-content-fade.md`，改写 31 项（30 篇 guides + `SKILL.md` 的检索版本标识 `2026_11_10-47b4c80e` → `2026_11_16-268fb9ea`）；现 212 文件 / 211 篇 guides，与上游 v1.0.2 逐 blob 比对 0 差异。`chrome-extensions` 在 v1.0.2 里该目录无变化，仍 24 文件一致。README 上游版本列同步：`officecli` v1.0.162 → **v1.0.163**，`ponytail` / `taste-skill` / `ui-ux-pro-max` / `vision-liao-memory` 的上游更新日期改为各自 HEAD（11-22 / 11-23 / 11-24 / 11-20）。**来源事实修正**：`bug-hunt`、`code-review`、`release-notes` 撤掉无效的 `source-url`（实测 anthropics/skills 的 `skills/` 下无这三个，改为 `source-note` 记待补）；`vision-liao-memory` 改指 cognee 的 `.agents/skills/` 并注明对应 `cognee-recall` / `cognee-improve-sessions`。纯内容与文档变更，`package.json` 版本随之升到 **1.2.5** 并随本版发布到 npm。
- **1.2.6**（2026-11-24）新增 4 个 skill + `official/` 6 条升级为上游全文：从 <https://github.com/anthropics/skills>（rev `e4bb5d96`）**全文镜像** 4 个 skill 到 `skills/`——`mcp-builder`（11 文件 / 160 KiB，MCP 服务器开发指南，DSH 侧此前无对应能力）、`webapp-testing`（6 文件 / 22 KiB，Playwright 本地应用测试 + `scripts/with_server.py`）、`frontend-design`（2 文件 / 19 KiB，审美方向）、`pdf`（12 文件 / 69 KiB，pypdf / 表单 / OCR）。四者均按上游逐 blob 校验一致（共 31 文件 / 270 KiB），目录内保留 Apache-2.0 `LICENSE.txt`，**不生成摘要条**；`check:skills` → 21 篇通过，`skills/` 由 3 个增到 7 个。
  - 同轮把 `official/` 里 6 条摘要条升级为**上游全文**（原位替换，目录名仍与 provider `SKILL_DIRS` 一致，`check:skills` 不变）：`superpowers`（上游无单体 skill，15 个 skill 全文归档 `reference/`，索引由 frontmatter 自动生成，80 文件 / 436 KiB）、`ponytail`（`ebd8654c`）、`officecli`（`fecece3e`）、`ui-ux-pro-max`（`f2f7266b`，81 文件 / 3.6 MiB）、`weiliaozi-skill`（`0f96cdcd`，8 文件 / 2.9 MiB）、`vision-liao-memory`（cognee `1961133d`）。**未镜像的 7 条及原因**：`taste-skill` 上游 34.9 MiB、`zerotoken-skill` 上游 GPL-3.0、`moon-lovers` 上游无 LICENSE、`bug-hunt`/`code-review`/`release-notes` 上游不存在、`github` 非 GitHub 仓库。
  - 本版只改内容与文档：`skills/` 3→7 个、`official/` 6 条换全文；`official/` 不进 npm，包体增量全部来自 `skills/`（275 文件 / 827,952 B）。版本号随本版升到 **1.2.6** 并发布到 npm。

## 第三方内容与许可

- `zuowang-skill`：本仓库自有，MIT。
- `skills/chrome-extensions`、`skills/modern-web-guidance`：来自 <https://github.com/GoogleChrome/modern-web-guidance>（Apache-2.0），本地内容与上游 tag **v1.0.2** 逐字节对齐；`modern-web-guidance` 运行时还依赖上游 npm 包检索。
- `skills/mcp-builder`、`skills/webapp-testing`、`skills/frontend-design`、`skills/pdf`：来自 <https://github.com/anthropics/skills>，**Apache-2.0**（每个目录内保留上游 `LICENSE.txt`），同步上游 `e4bb5d96`（2026-11-16）。四者上游均无 tag，只能跟提交。
- `official/figma-design-skill`：来自 <https://github.com/phoenixlucky/figma-design-skill>，MIT，v2.16.0。
- `official/` 里 6 条全文镜像的许可：`superpowers`（MIT）、`ponytail`（MIT）、`ui-ux-pro-max`（MIT）、`weiliaozi-skill`（MIT）、`officecli`（Apache-2.0，仓库根许可）、`vision-liao-memory`（Apache-2.0，cognee 仓库根许可）；`superpowers` 目录另存上游 `LICENSE`。
- `official/zerotoken-skill` 保持摘要条：上游 **GPL-3.0**，全文并入本 MIT 仓库会带来传染性授权问题，仅以链接引用。
- 其余 13 个 `official/<name>`：摘要条，上游与许可各见其 `source-url`（obra/superpowers、DietrichGebert/ponytail、Leonxlnx/taste-skill、nextlevelbuilder/ui-ux-pro-max-skill、iOfficeAI/OfficeCLI、topoteretes/cognee、clawhub.ai/steipete/github 及 phoenixlucky 自有仓库）。`bug-hunt`、`code-review`、`release-notes` 不在此列：它们原标注 anthropics/skills，经核实该仓库没有对应 skill，已撤掉无效的 `source-url`、改为 `source-note` 记待补，**来源未确认前不要当作 anthropics 内容分发**。

仓库根的 `LICENSE` 只覆盖自有内容，不自动覆盖以上第三方部分。

## 优先级

内置/打包根 rank 600；用户目录 `~/.dsh/skills` 为 400，同名 skill 会被用户目录**覆盖**（数字小者胜）。要临时压过版本源，放进用户目录即可。

`chrome-extensions`、`modern-web-guidance` 与内置 skill 同名、同为 rank 600 时谁生效未经验证；要确定压过内置版本，放用户目录（400）或改名，别依赖同 rank 的先后。

## 边界

只放提示词类 skill；需要工具或服务的分发走 plugin，而不是这里。
