---
title: 面试题 - vue面试题
date: 2022-10-02 16:19:00
category: 面试题
tag: js
# password: 123789
# abstract: 这里有东西被加密了，需要输入密码查看哦。
# message: 您好，这里需要密码。
# wrong_pass_message: 抱歉，这个密码看着不太对，请再试试。
# wrong_hash_message: 抱歉，这个文章不能被纠正，不过您还是能看看解密后的内容。
---

#### 1、vue的生命周期
+ beforeCreate 在vue实例前触发的钩子函数，在methods、data、computed、watch内都不能访问到该实例，在该阶段一般进行实例的初始化
+ created 在此刻实例已经被初始化，data可以获取到，可以在这边进行一个数据请求，如果要在进行访问data，可以在nextTick种请求
+ beforeMount 在这之前template模版已经导入了渲染函数编译，当前阶段虚拟dom已经创建完毕，即将开始渲染，不会触发update
+ mounted 在挂载完成发生，当前真事的dom挂在完毕，数据完成双向绑定，可以绑定到dom节点
+ beforeUpdate  发生在数据更新之前，虚拟dom重新渲染之前被触发，可以在当前阶段进行数据更改，不回造成数据重复渲染。
+ updated 发生在数据更新完成之后，当前阶段dom已经完成更新，要避免次阶段进行数据更改，因为这会导致无线循环的更新
+ beforeDestory vue2的函数，在实例销毁之前发生，此时实例还可以被使用，可以进行善后工作比如销毁定时器
+ destory 发生在实例销毁之后，此时只剩dom空壳，组件已被拆解，数据绑定被卸除，监听被移除，子实例也被销毁
+ beforeUnmont vue3的销毁之前的生命周期函数
+ unmounted vue3的解绑生命周期函数
+ actived 当路由被激活
+ deactivated 退出路由之后调用

#### 2、生命周期调用的顺序

+ 组件调用顺序都是先父后子，渲染完成的顺序都是先子后父
+ 组件销毁的过程是先父后子，销毁完成的顺序也是先子后父

+ 创建顺序：
父beforecreate-> 父created -> 父beforemount -> 子beforecreate-> 子created ->子beforemount->子 mounted ->父 mounted 

+ 更新顺序：
父beforeupdate->子beforeUpdate->子updated->父updated

+ 销毁顺序：
父beforeDestory->子beforeDestory->子destoryed->父destoryed


#### 3、组件通讯方式

+ 父子通讯
  + 父传子props,$refs，$children 
  + 子传父$emit，parent、
  + inject / provide
+ 兄弟之间传递组件
  + eventBus
  + vuex


#### 4、computed 和 watch的区别
首先这个无法用来对比，computed是用来计算得出一个属性，相比data、和methods，计算属性是拥有缓存的。而data和methods每次，watch是监听一些值的变化，也可以是对象，如果对象的话，需要设置deep，以及handle方法，没有缓存。

#### 5、使用beforeDestory的场景

+ 基础自定义事件，$emit.off()
+ 清楚定时器
+ 解绑事件，比如window.scroll

#### 6、事件修饰符
+ .stop 防止事件冒泡
+ .prevent 组织默认事件
+ .once 只会触发一次
+ .self 智慧触发自己范围的事件，不包含子元素
+ .capture 事件捕获

#### 7、常用的指令
v-text
v-html
v-for 
v-show 
v-if
v-bind
v-model

#### 8、vue性能优化
+ 尽可能减少data数据，会增加getter和setter，回收机对应的watch。
+ v-if和v-for不能同时使用
+ v-for的时候，使用key来保证唯一性
+ 使用keep-alive实现组件缓存
+ 使用一步加载
+ 防抖节流
+ 第三方模块按需引入

#### 9、路由的hash和history路由实现

1、hash模式中间带了#号，不美观
2、hostory 中通过后端的url一致，但是需要配置nginx

#### 10、data为什么是函数
组件如果被重复使用的话，就会创建多个实例，这些事例用的都是一个后槽函数，如果data是对象的话，对象属于应用类型，会影响到所有的实例。






