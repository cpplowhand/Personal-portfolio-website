# 个人作品集网站

基于 Astro + TypeScript + Tailwind CSS 的静态作品集，以「案例研究」展示个人项目与技能。

## 快速开始

```bash
npm install      # 安装依赖
npm run dev      # 本地开发 http://localhost:4321
npm run build    # 构建静态站点到 dist/
npm run preview  # 本地预览构建产物
npm run check    # TypeScript 类型检查
npm run format   # 代码格式化（Prettier）
```

## 技术栈

- **框架**：Astro + TypeScript（静态生成）
- **样式**：Tailwind CSS v4（含 `@tailwindcss/typography`）
- **内容**：MDX + frontmatter（Astro Content Collections）
- **图标**：Lucide（`lucide-astro`）
- **部署**：腾讯云 EdgeOne Pages

## 目录结构

```
src/
  layouts/BaseLayout.astro     # 全局布局（SEO、导航、页脚、View Transitions）
  pages/
    index.astro                # 首页：Hero → 关于 → 项目 → 技能 → 联系
    about.astro                # 关于我 + 技能展示
    projects/index.astro       # 项目 / 案例研究列表
    projects/[slug].astro      # 单个案例研究详情（渲染 MDX）
    404.astro                  # 404
  components/
    Navbar.astro               # 顶部导航（含移动端汉堡菜单）
    Footer.astro               # 页脚
    ProjectCard.astro          # 项目卡片
    SkillSection.astro         # 技能分组展示
    ContactSection.astro       # 联系方式（含复制邮箱）
    SocialLinks.astro          # 社交链接（复用）
  content/
    projects/*.mdx             # 案例研究内容
    content.config.ts          # 内容集合 schema（在 src/ 根目录）
  data/
    site.ts                    # 站点信息（姓名、角色、邮箱、社交链接等）
    skills.ts                  # 技能分组
  styles/global.css            # 全局样式 + Tailwind
public/                        # 静态资源（favicon、robots.txt、图片等）
```

## 如何新增一个项目

1. 在 `src/content/projects/` 下新建一个 `.mdx` 文件，例如 `my-project.mdx`。
2. 填写 frontmatter：

```yaml
---
title: '项目名称'
description: '一句话摘要'
tags: ['技术 A', '技术 B']
role: '你的角色'
period: '2024.01 – 2024.06'
link: 'https://example.com'   # 可选，外链
cover: '/images/my-project.png' # 可选，封面图，留空则显示占位
featured: true                  # 是否在首页精选展示
order: 1                        # 排序（越大越靠前）
---
```

3. 正文按「背景 → 挑战 → 方案 → 成果」的结构撰写，提交部署即可，无需改动页面结构。

## 上线前待办（TODO）

- [ ] 在 `src/data/site.ts` 中替换为真实的姓名、角色、邮箱与社交链接。
- [ ] 在 `astro.config.mjs` 与 `public/robots.txt` 中把 `https://example.com` 替换为真实域名。
- [ ] 将简历 PDF 放到 `public/resume.pdf`（或修改 `site.ts` 中的 `resume` 路径）。
- [ ] 为项目补充封面图（放到 `public/images/`，并在 frontmatter 中引用）。
