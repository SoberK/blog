(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{320:function(t,c,a){"use strict";a.r(c);var e=a(14),v=Object(e.a)({},(function(){var t=this,c=t._self._c;return c("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[c("h3",{attrs:{id:"_15-watch和computed的区别以及选择"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_15-watch和computed的区别以及选择"}},[t._v("#")]),t._v(" 15.watch和computed的区别以及选择")]),t._v(" "),c("ul",[c("li",[c("p",[t._v("先看computed，watch的两者的定义")]),t._v(" "),c("ul",[c("li",[t._v("计算属性可以从组件数据派生出新数据，最常见的使用方式是设置一个函数，返回计算之后的结果，computed和methods的差异是它具备缓存性，如果依赖项不变时不会重新计算。侦听器可以侦测某个响应式数据的变化并执行副作用，常见用法是传递一个函数，执行副作用，watch没有返回值，但可以执行异步操作\n等复杂逻辑。")])])]),t._v(" "),c("li",[c("p",[t._v("使用上的差异，如何选择")]),t._v(" "),c("ul",[c("li",[t._v("计算属性常用场景是简化行内模板中的复杂表达式，模板中出现太多逻辑会是模板变得蘿肿不易维护。侦听器常用场景是状态变化之后做一些额外的DOM操作或者异步操作。选择采用何用方案时首先看是否需要派生出\n新值，基本能用计算属性实现的方式首选计算属性")])])]),t._v(" "),c("li",[c("p",[t._v("使用细节")]),t._v(" "),c("ul",[c("li",[t._v("使用过程中有一些细节，比如计算属性也是可以传递对象，成为既可读又可写的计算属性。watch可以传递对象，设置deep、immediate等选项。")])])]),t._v(" "),c("li",[c("p",[t._v("vue3变化")]),t._v(" "),c("ul",[c("li",[t._v("vue3中watch选项发生了一些变化，例如不再能侦测一个点操作符之外的字符串形式的表达式；reactivity API中新出现了watch、watchEffect可以完全替代目前的watch选项，且功能更加强大")])])]),t._v(" "),c("li",[c("p",[t._v("Watch 会不会立即执行")])]),t._v(" "),c("li",[c("p",[t._v("watch和watchEffect的区别")]),t._v(" "),c("p",[t._v("1、watch需要明确监听哪个属性\n2、watchEffect会根据其中的属性，自动监听其变化\n3、watcheffect初始化时，一定会执行一次（收集要监听的数据，不然不知道监听的是什么），watch只有你设置了初始化监听才会监听")])])])])}),[],!1,null,null,null);c.default=v.exports}}]);