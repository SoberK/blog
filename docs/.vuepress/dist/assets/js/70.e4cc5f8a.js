(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{350:function(t,e,n){"use strict";n.r(e);var r=n(14),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"_35-什么是递归组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_35-什么是递归组件"}},[t._v("#")]),t._v(" 35.什么是递归组件")]),t._v(" "),e("ol",[e("li",[t._v("如果某个组件通过组件名称引用它自己，这种情况就是递归组件。")]),t._v(" "),e("li",[t._v("实际开发中类似 Tree、Menu 这类组件，它们的节点往往包含子节点，子节点结构和父节点往往是相同的。这类组件的数据往往也是树形结构，这种都是使用递归组件的典型场景。")]),t._v(" "),e("li",[t._v("使用送归组件时，由于我们并不能在组件内部导入它自己，所以设置组件name 露性，用来查找组件定义，如果使用 SFC，则可以通过 SFC 文件名推断。组件内部通常也要有递归结東条件，比如\nmodel.chidren 这样的判断。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);