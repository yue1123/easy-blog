import path from 'path'
import fs from 'fs'
import type { Plugin } from 'vite'
import blogConfig from '../../blog.config'

const dateCache = Object.create(null)
const snippetsReg = /[\w\u4e00-\u9fa5\,\.\!\，\。\！\"\"\'\'\‘\’\“\”\:\：]+/g
const frontmatterReg = /^---(\n.+)*\n*---/
const imgReg = /\!\[.+\]\(.+\)/g
const linkReg = /\[.+\]\(.+\)/g
const mdFrontmatter = /\{\{\s+\$frontmatter\s+\}\}/g
export function blogHelper(): Plugin {
  return {
    name: 'blog-helper',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md') || !/\/posts\//.test(id)) return
      let createTime: string | null = dateCache[id] || null
      let tags: string[] = []
      if (!dateCache[id]) {
        const stat = fs.statSync(id)
        if (!!stat) {
          createTime = dateCache[id] = stat.birthtime.getTime() + ''
        }
      }
      // get tags
      if (blogConfig.filePathToTags) {
        tags = blogConfig.filePathToTags.reduce<string[]>((tags, { test: reg, tag }) => {
          if (reg.test(id)) {
            typeof tag === 'string' ? tags.push(tag) : tags.push.apply(tags, tag)
          }
          return tags
        }, [])
      }
      // snippets
      const snippets = getSnippets(code, 50)

      const a = appendFrontmatter(code, {
        createTime,
        title: path.basename(id, '.md'),
        tags: tags,
        snippets,
        isPost: true
      })
      return a
    }
  }
}

function appendFrontmatter(code: string, data: Record<string, any>) {
  const res = code.match(frontmatterReg)
  const frontmatterStartIndex = 0
  let frontmatterEndIndex = 0
  let frontmatterOpenContent = ''
  if (res && res[0]) {
    frontmatterOpenContent = res[0].replace(/\n---[\s\n]*$/, '')
    frontmatterEndIndex = res[0].length
  }
  const dataEntry = Object.entries(data)
  const dataFrontmatter = dataEntry
    .reduce<string[]>((frontmatterArr, [key, value]) => {
      const hasSameKeyFrontMatter = frontmatterOpenContent.indexOf(key) !== -1
      const notEmptyArray = Array.isArray(value) && value.length
      if (!hasSameKeyFrontMatter) {
        typeof value !== 'object' && frontmatterArr.push([key, value].join(': '))
        if (notEmptyArray) {
          value.unshift('')
          const _value = value.join('\n  - ')
          frontmatterArr.push(`${key}: ${_value}`)
        }
      } else {
        if (notEmptyArray) {
          const reg = new RegExp(key + '\\s*:\\s*(\\n\\s\\s\\-\\s+(.+))+', 'g')
          value.unshift('')
          const _value = value.join('\n  - ')
          frontmatterOpenContent = frontmatterOpenContent.replace(reg, (str) => {
            return str + _value
          })
        }
      }
      return frontmatterArr
    }, [])
    .join('\n')
  if (frontmatterStartIndex === 0 && frontmatterEndIndex !== 0) {
    return [frontmatterOpenContent, dataFrontmatter, '---'].join('\n') + code.slice(frontmatterEndIndex)
  } else {
    return ['---', dataFrontmatter, '---', code.slice(frontmatterEndIndex), ''].join('\n')
  }
}

function getSnippets(code: string, length: number): string {
  return filterHTMLTag(filterMarkdown(code)).match(snippetsReg)?.join('').slice(0, length) + '...'
}

// 过滤markdown内容
function filterMarkdown(str: string) {
  return str.replace(frontmatterReg, '').replace(imgReg, '').replace(mdFrontmatter, '').replace(linkReg, '')
}
// 过滤html标签
function filterHTMLTag(str: string) {
  return str
    .replace(/<\/?[^>]*>/g, '')
    .replace(/[|]*\n/, '')
    .replace(/&npsp;/gi, '')
}
