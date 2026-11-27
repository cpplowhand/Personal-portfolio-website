# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

个人作品集网站，展示个人项目与技能，突出个人品牌。核心诉求（源自 `RESEARCH.md` / `PRD.md`）：

- 用「案例研究（Case Study）」代替截图堆砌，**重质不重量**
- **移动端优先**、响应式（360px 起无横向滚动，触控目标 ≥ 44px）
- 内容用 **Markdown/MDX + frontmatter** 维护，新增项目不改页面结构
- 静态部署、低维护、国内访问快

## 文档即事实来源

改动功能或设计前，先读对应文档：

- `PRD.md` — 需求：信息架构、功能清单（P0 MVP / P1 / P2）、验收标准、非功能需求、MVP 上线检查清单
- `RESEARCH.md` — 调研结论
- `TECH_DESIGN.md` — 技术选型、架构规划、部署方案

## 当前状态

⚠️ **代码尚未初始化**：目录内只有文档与 `skills-lock.json`，无 `package.json`，尚未 `git init`。下一步是脚手架与编码。

## 技术栈（已确定）

- **框架**：Astro + TypeScript（静态生成，对齐 `PRD.md` §5.1）
- **样式**：Tailwind CSS
- **内容**：Markdown/MDX + frontmatter（Astro Content Collections）
- **交互**：MVP 用 CSS + View Transitions；复杂交互（筛选等）留待 P1 用 Islands
- **图标**：Lucide；**图片**：astro:assets（sharp → WebP/AVIF）
- **部署**：腾讯云 EdgeOne Pages

## 架构规划（待脚手架落地）

按 `TECH_DESIGN.md` §4：

- 内容源 `src/content/projects/*.mdx`（frontmatter + 正文，即「案例研究」）
- 项目详情页按 slug 路由；首页单页分区：Hero → 关于 → 项目 → 技能 → 联系
- 移动端断点：<640 单列 / 640–1024 双列 / >1024 三列

## 常用命令

尚未生成 `package.json`，脚手架后预期命令（Astro）：

- `npm run dev` — 本地开发（默认 `localhost:4321`）
- `npm run build` — 生成静态站点到 `dist/`
- `npm run preview` — 本地预览构建产物
- `npm run astro check` — TypeScript 类型检查（可选，需 `@astrojs/check`）

脚手架落地后，用实际脚本替换本段。
