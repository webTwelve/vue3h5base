import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      eslintrc: {
        enabled: true // <-- this
      },
      dts: 'src/auto-imports.d.ts',
      imports: ['vue', 'vue-router']
    })
  ],

  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve(
            __dirname,
            'src/assets/style/common.less'
          )}";`
        },
        javascriptEnabled: true
      }
    }
  }
})
