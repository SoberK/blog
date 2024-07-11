### webpack

#### 常用 loader

1. babel-loader：将 es6 转译为 es5
2. css-loader：加载 CSS 代码 支持模块化、压缩、文件导入等功能特性
3. file-loader：可以指定要复制和放置资源文件的位置，以及如何使用版本哈希命名以获得更好的缓存，并在代码中通过 URL 去引用输出的文件
4. url-loader：和 file-loader 功能相似，但是可以通过指定阈值来根据文件大小使用不同的处理方式（小于阈值则返回 base64 格式编码并将文件的 data-url 内联到 bundle 中
5. raw-loader：加载文件原始内容

> webpack5 自身内置了 file-loader/ url-loader/ raw-loader 等 loader，所以我们不需要再显示引入 loader 只需要指定对应的 type 即可实现相同的功能 如 file-loader 等价于 type= "asset/resource"'

6. image-webpack-loader: 加载并压缩图片资源
7. awesome-typescirpt-loader: 将 typescript 转换为 javaScript 并且性能由于 ts-loader
8. sass-loader: 将 SCSS/SASS 代码转换为 CSS
9. style-loader: 把 CSS 代码注入到 js 中，通过 DOM 操作去加载 CSS 代码
10. source-map-loader: 加载额外的 Source Map 文件
11. eslint-loader: 通过 ESlint 检查 js 代码
12. cache-loader: 可以在一些开销较大的 Loader 之前添加可以将结果缓存到磁盘中，提高构建的效率
13. thread-loader: 多线程打包，加快打包速度

不管什么loader，只要记住webpack的原理是通过loader将不一样的文件格式转换成js，‘

要有需要注意的：loader 的执行顺序要注意！css 相关的loader 要按照下图来写。因为 loader 的执行顺序是从后往前、从下往上。 所以我们要用 saas-loader 来处理 sass 文件, 再把它交给 postcss-loader 加上浏览器厂商前缀。然后通过 css-loader 处理样式之间的引用逻辑。最后通过 style-loader 将它挂在到 html上

#### 常用 plugin

1. define-plugin: 定义环境变量（webpack4 之后可以通过指定 mode：production/development 实现同样效果）
2. web-webpack-plugin：为单页面应用输出 HTML 性能优于 html-webpack-plugin
3. clean-webpack-plugin: 每次打包时删除上次打包的产物, 保证打包目录下的文件都是最新的
4. webpack-merge： 用来合并公共配置文件,常用（例如分别配置 webpack.common.config.js/ webpack.dev.config.js/webpack.production.config.js 并将其合并）
5. ignore-plugin: 忽略指定的文件，可以加快构建速度
6. terser-webpack-plugin：压缩 ES6 的代码（tree-shaking）
7. uglifyjs-webpack-plugin: 压缩 js 代码
8. mini-css-extract-plugin: 将 CSS 提取为独立文件，支持按需加载
9. css-minimize-webpack-plugin：压缩 CSS 代码
   > css 文件的压缩需要 mini-css-extract-plugin 和 css-minimize-webpack-plugin 的配合使用 即先使用 mini-css-extract-plugin 将 css 代码抽离成单独文件，之后使用 css-minimize-webpack-plugin 对 css 代码进行压缩
10. serviceworker-webpack-plugin: 为离线应用增加离线缓存功能
11. ModuleconcatenationPlugin: 开启 Scope Hositing 用于合并提升作用域， 减小代码体积
12. copy-webpack-plugin： 在构建的时候，复制静态资源到打包目录。
13. compression-webpack-plugin: 生产环境采用 gzip 压缩 JS 和 CSS
14. ParalleUglifyPlugin： 多进程并行压缩 js
15. webpack-bundle-analyzer: 可视化 webpack 输出文件大小的根据
16. speed-measure-webpack-plugin: 用于分析各个 loader 和 plugin 的耗时，可用于性能分析
17. webpack-dashboard: 可以更友好地展示打包相关信息

#### 好用的 plugin 和工具

1. splitChunkPlugin：用于代码分割
2. webpack-merge: 提取公共配置，用于分别编写不同环境的配置文件（ `` ）
3. HotModuleReplacementPlugin:支持模块热替换
4. ignore-plugin: 忽略指定文件，可以加快构建速度
5. clean-webpack-plugin: 每次打包时删除上次打包的产物， 保证打包目录下的文件都是最新的
6. speed-measure-webpack-plugin: 分析出 Webpack 打包过程中的 Loader 和 Plugin 的耗时，用于性能分析
7. mini-css-extract-plugin: 将 CSS 代码抽离为独立文件，支持按需加载， 配合 css-minimize-webpack-plugin 使用
8. terser-webpack-plugin: 实现更精细的代码压缩功能
9. SourceMapDevtoolPlugin:精细度配置 SourceMap， 不能和 devtool 选项同时使用
10. UnusedWebpackPlugin: 反向查找项目中没被用到的文件，日常工作经常用到，可在重构或者性能分析时使用
11. webpack-dashboard: webpack-dashboard  是一个命令行可视化工具，能够在编译过程中实时展示编译进度、模块分布、产物信息等相关信息，性能分析时很有用。
12. Webpack Analysis：Webpack Analysis  是 webpack 官方提供的可视化分析工具。
13. BundleAnalyzerPlugin：性能分析插件，可以在运行后查看是否包含重复模块/不必要模块等

## 那你再说一说 Loader 和 Plugin 的区别？

Loader 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。
因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。
Plugin 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
Loader 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。
Plugin 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。

## Webpack 构建流程简单说一下

- 初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler
- 编译：从 Entry 出发，针对每个 Module 串行调用对应的 Loader 去翻译文件的内容，再找到该 Module 依赖的 Module，递归地进行编译处理
- 输出：将编译后的 Module 组合成 Chunk，将 Chunk 转换成文件，输出到文件系统中

## 使用 webpack 开发时，你用过哪些可以提高效率的插件？

- webpack-merge：提取公共配置，减少重复配置代码
- webpack-dashboard：可以更友好的展示相关打包信息。
- size-plugin：监控资源体积变化，尽早发现问题
- HotModuleReplacementPlugin：模块热替换

## source map 是什么？生产环境怎么用？

source map 是将编译、打包、压缩后的代码映射回源代码的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 soucre map。

线上环境
sourcemap：通过 nginx 设置将 .map 文件只对白名单开放(公司内网)
