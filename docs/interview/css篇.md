# css 篇

## css 盒模型

简介：就是用来装页面上的元素的矩形区域。CSS 中的盒子模型包括 IE 盒子模型和标准的 W3C 盒子模型。

border-sizing(有 3 个值哦)：border-box,padding-box,content-box.

- 标准盒子模型：

![2018-07-10 4 24 03](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/10/1648419a623a69db~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.awebp)

- IE 盒子模型：

![2018-07-10 4 24 12](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/7/10/1648419a6d29fa5e~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.awebp)

区别：从图中我们可以看出，这两种盒子模型最主要的区别就是 width 的包含范围，在标准的盒子模型中，width 指 content 部分的宽度，在 IE 盒子模型中，width 表示 content+padding+border 这三个部分的宽度，故这使得在计算整个盒子的宽度时存在着差异：

标准盒子模型的盒子宽度：左右 border+左右 padding+width IE 盒子模型的盒子宽度：width

在 CSS3 中引入了 box-sizing 属性，box-sizing:content-box;表示标准的盒子模型，box-sizing:border-box 表示的是 IE 盒子模型

最后，前面我们还提到了，box-sizing:padding-box,这个属性值的宽度包含了左右 padding+width

也很好理解性记忆，包含什么，width 就从什么开始算起。

## 画一条 0.5px 的线

- 采用 meta viewport 的方式
- 采用 border-image 的方式
- 采用 transform: scale()的方式

## link 标签和 import 标签的区别

- link 属于 html 标签，而@import 是 css 提供的
- 页面被加载时，link 会同时被加载，而@import 引用的 css 会等到页面加载结束后加载。
- link 是 html 标签，因此没有兼容性，而@import 只有 IE5 以上才能识别。
- link 方式样式的权重高于@import 的。

## transition 和 animation 的区别

Animation 和 transition 大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是 transition 需要触发一个事件才能改变属性，而 animation 不需要触发任何事件的情况下才会随时间改变属性值，并且 transition 为 2 帧，从 from .... to，而 animation 可以一帧一帧的。

## Flex 布局

文章链接： [www.ruanyifeng.com/blog/2015/0…](https://link.juejin.cn?target=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2015%2F07%2Fflex-grammar.html%3Futm_source%3Dtuicool%25EF%25BC%2588%25E8%25AF%25AD%25E6%25B3%2595%25E7%25AF%2587%25EF%25BC%2589 "http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool%EF%BC%88%E8%AF%AD%E6%B3%95%E7%AF%87%EF%BC%89") [www.ruanyifeng.com/blog/2015/0…](https://link.juejin.cn?target=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2015%2F07%2Fflex-examples.html%25EF%25BC%2588%25E5%25AE%259E%25E4%25BE%258B%25E7%25AF%2587%25EF%25BC%2589 "http://www.ruanyifeng.com/blog/2015/07/flex-examples.html%EF%BC%88%E5%AE%9E%E4%BE%8B%E7%AF%87%EF%BC%89")

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。 布局的传统解决方案，基于盒状模型，依赖 display 属性 + position 属性 + float 属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

简单的分为容器属性和元素属性 容器的属性：

- flex-direction：决定主轴的方向（即子 item 的排列方法） .box { flex-direction: row | row-reverse | column | column-reverse; }
- flex-wrap：决定换行规则 .box{ flex-wrap: nowrap | wrap | wrap-reverse; }
- flex-flow： .box { flex-flow: || ; }
- justify-content：对其方式，水平主轴对齐方式
- align-items：对齐方式，竖直轴线方向

项目的属性（元素的属性）：

- order 属性：定义项目的排列顺序，顺序越小，排列越靠前，默认为 0
- flex-grow 属性：定义项目的放大比例，即使存在空间，也不会放大
- flex-shrink 属性：定义了项目的缩小比例，当空间不足的情况下会等比例的缩小，如果定义个 item 的 flow-shrink 为 0，则为不缩小
- flex-basis 属性：定义了在分配多余的空间，项目占据的空间。
- flex：是 flex-grow 和 flex-shrink、flex-basis 的简写，默认值为 0 1 auto。
- align-self：允许单个项目与其他项目不一样的对齐方式，可以覆盖 align-items，默认属性为 auto，表示继承父元素的 align-items

比如说，用 flex 实现圣杯布局

## BFC（块级格式化上下文，用于清楚浮动，防止 margin 重叠等）

直译成：块级格式化上下文，是一个独立的渲染区域，并且有一定的布局规则。

- BFC 区域不会与 float box 重叠
- BFC 是页面上的一个独立容器，子元素不会影响到外面
- 计算 BFC 的高度时，浮动元素也会参与计算

那些元素会生成 BFC：

- 根元素
- float 不为 none 的元素
- position 为 fixed 和 absolute 的元素
- display 为 inline-block、table-cell、table-caption，flex，inline-flex 的元素
- overflow 不为 visible 的元素

## 垂直居中的方法

### (1)margin:auto 法

css:

css

`div{
 width: 400px;
 height: 400px;
 position: relative;
 border: 1px solid #465468;
 }
 img{
 position: absolute;
 margin: auto;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 }`

html:

xml

`<div>
<img src="mm.jpg">

</div>`

定位为上下左右为 0，margin：0 可以实现脱离文档流的居中.

### (2)margin 负值法

css

`.container{
 width: 500px;
 height: 400px;
 border: 2px solid #379;
 position: relative;
}
.inner{
 width: 480px;
 height: 380px;
 background-color: #746;
 position: absolute;
 top: 50%;
 left: 50%;
 margin-top: -190px; /*height的一半*/
 margin-left: -240px; /*width的一半*/
 }`

补充：其实这里也可以将 marin-top 和 margin-left 负值替换成， transform：translateX(-50%)和 transform：translateY(-50%)

### (3)table-cell（未脱离文档流的）

设置父元素的 display:table-cell,并且 vertical-align:middle，这样子元素可以实现垂直居中。

css

`css:
div{
 width: 300px;
 height: 300px;
 border: 3px solid #555;
 display: table-cell;
 vertical-align: middle;
 text-align: center;
}
img{
 vertical-align: middle;
}`

### (4)利用 flex

将父元素设置为 display:flex，并且设置 align-items:center;justify-content:center;

css

`css:
.container{
 width: 300px;
 height: 200px;
 border: 3px solid #546461;
 display: -webkit-flex;
 display: flex;
 -webkit-align-items: center;
 align-items: center;
 -webkit-justify-content: center;
 justify-content: center;
 }
 .inner{
 border: 3px solid #458761;
 padding: 20px;
 }`

## 关于 js 动画和 css3 动画的差异性

渲染线程分为 main thread 和 compositor thread，如果 css 动画只改变 transform 和 opacity，这时整个 CSS 动画得以在 compositor trhead 完成（而 js 动画则会在 main thread 执行，然后出发 compositor thread 进行下一步操作），特别注意的是如果改变 transform 和 opacity 是不会 layout 或者 paint 的。 区别：

- 功能涵盖面，js 比 css 大
- 实现/重构难度不一，CSS3 比 js 更加简单，性能跳优方向固定
- 对帧速表现不好的低版本浏览器，css3 可以做到自然降级
- css 动画有天然事件支持
- css3 有兼容性问题

## 块元素和行元素

块元素：独占一行，并且有自动填满父元素，可以设置 margin 和 pading 以及高度和宽度 行元素：不会独占一行，width 和 height 会失效，并且在垂直方向的 padding 和 margin 会失 效。

## 多行元素的文本省略号

less

`display: -webkit-box
-webkit-box-orient:vertical
-web-line-clamp:3
overflow:hidden`

## visibility=hidden, opacity=0，display:none

opacity=0，该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定一些事件，如 click 事件，那么点击该区域，也能触发点击事件的 visibility=hidden，该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件 display=none，把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删除掉一样。

## 双边距重叠问题（外边距折叠）

多个相邻（兄弟或者父子关系）普通流的块元素垂直方向 marigin 会重叠

折叠的结果为：

两个相邻的外边距都是正数时，折叠结果是它们两者之间较大的值。 两个相邻的外边距都是负数时，折叠结果是两者绝对值的较大值。 两个外边距一正一负时，折叠结果是两者的相加的和。

## 三栏布局

三栏布局是很常见的一种页面布局方式。左右固定，中间自适应。实现方式有很多种方法。

**第一种：flex**

css

`<div class="container">     <div class="left">left</div>     <div class="main">main</div>     <div class="right">right</div> </div> .container{     display: flex; } .left{     flex-basis:200px;     background: green; } .main{     flex: 1;     background: red; } .right{     flex-basis:200px;     background: green; }`

**第二种：position + margin**

css

`<div class="container">     <div class="left">left</div>     <div class="right">right</div>     <div class="main">main</div> </div> body,html{     padding: 0;     margin: 0; } .left,.right{     position: absolute;     top: 0;     background: red; } .left{     left: 0;     width: 200px; } .right{     right: 0;     width: 200px; } .main{     margin: 0 200px ;     background: green; }`

**第三种：float + margin**

css

`<div class="container">     <div class="left">left</div>     <div class="right">right</div>     <div class="main">main</div> </div> body,html{     padding:0;     margin: 0; } .left{     float:left;     width:200px;     background:red; } .main{     margin:0 200px;     background: green; } .right{     float:right;     width:200px;     background:red; }`

## CSS 权重计算方式

CSS 基本选择器包含 ID 选择器、类选择器、标签选择器、通配符选择器。 正常情况下，一般都能答出`!important > 行内样式 > ID选择器 > 类选择器 > 标签选择器 > 通配符选择器`。

但如果这几种选择器同时作用于一个元素时，该元素最后应用哪个样式呢？这就涉及到权重计算的问题。 关于权重计算，有两种不同的计算方式：一种是以二进制的规则计算，一种是以 1,10,100,1000 这种的计算方式。我更倾向于二进制的这种方式。

**各选择器权值：**

- 内联样式，权值为 1000
- ID 选择器，权值为 0100
- 类，伪类和属性选择器，权值为 0010
- 标签选择器和伪元素选择器，权值为 0001
- 通配符、子选择器、相邻选择器等，权值为 0000
- 继承的样式没有权值

**比较方式：**

如果层级相同，继续往后比较，如果层级不同，层级高的权重大，不论低层级有多少个选择器。

## BFC

BFC 的全称为 `Block Formatting Context`，也就是块级格式化上下文的意思。

**以下方式都会创建 BFC：**

- 根元素(html)
- 浮动元素（元素的 float 不是 none）
- 绝对定位元素（元素的 position 为 absolute 或 fixed）
- 行内块元素（元素的 display 为 inline-block）
- 表格单元格（元素的 display 为 table-cell，HTML 表格单元格默认为该值）
- 表格标题（元素的 display 为 table-caption，HTML 表格标题默认为该值）
- 匿名表格单元格元素（元素的 display 为 table、table-row、table-row-group、table-header-group、table-footer-group（分别是 HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）
- overflow 值不为 visible 的块元素
- display 值为 flow-root 的元素
- contain 值为 layout、content 或 paint 的元素
- 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
- 网格元素（display 为 grid 或 inline-grid 元素的直接子元素）
- 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1） column-span 为 all 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。

**BFC 布局规则：**

1.  内部的 box 会在垂直方向，一个接一个的放置。
2.  box 垂直方向的距离有 margin 决定。属于同一个 BFC 的两个相邻 box 的 margin 会发生重叠。
3.  每个元素的左外边距与包含块的左边界相接触，即使浮动元素也是如此。
4.  BFC 的区域不会与 float 的元素区域重叠。
5.  计算 BFC 的高度时，浮动子元素也参与计算。
6.  BFC 就是页面上一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。

**BFC 能解决的问题：**

1.  父元素塌陷
2.  外边距重叠
3.  清除浮动

## 清除浮动的方法

清除浮动主要是为了防止父元素塌陷。清除浮动的方法有很多，常用的是 `clearfix` 伪类。

**方法一：clearfix**

css

`<div class="outer clearfix">     <div class="inner">inner</div> </div> .outer{     background: blue; } .inner{     width: 100px;     height: 100px;     background: red;     float: left; } .clearfix:after{     content: "";     display: block;     height: 0;     clear:both;     visibility: hidden; }`

**方法二：额外加一个 div，clear:both**

css

`<div class="container">     <div class="inner"></div>     <div class="clear"></div> </div> .container{     background: blue; } .inner {     width: 100px;     height: 100px;     background: red;     float: left; } .clear{     clear:both; }`

**方法三：触发父盒子 BFC，overflow:hidden**

css

`<div class="outer">     <div class="inner">inner</div> </div> .outer{     background: blue;     overflow: hidden; } .inner {     width: 100px;     height: 100px;     background: red;     float: left; }`

## 如何实现一个自适应的正方形

**方法 1：利用 CSS3 的 vw 单位**

`vw` 会把视口的宽度平均分为 100 份

css

`.square {     width: 10vw;     height: 10vw;     background: red; }`

**方法 2：利用 margin 或者 padding 的百分比计算是参照父元素的 width 属性**

css

`.square {     width: 10%;     padding-bottom: 10%;      height: 0; // 防止内容撑开多余的高度     background: red; }`

## 如何用 css 实现一个三角形

**方法 1： 利用 border 属性**

利用盒模型的 `border` 属性上下左右边框交界处会呈现出平滑的斜线这个特点，通过设置不同的上下左右边框宽度或者颜色即可得到三角形或者梯形。

css

`.triangle {     height:0;     width:0;     border-color:red blue green pink;     border-style:solid;     border-width:30px; }`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/13/16dc5881277c896c~tplv-t2oaga2asx-zoom-in-crop-mark:1512:0:0:0.awebp)

如果想实现其中的任一个三角形，把其他方向上的 `border-color` 都设置成透明即可。

css

`.triangle {     height:0;     width:0;     border-color:red transparent transparent transparent;     border-style:solid;     border-width:30px; }`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/13/16dc58ad2033b4be~tplv-t2oaga2asx-zoom-in-crop-mark:1512:0:0:0.awebp)

**方法二： 利用 CSS3 的 clip-path 属性**

不了解 `clip-path` 属性的可以先看看 `MDN` 上的介绍：[chip-path](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FCSS%2Fclip-path "https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path")

css

`.triangle {     width: 30px;     height: 30px;     background: red;     clip-path: polygon(0px 0px, 0px 30px, 30px 0px); // 将坐标(0,0),(0,30),(30,0)连成一个三角形     transform: rotate(225deg); // 旋转225，变成下三角 }`

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/13/16dc594b5da448fc~tplv-t2oaga2asx-zoom-in-crop-mark:1512:0:0:0.awebp)
