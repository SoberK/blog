# js 问题合集

## js 精度问题

主要是因为 js 采用了双精度浮点数进行计算标准，小数位只能存 64 位，这意味着某些十进制数在转换为二进制时不能精确地表示，使用 big.js 或者 decimeal.js 来解决或者使用 toFixed 来表示

## 作用域和闭包

作用域

- 全局作用域：任何不在函数中或是大括号中声明的变量，都是在全局作用域下，全局作用域下声明的变量可以在程序的任意位置访问
- 函数作用域：函数作用域也叫局部作用域，如果一个变量是在函数内部声明的它就在一个函数作用域下面。这些变量只能在函数内部访问，不能在函数以外去访问
- 块级作用域：ES6 引入了`let`和`const`关键字,和`var`关键字不同，在大括号中使用`let`和`const`声明的变量存在于块级作用域中。在大括号之外不能访问这些变量

> 什么是作用链

当访问一个变量时，解释器会首先在当前作用域中查找标识符，如果没找到，就去父作用域找，直到找到该变量的标识符或没找到为止。这条寻找的链路就叫作用域链

> 什么是闭包

在 JavaScript 中，根据词法作用域的规则，内部函数总是可以访问其外部函数当中声明的变量；当调用通过外部函数返回的内部函数时，即使此时外部函数已经执行结束，但是内部函数所引用外部函数的变量依然保存在内存中，我们把这些变量的集合称为闭包

> 闭包怎么产生的

当函数存在对其所在词法作用域的引用，而该函数被拿到当前词法作用域外执行，此时就产生了闭包。

> 在工作中，哪些地方使用到了闭包

- return 一个函数
- 函数作为参数
- IIFE 自执行函数

> 为什么要使用闭包？/ 闭包的好处？

- 保护函数的私有变量不受外部干扰。形成不销毁的栈内存
- 把一些函数内的值保存下来。闭包可以实现方法和属性的私有化

> 闭包变量怎么回收呢？

- 如果是全局变量被作为闭包变量的话，则该闭包变量会一直保存到页面关闭。（因为全局上下文会一直存在，不会被回收，除非页面关闭）

- 如果是局部变量被作为闭包变量的话，下面分两种情况讨论

  - 立马执行时会自动回收

    ```javascript
    function a() {
      var b = 10;
      return function () {
        b++;
        console.log(num);
      };
    }
    a()(); //11
    a()(); //11
    ```

  - 不回立马被执行

    ```javascript
    function a() {
      var b = 0;
      return function () {
        b++;
        console.log(b);
      };
    }
    var d = a();
    d(); //1
    d(); //2
    ```

## JS 数据类型

- 原始值：

  - string
  - number
  - boolean
  - undefined
  - null
  - symbol
  - Bigint

- 引用类型
  - OBject
  - Array
  - RegExp
  - Date
  - Math
  - Function

主要说下 bitint,bigint 是 Es2020 出现的，主要弥补 number 的精度丢失的异常，再最后使用 n，来标识，也可用 BigInt 方法来写的

```javascript
const s = 12312312312312n;
const s = BigInt(12312312312312);
```

## JS 类型判断

- typeof
- instanceof 所有引用类型，
- Object.prototype.toString.call() 判断浏览器内置对象
- Constructor 对 number 和 null 无效

## JS 的深拷贝和浅拷贝的方法

- Object.assign(目标对象,源对象)
- [...arr]
- Array.protype.concat()
- JSON.parse(JSON.stringify())
- concat
- slice

## this 的指向问题

- 默认调用，指向 window

- 对象调用，指向该对象

- 做构造函数使用，指向实例对象

- 箭头函数，执行函数所在的作用域

- Call,apply,bind 指向传入的第一个参数

  ```javascript
  function a(pa, pb) {
    console.log(pa);
    console.log(pb);
  }
  a.call(this, "1", 2);
  a.apply(this, ["1", 2]);
  a.bind(this, "1", 2); //和call差不多，但是不会执行
  ```

## JS 原型和原型链

> 什么事原型对象

每一个 JavaScript 对象(null 除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型对象，每一个对象都会从原型"继承"属性。

> 函数的原型和对象的原型：

- 每个函数都有一个 prototype 属性，该属性指向函数的原型

- 每个对象都有一个**proto**属性，该属性指向对象的原型

> 什么是原型链

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。这条查找的路径就叫原型链

## 9.null 和 undefined 区别

> 简单点理解： undefined 表示值不存在，null 表示值存在但是为空，没有意义；

```
null == undefined // true
null === undefined // fasle
// typeof null 为 Object, typeof undefined 为 undefined
```

## 函数柯里化、偏函数、纯函数、高阶函数

- 函数柯里化：将能够接收多个参数的函数转化为接收单一参数的函数，并且返回接收余下参数且返回结果的新函数的技术。
- 偏函数：固定多个参数，并将剩余的参数作为单一的参数的函数，并返回接受余下的参数
- 纯函数：没有任何副作用的函数，输入和输出使用是一个值
- 高阶函数：将参数当做函数传入

```java
const add = function add(x) {
    return function (y) {
        return x + y
    }
}
const add1 = add(1)
add1(2) === 3
```

## 节流防抖

防抖： 每次有请求是继续延长时间，如：输入框输入请求，延迟 1 秒钟，一秒内还有请求继续延迟
节流：固定个时间请求。滚动滚轮，拖拽等高频事件

```javascript
// 防抖
function debounce(fn, time) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}
// 节流
function throttle(fn, time) {
  let canRun = true;
  return function () {
    if (!canRun) {
      return;
    }
    canRun = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, time);
  };
}
```

## 箭头函数和普通函数区别

- 不能 new
- this 指向
- 不能使用 arguments
- 没有原型属性
- 不能当作 generator 函数，不能使用 yeid 关键字
- this 指向不同
- 箭头函数没有原型 prototype
- 返回对象字面量时需要使用括号
- 箭头函数的 this 永远不会变，call、apply、bind 也无法改变

## new 运算符的实现机制

1. 首先创建了一个新的`空对象`
2. `设置原型`，将对象的原型设置为函数的`prototype`对象。
3. 让函数的`this`指向这个对象，执行构造函数的代码（为这个新对象添加属性）
4. 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

## ES6 中新增的 Set、Map 两种数据结构怎么理解?

`Set`没有重复的值，我们一般称为集合,强引用，不回被垃圾回收

​ 方法：has、add、delete、clear
​ 遍历方法：keys()、values()、entries()、forEach()
​ 常用的方法：Array.from(new Set([1,1,2,3,5]))

`Map`类型是键值对的有序列表，而键和值都可以是任意类型，强引用，不回被垃圾回收

​ 和 object 不同，key 可以为任何值，
​ 方法：set、get、has、size、delete、clear
​ 遍历方法：keys()、values()、entries()、forEach()
​ 下面的例子展示了如何向 Map 添加成员。作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示 键值对的数组。

```javascript
const map = new Map([
  ["name", "张三"],
  ["title", "Author"],
]);
```

在`API`中`WeakSet`与`Set`有两个区别：

- 没有遍历操作的`API`
- 没有`size`属性

`WeackSet`只能成员只能是引用类型，而不能是其他类型的值
`WeakSet `里面的引用只要在外部消失，它在 `WeakSet `里面的引用就会自动消失
`WeakMap`结构与`Map`结构类似，也是用于生成键值对的集合
在`API`中`WeakMap`与`Map`有两个区别：

- 没有遍历操作的`API`
- 没有`clear`清空方法

`WeakMap`只接受对象或这 symbol 作为键名（`null`除外），不接受其他类型的值作为键名

`WeakMap`的键名所指向的对象，一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用

## 说说你对函数式编程的理解，以及优缺点？

相比命令式编程，函数式编程更加强调程序执行的结果而非执行的过程，倡导利用若干简单的执行单元让计算结果不断渐进，逐层推导复杂的运算，而非设计一个复杂的执行过程

- 高阶函数：函数作为参数
- 纯函数：没有副作用
- 柯里化：多元函数转为一元函数的过程，
  - 关于柯里化函数的意义如下：
    - 让纯函数更纯，每次接受一个参数，松散解耦
    - 惰性执行

#### 优点

- 更好的管理状态：因为它的宗旨是无状态，或者说更少的状态，能最大化的减少这些未知、优化代码、减少出错情况
- 更简单的复用：固定输入->固定输出，没有其他外部变量影响，并且无副作用。这样代码复用时，完全不需要考虑它的内部实现和外部影响
- 更优雅的组合：往大的说，网页是由各个组件组成的。往小的说，一个函数也可能是由多个小函数组成的。更强的复用性，带来更强大的组合性
- 隐性好处。减少代码量，提高维护性

#### 缺点：

- 性能：函数式编程相对于指令式编程，性能绝对是一个短板，因为它往往会对一个方法进行过度包装，从而产生上下文切换的性能开销
- 资源占用：在 JS 中为了实现对象状态的不可变，往往会创建新的对象，因此，它对垃圾回收所产生的压力远远超过其他编程方式
- 递归陷阱：在函数式编程中，为了实现迭代，通常会采用递归操作

## null 和 undefined 有什么区别？

首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。

undefined 代表的含义是未定义，null 代表的含义是空对象

当对这两种类型使用 typeof 进行判断时，Null 类型化会返回 “object”，这是一个历史遗留的问题。当使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。

## 类的创建和继承

### 原型链继承

- 特点：基于原型链，既是父类的实例，也是子类的实例
- 缺点：无法实现多继承

```javascript
function Cat() {}
Cat.prototype = new Animal();
Cat.prototype.name = "cat";
```

### 构造继承

- 特点：可以实现多继承
- 缺点：只能继承父类实例的属性和方法，不能继承原型上的属性和方法。

```javascript
function Cat(name) {
  Animal.call(this);
  this.name = name || "Tom";
}
// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true
```

### 组合继承

相当于构造继承和原型链继承的组合体。通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用

- 特点：可以继承实例属性/方法，也可以继承原型属性/方法
- 缺点：调用了两次父类构造函数，生成了两份实例

```javascript
function Cat(name) {
  Animal.call(this);
  this.name = name || "Tom";
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // true
```

### 寄生组合继承

通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性

```javascript
function Cat(name) {
  Animal.call(this);
  this.name = name || "Tom";
}
(function () {
  // 创建一个没有实例方法的类
  var Super = function () {};
  Super.prototype = Animal.prototype;
  //将实例作为子类的原型
  Cat.prototype = new Super();
})();
// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); //true
```

## 事件流、如何让事件先冒泡后捕获、事件委托

什么是事件流：事件流描述的是从页面中接收事件的顺序,DOM2 级事件流包括下面几个阶段。

- 事件捕获阶段
- 处于目标阶段
- 事件冒泡阶段

**addEventListener**，最后这个布尔值参数如果是 true，表示在捕获阶段调用事件处理程序；如果是 false，表示在冒泡阶段调用事件处理程序。

如何让事件先冒泡后捕获：

在 DOM 标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获之间。

- 简介：事件委托指的是，不在事件的发生地（直接 dom）上设置监听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素 DOM 的类型，来做出不同的响应。

* 最经典的就是 ul 和 li 标签的事件监听，比如我们在添加事件时候，采用事件委托机制，不会在 li 标签上直接添加，而是在 ul 父元素上添加。
* 较合适动态元素的绑定，新添加的子元素也会有监听函数，也可以有事件触发机制。

## mouseover 和 mouseenter 的区别

- mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是 mouseout
- mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是 mouseleave

## js 的各种位置，比如 clientHeight,offsetHeight,scrollHeight,以及 scrollTop, offsetTop,clientTop 的区别？

- clientHeight：表示的是可视区域的高度，不包含 border 和滚动条
- offsetHeight：表示可视区域的高度，包含了 border 和滚动条
- scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。
- clientTop：表示边框 border 的厚度，在未指定的情况下一般为 0
- scrollTop：滚动后被隐藏的高度，获取对象相对于由 offsetParent 属性指定的父坐标(css 定位的元素或 body 元素)距离顶端的高度。

## js 原型，原型链，继承

原型链，是实现 js 的基础方式，所有的构造函数都有一个原型对象，原型的 construct 属性指向了构造函数。这是一个循环的闭合链圈，如果我们将 construct 指向另一个构造函数，而另一个构造函数的 construct 再指向另外一个构造函数，这样就在实例和原型之间构造了一条原型链。

原型的基本结构

```
function Lop(){
	this.name = '1'
}
Lop.prototype.age = '2'
new Lop()

Lop
	name:2
	prototype:{
		constructor: Lop
	}

```

```
function Lop(){
this.name = 'Lop'
}
Lop.prototype.age = '23'
function Lob(){

}
Lob.prototype = new Lop();
let lob = new Lob()
console.log(lob)
console.log(lob.name)
console.log(lob.age)

```

原型链的问题

1. 引用类型的对象有个问题，他会修改原型上的数据。列入

```
    		function Lop(){
            this.name = 'Lop'
        }
        Lop.prototype.age = ['23']

        function Lob(){
            this.natallme = '187cm'
        }
        Lob.prototype = new Lop();
        Lob.prototype.constructor = Lob
        let lob = new Lob()
        let lob2 = new Lob()
        lob.age.push('2')
        console.log(lob2.age) //['23', '2']
```

这样明显不对的。

2. 盗用构造函数（经典进程或者叫对象伪装）

```
 function Lop(){
 	this.name = 'Lop'
 }
 Lop.prototype.age = ['23']
function Lob(){
  Lop.call(this);
  this.natallme = '187cm'
}
let lob = new Lob()
let lob2 = new Lob()

```

缺点：不能访问父级的 prototype

3. 组合继承（盗用构造函数+原型继承）

```
 function Lop(){
            this.name = ['Lop']
        }
        Lop.prototype.age = ['23']

        function Lob(){
            Lop.call(this); //继承之后能够让数组也能重新计算。
            this.natallme = '187cm'
        }
        Lob.prototype = new Lop() //用来能访问父级的原型
        let lob = new Lob()
        let lob2 = new Lob()
        lob.name.push('2')
        console.log(lob)
        console.log(lob.name)(2) ['Lop', '2']
        console.log(lob2.name)['Lop']
        console.log(lob2.age)['23']


```

## 严格模式有什么特点

1. 全局变量必须先声明才能使用
2. 禁止删除变量或函数
3. 禁止 "this" 关键字指向全局对象
4. 禁止使用 with 语句
5. 禁止使用 eval() 函数
6. 禁止使用 arguments.callee 和 arguments.caller 属性
7. 禁止使用 arguments 对象的 length 属性
8. 函数参数不能重名
9. 禁止使用八进制数

## js 的垃圾回收机制？引用计数有什么本质问题？

垃圾产生

- 对象不再被引用 例如，当一个函数执行完毕后，其中创建的局部变量将成为垃圾，因为它们无法再被访问到
- 对象之间形成循环引用
- 动态创建的对象没有被及时销毁 循环或递归等情况下，如果没有正确地释放内存，垃圾会不断积累。
- 内存泄漏

垃圾回收算法：

- 引用计数:通过跟踪每个对象被引用的次数来确定对象是否为垃圾。
  - 当一个对象被创建时，其引用计数器初始化为 1。
  - 当该对象被其他对象引用时，引用计数器加 1。
  - 当该对象不再被其他对象引用时，引用计数器减 1。
  - 当引用计数器减至 0 时，意味着该对象不再被引用，可以被垃圾收集器回收。
    > 存在的问题:当两个或多个对象相互引用时，它们的引用计数都不为零,即使它们已经不再被其他对象引用，也无法被回收。这导致内存泄漏，因为这些对象仍然占据内存空间，却无法被释放。
- 标记-清除:算法通过标记不再使用的对象，然后清除这些对象的内存空间，以便后续的内存分配使用。
  - 标记阶段：在标记阶段，垃圾回收器会对内存中的所有对象进行遍历，从根对象开始（通常是全局对象）**_递归地遍历对象的引用关系_**。对于每个被访问到的对象，垃圾回收器会给它打上标记，表示该对象是可达的，即不是垃圾。这个过程确保了所有可达对象都会被标记。
  - 清除阶段：在清除阶段，垃圾回收器会遍历整个内存，对于没有标记的对象，即被判定为垃圾的对象，会被立即回收，释放内存空间。这样，只有被标记的对象会被保留在内存中，而垃圾对象会被清除。
    > 垃圾回收过程中的停顿：标记-清除算法会暂停程序的执行，进行垃圾回收操作。当堆中对象较多时，可能会导致明显的停顿，影响用户体验。
    > 内存碎片化：标记-清除算法会在回收过程中产生大量的不连续的、碎片化的内存空间。这可能导致后续的内存分配难以找到足够大的连续内存块，从而使得内存的利用率降低。

## HTML5 drag api

- dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发，。
- darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
- dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。
- dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。
- dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。
- drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。
- dragend：事件主体是被拖放元素，在整个拖放操作结束时触发

## Cookie、sessionStorage、localStorage 的区别

共同点：都是保存在浏览器端，并且是同源的

- Cookie：cookie 数据始终在同源的 http 请求中携带（即使不需要），即 cookie 在浏览器和服务器间来回传递。而 sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。cookie 数据还有路径（path）的概念，可以限制 cookie 只属于某个路径下,存储的大小很小只有 4K 左右。 （key：可以在浏览器和服务器端来回传递，存储容量小，只有大约 4K 左右）
- sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持，localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie 只在设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭。（key：本身就是一个回话过程，关闭浏览器后消失，session 为一个回话，当页面不同即使是同一页面打开两次，也被视为同一次回话）
- localStorage：localStorage 在所有同源窗口中都是共享的；cookie 也是在所有同源窗口中都是共享的。（key：同源窗口都会共享，并且不会失效，不管窗口或者浏览器关闭与否都会始终生效）

补充说明一下 cookie 的作用：

- 保存用户登录状态。例如将用户 id 存储于一个 cookie 内，这样当用户下次访问该页面时就不需要重新登录了，现在很多论坛和社区都提供这样的功能。 cookie 还可以设置过期时间，当超过时间期限后，cookie 就会自动消失。因此，系统往往可以提示用户保持登录状态的时间：常见选项有一个月、三个 月、一年等。
- 跟踪用户行为。例如一个天气预报网站，能够根据用户选择的地区显示当地的天气情况。如果每次都需要选择所在地是烦琐的，当利用了 cookie 后就会显得很人性化了，系统能够记住上一次访问的地区，当下次再打开该页面时，它就会自动显示上次用户所在地区的天气情况。因为一切都是在后 台完成，所以这样的页面就像为某个用户所定制的一样，使用起来非常方便
- 定制页面。如果网站提供了换肤或更换布局的功能，那么可以使用 cookie 来记录用户的选项，例如：背景色、分辨率等。当用户下次访问时，仍然可以保存上一次访问的界面风格。

## web worker

在 HTML 页面中，如果在执行脚本时，页面的状态是不可相应的，直到脚本执行完成后，页面才变成可相应。web worker 是运行在后台的 js，独立于其他脚本，不会影响页面你的性能。并且通过 postMessage 将结果回传到主线程。这样在进行复杂操作的时候，就不会阻塞主线程了。

如何创建 web worker：

- 检测浏览器对于 web worker 的支持性
- 创建 web worker 文件（js，回传函数等）
- 创建 web worker 对象

## iframe 是什么？有什么缺点？

定义：iframe 元素会创建包含另一个文档的内联框架 提示：可以将提示文字放在之间，来提示某些不支持 iframe 的浏览器

缺点：

- 会阻塞主页面的 onload 事件
- 搜索引擎无法解读这种页面，不利于 SEO
- iframe 和主页面共享连接池，而浏览器对相同区域有限制所以会影响性能。

## Doctype 作用? 严格模式与混杂模式如何区分？它们有何意义?

Doctype 声明于文档最前面，告诉浏览器以何种方式来渲染页面，这里有两种模式，严格模式和混杂模式。

- 严格模式的排版和 JS 运作模式是 以该浏览器支持的最高标准运行。
- 混杂模式，向后兼容，模拟老式浏览器，防止浏览器无法兼容页面。

## click 在 ios 上有 300ms 延迟，原因及如何解决？

### (1)粗暴型，禁用缩放

routeros

`<meta name="viewport" content="width=device-width, user-scalable=no">`

### (2)利用 FastClick，其原理是：

检测到 touchend 事件后，立刻出发模拟 click 事件，并且把浏览器 300 毫秒之后真正出发的事件给阻断掉

## 解释一下变量的提升

---

变量的提升是 JavaScript 的默认行为，这意味着将所有变量声明移动到当前作用域的顶部，并且可以在声明之前使用变量。初始化不会被提升，提升仅作用于变量的声明。

javascript

`var x = 1 console.log(x + '——' + y) // 1——undefined var y = 2`

## 如何区分声明函数和表达式函数

---

csharp

`// 声明函数 function hello() {   return "HELLO" }     // 表达式函数   var h1 = function hello() {   return "HELLO" }`

两个函数将在不同的时期定义。在解析期间定义声明，在运行时定义表达式;因此，如果我们控制台打印 `h1`，它将显示`HELLO`。

