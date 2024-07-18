(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{401:function(v,l,_){"use strict";_.r(l);var t=_(14),e=Object(t.a)({},(function(){var v=this,l=v._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h3",{attrs:{id:"_39-使用vue渲染大量数据时怎么优化-说下思路"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_39-使用vue渲染大量数据时怎么优化-说下思路"}},[v._v("#")]),v._v(" 39.使用vue渲染大量数据时怎么优化？说下思路")]),v._v(" "),l("ul",[l("li",[v._v("描述大数据量带来的问题")]),v._v(" "),l("li",[v._v("分不同的情况做不同处理")]),v._v(" "),l("li",[v._v("总结一下")])]),v._v(" "),l("ol",[l("li",[v._v("在大型企业级项目中经常需要渲染大量数据，此时很容易出现卡顿的情况。比如大数据表格、树。")]),v._v(" "),l("li",[v._v("处理时要根据情况做不通处理：")])]),v._v(" "),l("ul",[l("li",[v._v("避免大数据量：可以采取分页的方式获取")]),v._v(" "),l("li",[v._v("避免渲染大量数据：vuevirtual-scroller等虚拟滚动方案，只渲染视口范围内的数据")]),v._v(" "),l("li",[v._v("避免更新：可以使用 v-once“方式只渲染一次")]),v._v(" "),l("li",[v._v("优化更新：通过vmemo缓存子树，有条件更新，提高复用，避免不必要更新")]),v._v(" "),l("li",[v._v("按需加载数据：可以采用 懒加载、方式，在用户需要的时候再加载数据，比如 tree 组件子树的懒加载")])]),v._v(" "),l("p",[v._v("3.总之，还是要看具体需求，首先从设计上避免大数据获取和渲染；实在需要这样做可以采用虚表的方式优化渲染数量：最后优化更新，如果不需要更新可以*v-once避免更新**，需要更新可以 v-memo°进一步优化大\n数据更新性能。其他可以采用的是交互方式优化，无线滚动、懒加载等方案。")])])}),[],!1,null,null,null);l.default=e.exports}}]);