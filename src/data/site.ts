export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  resume: string;
  socials: SocialLink[];
}

// ⚠️ 部署前替换为你的真实信息
export const site: SiteConfig = {
  name: '你的名字',
  role: '全栈开发者',
  headline: '用代码构建清晰、好用的产品。',
  tagline:
    '一名专注 TypeScript 生态的全栈开发者，擅长把复杂问题拆解为清晰、可维护的解决方案，并通过案例研究分享思考过程。',
  location: '中国 · 远程',
  email: 'hello@example.com',
  resume: '/resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/yourname' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yourname' },
    { label: '掘金', href: 'https://juejin.cn/user/yourname' },
  ],
};
