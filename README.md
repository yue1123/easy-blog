# easy-blog

基于 vitepress 的静态博客生成，五分钟搭建一个属于自己的博客

## 亮点

1. 良好的本地热更新体验
2. 简化配置，开箱即用
3. github action 自动部署 git-pages
4. 扩展 markdown 更多的语法支持
   1. 脚注
   2. 上标下标
   3. TodoList
   4. Katex 数学公式
   5. img 懒加载优化
5. 文章
   1. 置顶
   2. 可添加封面图
   3. 创建时间
   4. 摘要截取
   5. 文件夹映射标签
6. 文章标签分类
7. 文章时间轴归档
8. 暗色亮色主题
9. 移动端支持

### 置顶文章

```markdown
---
top: true
---
```

### 添加文章封面图

```markdown
---
coverImg: xxxx
---
```

### 添加 tag

```
---
tags:
  - 随笔
---
```

## 主题

- default [预览](https://yue1123.github.io/easy-blog/)

目前只开发了一个默认的主题，欢迎小伙伴们贡献自己的主题

## 1. 安装

```shell
# 克隆本仓库
git clone https://github.com/yue1123/easy-blog.git
# 安装依赖
pnpm install
# 本地运行
pnpm run blog:dev
```

## 2. 更改仓库地址

先新建一个自己 github 的仓库，设置名字为`用户名.github.io`（这样就可以获得一个域名指向当前仓库）

然后更改克隆的仓库地址为新建仓库地址:

```shell
git remote rm origin
git remote add origin [新建仓库地址]

```

## 3. 推送部署

写完文章后不需要本地打包, 推送到 github 会自动部署博客到分支 `gh-pages`

## 4. 配置 git pages

仓库 Settings > Pages > 选择 `gh-pages` 分支根目录 > 保存

恭喜你，拥有了自己的博客
