// .vuepress/config.js
module.exports = {
    // base:'https://SoberK.github.io/blog/',
    themeConfig: {
        nav: [
            { text: '面试', link: '/interview/' },
        ],
        sidebar:{
            '/interview/':[
                {
                    title: '2周面试',
                    children: [
                        '/interview/ms/第七章 工作经验', 
                        '/interview/ms/第七章 真实项目',
                        '/interview/ms/第九章 解决问题',
                        '/interview/ms/第二、三章 算法结构和算法',
                        '/interview/ms/第五章 知识深度-原理源码',
                        '/interview/ms/第八章 手写',
                        '/interview/ms/第六章 知识广度',
                        '/interview/ms/第四章 基础面试'],
                },
                {
                    title: 'js相关',
                    children: [
                        '/interview/js/js', 
                        '/interview/js/map和weakMap',
                         '/interview/js/事件循环', 
                         '/interview/js/原型'
                       ],
                },
                {
                    title: 'vue相关',
                    children: [
                        '/interview/vue/0.vue',
                        '/interview/vue/1.组件通讯',
                        '/interview/vue/2.v-if和v-for',
                        '/interview/vue/3.简述vue生命周期',
                        '/interview/vue/4.vue中如何扩展一个组件',
                        '/interview/vue/5.说一下双向绑定的使用和原理',
                        '/interview/vue/6.子组件可以直接改变父组件的数据嘛？',
                        '/interview/vue/7.vue做权限管理怎么做',
                        '/interview/vue/8.说一说对vue响应式的理解',
                        '/interview/vue/9.虚拟dom',
                        '/interview/vue/10.你了解diff算法吗？',
                        '/interview/vue/11.vue3差异性',
                        '/interview/vue/12vue-router动态路由有什么用',
                        '/interview/vue/13.说说key的作用？',
                        '/interview/vue/14.说说nextTick使用原理',
                        '/interview/vue/15.watch和computed的区别以及选择',
                        '/interview/vue/16.说一下vue子组件和父组件的创建和挂在顺序',
                        '/interview/vue/17.怎么缓存当前的组件？缓存后怎么更新',
                        '/interview/vue/18.工作中有哪些最佳实践',
                        '/interview/vue/19从0到1怎么构建一个vue的应用',
                        '/interview/vue/20.简单说一下vuex理解',
                        '/interview/vue/21.从template到render处理过程',
                        '/interview/vue/22.vue实例挂在中发生了什么',
                        '/interview/vue/23.vue3的设计目标和优化点有哪些',
                        '/interview/vue/24.你了解哪些vue性能优化的方法',
                        '/interview/vue/25.vue组件中为什么只有一个根节点',
                        '/interview/vue/26.有没有使用vuex的module',
                        '/interview/vue/27.怎么实现路由懒加载',
                        '/interview/vue/28.ref和reactive有何差异',
                        '/interview/vue/29.watch和watchEffect的异同',
                        '/interview/vue/30.vue-loader是什么',
                        '/interview/vue/31.spa和SSr的区别是什么',
                        '/interview/vue/32.你写过自定义指令嘛？自定义指令的场景事哪些',
                        '/interview/vue/33.$attrs和$listeners',
                        '/interview/vue/34.v-once使用场景',
                        '/interview/vue/35.什么是递归组件',
                        '/interview/vue/36.异步组件是什么？',
                        '/interview/vue/37.你是怎么处理vue项目中的错误的',
                        '/interview/vue/38.mutation和action的区别',
                        '/interview/vue/39.使用vue渲染大量数据时怎么优化？说下思路',
                        '/interview/vue/40.怎么监听vuex中数据的变化',
                        '/interview/vue/41.router-link和router-view是如何起作用的',
                        '/interview/vue/42.vue3性能提升',
                        '/interview/vue/43.vue3为什么用proxy代替defineProperty',
                        '/interview/vue/44.history和hash模式有何区别',
                        '/interview/vue/45.再什么场景下会使用到嵌套路由',
                        '/interview/vue/47.页面刷新后vuex的state数据丢怎么解决？',
                        '/interview/vue/48.你觉得vuex有什么缺点',
                        '/interview/vue/49.compositonApi和optionApi的区别',
                        '/interview/vue/50.v-if和v-show的区别'
                    ],
                },
                
            ],
           
        }
    }
}