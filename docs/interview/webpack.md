### webpack

#### 常用loader

1. babel-loader：将es6转译为es5
2. css-loader：加载CSS代码 支持模块化、压缩、文件导入等功能特性
3. file-loader：可以指定要复制和放置资源文件的位置，以及如何使用版本哈希命名以获得更好的缓存，并在代码中通过URL去引用输出的文件
4. url-loader：和file-loader功能相似，但是可以通过指定阈值来根据文件大小使用不同的处理方式（小于阈值则返回base64格式编码并将文件的 data-url内联到bundle中
5. raw-loader：加载文件原始内容

> webpack5自身内置了file-loader/ url-loader/ raw-loader等loader，所以我们不需要再显示引入loader 只需要指定对应的type即可实现相同的功能 如file-loader等价于 type= "asset/resource"'

6. image-webpack-loader: 加载并压缩图片资源
7. awesome-typescirpt-loader: 将typescript转换为javaScript 并且性能由于ts-loader
8. sass-loader: 将SCSS/SASS代码转换为CSS
9. style-loader: 把CSS代码注入到js中，通过DOM 操作去加载CSS代码
10. source-map-loader: 加载额外的Source Map文件
11. eslint-loader: 通过ESlint 检查js代码
12. cache-loader: 可以在一些开销较大的Loader之前添加可以将结果缓存到磁盘中，提高构建的效率
13. thread-loader: 多线程打包，加快打包速度


#### 常用plugin
1. define-plugin: 定义环境变量（webpack4之后可以通过指定mode：production/development实现同样效果）
2. web-webpack-plugin：为单页面应用输出HTML 性能优于html-webpack-plugin
3. clean-webpack-plugin: 每次打包时删除上次打包的产物, 保证打包目录下的文件都是最新的
4. webpack-merge： 用来合并公共配置文件,常用（例如分别配置webpack.common.config.js/ webpack.dev.config.js/webpack.production.config.js并将其合并）
5. ignore-plugin: 忽略指定的文件，可以加快构建速度
6. terser-webpack-plugin：压缩ES6的代码（tree-shaking）
6. uglifyjs-webpack-plugin: 压缩js代码
7. mini-css-extract-plugin: 将CSS提取为独立文件，支持按需加载
8. css-minimize-webpack-plugin：压缩CSS代码
> css文件的压缩需要mini-css-extract-plugin和css-minimize-webpack-plugin 的配合使用 即先使用mini-css-extract-plugin将css代码抽离成单独文件，之后使用 css-minimize-webpack-plugin对css代码进行压缩
9. serviceworker-webpack-plugin: 为离线应用增加离线缓存功能
10. ModuleconcatenationPlugin: 开启Scope Hositing 用于合并提升作用域， 减小代码体积
11. copy-webpack-plugin： 在构建的时候，复制静态资源到打包目录。
12. compression-webpack-plugin: 生产环境采用gzip压缩JS和CSS
13. ParalleUglifyPlugin： 多进程并行压缩js
14. webpack-bundle-analyzer: 可视化webpack输出文件大小的根据
15. speed-measure-webpack-plugin: 用于分析各个loader和plugin的耗时，可用于性能分析
16. webpack-dashboard: 可以更友好地展示打包相关信息

#### 好用的plugin和工具
1. splitChunkPlugin：用于代码分割
2. webpack-merge: 提取公共配置，用于分别编写不同环境的配置文件（ `` ）
3. HotModuleReplacementPlugin:支持模块热替换
4. ignore-plugin: 忽略指定文件，可以加快构建速度
5. clean-webpack-plugin: 每次打包时删除上次打包的产物， 保证打包目录下的文件都是最新的
6. speed-measure-webpack-plugin: 分析出Webpack打包过程中的Loader和Plugin的耗时，用于性能分析
7. mini-css-extract-plugin: 将CSS代码抽离为独立文件，支持按需加载， 配合 css-minimize-webpack-plugin使用
8. terser-webpack-plugin: 实现更精细的代码压缩功能
9. SourceMapDevtoolPlugin:精细度配置SourceMap， 不能和devtool选项同时使用
10. UnusedWebpackPlugin: 反向查找项目中没被用到的文件，日常工作经常用到，可在重构或者性能分析时使用
11. webpack-dashboard: webpack-dashboard 是一个命令行可视化工具，能够在编译过程中实时展示编译进度、模块分布、产物信息等相关信息，性能分析时很有用。
12.  Webpack Analysis：Webpack Analysis 是 webpack 官方提供的可视化分析工具。
13. BundleAnalyzerPlugin：性能分析插件，可以在运行后查看是否包含重复模块/不必要模块等

