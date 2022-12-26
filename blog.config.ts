import { type BlogConfig } from 'vitepress-blog'

// 配置部分
const config: BlogConfig = {
  title: 'vitepress blog',
  base: '/easy-blog/',
  description: 'Just playing around.',
  theme: 'default',
  filePathToTags: [
    {
      test: /notes/,
      tag: '随笔'
    },
    {
      test: /\/js\//,
      tag: 'JavaScript'
    },
    {
      test: /test/,
      tag: ['测试代码', 'snippets']
    }
  ],
  sortBy: 'CREATE_TIME'
}

export default config

//TODO: with base url 处理
