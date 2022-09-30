---
title: vue系列 - ref和unref
date: 2022-08-17 08:20:11
category: vue系列
tag: vue
index_img: /img/vue.png
---

# vue 系列 - ref 和 unref

## 使基本类型变成响应式数据的方法 ref

- 如果传入对象的话，内部会自动转换 reative 方法全部转换
- 提供了 Ref 类型断言
- 使用 unref 去返回一个 ref 之前的基本类型，不能转换 reative

```
Function useState<State extends string>(initial:State){
  const state =ref(initial )as Ref<State>// state.value -> State extends stringreturnstate
}

```

## 使响应式数据变为基本数据 unref

```
unwrapped = unref(x)；
```
