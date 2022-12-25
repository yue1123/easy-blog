import { defineConfig } from 'vite'
import { blogHelper } from './plugins/blog-helper'

export default defineConfig({
  plugins: [blogHelper()]
})
