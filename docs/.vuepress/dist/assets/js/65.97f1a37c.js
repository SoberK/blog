(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{346:function(t,a,s){"use strict";s.r(a);var r=s(14),_=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"随便问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#随便问"}},[t._v("#")]),t._v(" 随便问")]),t._v(" "),a("h3",{attrs:{id:"_1-说一下虚拟dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-说一下虚拟dom"}},[t._v("#")]),t._v(" 1.说一下虚拟DOM")]),t._v(" "),a("p",[t._v("虚拟dom本质就是一个JS对象，虚拟dom存在的唯一的意义在于最小化dom改变，然后批处理dom变化，在必要的时候在重新渲染页面")]),t._v(" "),a("p",[a("strong",[t._v("diff 分为三类比较：")])]),t._v(" "),a("p",[t._v("1.相同类型节点比较：只会对属性进行重设，从而实现节点的转变")]),t._v(" "),a("p",[t._v("2.不同类型节点比较：会直接删除旧的节点，创建新的节点代替。")]),t._v(" "),a("p",[t._v("3.列表节点比较：开发手动添加key,帮助react定位到正确的节点，减少dom操作次数。")]),t._v(" "),a("h3",{attrs:{id:"_2-单项数据流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-单项数据流"}},[t._v("#")]),t._v(" 2.单项数据流")]),t._v(" "),a("p",[a("strong",[t._v("我所理解的单项数据流是")]),t._v("：数据是不可逆的，父组件向子组件通过props传递数据，子组件不可修改props, 只能通过触发事件通知父组件修改数据，在派发给子组件。")]),t._v(" "),a("h3",{attrs:{id:"_3-组件中的data为什么是一个函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-组件中的data为什么是一个函数"}},[t._v("#")]),t._v(" 3.组件中的data为什么是一个函数？")]),t._v(" "),a("p",[t._v("1.一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。")]),t._v(" "),a("p",[t._v("2.如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。")])])}),[],!1,null,null,null);a.default=_.exports}}]);