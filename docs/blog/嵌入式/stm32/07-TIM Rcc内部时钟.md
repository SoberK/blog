# TIM Rcc内部时钟

![ ](../images/中断/定时中断基本结构.jpg)





## 中断执行流程

***打开时钟TIm->配置时钟源->配置时基单元->配置终端输出->配置nvic->使能->监听*** 



### 开启时钟

RCC_APB1PeriphClockCmd(RCC_APB1Periph_TIM2, ENABLE);			



### 配置时钟源

TIM_InternalClockConfig(TIM2);



### 配置时基单元



	TIM_TimeBaseInitTypeDef TIM_TimeBaseInitStructure;				//定义结构体变量
	TIM_TimeBaseInitStructure.TIM_ClockDivision = TIM_CKD_DIV1;		//时钟分频，选择不分频，此参数用于配置滤波器时钟，不影响时基单元功能
	TIM_TimeBaseInitStructure.TIM_CounterMode = TIM_CounterMode_Up;	//计数器模式，选择向上计数
	TIM_TimeBaseInitStructure.TIM_Period = 10000 - 1;				//计数周期，即ARR的值
	TIM_TimeBaseInitStructure.TIM_Prescaler = 7200 - 1;				//预分频器，即PSC的值
	TIM_TimeBaseInitStructure.TIM_RepetitionCounter = 0;			//重复计数器，高级定时器才会用到
	TIM_TimeBaseInit(TIM2, &TIM_TimeBaseInitStructure);				//将结构体变量交给TIM_TimeBaseInit，配置TIM2的时基单元	

**确定定时器计数频率**：

STM32 的计数频率公式是：






ftimer = fstyem  / psc+1     

> > Fstyme 默认72Mhz =  72 000 000
> >
> > ftime =  10000hz 假设一个值
> >
> > psc为 7200 -1 
>
> arr =  ftimer * 时间周期 - 1

ftim = 10000hz * 1 -1 

ftim = 10000 - 1 = 9999

> 

也可以 

72 000 000 / psc+1 =1000hz

Psc = 72 000  - 1

ARR = 1000 *1-1

Ftim =999



也就是说这个计算值是不唯一的。



### 配置终端输出



​	TIM_ITConfig(TIM2, TIM_IT_Update, ENABLE);					//开启TIM2的更新中断



### NVIC配置

略



### TIM使能

​	TIM_Cmd(TIM2, ENABLE);			//使能TIM2，定时器开始运行





### 监听

TIM2_IRQHandler

