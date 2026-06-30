// src/content/config.ts — Astro 内容集合配置
// 用途：定义所有文章分类的 schema，统一验证 frontmatter 格式

import { defineCollection, z } from 'astro:content';

// 文章通用 schema — 所有分类共用
const articleSchema = z.object({
  title: z.string(),
  date: z.date(),
  author: z.string(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  description: z.string(),
  image: z.string().optional(),
});

// 配置每个分类的集合
export const collections = {
  'quality-basics': defineCollection({ schema: articleSchema }),
  'quality-tools': defineCollection({ schema: articleSchema }),
  'statistics': defineCollection({ schema: articleSchema }),
  'quality-systems': defineCollection({ schema: articleSchema }),
  'manufacturing-process': defineCollection({ schema: articleSchema }),
  'supplier-quality': defineCollection({ schema: articleSchema }),
  'customer-quality': defineCollection({ schema: articleSchema }),
  'reliability': defineCollection({ schema: articleSchema }),
  'lab': defineCollection({ schema: articleSchema }),
  'case-studies': defineCollection({ schema: articleSchema }),
};

// 分类元数据 — 用于页面显示
export const categoryMeta: Record<string, { name: string; description: string }> = {
  'quality-basics': { name: '质量基础', description: '质量管理的基础概念与核心术语，帮助新人快速建立质量思维框架。' },
  'quality-tools': { name: '质量工具', description: '常用 QC 七大手法与质量工具详解，含 5Why、鱼骨图、8D、FMEA、SPC、MSA 等。' },
  'statistics': { name: '统计分析', description: '质量工程中必备的统计方法，包括正态分布、Cp/Cpk、实验设计(DOE)等。' },
  'quality-systems': { name: '质量体系', description: 'ISO 9001、IATF 16949、VDA 6.3 等质量管理体系标准解读。' },
  'manufacturing-process': { name: '制造过程', description: 'IQC、IPQC、FQC、OQC 等制造业各环节质量控制方法。' },
  'supplier-quality': { name: '供应商质量', description: '供应商审核、PPAP 批准、SCAR 等供应商质量管理实践。' },
  'customer-quality': { name: '客户质量', description: '客户投诉处理、8D 客户回复、CAPA 等客诉质量工具。' },
  'reliability': { name: '可靠性', description: 'MTBF、HALT/HASS、环境测试等产品可靠性工程方法。' },
  'lab': { name: '实验室', description: '计量校准、测量不确定度等实验室质量管理内容。' },
  'case-studies': { name: '案例分析', description: '制造业质量问题真实案例分析，从实践中学习。' },
};
