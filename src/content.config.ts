import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 项目 / 案例研究内容集合
// 新增项目：在 src/content/projects/ 下新建一个 .mdx 文件即可，无需改动页面结构。
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    role: z.string().optional(),
    period: z.string().optional(),
    link: z.url().optional(),
    // 封面图路径（建议放 public/images/ 下，如 /images/project-1.png），留空则显示占位
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
