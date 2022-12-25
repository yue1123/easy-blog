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

## 置顶文章

```markdown
---
top: true
---
```

## 添加文章封面图
```markdown
---
coverImg: xxxx
---
```

## 主题

- default

目前只开发了一个默认的主题，欢迎小伙伴们贡献自己的主题

## 安装

```shell
# 克隆本仓库
git clone https://github.com/yue1123/easy-blog.git
# 安装依赖
pnpm install
# 本地运行
pnpm run blog:dev
# 打包
pnpm run blog:build
```
````
