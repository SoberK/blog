---
title: vue系列 - vue3新特性
date: 2022-08-15 08:20:11
category: vue系列
tag: vue
index_img: /img/vue.png
---

# vue 系列 - vue3 新特性

## Composition API

组合式 api ，允许开发者使用导入函数的方式来替代配置类型开发。

- 主要添加了 Reactivity API，例如 ref()and reactive()，它允许我们直接创建反应状态、计算状态和观察者。
- 声明周期钩子
- 依赖注入

### 为什么使用组合 API

#### 更好的逻辑重用

解决了 mixins 的所有缺点，mixins 的缺点如果多个，主要重点在逻辑重用。

#### 更灵活的代码

在编写 options api 时候，我们会在不同的生命周期、data、以及 methos 等 options 中配置不通的逻辑代码，这样会使代码变得复杂。逻辑混淆在一起，对于阅读开发以及后期维护，都会是很难进行的。 在使用 compositionApi 的时候，我们可以将重点放在一起，并且能够提取到不同的文件中。这种减少重构的摩擦是维护大型项目的关键。

#### 更好的类型断言

在 ts 的开发时，提供了不通的类型，方便开发者使用

#### 更小的生产包和更少的开销

`<script setup>` 更高效，更易于缩小，这事因为 scrip setup 被编译成内连在同一`<script setup>`代码范围内的函数，没有了实例代理，所以代码更小

## SFC Composition API Syntax Sugar

提供了一些编译的语法糖，`<script setup>`推荐在 sfc 和 composition Api 开发时使用

## Teleport

在某些场景下，我们需要标签的渲染位置有所改变，比如 modal，在子组件中，我们想要把页面渲染在 body 层级，而不是子组件中，此时我们就可以用到`<Teleport>`，

```
<Teleport to="body">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>
```

## Fragments

支持多个跟标签

## Emits Component Option

添加 emits 属性验证

```
export default {
  emits: {
    // no validation
    click: null,

    // with validation
    submit: (payload) => {
      if (payload.email && payload.password) {
        return true
      } else {
        console.warn(`Invalid submit event payload!`)
        return false
      }
    }
  }
}
```

## createRenderer API from @vue/runtime-core to create custom renderers

自定义渲染器

## SFC State-driven CSS Variables (v-bind in `<style>`)

SfC css 变量,css 可以支持 v-bind 语法，直接和变量绑定，这样更简单的去绑定 css 样式
setup 写法

```
<script setup>
  const red = "red";
</script>

<style>
#app {
  background: v-bind(red);
}
</style>

```

options 写法

```
<script>
export default {
  name: "App",
  data() {
    return {
      time: 1000,
      them: {
        red: "red",
      },
    };
  },
};
</script>

<style>
#app {
  background: v-bind("them.red");
}
</style>

```

注意如果 red 是多层的引用类型的，则需要在变量中使用引号给包裹住

## SFC `<style scoped> ` can now include global rules or rules that target only slotted content

vue 的深度选择器的语法变化

- v2
  - `>>>`
  - `/deep/`
- v3

  - `::v-deep()` 或者 `:deep()`
  - 默认情况下，从父级传入的插槽内容不再受子级样式的影响。相反，孩子现在需要使用新的::v-slotted()伪元素来专门针对插槽内容
  - 新的伪元素`::v-global()`可用于在`<style scoped>`块内应用全局规则：

  ```
  ::v-deep .bar {} //不推荐
  ::v-deep(.bar) {}
  ::v-slotted(.foo) {}
  ::v-global(.foo) {}
  ```

## Suspense experimental

新标签`<Suspense />`,具体使用后面会说到
