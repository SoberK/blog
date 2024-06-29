(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{365:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ts-面试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts-面试"}},[t._v("#")]),t._v(" Ts 面试")]),t._v(" "),s("h2",{attrs:{id:"typescript-中-const-和-readonly-的区别-枚举和常量枚举的区别-接口和类型别名的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-中-const-和-readonly-的区别-枚举和常量枚举的区别-接口和类型别名的区别"}},[t._v("#")]),t._v(" TypeScript 中 const 和 readonly 的区别？枚举和常量枚举的区别？接口和类型别名的区别？")]),t._v(" "),s("p",[t._v("const 是变量不可修改，而 readonly 是防止变量的属性不可修改")]),t._v(" "),s("ul",[s("li",[t._v("普通枚举（Numeric Enums）会在生成的 JavaScript 代码中创建一个对象，通过对象的属性来访问枚举成员。")]),t._v(" "),s("li",[t._v("常量枚举（Const Enums）则在编译阶段被完全擦除，它们的成员会在使用的地方被替换为实际的值。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Direction "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Up "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UP"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Down "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DOWN"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LEFT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RIGHT"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Direction "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Up"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Down"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Right\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" SsEnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ss "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SsEnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" SsEnum2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ss"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ss2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ss3"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" sss "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SsEnum2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译后")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" SsEnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("SsEnum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    SsEnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SsEnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    SsEnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SsEnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"B"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    SsEnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SsEnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SsEnum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SsEnum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ss "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SsEnum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sss "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ss"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* SsEnum2.A */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("ul",[s("li",[t._v("interface 可以扩展，在相同作用于重复定义可以被自动合并，而 type 不可以")]),t._v(" "),s("li",[t._v("interface 可以被实现类实现")]),t._v(" "),s("li",[t._v("type 可以定义联合类型或元祖，和基本类型不同，type 可以定义函数类型，interface 不可以")])]),t._v(" "),s("h2",{attrs:{id:"typescript-中的-this-和-javascript-中的-this-有什么差异"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-中的-this-和-javascript-中的-this-有什么差异"}},[t._v("#")]),t._v(" TypeScript 中的 this 和 JavaScript 中的 this 有什么差异？")]),t._v(" "),s("ul",[s("li",[t._v("TypeScript：noImplicitThis: true 的情况下，必须去声明 this 的类型，才能在函数或者对象中使用 this。")]),t._v(" "),s("li",[t._v("Typescript 中箭头函数的 this 和 ES6 中箭头函数中的 this 是一致的。")])]),t._v(" "),s("h2",{attrs:{id:"介绍一下-typescript-中-、-、-、-、-、-等符号的含义和用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下-typescript-中-、-、-、-、-、-等符号的含义和用法"}},[t._v("#")]),t._v(" 介绍一下 TypeScript 中 ?.、??、!、!.、_、** 等符号的含义和用法")]),t._v(" "),s("ul",[s("li",[t._v("?. 可选链 可选链操作符 ?. 允许你在尝试访问一个对象里面的属性时，不必明确地验证这个对象是否存在")]),t._v(" "),s("li",[t._v("?? 空值合并 空值合并操作符 ?? 是一个逻辑操作符，当左侧的操作数为 null 或 undefined 时，它返回右侧的操作数。否则，返回左侧的操作数。")]),t._v(" "),s("li",[t._v("! 非空断言 非空断言操作符 ! 用于断言左侧的操作数是非 null 和非 undefined 的类型。它告诉 TypeScript 编译器，开发者确信这个值一定不会是 null 或 undefined。")]),t._v(" "),s("li",[t._v("!. 在变量名后添加，可以断言排除 undefined 和 null 类型")]),t._v(" "),s("li",[t._v("** 幂运算符 幂运算符 ** 用于计算一个数的幂。")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ?.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果 obj.a 或 obj.a.b 不存在，则不会报错，value 会被赋值为 undefined")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ??")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" foo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "default string"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" baz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("??")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// !")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myElement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myElement"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我们确信 getElementById 不会返回 null")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// **")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" square "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cube "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\n")])])]),s("h2",{attrs:{id:"如何使-typescript-项目引入并识别编译为-javascript-的-npm-库包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使-typescript-项目引入并识别编译为-javascript-的-npm-库包"}},[t._v("#")]),t._v(" 如何使 TypeScript 项目引入并识别编译为 JavaScript 的 npm 库包？")]),t._v(" "),s("ul",[s("li",[t._v("选择安装 ts 版本，npm install @types/包名 --save；")]),t._v(" "),s("li",[t._v("对于没有类型的 js 库，需要编写同名的.d.ts 文件")])]),t._v(" "),s("h2",{attrs:{id:"ts-常用配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts-常用配置"}},[t._v("#")]),t._v(" ts 常用配置")]),t._v(" "),s("ul",[s("li",[t._v("compilerOptions: 这个对象包含了大量控制编译器行为的选项。\n"),s("ul",[s("li",[t._v("target: 设置编译后的 ECMAScript 版本（如 es5, es6, es2015, es2020 等）。")]),t._v(" "),s("li",[t._v("module: 定义如何生成代码。常见的值有 CommonJS, ES2015, ESNext 等。")]),t._v(" "),s("li",[t._v("lib: 指定你想要包含在编译中的库文件（如 dom, es6, dom.iterable 等）。")]),t._v(" "),s("li",[t._v("outDir: 定义编译后的文件输出的目录。")]),t._v(" "),s("li",[t._v("rootDir: 定义编译的根目录，通常是你的 TypeScript 文件所在的文件夹。")]),t._v(" "),s("li",[t._v("strict: 启用所有严格的类型检查选项。")]),t._v(" "),s("li",[t._v("noImplicitAny: 在表达式和声明上有隐含的 any 类型时报错。")]),t._v(" "),s("li",[t._v("strictNullChecks: 在严格的 null 检查模式下，null 和 undefined 值不包含在任何类型里面除了它们自己的类型（null，undefined）和 any。")]),t._v(" "),s("li",[t._v("esModuleInterop: 允许导出为 esModule 的模块。")]),t._v(" "),s("li",[t._v("allowJs: 允许编译 JavaScript 文件。")]),t._v(" "),s("li",[t._v("sourceMap: 生成相应的.map 文件，它在调试时映射回原始源代码。")]),t._v(" "),s("li",[t._v("removeComments: 移除编译之后的代码中的所有注释。")]),t._v(" "),s("li",[t._v("noEmitOnError: 当有错误发生时不生成输出文件。")])])]),t._v(" "),s("li",[t._v("include: 这个数组告诉 TypeScript 编译器哪些文件需要被纳入项目中。它接受一个文件路径数组，可以包含相对或绝对路径。")]),t._v(" "),s("li",[t._v("exclude: 与 include 相反，这个选项用于排除某些文件或文件夹，这些文件或文件夹将不会被 TypeScript 编译器处理。")]),t._v(" "),s("li",[t._v("files: 明确指出一组入口文件，只有这些文件会被编译。")]),t._v(" "),s("li",[t._v("extends: 允许一个 tsconfig.json 文件继承另一个 tsconfig.json 文件的配置。")]),t._v(" "),s("li",[t._v("references: 用于设置项目之间的依赖，适合在大型项目或者使用项目引用的 monorepos。")]),t._v(" "),s("li",[t._v("compileOnSave: 如果设置为 true，在支持这个选项的 IDE 中，当文件被保存时会触发自动编译。")]),t._v(" "),s("li",[t._v("watchOptions: 用来指定 watch 模式下的一些特定行为，比如排除特定的监控文件等。")])]),t._v(" "),s("h2",{attrs:{id:"对-typescript-类中成员的-public、private、protected、readonly-修饰符的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对-typescript-类中成员的-public、private、protected、readonly-修饰符的理解"}},[t._v("#")]),t._v(" 对 TypeScript 类中成员的 public、private、protected、readonly 修饰符的理解？")]),t._v(" "),s("ul",[s("li",[t._v("public: 成员都默认为 public，被此限定符修饰的成员是可以被外部访问；")]),t._v(" "),s("li",[t._v("private: 被此限定符修饰的成员是只可以被类的内部访问；")]),t._v(" "),s("li",[t._v("protected: 被此限定符修饰的成员是只可以被类的内部以及类的子类访问;")]),t._v(" "),s("li",[t._v("readonly: 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。")])]),t._v(" "),s("h2",{attrs:{id:"常用工具类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用工具类型"}},[t._v("#")]),t._v(" 常用工具类型")]),t._v(" "),s("ul",[s("li",[t._v("Partial< T > 将类型 T 的所有属性设置为可选的。")]),t._v(" "),s("li",[t._v("Required< T > 将类型 T 的所有属性设置为必选的。")]),t._v(" "),s("li",[t._v("Readonly< T > 将类型 T 的所有属性设置为只读的。")]),t._v(" "),s("li",[t._v("Pick<T, K> 从类型 T 中选择部分属性 K，并返回一个新的类型。")]),t._v(" "),s("li",[t._v("Omit<T, K> 从类型 T 中删除部分属性 K，并返回一个新的类型。")]),t._v(" "),s("li",[t._v("Record<K, T> 创建一个对象类型，其键为 K，值为 T。")]),t._v(" "),s("li",[t._v("Exclude<T, U> 从类型 T 中排除类型 U，并返回一个新的类型。")]),t._v(" "),s("li",[t._v("Extract<T, U> 从类型 T 中提取类型 U，并返回一个新的类型。")])]),t._v(" "),s("h3",{attrs:{id:"基础题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础题"}},[t._v("#")]),t._v(" 基础题:")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("什么是 TypeScript，TypeScript 和 JavaScript 有什么区别？")]),t._v("\nTypeScript 是一种由微软开发的自由开源的编程语言，是 JavaScript 的超集。它添加了可选的静态类型和基于类的面向对象编程。TypeScript 代码最终都会被编译成普通的 JavaScript，以便在任何支持 JavaScript 的环境中运行。")])]),t._v(" "),s("p",[t._v("区别：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("静态类型")]),t._v("：TypeScript 提供静态类型检查，可以在编译时发现错误，而 JavaScript 是动态类型的，只能在运行时发现错误。")]),t._v(" "),s("li",[s("strong",[t._v("类和模块支持")]),t._v("：TypeScript 提供基于类的面向对象编程和模块系统，比 JavaScript 的原型继承和模块化方案更强大。")]),t._v(" "),s("li",[s("strong",[t._v("编译过程")]),t._v("：TypeScript 需要通过编译器将 "),s("code",[t._v(".ts")]),t._v(" 文件编译成 "),s("code",[t._v(".js")]),t._v(" 文件，而 JavaScript 直接运行在浏览器或 Node.js 环境中。")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("strong",[t._v("TypeScript 中的类型注解是什么？它有什么作用？")]),t._v("\n类型注解是一种特殊的语法，允许开发者明确声明变量、函数参数和返回值的类型。作用如下：")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("提高代码可读性")]),t._v("：类型注解使代码的意图更清晰，其他开发者更容易理解代码。")]),t._v(" "),s("li",[s("strong",[t._v("捕获错误")]),t._v("：在编译时发现类型不匹配的错误，从而避免运行时错误。")]),t._v(" "),s("li",[s("strong",[t._v("增强 IDE 支持")]),t._v("：更好的代码补全、导航和重构支持。")])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确")]),t._v("\nage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"30"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误，不能将类型“string”分配给类型“number”")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[s("strong",[t._v("如何安装 TypeScript，并编译一个 TypeScript 文件？")]),t._v("\n安装 TypeScript 的步骤如下：")])]),t._v(" "),s("ul",[s("li",[t._v("使用 npm 安装 TypeScript："),s("code",[t._v("npm install -g typescript")])]),t._v(" "),s("li",[t._v("检查 TypeScript 版本："),s("code",[t._v("tsc --version")])])]),t._v(" "),s("p",[t._v("编译 TypeScript 文件：")]),t._v(" "),s("ul",[s("li",[t._v("创建一个 TypeScript 文件，例如"),s("code",[t._v("example.ts")]),t._v("："),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, TypeScript!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("在终端中编译这个文件："),s("code",[t._v("tsc example.ts")])]),t._v(" "),s("li",[t._v("得到编译后的 JavaScript 文件"),s("code",[t._v("example.js")]),t._v("，可以用 Node.js 或 浏览器运行。")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("strong",[t._v("解释一下 TypeScript 中的 "),s("code",[t._v("any")]),t._v(" 类型。")]),t._v(" "),s("code",[t._v("any")]),t._v(" 类型表示可以是任意类型。使用 "),s("code",[t._v("any")]),t._v(" 类型的变量可以赋值为任何类型的值，它可以使得代码在类型检查时绕过类型约束。本质上，这种类型放弃了 TypeScript 提供的静态类型检查功能。")])]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" randomValue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrandomValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 合法")]),t._v("\nrandomValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也是合法的")]),t._v("\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[s("strong",[t._v("TypeScript 中的 "),s("code",[t._v("interface")]),t._v(" 和 "),s("code",[t._v("type")]),t._v(" 有什么区别？")])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("interface")]),t._v(": 用于定义对象的形状，描述对象有哪些属性和方法，常用于面向对象编程。")]),t._v(" "),s("li",[s("strong",[t._v("type")]),t._v(": 类型别名，可以表示任何类型，包括基本类型、联合类型、交叉类型以及对象等。")])]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("interface")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" john"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("使用 "),s("code",[t._v("type")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" john"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("区别：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("interface")]),t._v(" 可以被扩展或实现（如：继承），而 "),s("code",[t._v("type")]),t._v(" 使用交叉类型来合并。")]),t._v(" "),s("li",[s("code",[t._v("interface")]),t._v(" 主要用于对象结构，而 "),s("code",[t._v("type")]),t._v(" 则更加灵活用来定义任何类型。")])]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[s("strong",[t._v("什么是 TypeScript 中的 Enum？如何使用它？")]),t._v("\nEnum（枚举） 是一种数据结构，主要用于定义一个具有命名常量的集合。它使代码更可读、更易维护。")])]),t._v(" "),s("p",[t._v("定义和使用枚举：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Color "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Green"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出：1")]),t._v("\n")])])]),s("p",[t._v("默认情况下，枚举成员会从 "),s("code",[t._v("0")]),t._v(" 开始自动递增。你也可以手动为枚举成员指定值：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" Status "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Active "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Inactive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Pending "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Completed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Inactive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出：2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Completed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出：6")]),t._v("\n")])])]),s("ol",{attrs:{start:"7"}},[s("li",[s("strong",[t._v("TypeScript 中的泛型是什么？请举一个例子。")]),t._v("\n泛型使得函数、类、接口可以对特")])])])}),[],!1,null,null,null);s.default=e.exports}}]);