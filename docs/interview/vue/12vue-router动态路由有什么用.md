### 12.vue-router动态路怎么定义？怎么获取传过来的动态参数

1. ﻿﻿﻿很多时候，我们需要将给定匹配模武的路由映射到同一个组件，这种情况就需要定义动态路由。
2. ﻿﻿﻿例如，我们可能有一个User、组件，它应该对所有用户进行渲染，但用户1D不同。在vue Router 中，我们可以在路径中使用一个动态字段来实现，例如：“{ path：“/users/ :id'，component: User子，其中
    ^：id^就是路径参数
3. ﻿﻿﻿路径参数 用冒号 ：“表示。当一个路由被匹配时，它的params 的值将在每个组件中以
4. this.$route. params的形式暴露出来。
5. ﻿﻿﻿参数还可以有多个，例如“/users/:username/ posts/:postId；除了$route.params之外。 $route对象还公开了其他有用的信息，如‘$route.query、^$route.hash• 等。

6.当然在ios端的话，会有兼容性问题