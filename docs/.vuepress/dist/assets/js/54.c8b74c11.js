(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{335:function(t,c,e){"use strict";e.r(c);var a=e(14),f=Object(a.a)({},(function(){var t=this,c=t._self._c;return c("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[c("h3",{attrs:{id:"_29-watch和watcheffect的异同"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#_29-watch和watcheffect的异同"}},[t._v("#")]),t._v(" 29.watch和watchEffect的异同")]),t._v(" "),c("ul",[c("li",[c("p",[t._v("watchEffect’立即运行一个函数，然后被动地追踪它的依赖，当这些依赖改变时重新执行该函数。 watch°侦测一个或多个响应式数据源并在数据源变化时调用一个回调函数。")])]),t._v(" "),c("li",[c("p",[t._v("watchEffect(effect）是一种特殊 watch，传入的函数既是依赖收集的数据源，也是回调函数。如果我们不关心响应式数据变化前后的值，只是想拿这些数据做些事情，那么watchEffect就是我们需要的。watch更底层，可以接收多种数据源，包括用于依赖收集的getter函数，因此亡完全可以实现watchEffect的功能，同时由于可以指定getter函数，依赖可以控制的更精确，还能获取数据变化前后的值，因此如果需要这些时我们会使用watch。")])]),t._v(" "),c("li",[c("p",[t._v("watchEffect在使用时，传入的函数会立刻执行一次。watch“默认情况下并不会执行回调函数，除非我们手动设置inmediate‘选项。")])]),t._v(" "),c("li",[c("p",[t._v("从实现上来说， watchEffect(fn）、相当于 watch(n,fn, timmediate:true了）")])])])])}),[],!1,null,null,null);c.default=f.exports}}]);