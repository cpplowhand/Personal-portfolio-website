# 个人作品集网站 — 技术设计文档（TECH_DESIGN）

> 依据 `PRD.md`（展示个人项目 + 技能）与 `RESEARCH.md`（案例研究、重质不重量、移动端适配、交互友好）编写，与 `PRD.md` §5.1 选型对齐。
> 版本号以安装时最新稳定版为准。

## 1. 选型原则

| 原则 | 说明 |
|---|---|
| 内容优先 | 作品集是内容驱动的静态站点，优先选 SEO 与内容构建能力强的框架 |
| 性能与体验 | 加载快、移动端优先、动画轻量克制 |
| 可维护 | 内容用 Markdown 管理，无需后台；后续可低成本扩展 |
| 主流生态 | 选择社区成熟、资料丰富的方案，便于长期维护 |

## 2. 技术栈总览

| 类别 | 选型 | 用途 |
|---|---|---|
| 框架 | **Astro + TypeScript** | 静态生成（SSG）、默认少 JS、SEO 好 |
| 样式 | **Tailwind CSS** | 原子化样式、移动优先响应式、统一设计系统 |
| 内容 | **Markdown/MDX + frontmatter** | 案例研究（Case Study）以 Markdown 编写 |
| 交互增强 | Astro Islands（按需 React/Svelte） | 筛选等复杂交互，MVP 不引入 |
| 动画 | **CSS + View Transitions** | 轻量动效，避免重型动画库 |
| 图标 | **Lucide** | 风格统一、体积小 |
| 图片 | **astro:assets**（内置，基于 sharp） | 输出 WebP/AVIF，移动端性能 |
| 代码规范 | **ESLint + Prettier** | 统一代码风格、自动格式化 |
| 部署 | **Tencent EdgeOne Pages** | 静态托管、Git 自动构建、国内访问快 |

## 3. 选型理由（需求映射）

### 3.1 展示个人项目，体现技能优势
- **Astro 静态生成（SSG）**：每个项目/案例页独立预渲染，SEO 优秀，分享链接带预览卡片。
- **MDX 承载案例研究**：符合调研结论「用案例研究代替截图堆砌」。每个项目写成图文并茂的长文（背景 → 挑战 → 技术方案 → 成果），展示作品同时体现思考深度。

### 3.2 移动端适配
- **Tailwind CSS 移动优先**响应式断点，配合 astro:assets 输出现代格式与响应式图片，一套代码覆盖手机/平板/桌面。

### 3.3 交互友好
- MVP 阶段动效克制：CSS 过渡 + Astro View Transitions 实现页面切换；复杂交互（筛选等）留待 P1 再用 Islands 按需引入。
- 遵循 `prefers-reduced-motion`，减少动画偏好下关闭非必要动效。

## 4. 架构与目录结构（Astro）

```
src/
  layouts/
    BaseLayout.astro       # 全局布局（导航、页脚、字体、SEO）
  pages/
    index.astro            # 首页：Hero → 关于 → 项目 → 技能 → 联系
    projects/
      index.astro          # 项目/案例列表页
      [slug].astro         # 单个案例研究页（渲染 MDX）
    about.astro            # 关于我 + 技能展示
    404.astro              # 404
  components/
    Navbar.astro
    Footer.astro
    ProjectCard.astro      # 项目卡片
    SkillSection.astro     # 技能分组展示
  content/
    projects/*.mdx         # 案例研究内容（Content Collections + frontmatter）
  styles/
    global.css
astro.config.mjs           # 集成 Tailwind、sitemap 等
public/
  images/                  # 项目截图、头像等静态资源
```

## 5. 移动端与响应式方案

- 断点对齐 PRD：<640px 单列 / 640–1024px 双列 / >1024px 三列；内容最大宽度约 1200px。
- 移动端导航折叠为汉堡/抽屉菜单，点击菜单项后关闭。
- 图片用 astro:assets 响应式 + 懒加载，控制首屏体积。

## 6. 交互与动效方案

- **页面切换**：Astro View Transitions 平滑过渡。
- **区块出现 / 卡片 hover**：CSS 过渡，遵循 `prefers-reduced-motion` 降级。
- **性能约束**：动效仅用 `transform`/`opacity`，避免布局抖动；MVP 不引入重型动画库。

## 7. 部署方案

采用 **腾讯云 EdgeOne Pages**（无需注册 Vercel）：

- 连接 Git 仓库（GitHub / Gitee / 腾讯云），`git push` 自动构建发布。
- Astro 静态输出（`dist/`）直接托管，EdgeOne Pages 原生支持静态站点与无服务器应用。
- 国内 CDN 节点，大陆访问速度优于 Vercel；支持自定义域名 + HTTPS。

## 8. 备选方案对比

| 方案 | 优点 | 缺点 | 结论 |
|---|---|---|---|
| **Astro（采用）** | 轻、快、默认少 JS、内容优先、性能优 | 复杂交互需 Islands | ✅ 当前选择（对齐 PRD） |
| Next.js | 生态最大、易扩展（博客/CMS）、复杂 React 交互方便 | 相对偏重、首屏 JS 更多 | 若后续博客/CMS/复杂交互再迁移 |
| 纯 HTML/CSS/JS | 最轻量、无构建 | 内容组织与扩展成本高 | 仅适合一次性简单页 |

## 9. 后续可选扩展（当前不引入）

| 扩展 | 说明 |
|---|---|
| 复杂交互（筛选/搜索） | Astro Islands 按需引入 React/Svelte |
| 博客 | 新增 MDX 路由即可 |
| CMS | 内容量大或频繁更新时接 Sanity/Contentful |
| 暗色模式 | CSS 变量 + `prefers-color-scheme`，随时可加 |
| 分析 | Plausible / Umami（隐私友好） |
