(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{355:function(e,t,v){"use strict";v.r(t);var r=v(14),i=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"_17-怎么缓存当前的组件-缓存后怎么更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17-怎么缓存当前的组件-缓存后怎么更新"}},[e._v("#")]),e._v(" 17.怎么缓存当前的组件？缓存后怎么更新")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("缓存用keep-alive,他的作用和用法")]),e._v(" "),t("ul",[t("li",[e._v("开发中缓存组件使用keepalive组件，keepralive是vue内置组件，keep-alive包裹动态组件component时，会缓存不活动的组件实例，而不是销毁它们，这样在组件切换过程中将状态保留在内存中，防止重复渲染DOM.")])])]),e._v(" "),t("li",[t("p",[e._v("使用细节,如缓存制定\\排除 、结合router和transition")]),e._v(" "),t("ul",[t("li",[e._v("结合屬性include 和exclude可以明确指定缓存哪些组件或排除缓存指定组件。vue3中结合vue-router时变化较大，之前是keep-alive包裏 router-view’，现在需要反过来用 router-view 包裹 keep-alive")])])]),e._v(" "),t("li",[t("p",[e._v("组件缓存后更新可以利用active或者beforeRouterEnter")]),e._v(" "),t("ul",[t("li",[e._v("beforeRouteEnter：再有vue-router的项目，每次进入路由的时候，都会执行beforeRouterEnter，可以在里面获取数据")]),e._v(" "),t("li",[e._v("actived：在keep-alive缓存组件被激活的时候，可以在actived钩子中获取数据")])])]),e._v(" "),t("li",[t("p",[e._v("原理阐述")]),e._v(" "),t("p",[e._v("keep-alive是一个通用组件，它内部定义了一个map，缓存创建过的组件实例，它返回的渲染函数内部会查找内嵌的component组件对应组件的vnode，如果该组件在map中存在就直接返回它。由于component的is属性是个响应式数据，因此只要它变化，keep-alive的render函数就会重新执行。")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);