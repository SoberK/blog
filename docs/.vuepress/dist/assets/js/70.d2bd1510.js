(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{351:function(e,t,l){"use strict";l.r(t);var u=l(14),n=Object(u.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"_13-说说key的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-说说key的作用"}},[e._v("#")]),e._v(" 13.说说key的作用？")]),e._v(" "),t("ul",[t("li",[e._v("给出结论\n"),t("ul",[t("li",[e._v("key的作用主要是为了更高效的更新虛拟DOM。")])])]),e._v(" "),t("li",[e._v("key的必要性\n"),t("ul",[t("li",[e._v("vue在patch过程中判断两个节点是否是相同节点是key是一个必要条件，渲染一组列表时，key往往是唯一标识，所以如果不定义key的话，vue只能认为比较的两个节点是同一个，哪怕它们实际上不是，这导致了频繁更新元素，使得整个patch过程比较低效，影响性能。")])])]),e._v(" "),t("li",[e._v("实际使用方式\n"),t("ul",[t("li",[e._v("实际使用中在渲染一组列表时key必须设置，而且必须是唯一标识，应该避免使用数组索引作为key，这可能导致一些隐蔽的bug;vue中在使用相同标签元素过渡切换时，也会使用key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果。")])])]),e._v(" "),t("li",[e._v("总结，如何去判断两个节点是否相同的\n"),t("ul",[t("li",[e._v("从源码中可以知道，vue判断两个节点是否相同时主要判断两者的key和元素类型等，因此如果不设置key，它的值就是undefined，则可能永远认为这是两个相同节点，只能去做更新操作，这造成了大量的dom更新操作，明显是不可取的。")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);