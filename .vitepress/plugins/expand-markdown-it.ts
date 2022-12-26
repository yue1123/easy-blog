import markdownItFootnote from 'markdown-it-footnote'
import markdownItSub from 'markdown-it-sub'
import markdownItSup from 'markdown-it-sup'
import markdownItTaskLists from 'markdown-it-task-lists'
import markdownItKatex from 'markdown-it-katex'
import MarkdownItImageLazyLoading from 'markdown-it-image-lazy-loading'
import uml from 'markdown-it-textual-uml'

export const expandMarkdownIt = (md) => {
  md.use(uml)
  md.use(markdownItFootnote)
  md.use(markdownItSub)
  md.use(markdownItSup)
  md.use(markdownItTaskLists)
  md.use(markdownItKatex)
  md.use(MarkdownItImageLazyLoading)
}
