import { defineConfig } from 'vitepress'
import viteConfig from './vite.config'
import blogConfig from '../blog.config'
import { expandMarkdownIt } from './plugins/expand-markdown-it'

export default defineConfig({
  srcDir: './site',
  vite: viteConfig as any,
  markdown: {
    config: (md) => expandMarkdownIt(md)
  },
  themeConfig: {
    outline: [1, 5],
    socialLinks: [{ icon: 'github', link: 'https://github.com/mr7ish' }],
    nav: [
      { text: '首页', link: '/' },
      { text: '标签', link: '/tags' },
      { text: '归档', link: '/archives' },
      ...(blogConfig.nav || [])
    ]
  },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'
      }
    ]
  ],
  ...blogConfig
})
