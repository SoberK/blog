# react-toolkit

## 入门使用

1. 安装依赖
2. 创建分片
3. 创建redux
4. redux提供给react并且复制给store
5. 应用中使用获取/分发

``` javascript
npm i @redux-toolkit react-redux //#1

const counterStore = createSlice({  //#2
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        add(state,action){
            state.count+= action.payload
        },
        reducer(state,action){
            state.count-= action.payload
        },
    },
})
export const {add,reducer} = counterStore.actions; //导出actions
export default counterStore.reducer;

export default configureStore({ //#3
    reducer:{
        counterStore,
        channelStore
    },
})

ReactDOM.createRoot(document.getElementById('root')).render( //#4
    <React.StrictMode>
            <Provider store={store}>
                ......
            </Provider>
  </React.StrictMode>,
)


 const dispatch = useDispatch() //#5 分发
 dispatch(add(1))
 dispatch(reducer(1))

const count = useSelector(state=>{ //获取值
  return state.counterStore.count
 })

```

## redux-persist 持久化

1. 安装redux-persist
2. 把所有的combineReducers
3. 配置persist并导出
4. dom处添加persist

``` javascript
npm i redux-persist -S //#1

import {combineReducers} from "@reduxjs/toolkit"; //#2
import counterStore from "./countStore.js";
import channelStore from "./channelStore.js";

export  default combineReducers({
    counterStore,
    channelStore
})

import {configureStore, } from "@reduxjs/toolkit"; //#3
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
import rootReducer from './modules/index.js'
const persistConfig = {
    key: 'roots',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export  const store = configureStore({
    reducer: persistedReducer,
    middleware:(getDefaultMiddleware=>[
        ...getDefaultMiddleware({serializableCheck:false})
    ]),
});
export let persistor = persistStore(store)



ReactDOM.createRoot(document.getElementById('root')).render( //#4
    <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RouterProvider router={ router} />
                </PersistGate>
            </Provider>
  </React.StrictMode>,
)

```
