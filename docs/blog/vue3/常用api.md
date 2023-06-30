
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

  