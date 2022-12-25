/// <reference types="vite/client" />
declare interface Window {
  [key: string]: any
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

type PathToTagItem = {
  test: RegExp
  tag: string | string[]
}
declare module '*' {
  import { DefaultTheme, UserConfig } from 'vitepress'
  interface BlogConfig extends UserConfig<DefaultTheme.Config> {
    /* 主题名字 */
    theme?: 'default'
    /* 文章根据文件路径添加标签 */
    filePathToTags: PathToTagItem[]
    /**
     * 首页文章排序方式
     * @enum[] CREATE_TIME 创建时间
     * @enum[] RANDOM 随机
     */
    sortBy?: 'CREATE_TIME' | 'RANDOM'
    /**
     * 文章标题名字
     * @enum[] fileNameFirst 文件名字优先
     * @enum[] contentTitleFirst 文章内容标题优先
     */
    titleString?: 'fileNameFirst' | 'contentTitleFirst'
    /* 导航栏, 同 vitepress nav 配置 */
    nav?: DefaultTheme.Config['nav']
  }
}
