(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{415:function(e,t,v){"use strict";v.r(t);var a=v(14),l=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"_5-说一下双向绑定的使用和原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-说一下双向绑定的使用和原理"}},[e._v("#")]),e._v(" 5.说一下双向绑定的使用和原理")]),e._v(" "),t("ul",[t("li",[e._v("vue是一个指令v-model，可以绑定一个响应式数据到视图，同时视图中的变化能改变数值")]),e._v(" "),t("li",[e._v("v-model是一个语法糖，默认相当于使用value和@input。使用v-model可以减少大量繁琐的事件处理代码，提高开发效率。")]),e._v(" "),t("li",[e._v("通常在表单上使用v-model，还可以在自定义组件上使用，代表某个值的输入和输出控制。")]),e._v(" "),t("li",[e._v("我们在input和select以及checkbox上绑定的方式都不通。有的是checkbox的value上，有的是options上，还可以结合.lazy.number.trim 对v-mode进行修饰。vue3中类似与sync修饰符，最终展开的结果是modelValue属性和update:modeValue事件。vue3我们还可以制定多个值惊醒绑定如v-mode:foo 和v-model:bar。")])]),e._v(" "),t("h4",{attrs:{id:"方式二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方式二"}},[e._v("#")]),e._v(" 方式二：")]),e._v(" "),t("p",[e._v("我们都知道 Vue 是数据双向绑定的框架，双向绑定由三个重要部分构成")]),e._v(" "),t("p",[e._v("数据层（Model）：应用的数据及业务逻辑\n视图层（View）：应用的展示效果，各类UI组件\n业务逻辑层（ViewModel）：框架封装的核心，它负责将数据与视图关联起来\n而上面的这个分层的架构方案，可以用一个专业术语进行称呼：MVVM这里的控制层的核心功能便是 “数据双向绑定” 。自然，我们只需弄懂它是什么，便可以进一步了解数据绑定的原理")]),e._v(" "),t("p",[e._v("理解ViewModel它的主要职责就是：\n数据变化后更新视图\n视图变化后更新数据\n当然，它还有两个主要部分组成")]),e._v(" "),t("p",[e._v("监听器（Observer）：对所有数据的属性进行监听\n解析器（Compiler）：对每个元素节点的指令进行扫描跟解析,根据指令模板替换数据,以及绑定相应的更新函数")]),e._v(" "),t("h1",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])])])}),[],!1,null,null,null);t.default=l.exports}}]);