import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import postcssPxtoRem from 'postcss-pxtorem'
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
    }),
    Components({
      resolvers: [VantResolver()]
    })
  ],

  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    postcss: {
      plugins: [
        postcssPxtoRem({
          rootValue: 75,
          selectorBlackList: ['.van'], // 忽略转换正则匹配项
          propList: ['*'],
          exclude: '/node_modules' // 忽略包文件转换rem
        })
        // 行内样式或者js赋值的px这个插件不会转rem，这个时候需要在赋值的时候(/设计图宽度/10)+'rem'
        //<div :style="{width: 1000 / 192 + 'rem', height: 500 / 192 + 'rem'}"></div>
      ]
    },
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
