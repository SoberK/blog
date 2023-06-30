# web简单使用

## 简单的实现

```
webpack-study

├─ 1.md

├─ dist

│  └─ main.js

├─ package-lock.json

├─ package.json

└─ src

   ├─ count.js

   ├─ index.html

   ├─ main.js

   └─ sum.js
```

创建如上结构的文件，用于简单展示打包的过程

```
npm init -y //快速创建pack.json文件
npm i webpack webpack-cli -D //安装依赖
webpack ./src/main.js --mode production //打包
```

```main.js```

<img src="./static/1.png" alt="1" style="zoom:50%;" />

打包完成会生成一个dist文件夹



## 基本配置

1. entry（入口）
2. output（输出）
3. loader（加载器）
4. plugins（插件）
5. mode（模式）
   + 开发模式
   + 生产模式

```javascript
const path = require('path')
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [

        ]
    },
    plugins: [

    ],
    mode: 'development'
}
```



## 处理样式资源

+  css-loader

  + 目的：是为了把导入css文件一般配合style-loader 一起使用

+  less-loader

  + 目的：解析less
  + 依赖：less

+  scss-loader

  + 目的：解析scss
  + 依赖sass

+  style-loader

  + 目的：将导入的css文件导入到头部

+  postcss-loader

  + 目的：所有的css相关的工具
  + 作用：
    1. 使用下一代css语法
    2. 自动补全浏览器前缀
    3. 自动把px代为转换成rem
    4. css 代码压缩等等

  ```
   module: {
          rules: [
              {
                  test: /\.css$/i,
                  use: ["style-loader", 
                  			"css-loader", 
                  			'postcss-loader'
                  			]
              },
              {
                  test: /\.less$/i,
                  use: ["style-loader", 
                  "css-loader", 
                  "less-loader", 
                  'postcss-loader']
              },
              {
                  test: /\.s[ac]ss$/i,
                  use: ["style-loader", 
                  "css-loader", 
                  "sass-loader",
                  'postcss-loader']
              }
          ]
      },
  ```

  ## 资源相关模式

> webpack5  默认导入file-loader和url-loader

```
{
  test: /\.(png|jpe?g|gif|svg)$/i,
  type: 'asset',
},
```

现在有个问题就是打包后的文件都是整合在一起的，并没有分开的打包。只需要配置一下选项即可

```
 generator: {
 	filename: 'static/image/[hash][ext][query]'
 }
```

---

下面来配置字体图标库

首先先介绍下type的4个枚举值

+ asset 自动选择
+ asset/source 将文件导入为字符串
+ asset/inline 将文件作为 data URI 内联到 bundle 中
+ asset/resource 将文件发送到输出目录

```
{
  test: /\.(ttf|woff2?|mp3|avi)$/i,
  type: 'asset/resource',
  generator: {
 	filename: 'static/font/[hash][ext][query]'
 }
},
```



## 清除上一次的打包内容

在webpack5中清除打包不需要插件了，只需要在output中加入clean:true即可



```
 output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true
    },
```

## eslint 

eslint webpack5之前都是loader

现在改用成了插件

##  EslintWebpackPlugin

```bash
npm install eslint-webpack-plugin eslint --save-dev
```

```js
 plugins: [new ESLintPlugin(options)],
```

需要手动在更目录下创建，.eslintrc.js/json 或者

同时需要屏蔽一些检查的位置 创建.eslintrcignore




```
npm install -D babel-loader @babel/core @babel/preset-env

//rules中配置
 {
   test: /.js$/g,
   use: ['babel-loader']
 },
 
 //.babelrc 中配置
 
 {
  "presets": [
    [
      "@babel/preset-env",
      {
        ....
      }
    ]
  ]
}
 
 //package.json 中配置是配的浏览器版本说明
 
 "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead",
    "not ie <= 10"
  ],
 
```

## html插件使用

```javascript
npm install --save-dev html-webpack-plugin
//webpack.config.js
...
devServer: {
  hot: true,
},
 ...
 
 
 //命令
 webpack serve
```







  
