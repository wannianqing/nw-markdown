import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  devtools: { enabled: false },
  postcss:{   // 再构建过程中转换CSS代码
    plugins: {
      tailwindcss: {},  // 使用TailwindCSS插件
      autoprefixer: {}, // 使用autoprefixer插件
    },
  },
  app:{
    head:{
      title:'Markdown-Editor'
    }
  },
  css:['~/assets/css/globals.css', 'highlight.js/styles/atom-one-dark.css'],
  plugins: [  // 配置插件
    '~/plugins/global-components.ts',
    '~/plugins/vuex.ts',
    { src:'~/plugins/codemirror.ts', mode:'client' }
  ],
})
