

### 1.如何实现三栏布局，中间自适应

```vue
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            display: flex;
            flex-direction: row;
        }

        .left {
            width: 200px;
            order: 1;
        }

        .middle {
            flex-grow: 1;
            order: 2;
        }

        .right {
            width: 200px;
            order: 3;
        }
    </style>
</head>

<body>
    <div class="left">Left</div>
    <div class="middle">Middle</div>
    <div class="right">Right</div>
</body>
```



### 2.什么是docType，有什么作用

`Doctype`是HTML5的文档声明，通过它可以告诉浏览器，使用哪一个HTML版本标准解析文档。在浏览器发展的过程中，HTML出现过很多版本，不同的版本之间格式书写上略有差异。如果没有事先告诉浏览器，那么浏览器就不知道文档解析标准是什么？此时，大部分浏览器将开启最大兼容模式来解析网页，我们一般称为`怪异模式`，这不仅会降低解析效率，而且会在解析过程中产生一些难以预知的`bug`，所以文档声明是必须的。



### 3.说说对 *html* 语义化的理解

HTML标签的语义化，简单来说，就是用正确的标签做正确的事情，给某块内容用上一个最恰当最合适的标签.

语义化的优点如下：

- 在没有CSS样式情况下也能够让页面呈现出清晰的结构
- 有利于SEO和搜索引擎建立良好的沟通，有助于爬虫抓取更多的有效信息，爬虫是依赖于标签来确定上下文和各个关键字的权重
- 方便团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化



### 4.*src* 和 *href* 的区别

+ src：全称*source*，它通常用于img、video、audio、script元素，通过src指向请求外部资源的来源地址，指向的内容会嵌入到文档中当前标签所在位置，在请求src资源时，它会将资源下载并应用到文档内，比如说：js脚本、img图片、frame等元素。当浏览器解析到该元素时，会暂停其它资源下载，直到将该资源加载、编译、执行完毕。这也是为什么将js脚本放在底部而不是头部的原因。

+ href：全称*hyper reference*，意味着超链接，指向网络资源，当浏览器识别到它指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理，通常用于a、link元素。

  

### 5.什么是严格模式与混杂模式？

- 严格模式：是以浏览器支持的最高标准运行

- 混杂模式：页面以宽松向下兼容的方式显示，模拟老式浏览器的行为




### 6.介绍下 *BFC* 及其应用

所谓 *BFC*，指的是一个独立的布局环境，*BFC* 内部的元素布局与外部互不影响。

创建BFC的方式

+ 浮动
+ 定位
+ Overflow 不为visible

### 7.什么是回流与重绘？

html加载的时候发生了什么

+ Html 解析生成dom tree
+ Css 解析生成cssdom tree
+ 两者结合生成带有样式的 render tree

回流、重排

+ 当render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流
+ 页面加载的时候会回流一次

重绘

+ 页面的样式发省变化，不发生布局的变化，比如背景色



关系

+ 发生回流一定会引起重绘，发生重绘不一定会引起回流
+ 页面的集合布局发生变化就会发生回流！添加删除dom，改变位置边框宽高等都会引起重排

+ 

### 8.说说css模块化的理解

- 手写源生 CSS
- 使用预处理器 Sass/Less
  - 预处理器主要是强化了 css 的语法，弥补了上文说了这些问题，但本质上，打包出来的结果和源生的 css 都是一样的，只是对开发者友好，写起来更顺滑。
- 使用后处理器 PostCSS
  - 配合 stylelint 校验 css 语法
  - 自动增加浏览器前缀 autoprefixer
  - 编译 css next 的语法
- 使用 css modules
  - 随着 react、vue 等基于模块化的框架的普及使用，我们编写源生 css 的机会也越来越少。我们常常将页面拆分成许多个小组件，然后像搭积木一样将多个小组件组成最终呈现的页面。

### 9.怎么实现图片懒加载？

懒加载的作用：

1. 全部加载的话会影响用户体验
2. 浪费用户的流量，有些用户并不想全部看完，全部加载会耗费大量流量。

最简单的实现方式是给 `img` 标签加上 `loading="lazy"`，比如

也可以通过滚动来实现加载

第三方的库

### 10.图片的懒加载和预加载

- 预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。
- 懒加载：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。 可以在img 中的loading 加入lazy



### 11.css盒模型

ie盒模型：width+padding+border

标准盒模型：width



### 12.link标签和import标签的区别

- link属于html标签，而@import是css提供的
- 页面被加载时，link会同时被加载，而@import引用的css会等到页面加载结束后加载。
- link是html标签，因此没有兼容性，而@import只有IE5以上才能识别。
- link方式样式的权重高于@import的。





### 13单位em

em是相对与父级的，如果没有设置，就会一层一层往上找，直到找到位置，如果最顶层都没有则默认为默认自体大小16px

### 2、css变量

css支持变量的引用。只需要在全局添加变量，在局部使用var去引入即可

```
//全局
:root{
    --var-bg:blue;
}

//局部
.child{
    border: 1em solid red;
    background: var(--var-bg);
}
```



+ CSS 全局变量:  在全局申明:root

+ CSS 局部变量:  也可以在局部类中定义变量

  ```css
  h1{
   --var-bg:blue;
   color:var(--var-bg);
  }
  ```

+ 优先级:   局部的优先级大于全局的优先级	

+ 继承：变量是可以继承的

  <img src="./assets/css-1.png" alt="css-1" style="zoom:30%;" />

  <img src="/Users/fanrongkong/笔记本/面试打卡/css/css/assets/css-2.png" alt="css-2" style="zoom:33%;" />

  <img src="./assets/css-3.png" alt="css-3" style="zoom:33%;" />

### 3、sass 常用

+ 嵌套规则

+ 父级：使用&来代替

+ 变量：$ 打头

  ```css
  $fontColor:red;
  .box{
    color:$fontColor
  }
  ```

+ mixins和include

  + 当作一个函数用
  + 可以传参：使用$为变量标识
  + 形参可以默认值

  ```css
  @mixin changeColor($width:100px){
      width: $width;
      height:$width;
      background: black;
  }
  
  .box3{
      background: yellow;
      @include changeColor(70px)
  }
  ```

+ 算数

  变量可以用来加减乘除但是前提是变量必须是数字类型

  ```css
  $baseLengt:20;
  @mixin changeColor($width:100px){
      width: $baseLengt*$width;
      height:$width;
      background: black;
  }
  
  .box3{
      background: yellow;
      @include changeColor(70px)
  }
  ```

+ 流程控制

  可以使用关键字@if和@else 来在函数中控制流程

  ```
  @mixin getWidth($isBig:false){
      @if($isBig){
          width: 70px;
          height: 70px;
      }@else{
          height: 100px;
          width: 100px;
      }
      background: rebeccapurple;
  }
  
  .box4{
     @include getWidth(true)
  }
  ```

### 4、flex 布局

关键字

1. 水平轴（mian axis）
2. 垂直轴（cross axis）

父元素的属性：

+ flex-direction: **row-reverse | row |column| column-reverse; ** flex的排序方向

+ flex-warp: **nowarp|warp|warp-reverse**; flex是否换行
+ flex-flow: <flex-direction><flex-warp> ; flex-direction和flex-warp的简写
+ justify-content: flex-start | flex-end | center | space-around | space-between; 设置主轴的对齐方式
+ align-items:flex-start | flex-end | center |baseline|stretch;

+ align-content:flex-start |flex-end |center| space-around | space-between | stretch;

子元素属性：

+ order:<interger> 排序



