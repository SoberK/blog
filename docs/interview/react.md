### 1.说一下React生命周期

**三个阶段：**

1. 挂载时: 首次实例化组件被挂载时，主要的生命周期有：constructor, render,componentDidMount
2. 更新时: 当组件的props或者state 更新时执行， componentDidUpdate和一个静态方法，返回最新的state
3. 卸载时: 当组件卸载或销毁时，componentsWillUnmount

### 2.React Hooks

**useState:** 接受一个初始值返回一个新的state和一个更新state的函数。

**useEffect:** 接受两个参数，一个包含命令式和有可能有副作用代码的函数以及一个依赖值数组。 执行时机：在浏览器绘制之后并且保证在任何新的渲染之前执行。如果想在绘制之前执行可以使用useLayoutEffect代替

**useContext:** 接受一个context对象（Racet.creatContext返回值）返回该context的当前值。

额外的Hooks(如下)：大多数是useState和useEffect的变体，在某些特殊情况下用起来更好。

**useReducer:** 类似于redux机制，接受一个reducer和一个initialState,返回一个state和dispatch方法。 在某些场景下代替uesState，比如：state逻辑复杂并且包含多个子值，或者下一个state依赖于上一个state.

**useMemo和uesCallback:** 作用：用法类似都是用于减少渲染次数，达到优化性能的作用。 useMemo(() => fn, [deps]) = useCallback(fn, [deps]) 他们唯一的区别是：useCallback是根据依赖项（deps）缓存第一个参数callback。useMemo是根据依赖项（deps）缓存第一个参数callback执行后的值。

