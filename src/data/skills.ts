export interface SkillGroup {
  category: string;
  level: '熟练' | '熟悉' | '了解';
  items: string[];
}

// 技能按分组展示，使用「熟练 / 熟悉 / 了解」文字描述，避免依赖进度条
export const skillGroups: SkillGroup[] = [
  {
    category: '前端',
    level: '熟练',
    items: ['TypeScript', 'React', 'Vue 3', 'Astro', 'Tailwind CSS'],
  },
  {
    category: '后端',
    level: '熟悉',
    items: ['Node.js', 'NestJS', 'PostgreSQL', 'Redis'],
  },
  {
    category: '工程化',
    level: '熟悉',
    items: ['Git', 'Docker', 'CI/CD', 'Vite', 'Monorepo'],
  },
  {
    category: '设计',
    level: '了解',
    items: ['Figma', '响应式设计', '无障碍（WCAG）'],
  },
];
