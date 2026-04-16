# 部署指南

## 第一步：创建 GitHub 仓库

1. 登录 GitHub (https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名称：`lilili087.github.io`（**重要：必须用这个名称才能用 GitHub Pages**）
4. 选择 "Public"
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

## 第二步：推送代码到 GitHub

在终端执行以下命令：

```bash
cd /Users/lily.lxx/Documents/JDAI/portfolio

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/lilili087/lilili087.github.io.git

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: personal portfolio website"

# 推送到 GitHub
git branch -M main
git push -u origin main
```

## 第三步：安装依赖并构建

```bash
# 安装依赖
npm install

# 构建生产版本
npm run build
```

## 第四步：部署到 GitHub Pages

### 方案 A：使用 GitHub Actions（推荐，自动部署）

1. 在 GitHub 仓库页面，点击 "Settings" → "Pages"
2. Source 选择 "GitHub Actions"
3. 回到仓库，点击 "Actions" → "set up a workflow yourself"
4. 粘贴以下内容：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. 点击 "Commit changes"
6. 等待 Actions 运行完成（约 2-3 分钟）
7. 访问 https://lilili087.github.io 查看网站

### 方案 B：手动部署

```bash
# 构建后，将 dist 目录推送到 gh-pages 分支
npm run build

# 使用 gh-pages 包（需要先安装）
npm install -D gh-pages
npx gh-pages -d dist
```

然后在 GitHub Pages 设置中选择 gh-pages 分支。

## 第五步：配置可视化后台

1. 访问 `https://lilili087.github.io/admin/`
2. 首次访问会提示授权 GitHub
3. 授权后即可开始编辑内容

## 第六步：添加个人照片

1. 准备一张头像照片（建议 400x400 像素）
2. 将照片命名为 `avatar.jpg`
3. 放到 `src/images/` 目录
4. 提交并推送：

```bash
git add src/images/avatar.jpg
git commit -m "Add avatar photo"
git push
```

## 后续更新内容

### 方式一：通过可视化后台（推荐）

直接访问 `/admin` 编辑即可，改动会自动提交到 GitHub。

### 方式二：本地编辑后推送

```bash
# 编辑文件后
git add .
git commit -m "Update content"
git push
```

GitHub Actions 会自动重新构建并部署。

## 自定义域名（可选）

1. 购买域名（如 xinxinli.com）
2. 在域名 DNS 设置中添加 CNAME 记录指向 `lilili087.github.io`
3. 在仓库根目录创建 `public/CNAME` 文件，内容为你的域名
4. 在 GitHub Pages 设置中配置自定义域名

---

## 遇到问题？

- 网站访问 404：等待几分钟，GitHub Pages 需要时间部署
- 样式不正常：检查是否成功运行 `npm run build`
- 后台无法登录：确认 GitHub 仓库是 Public 状态
