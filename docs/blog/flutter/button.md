# 常用组件
## Scaffold

`Scaffold` 是一个布局模板，用于实现基本的 Material Design 布局结构，通常作为应用程序的顶层部件。

### 属性

#### `appBar` (小部件)
- **类型**: `PreferredSizeWidget`
- **说明**: 定义页面顶部的应用栏，通常包含标题、操作和/或工具。

#### `body` (小部件)
- **类型**: `Widget`
- **说明**: 显示在 `Scaffold` 中间的主要部分，例如页面内容。

#### `floatingActionButton` (小部件)
- **类型**: `Widget`
- **说明**: 显示在页面底部的浮动操作按钮。

#### `drawer` (小部件)
- **类型**: `Widget`
- **说明**: 一个抽屉式的面板，在 `Scaffold` 的侧边显示额外的内容，通常用于导航菜单。

#### `bottomNavigationBar` (小部件)
- **类型**: `Widget`
- **说明**: 底部导航栏，显示在页面底部，用于切换不同的视图或操作。

#### `backgroundColor` (颜色)
- **类型**: `Color`
- **说明**: Scaffold 的背景颜色。

#### `resizeToAvoidBottomInset` (布尔值)
- **类型**: `bool`
- **说明**: 控制当键盘弹出时，是否自动调整 `Scaffold` 的大小以避免底部被遮挡。

#### `extendBody` (布尔值)
- **类型**: `bool`
- **说明**: 控制 `body` 是否延伸到 `Scaffold` 的 `bottomNavigationBar` 之后。

### 用法示例

```dart
Scaffold(
  appBar: AppBar(
    title: Text('My App'),
    actions: [
      IconButton(
        icon: Icon(Icons.settings),
        onPressed: () {
          // 打开设置页面
        },
      ),
    ],
  ),
  body: Center(
    child: Text('Hello, World!'),
  ),
  floatingActionButton: FloatingActionButton(
    onPressed: () {
      // 执行操作
    },
    child: Icon(Icons.add),
  ),
  drawer: Drawer(
    // 抽屉内容
  ),
  bottomNavigationBar: BottomNavigationBar(
    // 底部导航栏项目
  ),
  backgroundColor: Colors.white,
  resizeToAvoidBottomInset: true,
  extendBody: true,
)



## FloatingActionButton 浮动按钮

Flutter中的`FloatingActionButton`是一个圆形的按钮，通常位于屏幕的底部或角落，用于执行应用程序中的主要操作。

### 属性

#### `onPressed` (函数)
- **类型**: `VoidCallback`
- **说明**: 按钮被点击时触发的回调函数。

#### `child` (组件)
- **类型**: `Widget`
- **说明**: 在按钮内部显示的小部件，通常是`Icon`或`Text`。

#### `backgroundColor` (颜色)
- **类型**: `Color`
- **说明**: 按钮的背景颜色。

#### `foregroundColor` (颜色)
- **类型**: `Color`
- **说明**: 按钮内部内容（例如图标或文本）的颜色。

#### `tooltip` (文本)
- **类型**: `String`
- **说明**: 按钮的工具提示文本，当用户长按按钮时显示。

### `elevation` (浮动高度)
- **类型**: `double`
- **说明**: 按钮的浮动高度，控制按钮的立体效果。

#### `heroTag` (标记)
- **类型**: `Object`
- **说明**: 用于在页面之间共享动画的标识符。

#### 用法示例

```dart
FloatingActionButton(
  onPressed: () {
    // 在按钮被点击时执行的操作
  },
  child: Icon(Icons.add),
  backgroundColor: Colors.blue,
  foregroundColor: Colors.white,
  tooltip: '添加',
)

