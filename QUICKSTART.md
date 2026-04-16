# 快速启动指南

## 🎉 项目已创建完成！

你的个人网站已经搭建好了，下面是接下来的步骤：

---

## 第一步：在 GitHub 创建仓库

1. 访问 https://github.com/new
2. 仓库名称：**lilili087.github.io**（必须用这个名称）
3. 选择 **Public**（公开）
4. **不要**勾选 "Add a README file"
5. 点击 "Create repository"

---

## 第二步：推送代码到 GitHub

在终端执行以下命令：

```bash
cd /Users/lily.lxx/Documents/JDAI/portfolio

# 配置 Git 用户信息（如果还没配置过）
git config --global user.name "Xinxin Li"
git config --global user.email "xinxiinli@bupt.edu.cn"

# 添加远程仓库
git remote add origin https://github.com/lilili087/lilili087.github.io.git

# 提交并推送
git add .
git commit -m "Initial commit: personal portfolio"
git branch -M main
git push -u origin main
```

---

## 第三步：设置自动部署

1. 在 GitHub 仓库页面，点击 **"Actions"** 标签
2. 点击 **"set up a workflow yourself"**
3. 粘贴以下内容：

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
          cache: 'npm'
      
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

4. 点击 **"Commit changes"** 保存
5. 等待约 2-3 分钟，Actions 会自动运行
6. 完成后访问 **https://lilili087.github.io** 查看网站

---

## 第四步：本地预览（可选）

在推送之前，可以先在本地预览：

```bash
cd /Users/lily.lxx/Documents/JDAI/portfolio
npm run dev
```

然后访问 http://localhost:4321

---

## 第五步：编辑内容

### 方式一：可视化后台（推荐）

网站部署后，访问 `https://lilili087.github.io/admin/`

- 使用 GitHub 账号登录
- 可以编辑：个人信息、工作经历、项目展示、技能清单、关于我
- 编辑后点击 "Save"，自动提交到 GitHub
- 约 1-2 分钟后网站自动更新

### 方式二：直接编辑文件

编辑 `src/content/` 目录下的文件，然后推送：

```bash
git add .
git commit -m "Update content"
git push
```

---

## 第六步：添加个人照片

1. 准备一张头像照片（建议 400x400 像素，正方形）
2. 重命名为 `avatar.jpg`
3. 放到 `/Users/lily.lxx/Documents/JDAI/portfolio/src/images/` 目录
4. 推送：

```bash
git add .
git commit -m "Add avatar photo"
git push
```

---

## 网站模块

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | / | 个人简介 + 精选项目 |
| 关于我 | /about | 性格特点 + 兴趣爱好 + 日常生活 |
| 工作经历 | /experience | 时间线展示 |
| 项目展示 | /projects | 作品集 |
| 技能清单 | /skills | 技能图谱 |
| 联系方式 | /contact | 邮箱 + GitHub |
| 管理后台 | /admin | 可视化编辑 |

---

## 常用命令

```bash
# 本地开发
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

---

## 需要帮助？

- 查看完整部署指南：`DEPLOY.md`
- 查看项目说明：`README.md`
- 有问题随时问我！
