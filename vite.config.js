import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({ // 当我们想要使用命令的方式创建element组件时，样式会无法自动引入,这个插件会把需要的组件的css/sass/less文件自动引入进来
      importStyle: 'less',
      useSource: true
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
      ],
      imports: ['vue', 'vue-router'],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
  },
})
