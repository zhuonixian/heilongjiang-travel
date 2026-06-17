# 黑蒙吉 · 旅 — 13 天黑龙江深度行程网站

> 2026 年 7 月，10 人精品小团，从北京启程，穿越哈尔滨、五大连池、嘉荫、伊春、黑河的 13 天深度行程介绍网站。

🌐 **线上访问**：https://heilongjiang-travel.pages.dev/
📦 **源码仓库**：https://github.com/zhuonixian/heilongjiang-travel

---

## 项目简介

本项目是一份**双视角**的旅行方案网站，旨在同时满足两类使用场景：

1. **PPT 概览视角**（首页）— 给老板、客户快速浏览，10 分钟掌握全行程亮点
2. **查询手册视角**（行程手册 + 实用信息）— 给出行领队和成员途中查询，含交通、景点、美食、酒店、安全、应急等完整信息

### 视觉风格

**高端商务风** — 墨绿、深蓝、黄铜金、奶白四色克制配色，思源宋体大标题 + 思源黑体正文，大留白与深色蒙层交替，营造"低调奢华"的旅行品牌质感。

---

## 技术栈

| 类别 | 选型 |
|------|------|
| 框架 | [Astro 6.4](https://astro.build/)（静态站点生成） |
| 样式 | [Tailwind CSS v4](https://tailwindcss.com/)（`@theme` 自定义主题） |
| 交互 | [Alpine.js 3.x](https://alpinejs.dev/)（移动端菜单、滚动 spy、复选框） |
| 字体 | 思源宋体 + 思源黑体（经 `fonts.font.im` 国内 CDN） |
| 部署 | Cloudflare Pages（自动 HTTPS + 全球 CDN） |
| 图片 | 33 张景点/美食/酒店图，由 cliproxyapi `gpt-image-2` 生成 |

---

## 网站结构（9 个页面）

| 页面 | 路径 | 定位 |
|------|------|------|
| 首页 · PPT 概览 | `/` | Hero 大图 + 数据条 + 13 天时间轴 + 5 大目的地 + TOP 6 亮点 + 美食 + 行程要素 + CTA |
| 详细行程手册 | `/itinerary` | 13 个 Day section + sticky 日期导航 + IntersectionObserver 滚动 spy + 打印优化 |
| 目的地总览 | `/destinations` | 5 张交替图文卡片 + 13 天色块可视化时间轴 |
| 五大连池专题 | `/destinations/wudalianchi` | 全屏 hero + 高光时刻 + 关联行程 + 当地特色 |
| 嘉荫专题 | `/destinations/jiayin` | 中俄边境恐龙王国专题 |
| 伊春专题 | `/destinations/yichun` | 林都红松氧吧专题 |
| 黑河专题 | `/destinations/heihe` | 中俄界江风情专题 |
| 哈尔滨专题 | `/destinations/harbin` | 东方莫斯科专题 |
| 实用信息中心 | `/guide` | 8 大板块：包车 / 行李 / 安全 / 礼仪 / 时间 / 应急 / 美食 / 要素 |

---

## 本地开发

### 环境要求

- Node.js ≥ 22.12.0
- npm ≥ 10

### 启动

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:4321）
npm run dev

# 构建生产版本到 dist/
npm run build

# 本地预览构建结果
npm run preview
```

---

## 内容修改指南

### 修改行程内容（最常用）

所有行程数据集中在 **`src/data/itinerary.ts`**，修改后构建即可生效，无需改动任何组件代码。

```typescript
// 数据结构示例
export const itinerary: DayPlan[] = [
  {
    day: 1,
    date: '2026-06-28',
    weekday: '周日',
    location: '北京 → 哈尔滨 → 五大连池',
    hero: '/images/destinations/wudalianchi-bailong-lake.jpg',
    oneLine: '从大兴机场出发...',
    transport: [...],
    attractions: [...],
    restaurants: [...],
    hotel: { name: '...', address: '...' },
  },
  // ...
];
```

### 修改的目的地专题

编辑 `destinations` 数组，新增/删除条目会自动同步到：
- `/destinations` 总览页
- `/destinations/[slug]` 详情页（动态路由自动生成）

### 修改主题色

编辑 `src/styles/global.css` 的 `@theme` 块：

```css
@theme {
  --color-ink: #1a3a3a;        /* 主色：墨绿 */
  --color-brass: #c9a961;      /* 辅色：黄铜金 */
  --color-cream: #faf8f3;      /* 背景：奶白 */
  /* ... */
}
```

### 新增图片素材

1. **互联网采集**：直接下载到 `public/images/{hero,destinations,dishes,hotels}/`
2. **AI 生成**（推荐风格统一）：

```bash
curl -X POST http://127.0.0.1:8317/v1/images/generations \
  -H "Authorization: Bearer <API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-image-2",
    "prompt": "写实摄影风格，五大连池白龙湖火山堰塞湖...",
    "n": 1,
    "size": "1536x1024"
  }'
```

---

## 部署

### 自动部署（推荐）

push 到 `main` 分支即触发 Cloudflare Pages 自动构建部署：

```bash
git add .
git commit -m "feat: 更新某内容"
git push origin main
```

### 手动部署

```bash
# 构建
npm run build

# 部署到生产（必须指定 --branch=main）
wrangler pages deploy dist --project-name heilongjiang-travel --branch main
```

### 切换子域名

修改 `astro.config.mjs` 中的 `site` 字段 + `wrangler pages project create <新名字>` 创建新项目。

---

## 关键技术决策

| 决策点 | 选择 | 原因 |
|--------|------|------|
| 渲染模式 | `output: 'static'` | 纯静态，CDN 加速，无需后端 |
| Tailwind 版本 | `4.1.16` 固定 | 4.3+ 依赖 Vite 8，与 Astro 6 内置 Vite 7 不兼容 |
| 字体 CDN | `fonts.font.im` | 国内访问稳定，避免 Google Fonts 被墙 |
| Alpine.js | 仅前端轻交互 | 移动菜单、滚动 spy、复选框等，无需 React 重量级框架 |
| 图标 | 内联 SVG 线条风 | 高端商务风禁用 emoji，保证专业感 |
| 图片 | AI 生成为主 | 景点匹配免版权图源稀少，AI 生成可保证风格一致性 |

---

## 项目目录

```
travel-heilongjiang/
├── astro.config.mjs          # Astro + Tailwind 配置
├── tsconfig.json             # 路径别名：@components/@layouts/@data/@styles
├── package.json
├── public/
│   ├── _headers              # Cloudflare 安全响应头
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/               # 33 张图片素材
│       ├── hero/             # 3 张 Hero 大图
│       ├── destinations/     # 21 张目的地图片
│       ├── dishes/           # 7 张美食图片
│       ├── hotels/           # 2 张酒店图片
│       ├── favicon-32.png
│       ├── apple-touch-icon.png
│       └── logo.png
└── src/
    ├── styles/global.css     # Tailwind @theme 主题色 + 全局样式
    ├── layouts/BaseLayout.astro   # SEO + Navbar + Footer + Alpine.js 初始化
    ├── components/
    │   ├── Navbar.astro      # 固定顶部导航 + 移动端汉堡菜单
    │   └── Footer.astro
    ├── data/itinerary.ts     # ⭐ 全部行程数据集中于此
    └── pages/
        ├── index.astro            # 首页 PPT 概览
        ├── itinerary.astro        # 详细行程手册
        ├── destinations/
        │   ├── index.astro        # 目的地总览
        │   └── [slug].astro       # 目的地详情动态路由
        └── guide.astro            # 实用信息中心
```

---

## 验证清单

部署后建议验证：

- [ ] 桌面端 1440px 各页面布局正常
- [ ] 移动端 390px 各页面响应式正常
- [ ] Navbar 移动端汉堡菜单可展开/关闭
- [ ] 行程手册 sticky 日期导航高亮跟随滚动
- [ ] 实用信息中心 sticky 侧栏高亮正确
- [ ] 所有图片加载正常（无 404）
- [ ] 安全响应头生效：`curl -I https://heilongjiang-travel.pages.dev/`

---

## License

Private — 仅用于 2026 年 7 月黑龙江行程方案汇报。

---

**Travel · Discover · Beyond**
