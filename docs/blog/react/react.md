# hooks

## useCallback

1.第一个参数回调会存储缓存
2.第二个是依赖，只有依赖变化后，回调的缓存才会变化，类似vue的computed 的method缓存一样
3.应用场景
    + 跳过组件的刷新优化
    + 从记忆中回调更新state
    + 防止平凡effect触发
    + 
``` javascript

function Child(){
    let [index,setIndex] = useState(0)
    const add = ()=>{
        setIndex(index+1);
    }
    const reducer = ()=>{
        setIndex(index-1);
    }
    const submit = useCallback(()=>{
        console.log(index)
    },[index])

    return <div>
        <button onClick={add}>+</button>
        <button>{index}</button>
        <button onClick={reducer}>-</button>
        <button onClick={submit}>test</button>
    </div>
}
```

## useMemo和React.M

1.第一个参数回调会存储缓存
2.第二个是依赖，只有依赖变化后，回调的缓存才会变化，更像vue中的computed
3.要返回一个值

``` javascript
//当count变化的时候该计算没有被重新执行 
function Child(){
    let [index,setIndex] = useState(0)
    const add = ()=>{
        setIndex(index+1);
    }
    const reducer = ()=>{
        setIndex(index-1);
    }
    const submit = useCallback(()=>{
        console.log(index)
    },[index])
    const computedCount = useMemo(()=>{
        console.log('大量计算')
        return 212222222222*1024
    },[])
    return <div>
        <button onClick={add}>+</button>
        <button>{index}</button>
        <button>{computedCount}</button>
        {/*<Meo indeex={index}></Meo>*/}
        <button onClick={reducer}>-</button>
        <button onClick={submit}>test</button>
    </div>
}
```

## useContext 和useReducer

1、一般这两个api是同时使用
2、useReducer(reducer, initialState)
3、useContext 和 createContext() 以及context.Provider配合使用

``` javascript
//ContextProvider.js
import {createContext} from "react";
import {useReducer} from "react";

export const ThemeContext = createContext();  //创建一个当前组件的的context，所有的内容传入进去
export const reducer = (state,action)=>{//创建一个reducer
    if(action.type==='change'){
        return {
            ...state,
            name:state.name+1
        }
    }
}
export const initialState = {//初始值
    name:1
}


function ContextProvider({children}) { //写一个组件
    const [state] = useReducer(reducer, initialState);
    console.log(state)
    return ( //使用provider封装，value为你需要传递的方法或者值
        <ThemeContext.Provider className="Provider" value={{state,dispatch}}> 
            {children}
        </ThemeContext.Provider>
    );
}

export default ContextProvider;

//使用

  <ContextProvider>
    <UseReduxTest />
  </ContextProvider>

  //UseReduxTest 组件内部


import {useContext} from "react";
import {ThemeContext} from "./contextProvider.jsx";
import {Button} from "antd";
function UseReduxTest() {
    const {state:{name},dispatch} = useContext(ThemeContext); //获取context，使用
    return (
        <>
          <div>{name}</div>
            <Button onClick={()=>dispatch({type:'change'})}>添加</Button>
        </>
    );
}

export default UseReduxTest;


```

## useRef
1、用来访问dom元素
2、保存状态但不触发渲染
3、保存上一次的 props 或 state

## useDeferredValue 
1、延迟加载值，比如多次输入获取最后一次的值，类似debounce
2、18支持

## useInsertionEffect
