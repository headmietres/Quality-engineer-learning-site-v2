# Quality Engineer Learning Site — 设计规格

## 1. 项目概述

面向制造业质量工程师的一站式静态学习平台，覆盖质量工具、质量体系、可靠性、统计分析、供应商质量、客户质量及职业发展。

**目标用户：** 应届毕业生、QE、SQE、CQE、DQE、PQE、NPI 质量工程师、质量主管/经理

## 2. 技术选型

| 技术 | 用途 | 说明 |
|------|------|------|
| Astro v4.0+ | 框架 | 纯静态输出 (`output: 'static'`) |
| Tailwind CSS | 样式 | 通过 `@astrojs/tailwind` 集成 |
| Pagefind | 搜索 | 构建后生成静态搜索索引 |
| GitHub Pages | 部署 | GitHub Actions 自动化部署 |

**去掉 CMS 后的简化说明：** 原计划使用 Decap CMS，经沟通后取消。所有内容通过 Markdown 文件 + Astro 内容集合管理，直接用 Git 版本控制。

## 3. 样式规范

| 规范项 | 值 |
|--------|-----|
| 主色 | 深蓝 `#1a3a5c` |
| 强调色 | 橙色 `#e67e22` |
| 背景色 | 浅灰 `#f4f6f9` |
| 字体 | 系统无衬线字体 (Inter / 系统默认) |
| 断点 | 768px (平板), 1024px (桌面) |
| 文章区域 | 最大宽度 800px, 行高 1.8, 字号 16px |
| 设计风格 | 简洁、专业、信息密度适中 |

## 4. 项目结构

```
/
├── public/
│   ├── images/               # 所有图片资源
│   └── downloads/            # 可下载文件（模板、检查清单等）
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Card.astro
│   │   ├── LearningPath.astro
│   │   ├── ArticleLayout.astro
│   │   ├── Sidebar.astro
│   │   └── Search.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── learning-path.astro
│   │   ├── resources.astro
│   │   ├── ai-quality.astro
│   │   ├── career.astro
│   │   ├── [category]/index.astro
│   │   └── [category]/[slug].astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── quality-basics/       # 3篇
│   │   ├── quality-tools/        # 6篇
│   │   ├── statistics/           # 3篇
│   │   ├── quality-systems/      # 3篇
│   │   ├── manufacturing-process/ # 3篇
│   │   ├── supplier-quality/     # 3篇
│   │   ├── customer-quality/     # 3篇
│   │   ├── reliability/          # 3篇
│   │   ├── lab/                  # 2篇
│   │   └── case-studies/         # 2篇
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   └── index.ts
│   └── env.d.ts
├── .github/workflows/
│   └── deploy.yml
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
└── README.md
```

## 5. 导航结构

15 个一级导航项：

| 导航名称 | 类型 | 路由 |
|----------|------|------|
| 首页 | 静态页面 | `/` |
| 学习路线 | 静态页面 | `/learning-path` |
| 质量基础 | 文章集合 | `/quality-basics/` |
| 质量工具 | 文章集合 | `/quality-tools/` |
| 统计分析 | 文章集合 | `/statistics/` |
| 质量体系 | 文章集合 | `/quality-systems/` |
| 制造过程 | 文章集合 | `/manufacturing-process/` |
| 供应商质量 | 文章集合 | `/supplier-quality/` |
| 客户质量 | 文章集合 | `/customer-quality/` |
| 可靠性 | 文章集合 | `/reliability/` |
| 实验室 | 文章集合 | `/lab/` |
| AI+质量 | 静态页面 | `/ai-quality` |
| 案例分析 | 文章集合 | `/case-studies/` |
| 资源中心 | 静态页面 | `/resources` |
| 职业发展 | 静态页面 | `/career` |

## 6. 内容模型

### Frontmatter Schema (Zod)

```ts
const articleSchema = z.object({
  title: z.string(),          // 文章标题
  date: z.date(),             // 发布日期
  author: z.string(),         // 作者
  category: z.string(),       // 分类（与文件夹名一致）
  tags: z.array(z.string()).optional(),  // 标签
  description: z.string(),    // 摘要
  image: z.string().optional(), // 封面图
});
```

### 文章内容模板

每篇文章应包含：
1. 什么是……（定义）
2. 为什么重要（价值）
3. 基本概念（核心知识点）
4. 实施流程（分步骤）
5. 制造业案例（真实场景）
6. 注意事项（常见误区）
7. 常见面试题（求职准备）
8. 推荐阅读（延伸学习）

## 7. 页面详细设计

### 7.1 首页 (`index.astro`)

| 模块 | 内容 |
|------|------|
| Hero | 主标题 + 副标题 + 2个CTA按钮（"开始学习"→`/learning-path`） |
| 今日推荐 | 4篇推荐文章（Card 组件） |
| 学习路线流程图 | 可视化路径：质量基础→QC工具→SPC/MSA→FMEA→APQP/PPAP→质量体系→SQE/CQE→质量经理 |
| 热门专题 | 5个标签：AI+质量、IATF16949、VDA6.3、六西格玛、可靠性 |
| 最新内容 | 最新6篇文章（标题+日期列表） |

### 7.2 学习路线 (`learning-path.astro`)

8个阶段，每个阶段包含：标题、学习目标、核心知识点、推荐时长、阶段结束能力

| 阶段 | 时长 |
|------|------|
| 质量基础 | 第1-2周 |
| QC七大手法 | 第3-4周 |
| SPC + MSA | 第5-7周 |
| FMEA | 第8-9周 |
| APQP + PPAP | 第10-12周 |
| 质量体系 | 第13-16周 |
| SQE/CQE专项 | 第17周+ |
| 质量经理方向 | 进阶 |

### 7.3 分类列表页 (`[category]/index.astro`)

- 显示分类下所有文章，按日期降序
- 每页6篇，分页功能
- 显示分类名称和描述

### 7.4 文章详情页 (`[category]/[slug].astro`)

- 完整 Frontmatter 展示
- Markdown 正文渲染
- 上一篇/下一篇导航 + 返回列表
- 侧边栏：同分类其他文章（5篇）

### 7.5 资源中心 (`resources.astro`)

9个预设可下载资源：8D模板、FMEA模板、APQP模板、PPAP清单、SPC Excel模板、MSA Excel模板、Control Plan模板、检验记录表、Audit Checklist

### 7.6 AI+质量 (`ai-quality.astro`)

9个AI应用场景：AI生成Control Plan、AI编写8D报告、AI分析SPC趋势、AI辅助FMEA、AI审核文件、AI编写SOP、AI生成检验标准、AI分析客户投诉（各带占位截图）

### 7.7 职业发展 (`career.astro`)

岗位成长路线：QC → QE → PQE → SQE/CQE → 高级QE → 质量主管 → 质量经理 → 质量总监（可点击展开职责、技能、工具、薪资）

## 8. 组件设计

### 8.1 Header.astro
- Logo + 15个一级导航
- 响应式：桌面水平展开，移动端汉堡折叠
- Pagefind 搜索框
- 当前页高亮

### 8.2 Footer.astro
- 版权：© 2026 Quality Engineer Learning Site
- 友情链接区（占位）

### 8.3 Hero.astro
- Props: `title, subtitle, primaryBtnText, primaryBtnLink, secondaryBtnText, secondaryBtnLink`
- 柔和渐变背景

### 8.4 Card.astro
- Props: `title, description, link, image?, date?, tags?`
- 用于文章列表、推荐等场景

### 8.5 LearningPath.astro
- Props: `stages`（数组，含 title, description, duration, topics）
- CSS 垂直时间线

### 8.6 ArticleLayout.astro
- 包裹文章详情页
- 含 Sidebar 组件

### 8.7 Sidebar.astro
- 同分类文章列表（5篇）

### 8.8 Search.astro
- Pagefind 搜索输入框 + 结果下拉面板

## 9. 部署

### GitHub Actions Workflow
- 触发：push 到 main 分支
- 步骤：checkout → setup Node → npm ci → npm run build → npx pagefind --site dist → upload pages artifact → deploy
- 无需环境变量

### 本地运行
```bash
npm install
npm run dev     # 开发服务器
npm run build   # 生产构建 + Pagefind 索引
```

## 10. 依赖清单

```json
{
  "dependencies": {
    "astro": "^4.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "tailwindcss": "^3.0.0"
  },
  "devDependencies": {
    "pagefind": "^1.0.0"
  }
}
```
