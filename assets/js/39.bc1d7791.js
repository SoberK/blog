(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{319:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"web简单使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web简单使用"}},[s._v("#")]),s._v(" web简单使用")]),s._v(" "),t("h2",{attrs:{id:"简单的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单的实现"}},[s._v("#")]),s._v(" 简单的实现")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("webpack-study\n\n├─ 1.md\n\n├─ dist\n\n│  └─ main.js\n\n├─ package-lock.json\n\n├─ package.json\n\n└─ src\n\n   ├─ count.js\n\n   ├─ index.html\n\n   ├─ main.js\n\n   └─ sum.js\n")])])]),t("p",[s._v("创建如上结构的文件，用于简单展示打包的过程")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm init -y //快速创建pack.json文件\nnpm i webpack webpack-cli -D //安装依赖\nwebpack ./src/main.js --mode production //打包\n")])])]),t("p",[t("code",[s._v("main.js")])]),s._v(" "),t("p",[s._v("打包完成会生成一个dist文件夹")]),s._v(" "),t("h2",{attrs:{id:"基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[s._v("#")]),s._v(" 基本配置")]),s._v(" "),t("ol",[t("li",[s._v("entry（入口）")]),s._v(" "),t("li",[s._v("output（输出）")]),s._v(" "),t("li",[s._v("loader（加载器）")]),s._v(" "),t("li",[s._v("plugins（插件）")]),s._v(" "),t("li",[s._v("mode（模式）\n"),t("ul",[t("li",[s._v("开发模式")]),s._v(" "),t("li",[s._v("生产模式")])])])]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("entry")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/main.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("output")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("filename")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'main.js'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("module")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("mode")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'development'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"处理样式资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#处理样式资源"}},[s._v("#")]),s._v(" 处理样式资源")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("css-loader")])]),s._v(" "),t("li",[t("p",[s._v("目的：是为了把导入css文件一般配合style-loader 一起使用")])]),s._v(" "),t("li",[t("p",[s._v("less-loader")])]),s._v(" "),t("li",[t("p",[s._v("目的：解析less")])]),s._v(" "),t("li",[t("p",[s._v("依赖：less")])]),s._v(" "),t("li",[t("p",[s._v("scss-loader")])]),s._v(" "),t("li",[t("p",[s._v("目的：解析scss")])]),s._v(" "),t("li",[t("p",[s._v("依赖sass")])]),s._v(" "),t("li",[t("p",[s._v("style-loader")])]),s._v(" "),t("li",[t("p",[s._v("目的：将导入的css文件导入到头部")])]),s._v(" "),t("li",[t("p",[s._v("postcss-loader")])]),s._v(" "),t("li",[t("p",[s._v("目的：所有的css相关的工具")])]),s._v(" "),t("li",[t("p",[s._v("作用：")]),s._v(" "),t("ol",[t("li",[s._v("使用下一代css语法")]),s._v(" "),t("li",[s._v("自动补全浏览器前缀")]),s._v(" "),t("li",[s._v("自动把px代为转换成rem")]),s._v(" "),t("li",[s._v("css 代码压缩等等")])])])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(' module: {\n        rules: [\n            {\n                test: /\\.css$/i,\n                use: ["style-loader", \n                \t\t\t"css-loader", \n                \t\t\t\'postcss-loader\'\n                \t\t\t]\n            },\n            {\n                test: /\\.less$/i,\n                use: ["style-loader", \n                "css-loader", \n                "less-loader", \n                \'postcss-loader\']\n            },\n            {\n                test: /\\.s[ac]ss$/i,\n                use: ["style-loader", \n                "css-loader", \n                "sass-loader",\n                \'postcss-loader\']\n            }\n        ]\n    },\n')])])]),t("h2",{attrs:{id:"资源相关模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源相关模式"}},[s._v("#")]),s._v(" 资源相关模式")]),s._v(" "),t("blockquote",[t("p",[s._v("webpack5  默认导入file-loader和url-loader")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("{\n  test: /\\.(png|jpe?g|gif|svg)$/i,\n  type: 'asset',\n},\n")])])]),t("p",[s._v("现在有个问题就是打包后的文件都是整合在一起的，并没有分开的打包。只需要配置一下选项即可")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" generator: {\n \tfilename: 'static/image/[hash][ext][query]'\n }\n")])])]),t("hr"),s._v(" "),t("p",[s._v("下面来配置字体图标库")]),s._v(" "),t("p",[s._v("首先先介绍下type的4个枚举值")]),s._v(" "),t("ul",[t("li",[s._v("asset 自动选择")]),s._v(" "),t("li",[s._v("asset/source 将文件导入为字符串")]),s._v(" "),t("li",[s._v("asset/inline 将文件作为 data URI 内联到 bundle 中")]),s._v(" "),t("li",[s._v("asset/resource 将文件发送到输出目录")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("{\n  test: /\\.(ttf|woff2?|mp3|avi)$/i,\n  type: 'asset/resource',\n  generator: {\n \tfilename: 'static/font/[hash][ext][query]'\n }\n},\n")])])]),t("h2",{attrs:{id:"清除上一次的打包内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清除上一次的打包内容"}},[s._v("#")]),s._v(" 清除上一次的打包内容")]),s._v(" "),t("p",[s._v("在webpack5中清除打包不需要插件了，只需要在output中加入clean:true即可")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'main.js',\n        clean: true\n    },\n")])])]),t("h2",{attrs:{id:"eslint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[s._v("#")]),s._v(" eslint")]),s._v(" "),t("p",[s._v("eslint webpack5之前都是loader")]),s._v(" "),t("p",[s._v("现在改用成了插件")]),s._v(" "),t("h2",{attrs:{id:"eslintwebpackplugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eslintwebpackplugin"}},[s._v("#")]),s._v(" EslintWebpackPlugin")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" eslint-webpack-plugin eslint --save-dev\n")])])]),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ESLintPlugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),t("p",[s._v("需要手动在更目录下创建，.eslintrc.js/json 或者")]),s._v(" "),t("p",[s._v("同时需要屏蔽一些检查的位置 创建.eslintrcignore")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('npm install -D babel-loader @babel/core @babel/preset-env\n\n//rules中配置\n {\n   test: /.js$/g,\n   use: [\'babel-loader\']\n },\n \n //.babelrc 中配置\n \n {\n  "presets": [\n    [\n      "@babel/preset-env",\n      {\n        ....\n      }\n    ]\n  ]\n}\n \n //package.json 中配置是配的浏览器版本说明\n \n "browserslist": [\n    "> 1%",\n    "last 2 versions",\n    "not dead",\n    "not ie <= 10"\n  ],\n \n')])])]),t("h2",{attrs:{id:"html插件使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html插件使用"}},[s._v("#")]),s._v(" html插件使用")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webpack"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//webpack.config.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("devServer")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("hot")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n \n \n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//命令")]),s._v("\n webpack serve\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);