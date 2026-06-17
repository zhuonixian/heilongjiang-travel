# CLAUDE.md — 黑蒙吉·旅 行程网站

## 项目定位
基于 Astro 6.4 的静态站点，13 天黑龙江深度行程介绍网站。高端商务风（墨绿+黄铜金+奶白），双视角设计：首页 PPT 概览 + 详细手册查询。

## 核心命令
```bash
npm run dev      # 本地开发 (http://localhost:4321)
npm run build    # 构建到 dist/
npm run preview  # 预览构建结果
wrangler pages deploy dist --project-name heilongjiang-travel --branch main  # 部署生产
```

## 目录约定
- `src/data/itinerary.ts` — **所有行程内容数据**（行程/目的地/美食/贴士），改内容只动这里
- `src/pages/` — 4 类页面：`index` / `itinerary` / `destinations/` / `guide`
- `src/components/` — Navbar / Footer / BaseLayout（共享组件，谨慎修改）
- `src/styles/global.css` — Tailwind v4 `@theme` 主题色定义
- `public/images/` — 全部图片素材（33 张，由 cliproxyapi gpt-image-2 生成）

## 技术约束
- **版本固定**：`@tailwindcss/vite@4.1.16` + `tailwindcss@4.1.16`（4.3+ 与 Astro 6 不兼容）
- **不用** `@astrojs/cloudflare` adapter；`output: 'static'`
- **字体**：思源宋体 + 思源黑体，经 `fonts.font.im` 国内 CDN
- **图标**：内联 SVG 线条风，**禁用 emoji**
- **图片**：路径用绝对 `/images/...`，新增图片优先用 cliproxyapi 生成

## 部署
- Cloudflare Pages 项目：`heilongjiang-travel`
- 生产域名：https://heilongjiang-travel.pages.dev
- 生产分支：`main`（push 自动触发部署）
- GitHub：https://github.com/zhuonixian/heilongjiang-travel

## 视觉规范
- 主色：墨绿 `#1a3a3a` / 深蓝 `#1e3a5f` / 黄铜金 `#c9a961` / 奶白 `#faf8f3`
- 排版：serif 标题（思源宋体）+ sans 正文（思源黑体）
- 装饰类：`.label-eyebrow` / `.brass-rule` / `.brass-divider` / `.card-shadow`
