# Babel

### @babel/core

这个包的作用是整个报的核心，是不可少的一个一个模块，我们说的babel6\7就是这个@babel/core

### @babel/cli

这个是一个终端，可以执行 ``npmx babel index.js``

### @babel/preset-env

是预设，在 ``presets``中配置后相当于配置多个设置，里面包含了一些插件的集合，更加简洁

### @babel/polyfill

叫垫片，使用 ``npm`` 安装后，需要手动在入口出引入，包含了两个包，一个事core-js，一个是regenerator-runtime

### @babel/runtime

这个包里面包含了一些编译用到的**辅助函数**

### @babel/plugin-tranform-runtime

这个编译中通过@babel/runtime 的辅助函数，生成语法糖，但是如果有同样的函数，就会重复生成辅助函数，导致包的大小的冗余，此时用 ``@babel/pulgin-transform-runtime``就可以把重复的辅助函数，减少冗余，一般和 ``@babel/runtime``一起使用。

### @bable/plugin-transform-rengenerator

这个包的作用是用来替换@bable-polyfill的，是升级版本，因为@bable-polyfill 中包含的core-js是2.0的，现在这个插件是3.0中的最新的版本中的预设里面包含了改配置，其实就是不需要单独设置的。
