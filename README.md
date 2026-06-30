# Quality Engineer Learning Site

面向制造业质量工程师的一站式静态学习平台，覆盖质量工具、质量体系、可靠性、统计分析、供应商质量、客户质量及职业发展。

## 技术栈

| 技术 | 用途 |
|------|------|
| [Astro](https://astro.build/) v4.0+ | 静态站点框架 |
| [Tailwind CSS](https://tailwindcss.com/) | 样式框架 |
| [Pagefind](https://pagefind.app/) | 静态搜索 |
| [GitHub Pages](https://pages.github.com/) | 部署托管 |

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:4321）
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
/
├── public/
│   ├── images/               # 图片资源
│   └── downloads/            # 可下载模板/工具
├── src/
│   ├── components/           # Astro 组件
│   ├── layouts/              # 页面布局
│   ├── pages/                # 路由页面
│   ├── content/              # Markdown 文章
│   ├── styles/               # 全局样式
│   └── utils/                # 辅助函数
├── .github/workflows/        # CI/CD 配置
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 内容编辑

所有文章以 Markdown 格式存储在 `src/content/` 目录下，按分类组织。

### 文章 Frontmatter 格式

```yaml
---
title: "文章标题"
date: 2026-01-15
author: "作者名"
category: "quality-basics"    # 与文件夹名一致
tags: ["标签1", "标签2"]
description: "文章摘要"
---
```

添加新文章：
1. 在对应分类文件夹下创建 `.md` 文件
2. 填写完整的 frontmatter
3. 编写 Markdown 正文

添加新分类：
1. 在 `src/content/` 下创建新文件夹
2. 在 `src/content/config.ts` 中注册新集合
3. 在 `categoryMeta` 中添加分类信息

## 部署

### GitHub Pages 自动部署

1. 将仓库推送到 GitHub
2. 在仓库 Settings → Pages 中，选择 **GitHub Actions** 作为 Source
3. 推送到 `main` 分支时自动触发部署

### 手动部署

```bash
npm run build
# dist/ 目录下的内容可直接部署到任何静态托管服务
```

## 导航结构

| 导航 | 路由 |
|------|------|
| 首页 | `/` |
| 学习路线 | `/learning-path` |
| 质量基础 | `/quality-basics/` |
| 质量工具 | `/quality-tools/` |
| 统计分析 | `/statistics/` |
| 质量体系 | `/quality-systems/` |
| 制造过程 | `/manufacturing-process/` |
| 供应商质量 | `/supplier-quality/` |
| 客户质量 | `/customer-quality/` |
| 可靠性 | `/reliability/` |
| 实验室 | `/lab/` |
| AI+质量 | `/ai-quality` |
| 案例分析 | `/case-studies/` |
| 资源中心 | `/resources` |
| 职业发展 | `/career` |

## 配色方案

- 主色：深蓝 `#1a3a5c`
- 强调色：橙色 `#e67e22`
- 背景色：浅灰 `#f4f6f9`
- 字体：Inter / 系统无衬线字体

## License

MIT
