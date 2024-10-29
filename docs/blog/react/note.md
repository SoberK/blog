# react 基础知识

## react 核心库

- react 提供 react 功能
- react-dom 绑定用的

## react 组件写法

- 函数式组件

```jsx
function Test() {
  return <div>test</div>;
}
```

- 类组件

```jsx
class Mttest extends React.Component {
  render() {
    return <div>test2</div>;
  }
}
```

- React.createElement 类似 h 函数
- 单括号渲染
  - 字符串、数字直接渲染
  - 方法：无法渲染
  - 对象：只能渲染 element
  - 布尔：不渲染任何兑现
  - 数组：把每个数组单独渲染
  - undefined、null 不渲染
  - 表达式：运行

> 组件的首字母一定要大写

## 条件渲染

- 三元运算符
- 封装方法

## 列表循环

- 数组里面放入 html 元素
- forEach、map 循环返回值 dom（常用）

## 表单绑定

- 受控组件（双向的）
- 非受控组件（只获取 input 的值）

```jsx
// 受控
  <Input value={form.a} onChange={(e)=>{
           console.log(e)
           setForm({
               ...form,
               a:e.target.value
           })
       }}></Input>
// 非受控
        <Input  value={form.b} ref={ref}></Input>
        <Button onClick={()=>{
            console.log(ref)
            console.log(ref.current.input.value)
        }}>获取值</Button>
```

## props 和组件的传值，插槽

- 所有组件所有传入的就是 props 包含插槽
- 获取 props

```jsx
// 类组件
// 在render函数中获取
render(){
    console.log(this.props)
}
//在构造函数中获取
constructor(props) {
  super(props);
  console.log("初始化实例")
}

// 插槽获取
this.props.children
```

- 插槽
  - 默认插槽
  - 具名插槽
  - 作用于插槽

```jsx
<Isx
  a={<div>a slot</div>}
  fn={(scope) => {
    return <div>{{ scope }}</div>;
  }}
  message={"zhangsan"}
>
  <div>12</div>
  <div>13</div>
</Isx>
```

- props 验证

```jsx
// 需要安装插件proptypes
Son.propTypes = {
  mes: PropTypes.string.isRequired,
};
Son.defaultProps = {
  mes: "defalut",
};
```

## css 样式

- css module

  - 命名 （xx.module.css）

  - 控制雷明的添加和筛检
    - 三元运算符

- classnames

- Css in js

## 生命周期

- 挂载
  - constructor
  - getDerivedStateFromProps
  - render 一般不做什么事，不能修改数据
  - componentDidMount 页面初始化请求
- 更新
  - getDerivedStateFromProps
  - shouldComponentUpdate(props,state) 返回 false 阻止后续更新
    - state 是修改后的值
    - this.state 是修改后的值
  - getSnapshotBeforeUpdate 获取快照
  - componentDidUpdate 一般不做什么事
- 卸载
  - componentWillUnmount 即将卸载，销毁一些定时器
- 函数式组件没有生命周期

## ref

- 只有被 ComponentDidMount 挂载后才能获取到 ref
- 只有类组件有 ref
- 用法：
  - let div1 = React.createRef()
  - <div ref={div1}>获取ref</div>

## context

```jsx
// 父级
export let Context = React.createContext({state:12})

<Context.Provider value={state}>
  <Isx a={<div>a slot</div>} fn={(scope)=>{return <div>{{scope}}</div>}} message={"zhangsan"}>
    <div>12</div>
    <div>13</div>
  </Isx>
</Context.Provider>

// 子或孙
import {Context} from '../App.tsx'
<Context.Consumer>
{
(v)=>{
  return <div>{v.age}</div>
}
}
</Context.Consumer>

```

## 函数组件

- 没有 this
- 没有生命周期
- 通过 hook 来完成操作
- 函数组件相当于 render 函数
- props 在函数的第一个参数接受
- 仅在函数组件和自定义 Hooks 中调用 Hooks
- 只能在 React 函数顶层调用

### useState

setSate({[value]: value}, callBack)

- 多次 setState，会合并一次更改，使用函数合并就不会被合并

- setState 更改同一个值会重复更新（使用 pureComponent 或这个函数组件）

- 不可变数据（重要！！！），不要去修改值，而且返回一个新的值

  - 数组 concat/filter/map 可以

  - Push/shift/unshfit/pop 都不行，因为他们是修改数组本身

  - 使用插件 immer ，可以直接修改属性的方法

    ```
    import immer from 'immer'

    setState(immer(e=>{
    e.age=1
    }))

    ```

- 不要在 render 函数值调用 setState

- setState 是异步的，如果要立即获取最新的 state，需要使用回调函数

- setState 如果 State 里面的一个值是一个对象，需要扩展运算符

- 如果页面没有用到 state，只是作为一个变量不要用 setState，用 useRef

  - Name = useRef("");Name = 1 不会更新

```jsx
state = {
  a: {
    c: "3",
    d: "2",
  },
};

this.setState({
  a: {
    ...this.state.c,
    d: "3",
  },
});
```

### useEffect

- 不传第二个参数，组件每次更新和初始化都会执行
- 传入第二个参数是空数组，相当于没有依赖，所以 update 不会执行
- 传入第二个参数是依赖，只有依赖改变才会执行

### useMemo

- 类似 computed
- 第一个参数是函数
- 第二个参数是依赖，和 useEffect 类似

### useCallBack

- 缓存一个函数

### useRef

```jsx
   const ref = useRef();

    return (
        <div>
            <Input ref={ref}></Input>
            <Button onClick={()=>{
                console.log(ref)
            }}>getRef</Button>
```

### useContext

### 自定义 hook

### 第三方 hook

- ahook
- React-use

### Hooks 使用规则

- 命名必须要用 useXxx
- 只能在组件和 hook 内调用 hook
- 不能放在 if 或者 for 里面
- 闭包陷阱
  -

## 高阶组件

- 函数接收一个组件，返回一个组件
- 类似 mixin 可以吧逻辑混入到组件中
- 包含了逻辑的操作使用高阶组件，如果包含界面的就是用组件

```jsx
import React from "react";
export default (Comp) => {
  return class extends React.Component {
    state = {
      x: 0,
      y: 0,
    };
    constructor() {
      super();
      window.addEventListener("mousemove", (e) => {
        this.setState({
          x: e.clientX,
          y: e.clientY,
        });
      });
    }
    render() {
      return <Comp {...this.props} {...this.state} />;
    }
  };
};
```

## 性能优化

### 时间切片

### fiber

### 避免 state 同样的更新

- 使用 PureComponent 函数组件
- useCallback 和 useMemo 定义非响应式状态的方法和数据
- React.memo 函数组件避免重复更新（记得第二个参数传入[]）

## react Router

- react-router
- react-router-dom
- react-router-native
- react-activation 做路由缓存

### react-router-dom

- RouterProvider 为 createBrowserRouter 服务

- BrowserRouter history 模式
- HashRouter 带#
- Link 不带样式的
- NavLink 带样式 active
- Routes 包裹 Route
- Route 匹配路由
- Navigate 路由重定向
- Outlet 嵌套路由的子路由
- useParams 获取路由 Params 参数
- useSearchParams 获取路由 Search 参数,需要解构，和 setState 一样
- useLocation 获取路由信息
- useNavigate 跳转路由 v6,第一个参数是路由地址，第二个参数是 state，
- this.props.history.push() v5
- 路由拦截
  - Navigate
  - 不生成地址
- 懒加载使用懒加载的时候必须要被 Suspense 包裹
  - lazy
  - Suspense

## 状态管理

- react-redux
  - redux
  - reduxjs/toolkit
- react-mobx

### redux

npm i react-redux @reduxjs/toolkit -S

三个包分别是干嘛的

- reudx 是一个 js 库，可以改变状态又 store 的核心功能
- React-redux 是将绑定 store 和界面的一个库（必须），用来响应式页面的
  - useSelector 函数式组件用来获取 state 的方法
  - useDispatch 函数式组件分发方法的方法
  - Provider 用来包过组件，传入 Store 将数据全部提供给组件
  - connect 用来连接类组件和 store 的关系
- Redux-toolkit 是 redux 的高级版，用来更方便的创建 store
  - configureStore 用来将切片全部绑定在一起合并成 store
  - createSlice 创建切片
  - createAsyncThunk 创建异步切片

下面以 react-redux 和 redux-toolkit 为例说一下流程

```js
//	store/index.js
import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

//定义一个store
//单纯一个请求
const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "张三",
      });
    }, 3000);
  });
};
//导出一个异步请求
export const fetchData = createAsyncThunk("appSlice/fecth", async (params) => {
  console.log(params);
  let res = await getUser();
  return res;
});

// 创建切片
const appSlice = createSlice({
  name: "apptest",
  initialState: {
    count: 0,
    status: false,
    data: {
      name: 121,
    },
  },
  reducers: {
    add(state) {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = false;
        state.data = { ...action.payload };
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = false;
      });
  },
});
// 创建store
const store = configureStore({
  reducer: {
    counter: appSlice.reducer,
  },
});
//暴露出去
export const { add } = appSlice.actions;
export default store;
```

```jsx
import store from "./store";
import { Provider } from "react-redux";
//mian.js
<Provider store={store}>
  <App2 />
</Provider>;
```

```jsx
// 函数组件
import { useSelector, useDispatch } from "react-redux";
import { add } from "./store";
import ClassRedux from "./components/classRedux.tsx";
function App() {
  let count = useSelector((state) => state.counter.count);
  let dispatch = useDispatch();
  console.log(add());
  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(add());
        }}
      >
        add
      </button>
      <ClassRedux></ClassRedux>
    </>
  );
}

export default App;
```

```jsx
//类组件
import react from "react";
import { connect } from "react-redux";
import { add, fetchData } from "../store";

class ClassRedux extends react.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        {this.props.counter.count}
        <button
          onClick={() => {
            this.props.couterDispatch();
          }}
        >
          add2
        </button>
        <button
          onClick={() => {
            this.props.fetchData();
          }}
        >
          add3
        </button>
        <div>{this.props.counter.data.name}</div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    console.log(state);
    return {
      counter: state.counter,
    };
  },
  (dispatch, ownProps) => {
    return {
      couterDispatch() {
        dispatch(add());
      },
      fetchData() {
        dispatch(fetchData());
      },
    };
  }
)(ClassRedux);
```

## StrickMode

- 检测危险操作
- 生命周期函数执行两次

## pureComponent

- 更新取决于内存地址
- 子组件会有组件更新优化

## hooks

### useCallback

> 是一个允许你在多次渲染中缓存函数的 React Hook

用法：

- 跳过方法的重新定义
- 从缓存中获取旧的 state
  以下列子，可以获取缓存的 state

```tsx
const LayOut: React.FC = () => {
  const [input, setInput] = React.useState(0);
  const cl = useCallback(() => {
    console.log(input);
  }, []);

  console.log("整个组件变化了");

  // setInput('2')

  return (
    <div>
      home|
      <button onClick={() => cl()}>cl</button>|<button
        onClick={() => setInput(input + 1)}
      >
        set
      </button>
      {input}
    </div>
  );
};
```

- 防止 useEffect 触发
- 自定义一般的纯函数函数可以包裹，用以优化性能 (用途最广)

```tsx
const navigate = useCallback(
  (url) => {
    dispatch({ type: "navigate", url });
  },
  [dispatch]
);
```

总结：在写方法的时候要有意识的考虑 useCallBack

### useContext

> 可以让你读取和订阅组件中的 context。

```tsx
// 父组件
import React, { useState, createContext } from "react";
import AppWithContext from "./test.tsx";
export const ThContext = createContext({ state: 12 });

export default () => {
  const [state, setState] = useState({ state: 32 });
  return (
    <ThContext.Provider value={state}>
      <div>
        <div>{state.state}</div>

        <AppWithContext></AppWithContext>
        <button onClick={() => setState({ state: state.state + 1 })}>+</button>
      </div>
    </ThContext.Provider>
  );
};

//子组件
import { ThContext } from "./index.tsx";
import { useContext } from "react";

const AppWithContext = () => {
  const state = useContext(ThContext);
  return <div>user:{state.state}</div>;
};

export default AppWithContext;
```

### useEffect

> 是一个 React Hook，它允许你将组件与外部系统同步

- useEffect 生命周期的绑定和卸载功能，依赖功能
  - 第一个回调函数中调用 mount
  - 第一个回调函数中 return 函数调用 unmount
  - 第二个参数为依赖
    - 不传值，则每次渲染都会执行
    - 传入[]，只渲染一次
    - 传入[a,b]，当 a 或者 b 改变时执行

```tsx
useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();
  return () => {
    connection.disconnect();
  };
}, [serverUrl, roomId]);
```

### useId

> 生成一个唯一的 id

### useImperativeHandle

> react 通过 ref 访问自定义组件的 ref 返回一般是空的，如果我想用子组件的一些值，而不是用 props 传入的话，类似 vue 的 this.$refs.input,这个时候就用到 forwardRef 和 useImperativeHandle 配合使用.
> useImperativeHandle 是 React 中的一个 Hook，它能让你自定义由 ref 暴露出来的句柄。
> 说白了就是 vue 中的 ref,可以自定义 ref 获取的值,劲量少使用 ref 以及 useImperativeHandle

- useImperativeHandle 返回的对象就是父级调用 ref 能获取到的内容

```tsx
// 父组件
const ref = useRef(111);
<AppWithContext ref={ref} ></AppWithContext>
<Button onClick={()=>{
  console.log(ref.current.cc)
  console.log(ref.current.a)
}}>change</Button>
//子组件
const AppWithContext = forwardRef((props, ref) =>{
  useImperativeHandle(
          ref,
          () => {
            return {
              a:2,
              cc(){
                  console.log(1)
              }
            }
          },
  );

  return (
          <div>
            <input type="text" ref={ref}/>
            user
          </div>
  )
})


```

### useMemo

- 记忆函数
- 记忆不变的变量
- 记忆依赖项

## 项目

### 从 create-react-app 创建项目到部署上线



```shell
#创建项目
npm create vite@latest
```

### 安装 husk 以及 commitlint

```shell
#安装husky
 npm i husky -D
 npx husky init
 echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
 #这样就不需要每次add了
 修改./husky/pre-commit 内容为 git add .
#安装commitlint
# 创建commitlint.config.js
 npm install --save-dev @commitlint/{cli,config-conventional}
#  添加官方配置
 echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
# pre-commit用来自定义的钩子
# commit-msg是提交钩子校验

# feat 新增
# fix 修复bug
# docs 修改文档
# build 构建
# chore 零碎的事
# ci 那里
# perf 性能
# refactor 重构
# revert 恢复
# style 风格
# test 测试
```

## ts 的泛型

### FC<propType>

### useRef<HTMLInputElement>()

## 项目开发插件

### immer

```tsx
// 修改
setData(
  produce((drap) => {
    const index = drap.findIndex((e) => e.id === id);
    if (index) drap[index].status = 1;
  })
);
```

### Craco.js 用于扩展 webpack

- 在 createApp 的时候用

### classnames 用来动态改变类名用的

### ahook

- useRequest

### 设计 Restful 文档接口文档

## 遇到的坑

### ts 遇到的问题

- "@typescript-eslint/no-explicit-any": ["off"], 不允许 any
- vite.config.ts 添加别名之后 webstorm 仍然无法识别，需要再 tsconfig.app/node.json 中添加"paths": {"@/_": ["./src/_"]}

### 懒加载导致 useContext 不更新（耗时 3 个小时）

场景：在上下父子组件中，父子组件跨文件时（一个文件不会有问题），父级使用 context.Provider,子组件使用 useContext，导致父组件状态改变，子组件的 context 状态不更新。

```tsx
// 父组件
import React, { useState, createContext } from "react";
import AppWithContext from "./test.tsx";
export const ThContext = createContext({ state: 12 });

export default () => {
  const [state, setState] = useState({ state: 32 });
  return (
    <ThContext.Provider value={state}>
      <div>
        <div>{state.state}</div>

        <AppWithContext></AppWithContext>
        <button onClick={() => setState({ state: state.state + 1 })}>+</button>
      </div>
    </ThContext.Provider>
  );
};

//子组件
import { ThContext } from "./index.tsx";
import { useContext } from "react";

const AppWithContext = () => {
  const state = useContext(ThContext);
  return <div>user:{state.state}</div>;
};

export default AppWithContext;
```

解决办法：查询各种资料都无果，没有类似的问题，所以不要使用 UseContext，尽量使用 redux
