
### 1.js精度问题

主要是因为js采用了`IEEE 754`标准，小数位只能存54位，所以有精度问题，使用big.js或者decimeal.js

### 2.作用域和闭包

> 什么是作用链

当访问一个变量时，解释器会首先在当前作用域中查找标识符，如果没找到，就去父作用域找，直到找到该变量的标识符或没找到为止。这条寻找的链路就叫作用域链

> 什么是闭包

在JavaScript中，根据词法作用域的规则，内部函数总是可以访问其外部函数当中声明的变量；当调用通过外部函数返回的内部函数时，即使此时外部函数已经执行结束，但是内部函数所引用外部函数的变量依然保存在内存中，我们把这些变量的集合称为闭包



> 闭包怎么产生的

当函数存在对其所在词法作用域的引用，而该函数被拿到当前词法作用域外执行，此时就产生了闭包。



> 在工作中，哪些地方使用到了闭包

+ return 一个函数
+ 函数作为参数
+ IIFE自执行函数



> 为什么要使用闭包？/ 闭包的好处？

+ 保护函数的私有变量不受外部干扰。形成不销毁的栈内存
+ 把一些函数内的值保存下来。闭包可以实现方法和属性的私有化



> 闭包变量怎么回收呢？

- 如果是全局变量被作为闭包变量的话，则该闭包变量会一直保存到页面关闭。（因为全局上下文会一直存在，不会被回收，除非页面关闭）

- 如果是局部变量被作为闭包变量的话，下面分两种情况讨论

  - 立马执行时会自动回收

    ```javascript
    function a(){
    　　var b= 10;
    　　return function(){
    　　　　b++;
    　　　　console.log(num);
    　　}
    }
    a()(); //11
    a()(); //11
    ```

  - 不回立马被执行

    ```javascript
    function a(){
        var b = 0;
        return function(){
            b ++;
            console.log(b);
        }
    }
    var d = a();
    d();//1
    d();//2
    ```

### 3.JS数据类型

+ 原始值：
  + string
  + number
  + boolean
  + undefined
  + null
  + symbol
  + Bigint

+ 引用类型
  + OBject
  + Array
  + RegExp
  + Date
  + Math
  + Function



主要说下bitint,bigint是Es2020出现的，主要弥补number的精度丢失的异常，再最后使用n，来标识，也可用BigInt方法来写的

```javascript
const s = 12312312312312n
const s = BigInt(12312312312312)
```



### 4.JS类型判断

+ typeof
+ instanceof 所有引用类型，
+ Object.prototype.toString.call() 判断浏览器内置对象
+ Constructor 对number和null无效



### 5.JS的深拷贝和浅拷贝的方法

+ Object.assign(目标对象,源对象)
+ [...arr]
+ Array.protype.concat()
+ JSON.parse(JSON.stringify())
+ concat
+ slice



### 6.this的指向问题

+ 默认调用，指向window

+ 对象调用，指向该对象

+ 做构造函数使用，指向实例对象

+ 箭头函数，执行函数所在的作用域

+ Call,apply,bind指向传入的第一个参数

  ```javascript
  function a(pa,pb){
  	console.log(pa)
  	console.log(pb)
  }
  a.call(this,'1',2)
  a.apply(this,['1',2])
  a.bind(this,'1',2) //和call差不多，但是不会执行
  ```

  

### 7.JS原型和原型链

> 什么事原型对象

 每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型对象，每一个对象都会从原型"继承"属性。



> 函数的原型和对象的原型：

- 每个函数都有一个prototype属性，该属性指向函数的原型

- 每个对象都有一个__proto__属性，该属性指向对象的原型

  

> 什么是原型链

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。这条查找的路径就叫原型链









### 9.null 和 undefined 区别

> 简单点理解： undefined表示值不存在，null表示值存在但是为空，没有意义；

```
null == undefined // true
null === undefined // fasle
// typeof null 为 Object, typeof undefined 为 undefined
```



### 10.函数柯里化

将能够接收多个参数的函数转化为接收单一参数的函数，并且返回接收余下参数且返回结果的新函数的技术。

```java
const add = function add(x) {
    return function (y) {
        return x + y
    }
}
const add1 = add(1)
add1(2) === 3
```



### 11.节流防抖

解释： 

防抖： 每次有请求是继续延长时间，如：输入框输入请求，延迟1秒钟，一秒内还有请求继续延迟 

节流：固定个时间请求。滚动滚轮，拖拽等高频事件



### 12.箭头函数和普通函数区别

+ 不能new
+ this指向
+ 不能使用arguments
+ 没有原型属性
+ 不能当作generator函数，不能使用yeid关键字





### 13.new运算符的实现机制

1. 首先创建了一个新的`空对象`
2. `设置原型`，将对象的原型设置为函数的`prototype`对象。
3. 让函数的`this`指向这个对象，执行构造函数的代码（为这个新对象添加属性）
4. 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。





## 14.ES6中新增的Set、Map两种数据结构怎么理解?

`Set`是`es6`新增的数据结构，类似于数组，但是成员的值都是唯一的，没有重复的值，我们一般称为集合

`Set`本身是一个构造函数，用来生成 Set 数据结构

- add()
- delete()
- has()
- clear()

遍历：

- keys()：返回键名的遍历器

- values()：返回键值的遍历器

- entries()：返回键值对的遍历器

- forEach()：使用回调函数遍历每个成员

  

`Map`类型是键值对的有序列表，而键和值都可以是任意类型

`Map`本身是一个构造函数，用来生成 `Map` 数据结构

- size 属性
- set()
- get()
- has()
- delete()
- clear()

遍历：

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回所有成员的遍历器
- forEach()：遍历 Map 的所有成员

在`API`中`WeakSet`与`Set`有两个区别：

- 没有遍历操作的`API`
- 没有`size`属性

`WeackSet`只能成员只能是引用类型，而不能是其他类型的值

`WeakSet `里面的引用只要在外部消失，它在 `WeakSet `里面的引用就会自动消失



`WeakMap`结构与`Map`结构类似，也是用于生成键值对的集合

在`API`中`WeakMap`与`Map`有两个区别：

- 没有遍历操作的`API`
- 没有`clear`清空方法

`WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名

`WeakMap`的键名所指向的对象，一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用 



### 15.什么是作用域链？

我们一般将作用域分成：

- 全局作用域：任何不在函数中或是大括号中声明的变量，都是在全局作用域下，全局作用域下声明的变量可以在程序的任意位置访问
- 函数作用域：函数作用域也叫局部作用域，如果一个变量是在函数内部声明的它就在一个函数作用域下面。这些变量只能在函数内部访问，不能在函数以外去访问
- 块级作用域：ES6引入了`let`和`const`关键字,和`var`关键字不同，在大括号中使用`let`和`const`声明的变量存在于块级作用域中。在大括号之外不能访问这些变量
- 



### 16.说说你对函数式编程的理解，以及优缺点？

主要的编程范式有三种：命令式编程，声明式编程和函数式编程

+ 高阶函数：函数作为参数
+ 纯函数：没有副作用
+ 柯里化：多元函数转为一元函数的过程，
  + 关于柯里化函数的意义如下：
    + 让纯函数更纯，每次接受一个参数，松散解耦
    + 惰性执行

#### 优点

- 更好的管理状态：因为它的宗旨是无状态，或者说更少的状态，能最大化的减少这些未知、优化代码、减少出错情况
- 更简单的复用：固定输入->固定输出，没有其他外部变量影响，并且无副作用。这样代码复用时，完全不需要考虑它的内部实现和外部影响
- 更优雅的组合：往大的说，网页是由各个组件组成的。往小的说，一个函数也可能是由多个小函数组成的。更强的复用性，带来更强大的组合性
- 隐性好处。减少代码量，提高维护性

#### 缺点：

- 性能：函数式编程相对于指令式编程，性能绝对是一个短板，因为它往往会对一个方法进行过度包装，从而产生上下文切换的性能开销
- 资源占用：在 JS 中为了实现对象状态的不可变，往往会创建新的对象，因此，它对垃圾回收所产生的压力远远超过其他编程方式
- 递归陷阱：在函数式编程中，为了实现迭代，通常会采用递归操作

### 17.null 和 undefined 有什么区别？

首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。

undefined 代表的含义是未定义，null 代表的含义是空对象

当对这两种类型使用 typeof 进行判断时，Null 类型化会返回 “object”，这是一个历史遗留的问题。当使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。

### 18.类的创建和继承

#### 原型链继承

- 特点：基于原型链，既是父类的实例，也是子类的实例
- 缺点：无法实现多继承

```javascript
function Cat(){ }
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';


```

#### 构造继承

- 特点：可以实现多继承
- 缺点：只能继承父类实例的属性和方法，不能继承原型上的属性和方法。

```javascript
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
// Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false
console.log(cat instanceof Cat); // true

```

#### 组合继承

相当于构造继承和原型链继承的组合体。通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用

- 特点：可以继承实例属性/方法，也可以继承原型属性/方法
- 缺点：调用了两次父类构造函数，生成了两份实例

```javascript
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
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

#### 寄生组合继承

通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性

```javascript
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
(function(){
  // 创建一个没有实例方法的类
  var Super = function(){};
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

### 19.利用 ES6 Set 去重

+ Array.from(new Set())
+ 算法
  + Map
  + filter
  + for循环

### 20.说说前端中的事件流

什么是事件流：事件流描述的是从页面中接收事件的顺序,DOM2级事件流包括下面几个阶段。

- 事件捕获阶段
- 处于目标阶段
- 事件冒泡阶段

**addEventListener**，最后这个布尔值参数如果是true，表示在捕获阶段调用事件处理程序；如果是false，表示在冒泡阶段调用事件处理程序。

### 21.如何让事件先冒泡后捕获

在DOM标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获之间。

### 22.事件委托

- 简介：事件委托指的是，不在事件的发生地（直接dom）上设置监听函数，而是在其父元素上设置监听函数，通过事件冒泡，父元素可以监听到子元素上事件的触发，通过判断事件发生元素DOM的类型，来做出不同的响应。

+ 最经典的就是ul和li标签的事件监听，比如我们在添加事件时候，采用事件委托机制，不会在li标签上直接添加，而是在ul父元素上添加。
+ 较合适动态元素的绑定，新添加的子元素也会有监听函数，也可以有事件触发机制。

### 23.mouseover和mouseenter的区别

- mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是mouseout
- mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是mouseleave

### 24.改变函数内部this指针的指向函数（bind，apply，call的区别）

- 通过apply和call改变函数的this指向，他们两个函数的第一个参数都是一样的表示要改变指向的那个对象，第二个参数，apply是数组，而call则是arg1,arg2...这种形式。

- 通过bind改变this作用域会返回一个新的函数，这个函数不会马上执行。

### 25.js的各种位置，比如clientHeight,scrollHeight,offsetHeight ,以及scrollTop, offsetTop,clientTop的区别？

- clientHeight：表示的是可视区域的高度，不包含border和滚动条
- offsetHeight：表示可视区域的高度，包含了border和滚动条
- scrollHeight：表示了所有区域的高度，包含了因为滚动被隐藏的部分。
- clientTop：表示边框border的厚度，在未指定的情况下一般为0
- scrollTop：滚动后被隐藏的高度，获取对象相对于由offsetParent属性指定的父坐标(css定位的元素或body元素)距离顶端的高度。

### 26.js 原型，原型链，继承

#### 原型链与继承

原型链，是实现js的基础方式，所有的构造函数都有一个原型对象，原型的construct 属性指向了构造函数。这是一个循环的闭合链圈，如果我们将construct 指向另一个构造函数，而另一个构造函数的construct再指向另外一个构造函数，这样就在实例和原型之间构造了一条原型链。

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

#### 原型链继承

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

![image-20220925172532067](/Users/fanrongkong/Library/Application Support/typora-user-images/image-20220925172532067.png)



原型链的问题

引用类型的对象有个问题，他会修改原型上的数据。列入

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



#### 盗用构造函数（经典进程或者叫对象伪装）

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

缺点：不能访问父级的prototype



#### 组合继承（盗用构造函数+原型继承）

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

### 27.严格模式有什么特点

1. 全局变量必须先声明才能使用
2. 禁止删除变量或函数
3. 禁止 "this" 关键字指向全局对象
4. 禁止使用 with 语句
5. 禁止使用 eval() 函数
6. 禁止使用 arguments.callee 和 arguments.caller 属性
7. 禁止使用 arguments 对象的 length 属性
8. 函数参数不能重名
9. 禁止使用八进制数
