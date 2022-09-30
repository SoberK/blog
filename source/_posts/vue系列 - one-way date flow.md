---
title: vue系列 - one-way data flow
date: 2022-08-14 16:00:00
category: vue系列
tag: vue
index_img: /img/vue.png
---

# vue 系列 - 单向数据流

- 所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。额外的，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。
- 场景：
  - 当作初始值
    ```
    props: ['initialCounter'],
    data: function () {
      return {
        counter: this.initialCounter
      }
    }
    ```
  - 当作要进行转换
    ```
    props: ['initialCounter'],
    data: function () {
      return {
        counter: this.initialCounter
      }
    }
    ```
  - 如果确实像改变这个值的话，我们应该使用某个属性去 emit，或者使用双向数据绑定来实现
