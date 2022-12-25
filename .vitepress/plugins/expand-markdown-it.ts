import markdownItFootnote from 'markdown-it-footnote'
import markdownItSub from 'markdown-it-sub'
import markdownItSup from 'markdown-it-sup'
import markdownItTaskLists from 'markdown-it-task-lists'
import markdownItKatex from 'markdown-it-katex'
import MarkdownItImageLazyLoading from 'markdown-it-image-lazy-loading'

export const expandMarkdownIt = (md) => {
  md.use(markdownItFootnote)
  md.use(markdownItSub)
  md.use(markdownItSup)
  md.use(markdownItTaskLists)
  md.use(markdownItKatex)
  md.use(MarkdownItImageLazyLoading)
}
