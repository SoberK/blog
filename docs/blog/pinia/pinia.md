# 基础使用

## 1.创建一个store

```
//store/index.ts
import { createPinia } from "pinia";
import type {App} from 'vue'
const store = createPinia();
//创建一个store


//导出让main.ts初始化
export function setupStore(app:App<Element>){
    app.use(store)
}

export {store}

//main.ts
....
const app = createApp()
setupStore(app)
....

```





## 2.创建一个模块 

```
//store/modules/index.ts
import { defineStore } from "pinia";
interface IndexType {
    name:string,
    age:number
}
//初始化一个store
export const useIndexStore = defineStore({
    id:'Index',
    state:():IndexType=>({
        name:'2',
        age:33
    })
})
```



## 3.在vue中使用state



+ 食用个方法一:直接修改

  ```
  import {defineStore} from '@/store/modules'
  setup(){
  	const store = defineStore()
  	store.counter++
  }
  ```

+ 食用个方法二:重置store

  ```
  import {defineStore} from '@/store/modules'
  setup(){
  	const store = defineStore()
  	store.$reset()
  }
  ```

+ 食用个方法三:当作计算属性映射

  ```
   setup(){
      const store= useIndexStore();
      store.age++
      const cl = ()=>{
        console.log(1)
        store.age++
      }
   		//计算属性会更新视图
      let newAge = computed(()=>{return store.age})
      return {
        newAge,
        name:store.name,
        age:store.age,
        cl
      }
    }
  ```

  

+ 食用个方法四:不在setup中使用

  ```
  //提供了两种方法 mapstate和mapWritableState
  computed:{
  		//创建可以读的state
      ...mapState(useIndexStore,['name','age']),
      //创建可以读的state
      ...mapWritableState(useIndexStore,{
        newAge:'age'
      }),
    },
    methods:{
      cl(){
      //无效。给出警示
        this.name=-1
        //可以改变视图
        this.newAge = -2
      }
    }
  
  ```

+ 食用个方法五:通过$patch，$state修改方法

  ```
  //修改某个参数
  store.$patch({name: '张三'})
  //整体修改
  store.$state ={name:'2222',age:3333}
  ```

+ 食用方法六：监听值的变化，detached此订阅将在组件卸载后保留

  ```
   store.$subscribe((mutation, state) => {
   		console.log("a变化了" + a.value);
   },{ detached: true });
  ```

  

## 4.在vue中使用getters

没有什么好讲的和state类似，也和vuex的用法类似

```
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
})
```

+ 使用方法一：当一个state获取

  ```
   setup() {
      const store = useStore()
  
      return { store }
    }
  ```

  

+ ```
    getters: {
      compA(state) { //直接通过state访问当前的state
        return state.a * 3;
      },
      compB(): number { //通过this去访问state，但是必须要类型断言
        return this.a * 3; 
      },
    },
  ```

## 5.actions

在pinia中actions中所有的方法既可以是异步的也可以是同步的，和vuex的actions有所区别，



+ $onAction 的使用

  ```
  const unsubscribe = someStore.$onAction(
    ({
      name, // action 的名字
      store, // store 实例
      args, // 调用这个 action 的参数
      after, // 在这个 action 执行完毕之后，执行这个函数
      onError, // 在这个 action 抛出异常的时候，执行这个函数
    }) => {})
    
     // 此订阅将在组件卸载后保留
      someStore.$onAction(callback, true)
  ```

  

