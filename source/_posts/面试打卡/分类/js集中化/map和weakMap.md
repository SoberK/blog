### map和set

map和对象的区别就是

#### Set

​	它类似于数组，但是成员的值都是唯一的，没有重复的值。

​	方法：has、add、delete、clear

​	遍历方法：keys()、values()、entries()、forEach()

​	常用的方法：Array.from(new Set([1,1,2,3,5]))

#### weakSet

​	WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。首先，WeakSet 的成员只能是对	象，而不能是其他类型的值。

#### Map

​	和object不同，key可以为任何值，

​	方法：set、get、has、size、delete、clear

​	遍历方法：keys()、values()、entries()、forEach()

​	下面的例子展示了如何向 Map 添加成员。作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示	键值对的数组。

```javascript
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

```

​	连续赋值两次，后一次的值覆盖前一次的值。

+ Map->Array

  ```javascript
  const myMap = new Map()
    .set(true, 7)
    .set({foo: 3}, ['abc']);
  [...myMap]
  ```

  

+ Array->Map

  ```javascript
  new Map([
    [true, 7],
    [{foo: 3}, ['abc']]
  ])
  ```

+ Map->Object

  如果所有 Map 的键都是字符串，它可以无损地转为对象。

  ```javascript
  function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
      obj[k] = v;
    }
    return obj;
  }
  
  const myMap = new Map()
    .set('yes', true)
    .set('no', false);
  strMapToObj(myMap)
  // { yes: true, no: false }
  ```

  

+ Object->Map

  ```javascript
  let obj = {"a":1, "b":2};
  let map = new Map(Object.entries(obj));
  ```

  

+ Map->Json

+ Json->Map

### WeakMap

​	首先，`WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名。

​	weakMap是弱引用，不用了会被垃圾回收，但是map是强引用，要手动清理