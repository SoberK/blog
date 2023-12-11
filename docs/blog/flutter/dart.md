# dart

## Feature简介
类似js的promise，flutter时间循环有microtask 和eventTask, event队列包含所有的外来事件：I/O，mouse events，drawing events，timers，isolate之间的message等。一般Future创建的事件是属于event队列的，所以创建一个Future后，会插入到event队列中，顺序执行。

### Future 
```dart
Future createFuture()async{
  return 1;
}
var future=createFuture();
print(future.runtimeType);。//输出结果为Future<dynamic>

var future = Future(() {
  print("哈哈哈");
});
print("111");
//111
//哈哈哈

```

### Future.value()
``` dart
var future=Future.value(1);
print(future);
//Instance of 'Future<int>'
```

### Future.delayed（） 延迟器

``` dart 
var futureDelayed = Future.delayed(Duration(seconds: 2), () {
  print("Future.delayed");
  return 2;
});
```
### Future.forEach(Iterable elements, FutureOr action(T element)) 迭代器

``` dart
Future.forEach({1,2,3}, (num){
  return Future.delayed(Duration(seconds: num),(){print(num);});
});

```

### Future.wait ( Iterable<Future> futures,{bool eagerError: false, void cleanUp(T successValue)}) 等待全部结束，promise.all
``` dart
var future1 = new Future.delayed(new Duration(seconds: 1), () => 1);
var future2 =
    new Future.delayed(new Duration(seconds: 2), () => 2);
var future3 = new Future.delayed(new Duration(seconds: 3), () => 3);
Future.wait({future1,future2,future3}).then(print).catchError(print);
//运行结果： [1, 2, 3]

```


### Future.any（futures） 一个完成就返回，promise.race

``` dart
 Future
      .any([1, 2, 5].map(
          (delay) => new Future.delayed(new Duration(seconds: delay), () => delay)))
      .then(print)
      .catchError(print);

```

### Future.microtask(FutureOr computation()) 创建一个微任务在Fture上运行，一半优先于其他的Future

``` dart
Future((){
  print("Future event 1");
});
Future((){
  print("Future event 2");
});
Future.microtask((){
 print("microtask event");
});
//输出结果
//microtask event
//Future event 1
//Future event 2

```

### Future.then（） 回调  prmise.then
``` dart
Future.value(1).then((value) {
  return Future.value(value + 2);
}).then((value) {
  return Future.value(value + 3);
}).then(print);
//打印结果为6
```

### Future.cathcError（） prmise.catch

``` dart
Future.value(1).then().catchError((e){})
```

### Future.whenComplete()   prmise.complate

``` dart
Future.value(1).then().catchError((e){}).whenComplate()
```

