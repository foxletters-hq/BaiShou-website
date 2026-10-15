# BaiShou 官网

白守（BaiShou-Next）产品官方网站，基于 [Astro](https://astro.build/) 构建；使用文档与官网共用同一套 Layout / Header，自研侧栏 + 正文布局。

- 线上地址：https://foxletters.com
- 使用文档：https://foxletters.com/docs/
- GitHub Pages 镜像：https://baishou.foxletters.com
- 主项目：https://github.com/foxletters-hq/BaiShou-Next

## 本地开发

```bash
npm ci
npm run dev
```

- 官网首页：http://localhost:4321/
- 文档（简中）：http://localhost:4321/docs/
- 文档（English）：http://localhost:4321/en/docs/
- 文档（繁中）：http://localhost:4321/zh-tw/docs/
- 文档（日本語）：http://localhost:4321/ja/docs/

## 文档内容

文档源文件在 `src/content/docs/`：

| 语言 | 路径前缀 | 内容目录 |
|------|----------|----------|
| 简体中文（默认） | `/docs/` | `src/content/docs/docs/` |
| English | `/en/docs/` | `src/content/docs/en/docs/` |
| 繁體中文 | `/zh-tw/docs/` | `src/content/docs/zh-tw/docs/` |
| 日本語 | `/ja/docs/` | `src/content/docs/ja/docs/` |

同一相对路径与文件名用于关联多语言页面。侧边栏与文案在 `src/data/docs-nav.ts` 中维护；路由见 `src/pages/docs/` 与 `src/pages/[locale]/docs/`。

## 代码规范

提交前请执行 `npm run lint`，规范由 [eslint.config.js](./eslint.config.js) 与 [scripts/check-max-lines.mjs](./scripts/check-max-lines.mjs) 共同保证：

| 规范 | 要求 | 检查方式 |
|------|------|----------|
| 单文件行数 | `.ts` / `.tsx` / `.astro` / `.js` 与 `.css` 均不超过 **300 行**（不含空行与注释），超过即拆分 | ESLint `max-lines` + `npm run check:lines` |
| 单函数行数 | 不超过 120 行（警告） | ESLint `max-lines-per-function` |
| 基础质量 | 禁用 `var`、`==`、未使用变量、空 `catch` 块、`any` | ESLint + typescript-eslint |
| 格式 | UTF-8、LF、2 空格缩进 | [.editorconfig](./.editorconfig) |

目录约定：

- `src/styles/modules/`：官网样式，按区块拆分，由 `src/styles/global.css` 统一 `@import`；
- `src/styles/docs/`：文档页样式，由 `src/styles/docs.css` 统一引入；
- `src/scripts/`：浏览器端脚本，`.astro` 内只保留一行 import 与初始化调用；
- `src/data/`：站点与文档导航数据，体量大时按主题拆文件；
- 新增文案须同步 `zh-CN`、`zh-TW`、`en`、`ja` 四个语言文件及 `src/i18n/types.ts`。

常用命令：

```bash
npm run lint       # ESLint + 样式行数检查
npm run lint:fix   # 自动修复可修复项
npm run build      # 构建前同样建议先通过 lint
```

## 构建

```bash
npm run build
npm run preview
```

## 部署

对外主站是 `https://foxletters.com`（VPS）。推送到 `main` 后，GitHub Actions 仍会把同一套静态文件发到 GitHub Pages（`baishou.foxletters.com`），页面里的 canonical、sitemap 指向主站。

主站内容要在 VPS 上执行 [deploy/update-vps-mirror.sh](./deploy/update-vps-mirror.sh) 同步到 1Panel（见 [deploy/README.md](./deploy/README.md)）。

## 贡献

向本仓库提交**包含代码变更**的 Pull Request 前，须签署 [foxletters-hq 组织级个人贡献者协议（CLA v1.1）](https://github.com/foxletters-hq/BaiShou-Next/blob/main/legal/CLA-organization.md)：

- 可直接访问 **[CLA Assistant 签署页面](https://cla-assistant.io/foxletters-hq/BaiShou-website)** 登录 GitHub 一键签署；
- 若你已向组织内其他仓库（如 `BaiShou-Next`）签署过，无需重复签署；纯文档纠错 PR 通常免签。
- 详见 [.github/CLA.md](./.github/CLA.md)。

## 开源许可证与版权

- **源代码**：在 [MIT License](./LICENSE) 下发布；
- **美术资产与商标**：白守官方应用图标、Logo、星河背景图及角色立绘美术资源保留所有权利（All Rights Reserved），不属于 MIT 许可范围；商标权归项目托管方所有。详见 [COPYRIGHT](./COPYRIGHT)。

## 贡献者

参见仓库 [Contributors](https://github.com/foxletters-hq/BaiShou-website/graphs/contributors) 页面。
