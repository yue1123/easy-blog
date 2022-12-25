import blogConfig from '../../blog.config'
export type SortType = 'CREATE_TIME'
const sortByHandleMap: Record<SortType & 'TOP', Function> = {
  CREATE_TIME: (post1: any, post2: any) => {
    return +!!post1.__pageData.frontmatter.top - +!!post2.__pageData.frontmatter.top
  },
  RANDOM: () => {
    return Math.random() - Math.random()
  },
  TOP: (post1: any, post2: any) => {
    return +!!post2.__pageData.frontmatter.top - +!!post1.__pageData.frontmatter.top
  }
}
export const postList = ((postsRecord) => {
  let postArr = Object.values(postsRecord)
  const sortBy = blogConfig.sortBy || 'CREATE_TIME'
  // sort by user config
  postArr.sort(sortByHandleMap[sortBy])
  // sort by top
  postArr = postArr.sort(sortByHandleMap['TOP'])
  return postArr.map((item: any) => {
    const { __pageData: pageData } = item
    return {
      url: '/' + pageData.relativePath.replace('.md', ''),
      ...pageData.frontmatter
    }
  })
})(import.meta.glob('../../site/posts/**/*.md', { eager: true }))
