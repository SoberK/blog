(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{366:function(n,o,t){"use strict";t.r(o);var e=t(14),s=Object(e.a)({},(function(){var n=this,o=n._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h1",{attrs:{id:"装饰器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#装饰器"}},[n._v("#")]),n._v(" 装饰器")]),n._v(" "),o("ul",[o("li",[o("p",[n._v("创建装饰器")]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("function Logger(constructor: Function) {\n    console.log(constructor);\n}\n\n@Logger\nclass Person {\n    name = \"Max\"\n    constructor() {\n        console.log('create Person object')\n    }\n}\n\n\nconst pers = new Person();\nconsole.log(pers)\n")])])])]),n._v(" "),o("li",[o("p",[n._v("装饰器传参(工厂函数装饰器)")]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("function Logger(logString: string) {\n    return function (constructor: Function) {\n        console.log(logString)\n        console.log(constructor);\n\n    }\n}\n\n@Logger('lang')\nclass Person {\n    name = \"Max\"\n    constructor() {\n        console.log('create Person object')\n    }\n}\n\n\nconst pers = new Person();\nconsole.log(pers)\n")])])])]),n._v(" "),o("li",[o("p",[n._v("装饰器操作类的数据")]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("function Logger(logString: string) {\n    return function (constructor: Function) {\n        console.log(logString)\n        console.log(constructor);\n\n    }\n}\n\nfunction AddSomething(templete: string, id: string) {\n    return function (constructor: Function) {\n        let app = document.querySelector(id) as HTMLElement;\n        console.log(constructor)\n        let _ = new constructor();\n        console.log(app)\n        app.innerHTML = _.name\n    }\n}\n@AddSomething('<h1>12312</h1>', '#app')\nclass Person {\n    name = \"Max\"\n    constructor() {\n        console.log('create Person object')\n    }\n}\n\nconst pers = new Person();\n\nconsole.log(pers)\n")])])])]),n._v(" "),o("li",[o("p",[n._v("多个装饰器的执行顺序")]),n._v(" "),o("ul",[o("li",[n._v("工厂函数从上往下按顺序执行")]),n._v(" "),o("li",[n._v("return的函数按照从下往上的顺讯执行")]),n._v(" "),o("li",[n._v("下面的demo书序是a1,b1,b2,a2")])])])]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("\nfunction A(numb: number) {\n    console.log('a1')\n    return function (cons: Function) {\n        console.log('a2')\n    }\n\n}\n\nfunction B(numb: number) {\n    console.log('b1')\n    return function (cons: Function) {\n        console.log('b2')\n    }\n}\n@A(1)\n@B(2)\nclass Person {\n    name = \"Max\"\n    constructor() {\n        console.log('create Person object')\n    }\n}\n")])])])])}),[],!1,null,null,null);o.default=s.exports}}]);