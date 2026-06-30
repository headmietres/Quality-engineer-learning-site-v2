// src/utils/index.ts — 辅助函数
// 用途：提供 URL 拼接、分类排序等通用工具函数

/**
 * 生成正确的 base-relative URL
 * 当站点部署在子路径下（如 GitHub Pages）时自动添加 base 前缀
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (base === '/' || !base) return path;
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
