(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{387:function(t,e,s){"use strict";s.r(e);var o=s(14),a=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"_26-有没有使用vuex的module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_26-有没有使用vuex的module"}},[t._v("#")]),t._v(" 26.有没有使用vuex的module")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("用过module，项目规模变大之后，单独一个store对象会过于庞大臃肿，通过模块方式可以拆分开来便于维护")])]),t._v(" "),e("li",[e("p",[t._v("可以按之前规则单独编写子模块代码，然后在主文件中通过modules°选项组织起来：\ncreatestore( modules :{ .. }})")])]),t._v(" "),e("li",[e("p",[t._v("不过使用时要注意访问子模块状态时需要加上注册时模块名：‘store.state.a.xxx’，但同时 setters°mutations°和 actions°又在全局空间中，使用方式和之前一样。如果要做到完全拆分，需要在子模块加上\nnamespace•选项，此时再访问它们就要加上命名空间前缀。")])]),t._v(" "),e("li",[e("p",[t._v("很显然，模块的方式可以拆分代码，但是缺点也很明显，就是使用起来比较繁琐复杂，容易出错。而且类型系统支持很差，不能给我们带来帮助。pinia显然在这方面有了很大改进，是时候切换过去了。")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);