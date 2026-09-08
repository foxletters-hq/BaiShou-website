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

## 构建

```bash
npm run build
npm run preview
```

## 部署

对外主站是 `https://foxletters.com`（VPS）。推送到 `main` 后，GitHub Actions 仍会把同一套静态文件发到 GitHub Pages（`baishou.foxletters.com`），页面里的 canonical、sitemap 指向主站。

主站内容要在 VPS 上执行 [deploy/update-vps-mirror.sh](./deploy/update-vps-mirror.sh) 同步到 1Panel（见 [deploy/README.md](./deploy/README.md)）。

## 贡献

向本仓库提交**包含代码变更**的 Pull Request 前，须签署 [foxletters-hq 组织级 CLA](https://github.com/foxletters-hq/BaiShou-Next/blob/main/legal/CLA-organization.md)（在 PR 中通过 [CLA Assistant](https://cla-assistant.io/) 点击同意）。若你已向组织内其他仓库签署过，通常无需重复签署。

详见 [.github/CLA.md](./.github/CLA.md)。

## 贡献者

参见仓库 [Contributors](https://github.com/foxletters-hq/BaiShou-website/graphs/contributors) 页面。
