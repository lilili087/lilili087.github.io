# Xinxin Li 个人网站

这是一个基于 Astro 构建的个人求职网站，支持可视化内容管理。

## 功能特点

- 🎨 浅色主题设计，简约优雅
- 📱 响应式布局，适配各种设备
- ✏️ 可视化后台编辑（Decap CMS）
- 🚀 快速加载，SEO 友好
- 🆓 免费托管（GitHub Pages）

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 本地开发

```bash
npm run dev
```

访问 http://localhost:4321 预览网站

### 3. 构建生产版本

```bash
npm run build
```

### 4. 部署到 GitHub Pages

```bash
# 构建
npm run build

# 推送 dist 目录到 GitHub
# 在 GitHub 仓库设置中启用 GitHub Pages，选择 dist 分支或 /docs 文件夹
```

## 内容管理

### 方式一：可视化后台（推荐）

1. 访问 `/admin` 页面
2. 使用 GitHub 账号登录
3. 编辑内容后点击保存
4. 自动提交到 GitHub，网站自动更新

### 方式二：直接编辑 Markdown 文件

内容文件位于 `src/content/` 目录下：
- `profile/` - 个人信息
- `experience/` - 工作经历
- `project/` - 项目展示
- `skill/` - 技能清单
- `about/` - 关于我

## 自定义配置

### 修改颜色主题

编辑 `src/layouts/BaseLayout.astro` 中的 CSS 变量：

```css
:root {
  --color-primary: #d4a5a5;      /* 主色调 */
  --color-primary-light: #e8c7c7; /* 浅色 */
  /* ... */
}
```

### 修改导航菜单

编辑 `src/layouts/BaseLayout.astro` 中的导航链接

## 技术栈

- [Astro](https://astro.build/) - 静态网站框架
- [Decap CMS](https://decapcms.org/) - 内容管理系统
- GitHub Pages - 免费托管

## 许可证

MIT
