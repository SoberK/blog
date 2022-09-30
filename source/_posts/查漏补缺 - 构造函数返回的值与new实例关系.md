---
title: 查漏补缺 - 构造函数返回的值与new实例关系
date: 2022-08-13 10:24:31
category: 查漏补缺
tag: question
---

# 构造函数返回的值与 new 实例关系

new 一个构造函数，如果函数返回 return {}、return null 、return 1,return true 会发生什么情况?

```
function newNull(){return null}    //返回 ｛｝
function newUndefined(){return undefined}    //返回 ｛｝
function newNumber(){return 1}    //返回 ｛｝
function newBoolean(){return true}    //返回 ｛｝
function newSymbol(){return Symbol()}    //返回 ｛｝
function newObject(){return {a:1}}    //返回 {a:1}
function newArray(){return [1,2]}    //返回 [1,2]
```

> 由此得出结论，基本返回的是基本类型返回空对象，如果返回引用类型返回的就是返回的值
