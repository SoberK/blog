# grid布局

## 在 CSS Grid 布局中，`grid-template-columns` 和 `grid-template-rows` 属性定义网格容器内的行和列。以下是几种常见方法总结：

### 1. 固定尺寸

- **描述**：使用固定的尺寸（px、em、rem 等）来定义列和行的宽度和高度。
- **语法**：
  ```css
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  ```

### 2. 百分比

- **描述**：使用百分比来定义列的宽度，使其根据父容器的宽度进行调整。
- **语法**：
  ```css
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 100px 100px 100px;
  ```

### 3. `repeat()` 函数

- **描述**：使用 `repeat()` 函数来定义重复的列或行。
- **语法**：
  ```css
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  ```

### 4. 自动适应（auto-fit / auto-fill）

- **描述**：使用 `auto-fit` 或 `auto-fill` 结合 `repeat()` 来自动适应和填充可用空间。
- **语法**：
  ```css
  grid-template-columns: repeat(auto-fit, 100px);
  ```

### 5. 弹性单位（fr）

- **描述**：使用 `fr` 单位来定义弹性份额，占据可用空间。
- **语法**：
  ```css
  grid-template-columns: 1fr 1fr;
  ```

### 6. 组合使用

- **描述**：结合 `px`、`fr` 单位，百分比等进行复杂布局。
- **语法**：
  ```css
  grid-template-columns: 150px 1fr 2fr;
  ```

### 7. `minmax()` 函数

- **描述**：使用 `minmax()` 函数定义列或行的最小和最大尺寸。
- **语法**：
  ```css
  grid-template-columns: 1fr 1fr minmax(50px, 2fr);
  ```

### 8. 使用 `auto`

- **描述**：使用 `auto` 使列或行根据内容自动调整尺寸。
- **语法**：
  ```css
  grid-template-columns: 100px auto 100px;
  ```

### 9. 命名网格线

- **描述**：使用方括号 `[]` 命名网格线，方便后续引用。
- **语法**：
  ```css
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
  ```

### 10. 经典布局

- **描述**：使用百分比来设计经典布局，例如两列布局。
- **语法**：
  ```css
  display: grid;
  grid-template-columns: 70% 30%;
  ```

### 11. 多列布局

- **描述**：使用 `repeat()` 结合 `fr` 单位创建多列网格布局。
- **语法**：
  ```css
  grid-template-columns: repeat(12, 1fr);
  ```





## 在CSS Grid布局中，有许多属性可以帮助我们设计和控制网格布局。以下是一些常用属性和方法的详细总结。

### 1. 网格间距
- **grid-row-gap** 和 **grid-column-gap**：分别设置行间距和列间距。
  ```css
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  ```

- **grid-gap**：简写形式，同时设置行间距和列间距。
  ```css
  grid-gap: 20px 20px; /* <grid-row-gap> <grid-column-gap> */
  ```

- **grid-template-areas**：使用命名网格区来简化布局。
  ```css
  grid-template-areas: 
    'a b c'
    'd e f'
    'g h i';
  ```

### 3. 网格自动布局
- **grid-auto-flow**：控制自动布局算法。
  - `row`（默认值）：从左到右排列。
  - `column`：从上到下排列。
  - `dense`：紧密排列空白区域。
  ```css
  grid-auto-flow: column;
  grid-auto-flow: column dense;
  ```

### 4. 元素对齐
- **justify-items**：设置网格项在水平轴上的对齐方式。
  ```css
  justify-items: start | end | center | stretch;
  ```

- **align-items**：设置网格项在垂直轴上的对齐方式。
  ```css
  align-items: start | end | center | stretch;
  ```

### 5. 网格内容对齐
- **justify-content**：设置整个网格容器在水平轴上的对齐方式。
  ```css
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  ```

- **align-content**：设置整个网格容器在垂直轴上的对齐方式。
  ```css
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
  ```

### 6. 自动行高
- **grid-auto-rows**：设定自动生成的行的高度。
  ```css
  grid-auto-rows: 50px;
  ```

### 7. 网格模板
- **grid-template**：综合使用 `grid-template-columns`、`grid-template-rows` 和 `grid-template-areas` 来定义网格布局。
  ```css
  grid-template: 
    "a b c" 100px
    "d e f" 100px
    "g h i" 100px / 100px 100px 100px;
  ```

### 常用值解释
- **start**：起始对齐。
- **end**：结束对齐。
- **center**：居中对齐。
- **stretch**：拉伸以填充整个容器。
- **space-around**：每个项目两边的间距相等。
- **space-between**：项目之间的间距相等。
- **space-evenly**：每个项目之间以及项目与容器边缘的间距相等。

### 总结

利用这些属性，CSS Grid可以实现灵活、强大的布局。掌握这些属性不仅可以让你的网格布局更加精确，还能更好地控制和组织页面内容。如果有任何疑问或需要进一步解释的内容，请随时提问！