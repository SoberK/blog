
# 常用api 

## V-model 的用法

```vue
<script setup>
import cus from  './custom.vue'
import { ref } from 'vue'

const msg = ref('Hello World!')
const msg2 = ref('Hello World1!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <cus v-model:first="msg" v-model:lastname="msg2" />
</template>


//componet2
<template>
  <div>
    <input  
       :value="first"
      @input="$emit('update:first', $event.target.value)"
           />
    
    
      <input  
       :value="lastname"
      @input="$emit('update:lastname', $event.target.value)"
           />
    {{first}}
    {{lastname}}
  </div>
</template>
<script>
  export default{
    props:['first','lastname'],
    emit:['update:first','update:lastname']
  }

</script>
```




## 2.defineOptions 

这个插件类似于defineCompoment,可以在vite的```plugins```中调用,而且不需要全局声明.

```unplugin-vue-define-options -D```

> Options API can be declared using the `defineOptions` in `<script setup>`, specifically to be able to set `name`, `props`, `emits`, and `render` inside of one function.

```vue
defineOptions({
  name: "Message",
  props:['age']
});
```


## 3.emit

  ```
  import {defineEmits} from "vue";
  const emit = defineEmits<{
    (e:'toDetail',id:number):void
  }>();
  const toDetail = ()=> emit('toDetail',123)
  ```

## 4.props

  ```
  const props = defineProps({
    type:Number,
    itemInfo:Object
  })
  
  ```

## 5.setpup
expose是暴露出的属性，可以被父级访问或者当前组件访问，也可以return 出去。

  ```
  export default {
    setup(props, { attrs, slots, emit, expose }) {
      const reg = ref(1)
      
      expose({
        reg,
      })
or
      return {
        reg
      }
    }
  }
  ```

主要的作用是在setup返回模版的时候，无法使用return返回方法或属性这个时候就需要expose了。

```
import { h, ref } from 'vue'

export default {
  setup(props, { expose }) {
    const count = ref(0)
    const increment = () => ++count.value

    expose({
      increment
    })

    return () => h('div', count.value)
  }
}
```
  
## 6.响应式
1. ref 不解释
2. reactive 不解释
3. computed 相当于computed
3. readonly 接收一个react或ref，追踪其响应
4. watch 

```
写法一
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)
写法二
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})
写法三
watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
  /* ... */
})

配置
 { 
  immediate：在侦听器创建时立即触发回调。第一次调用时旧值是 undefined。
  deep：如果源是对象，强制深度遍历，以便在深层级变更时触发回调。参考深层侦听器。
  flush：调整回调函数的刷新时机。参考回调的刷新时机及 watchEffect()。如果想在侦听器回调中能访问被 Vue 更新之后的DOM，你需要指明 flush: 'post' ，默认'pre'
  onTrack / onTrigger：调试侦听器的依赖。参考调试侦听器。
  once：回调函数只会运行一次。侦听器将在回调函数首次运行后自动停止。 
 }

```


3. unRef 脱ref
4. unValue 脱ref
5. isRef 判断是否是响应式
6. toRef 把对象的属性转换成响应式
7. toRefs 把对象的所有属性转换成响应式
8. toValue 把ref转换成普通值
9. toRaw 可以返回由 reactive()、readonly()、shallowReactive() 或者 shallowReadonly() 创建的代理对应的原始对象
10. markRaw 可以标记一个对象，使其永远不会被转为代理
11. effectScope 创建一个 effect scope,可以吧里面所产生的副作用全部清除
12. getCurrentScope 获取当前作用域



