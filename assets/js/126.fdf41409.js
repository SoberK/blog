(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{408:function(t,e,s){"use strict";s.r(e);var v=s(14),a=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"_47-页面刷新后vuex的state数据丢怎么解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_47-页面刷新后vuex的state数据丢怎么解决"}},[t._v("#")]),t._v(" 47.页面刷新后vuex的state数据丢怎么解决？")]),t._v(" "),e("ul",[e("li",[t._v("问题描述")]),t._v(" "),e("li",[t._v("解决方法")]),t._v(" "),e("li",[t._v("谈个人理解")]),t._v(" "),e("li",[t._v("三方库原理探索")])]),t._v(" "),e("ul",[e("li",[t._v("vuex只是在内存保存状态，刷新之后就会丢失，如果要持久化就要存起来。")]),t._v(" "),e("li",[t._v("localStorage就彼合适，提交mutation的时候同时存入localStorage， store中把值取出作为state的初始值即可。")]),t._v(" "),e("li",[t._v("这里有两个问题，不是所有状态都需要持久化；如果需要保存的状态很多，编写的代码就不够优雅，每个提交的地方都要单独做保存处理。这里就可以利用vuex提供的subscribe方法做一个统一的处理。甚至可以封装一个vuex插件以便复用。")]),t._v(" "),e("li",[t._v("类似的插件有vuex-persist、vuex-persistedstate， 内部的实现就是通过订阅mutation变化做统一处理，通过插件的选项控制哪些需要持久化")])])])}),[],!1,null,null,null);e.default=a.exports}}]);