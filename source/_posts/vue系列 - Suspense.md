---
title: vue系列 - Suspense
date: 2022-08-16 08:16:11
category: vue系列
tag: vue
index_img: /img/vue.png
---

# vue 系列 - Suspense

在使用异步组件的时候，为了获得更好的交互体验，新增了 Suspense,Suspense 有两个插槽一个是#default 一个是#fallback，其中 fallback 就是在异步请求的时候展示的插槽

```
			<Suspense>  父组件
			  <template #default>
			    <HelloWorld msg="Vite + Vue" />
			  </template>
			  <template #fallback>
			    loading......
			  </template>
			</Suspense>
			<script  setup lang="ts">
			import { defineAsyncComponent } from 'vue';
			const HelloWorld = defineAsyncComponent(() => import('./components/HelloWorld.vue'));
			</script>
			子组件
			<template>
			  <h1>{{ msg }}</h1>
			</template>
			<script setup lang="ts">
			import { ref } from 'vue'
			defineProps<{ msg: string }>()
			function featchData() {
			  return new Promise(resolve => {
			    setTimeout(() => {
			      resolve('Vite + Vue')
			    }, 3000)
			  })
			}
			await featchData()
			const count = ref(0)
			</script>

```
