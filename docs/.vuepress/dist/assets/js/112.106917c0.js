(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{393:function(t,s,e){"use strict";e.r(s);var o=e(14),n=Object(o.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_7-vue做权限管理怎么做-控制到按钮级别权限怎么做"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-vue做权限管理怎么做-控制到按钮级别权限怎么做"}},[t._v("#")]),t._v(" 7.vue做权限管理怎么做？控制到按钮级别权限怎么做")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("权限一般需求是分为按钮权限和页面权限")])]),t._v(" "),s("li",[s("p",[t._v("具体实现的时候分后端和前端两种方案。")]),t._v(" "),s("p",[t._v("前端方案会把所有的信息配置在前端，通过路由手续需要用户登录，用户登录后更具角色权限过滤路由表，比如我会配置一个asyncRoutes组件，组要认证的页面在其路由的meta中添加一个roles字段，等获取用户角色之后取两者交集，吐过不为空则说明可以访问。此过程过滤结果，剩下路由室友该用户访问的页面，最后通过addRoutes方式动态的去添加路由即可。")]),t._v(" "),s("p",[t._v("后端方案是把所有的路有信息存储在数据库中，用户登录的时候更具角色查询到的所有页面的路由，返回前端，前端通过addRoutes去添加路由信息。")]),t._v(" "),s("p",[t._v("按钮权限的控制一般会用指令如：v-permission，将按钮通过角色的值传给V-promission指令，在指令的mounted钩子中可以判断当前角色按钮是否存在交际，又则保留按钮，没有则移除")])]),t._v(" "),s("li",[s("p",[t._v("纯前端的有点是实现简单，不需要额外配置路有权限模块，但是维护起来每次都要部署，有新的页面都要重新打包，服务端就不回存在这个问题，通过专门的角色和权限管理页面，配置页面和按钮权限到数据库，应用每次登录时都获取最新的路有信息。")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);