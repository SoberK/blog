---
title: vue系列 - mixins和extends
date: 2022-08-14 13:00:00
category: vue系列
tag: vue
index_img: /img/vue.png
---

# vue 系列 - mixins 和 extends

## mixins

用来混入一个对象，在被混入的对象中是可以调用 mixins 中的对象，mixins 可以混入多个，如果有多个生命周期，生命周期将会同时进行,如果 data 中都有相同的属性，则访问的 data 中的属性是当前的组件.

```
export default {
  name: 'App',
  mixins:[mixins,mixins2],
  created() {
    console.log('App created')
    console.log(this.time)
  },
  data() {
    return {
     time:1000,
   }
  }
}
```

```
export default {
    created() {
        console.log('mixin created');
    },
    data() {
        return {
            time: 2000,
        }
    }

}
```

```
结果同时打印：
  “mixin created”
  “App created”
```

## extends

用法和 mixins 类似，不多赘述

```
export default {
  name: 'App',
  exntends:,
  created() {
    console.log('App created')
    console.log(this.time)
  },
  data() {
    return {
     time:1000,
   }
  }
}
```

```
export default {
    created() {
        console.log('extend created');
    },
    data() {
        return {
            time: 2000,
        }
    }

}
```

```
结果同时打印：
  “extend created”
  “App created”
```

## mixins 和 extends、以及 vue.mixins 的区别

- 他们之间的权重：vue.mixins>extends>mixins>当前组件。
- mixins 可以有多个，使用数组隔开，他们之间运行的先后顺序取决于数组的先后顺序
- extneds 只能有一个

## vue.mixin

vue.mixin 是一个全局 api，如果在全局引入了该对象，全局都可以访问到该对象，不推荐使用。

```
Vue.mixin(mixin)
```

## vue.extend

vue.extned 和上面所说的混入盖联没有任何关系，主要的用于组件的开发.

```
import Vue from 'vue'
const testComponent = Vue.extend({
  template: '<div>{{ text }}</div>',
  data: function () {
    return {
      text: 'extend test'
    }
  }
})
const extendComponent = new testComponent().$mount()
```

## vue2 和 vue3 的区别

- vue3
  - 选项式 一样
  - 组合式 没有 mixin，使用组合式 api 来替代
  - vu3 的全局 vue.mixin 变为了实例方法（app.mixin）而不是 vue2 中的静态方法(vue.mixin)
  -

## 拓展问题：如果想要扩展一个组件怎么做？

- 按照逻辑扩展和内容扩展来列举，逻辑扩展有：mixins、extends、composition api；内容扩展有 slots；
- 分别说出他们使用方法、场景差异和问题。
- 作为扩展，还可以说说 vue3 中新引入的 composition api 带来的变化
