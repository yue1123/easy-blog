import blogDefaultTheme from './default/index'
import blogConfig from '../../blog.config'

const theme = {
  default: blogDefaultTheme
}

export default theme[blogConfig.theme]
