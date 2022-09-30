---
title: vue系列 - reative和toRef以及toRefs
date: 2022-08-17 08:20:11
category: vue系列
tag: vue
index_img: /img/vue.png
---

# vue 系列 - reative 和 toRef 以及 toRefs

## 使基本类型变成响应式数据的方法 ref

- reative
  - 使整个对象边成响应式对象
  - 但是直接取出来响应会失效，所以会用到 otRef 和 toRefs
- toRef
  - 获取某个属性，取出来之后该属性还是具有响应式
  - 写法（ts）：`const fooRef=toRef<stateType,"foo">(state,"foo");`
- toRefs
  - 把其中的属性全部结构处理成响应式的数据，如果是多重结构，那么这个数据还是响应式的数据
  - 写法（ts）：`const {foo,bar,obj} = toRefs<stateType>(state);`
