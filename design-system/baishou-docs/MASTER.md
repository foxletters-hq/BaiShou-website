# Design System Master — BaiShou Docs

> Page overrides live in `pages/[name].md` and win over this file.

**Project:** BaiShou Docs  
**Stack:** Astro 4 + Starlight 0.29  
**Style:** Modern Dark (Cinema) × 白守 brand  
**Source:** UI/UX Pro Max + brand override  

## Tokens（品牌覆写技能默认）

| Role | Value |
|------|-------|
| bg | `#070b16` → `#0a0f1e` family（禁止纯 `#000`） |
| surface | `rgba(255,255,255,0.04)` glass |
| border | `rgba(255,255,255,0.1)` hairline |
| accent | `#9ad4ea` / `#6fb4d0` |
| text | `#f2f4f7` / `#c9d0db` |
| radius | `16px` |
| ease | `cubic-bezier(0.16,1,0.3,1)` |
| display | Noto Serif SC + Fraunces |
| body | Noto Sans SC + Outfit |

**不用：** Inter、indigo `#5E6AD2`、Orbitron、霓虹绿、emoji 图标。

## Pattern

1. Brand-first Hero（自定义 `Hero.astro`）  
2. 四步上手卡片  
3. 主题 LinkCard 网格  
4. 正文高对比 + glass 侧栏  

## Files

- `src/styles/starlight.css`  
- `src/components/docs/Hero.astro`  
- `src/components/docs/PageTitle.astro`  
- `src/content/docs/**/index.mdx`  
