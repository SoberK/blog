### plugin使用

+ 按需引入

  + 如果是分环境使用插件可以使用apply

    ```js
      plugins: [
        {
          ...typescript2(),
          apply: 'build',
        },
      ],
    ```

    

+ 强制排序

  + 部分插件有先后顺序

    ```js
     plugins: [
        {
          ...image(),
          enforce: 'pre', //在之前引用   ‘post ’在之后引用
        },
      ],
    ```

    





- Vue Router

  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - 以文件系统为基础的路由
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - 页面布局系统

- [Pinia](https://pinia.vuejs.org/) - 直接的, 类型安全的, 使用 Composition API 的轻便灵活的 Vue 状态管理

- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件

- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入

- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA

- `vite-plugin-vue-markdown`

  \- Markdown 作为组件，也可以让组件在 Markdown 中使用

  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) 的语法高亮
  - [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) - 利用 CSS 变量自定义 Prism.js 的主题

- Vue I18n

  \- 国际化

  - [`unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - Vue I18n 的 Vite 插件

- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集

- [`vite-ssg-sitemap`](https://github.com/jbaubree/vite-ssg-sitemap) - 站点地图生成器

- [`@vueuse/head`](https://github.com/vueuse/head) - 响应式地操作文档头信息

- [`vite-plugin-vue-devtools`](https://github.com/webfansplz/vite-plugin-vue-devtools) - 旨在增强Vue开发者体验的Vite插件



