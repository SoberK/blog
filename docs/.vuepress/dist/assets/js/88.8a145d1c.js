(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{370:function(t,e,v){"use strict";v.r(e);var r=v(14),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"_1-组件通讯"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-组件通讯"}},[t._v("#")]),t._v(" 1.组件通讯")]),t._v(" "),e("p",[e("strong",[t._v("我所理解的单向数据流是")]),t._v("：数据是不可逆的，父组件向子组件通过props传递数据，子组件不可修改props, 只能通过触发事件通知父组件修改数据，在派发给子组件。")]),t._v(" "),e("ol",[e("li",[t._v("组件通信常用方式有以下8种：")])]),t._v(" "),e("ul",[e("li",[t._v("$props")]),t._v(" "),e("li",[t._v("$emit/$on")]),t._v(" "),e("li",[t._v("$children/$parent")]),t._v(" "),e("li",[t._v("$attrs/$listeners")]),t._v(" "),e("li",[t._v("$ref")]),t._v(" "),e("li",[t._v("$root")]),t._v(" "),e("li",[t._v("$eventbus")]),t._v(" "),e("li",[t._v("vuex")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("根据组件之间关系讨论组件通信最为清晰有效")])]),t._v(" "),e("ul",[e("li",[t._v("父子组件")]),t._v(" "),e("li",[t._v("$props/$emit/$parent/$ref/$attrs")]),t._v(" "),e("li",[t._v("兄弟组件\n$parent /$root /eventbus/vuex")]),t._v(" "),e("li",[t._v("跨层级关系")]),t._v(" "),e("li",[t._v("eventbus/vuex/provide/inject")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("provide使用须知,provide要使用箭头函数去使用,否则会丢失响应")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("provide(){     //X\n   return{\n      hasMeal:this.hasMeal        \n   }\n}\n\n\nprovide:()=>{  //√\n   return{\n      hasMeal:this.hasMeal        \n   }\n}\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);