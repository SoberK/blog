(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{300:function(n,t,o){"use strict";o.r(t);var e=o(14),a=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"原型链与继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原型链与继承"}},[n._v("#")]),n._v(" 原型链与继承")]),n._v(" "),t("p",[n._v("原型链，是实现js的基础方式，所有的构造函数都有一个原型对象，原型的construct 属性指向了构造函数。这是一个循环的闭合链圈，如果我们将construct 指向另一个构造函数，而另一个构造函数的construct再指向另外一个构造函数，这样就在实例和原型之间构造了一条原型链。")]),n._v(" "),t("p",[n._v("原型的基本结构")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Lop(){\n\tthis.name = '1'\n}\nLop.prototype.age = '2'\nnew Lop()\n\nLop\n\tname:2\n\tprototype:{\n\t\tconstructor: Lop\n\t}\n\n")])])]),t("h2",{attrs:{id:"原型链继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原型链继承"}},[n._v("#")]),n._v(" 原型链继承")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Lop(){\nthis.name = 'Lop'\n}\nLop.prototype.age = '23'\nfunction Lob(){\n\n}\nLob.prototype = new Lop();\nlet lob = new Lob()\nconsole.log(lob)\nconsole.log(lob.name)\nconsole.log(lob.age)\n\n")])])]),t("p",[n._v("![image-20220925172532067](/Users/fanrongkong/Library/Application Support/typora-user-images/image-20220925172532067.png)")]),n._v(" "),t("p",[n._v("原型链的问题")]),n._v(" "),t("p",[n._v("引用类型的对象有个问题，他会修改原型上的数据。列入")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("    \t\tfunction Lop(){\n            this.name = 'Lop'\n        }\n        Lop.prototype.age = ['23']\n\n        function Lob(){\n            this.natallme = '187cm'\n        }\n        Lob.prototype = new Lop();\n        Lob.prototype.constructor = Lob\n        let lob = new Lob()\n        let lob2 = new Lob()\n        lob.age.push('2')\n        console.log(lob2.age) //['23', '2']\n")])])]),t("p",[n._v("这样明显不对的。")]),n._v(" "),t("h2",{attrs:{id:"盗用构造函数-经典进程或者叫对象伪装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#盗用构造函数-经典进程或者叫对象伪装"}},[n._v("#")]),n._v(" 盗用构造函数（经典进程或者叫对象伪装）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v(" function Lop(){\n \tthis.name = 'Lop'\n }\n Lop.prototype.age = ['23']\nfunction Lob(){\n  Lop.call(this);\n  this.natallme = '187cm'\n}\nlet lob = new Lob()\nlet lob2 = new Lob()\n\n")])])]),t("p",[n._v("缺点：不能访问父级的prototype")]),n._v(" "),t("h2",{attrs:{id:"组合继承-盗用构造函数-原型继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组合继承-盗用构造函数-原型继承"}},[n._v("#")]),n._v(" 组合继承（盗用构造函数+原型继承）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v(" function Lop(){\n            this.name = ['Lop']\n        }\n        Lop.prototype.age = ['23']\n\n        function Lob(){\n            Lop.call(this); //继承之后能够让数组也能重新计算。\n            this.natallme = '187cm'\n        }\n        Lob.prototype = new Lop() //用来能访问父级的原型\n        let lob = new Lob()\n        let lob2 = new Lob()\n        lob.name.push('2')\n        console.log(lob)\n        console.log(lob.name)(2) ['Lop', '2']\n        console.log(lob2.name)['Lop']\n        console.log(lob2.age)['23']\n        \n\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);