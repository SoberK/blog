# EXTI中断

+ 中断：在主程序运行过程中，出现了特定的中断触发条件（中断源），使得CPU暂停当前正在运行的程序，转而去处理中断程序，处理完成后又返回原来被暂停的位置继续运行

+ 中断优先级：当有多个中断源同时申请中断时，CPU会根据 急的中断源

+ 中断嵌套：当一个中断程序正在运行时，又有新的更高优先级的中断源申请中断，CPU再次暂停当前中断程序，转而去处理新的中断程序，处理完成后依次进行返回

## 中断执行流程





### NVIC

使用NVIC统一管理中断，每个中断通道都拥有16个可编程的优先等级，可对优先级进行分组，进一步设置抢占优先级和响应优先级

基本结构

![nvic结构](/Users/fanrongkong/code/Project/网盘/vuepress-blog/docs/blog/嵌入式/images/中断/nvic结构.png)

优先级：

 ![nvic优先级](/Users/fanrongkong/code/Project/网盘/vuepress-blog/docs/blog/嵌入式/images/中断/nvic优先级.png)

+ 值越小优先级越高
+ 抢断优先级：中断当前正在运行的程序
+ 响应优先级：可以插队到当前运行程序后面一位进行排队





### EXTI 外部中断

+ EXTI可以监测指定GPIO口的电平信号，当其指定的GPIO口产生电平变化时，EXTI将立即向NVIC发出中断申请，经过NVIC裁决后即可中断CPU主程序，使CPU执行EXTI对应的中断程序
+ 支持的触发方式：上升沿/下降沿/双边沿/软件触发
+ 支持的GPIO口：所有GPIO口，但相同的Pin不能同时触发中断
+ 通道数：16个GPIO_Pin，外加PVD输出、RTC闹钟、USB唤醒、以太网唤醒
+ 触发响应方式：中断响应/事件响应

![nvic结构](/Users/fanrongkong/code/Project/网盘/vuepress-blog/docs/blog/嵌入式/images/中断/EXTI基本结构.png)

### AFIO

- AFIO主要用于引脚复用功能的选择和重定义
- 在STM32中，AFIO主要完成两个任务：复用功能引脚重映射、中断引脚选择



### API

+ NVIC_PriorityGroupConfig

​	功能: 设置优先级分组：先占优先级和从优先级 

​	参数:    NVIC_PriorityGroup：优先级分组位长度      

​	返回值: 无

​	







