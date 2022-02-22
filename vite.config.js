import { resolve } from 'path' 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 设置@指向/src目录
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    // 样式配置
    modules: {
      // * css模块化 文件以.module.[css|less|scss]结尾
      generateScopedName: '[name]_[local]_[hash:base64:5]',
      hashPrefix: 'prefix',
    },
    preprocessorOptions: {
      // * 预编译支持css/less/scss
      css: {
        javascriptEnabled: true, // css 支持内联 JavaScript
      },
      scss: {
        javascriptEnabled: true, // scss 支持内联 JavaScript
      },
    },
  },
  plugins: [vue()]
})
