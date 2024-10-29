## 创建第一个程序

```c
#include<stdio.h> 包含标准库的信息

int main(void){
    printf("hellow fish\n");
}
```

cc main.c 会生成a.out 编译

./a.out会执行文件会输出内容

### 数据类型

+ Int(16或32位)

+ Float(32位)

+ char

+ Short

+ long（长整形 32位）

+ Double

  print格式化字符串，以print("%d",3)其中%d就是格式化，代表以数字输出

+ %o代表八进制

+ %x代表16进制

+ %c代表字符集

+ %s代表字符串

+ %%代表百分号

### 符号常量

一些常量需要替换成#define的方式

```c
#include<stdio.h>

#以这种方式代替
#define lower 0    
#define upeer 300
#define setep 20

int main(void){
    int fahr,celsius;

    #int lower,upeer,setep; #替换处
    #lower=0;
    #upeer =300;
    #setep = 20;
  
  
    fahr = lower;
    while (fahr<=upeer) {
        celsius = 6*(fahr-32) / 9;
        printf("%d\t%d\n",fahr,celsius);
        fahr = fahr + setep;
        /* code */
    }
    
}
```

### 文件复制

```c
#include<stdio.h>
int main(void){
    int c;
   /* 获取输入 */
   /*  EOF代表程序不结束*/
    while ((c=getchar())!= EOF){
        putchar(c);
      /* 打印输出 */
    }
    
}
  
```





## 类型、运算符、表达式



### 变量名

+ 数字、字符、下划线
+ 开头必须是字母和下划线开头
+ 区分大小写
+ 变量小写，常量大写

### 数据类型及长度

+ 整数

  + Char 字符型，占用一个字节==8tyte
  + Short 占用2个字节，
  + Int 输出格式化 %d 占用4个字节
  + long 输出格式化 %ld  占用8个字节
  + long long （c99）输出格式化 %lf 占用8个字节

+ 浮点数

  + float 单精度（小数点）

  + double 双精读 输入用%lf
  + long double  （c99）

+ 逻辑

  + bool（c99）

+ 指针

+ 自定义类型





范围：char<short<int < flot<double

sizeof获取大小

+  Sizeof(int) =4

+ Sizeof(a) =4

+ Short\long 限定字符 short int a; short 16位，long 32位
+ signed\unsigned 类型限定 于char类型或int，
  + unsigned 类型的总是正数或0，遵循2^n规律，比如unsigned char a;范围位0-255 ，因为2^8，8为char的为数

### 常量

+ 以l或L结尾的事long类型
+ 无符号以u或U结尾，ul代表 unsigned long类型
+ 前缀以0的常量代表8进制   31（10进制） =  037（八进制）
+ 以0x或0X的代表16进制 31（10进制） =  0x1f（十六进制）
+ 字符常量以单引号，比如'0'代表48
+ 字符串一般都是以'\0'结束的，
+ 枚举常量 
  + enum boolean {No,Yes} 第一个值默认为0，后面一次累加
  + 或者 enum boolean {No=1,Yes} 默认修改第一个值
  + 或者 enum boolean {No='\b',Yes='\c'} 可以赋值

### 声明

+ 所有变量必须先声明在使用，就是指定变量的类型
+ 可以声明的时候赋值，初始化
+ const 限定符，代表常量



### 算数运算符：略

### 关系运算符：略

### 类型转换

+ 类型不同的时候自动会转换，转换是比较窄的转换成比较宽的，如果反之操作，会有报错



### 循环

+ Goto 语句(建议在多层for循环使用)

  ```
  int main(){
      int i;
      int count = 30;
     for ( i = 0; i < count; i++){
      if(i>20){
          goto out;
      }
     }
     out:
      printf("end: %d",i);
  }
  
  
  ```
  


### 补码

+ 字节是计算机数据存储的基本单位，通常一个字节由8个位（bit）组成。

+ 一个字节可以表示的数值范围是`0`到`255`，或者`-128`到`127`（有符号数）。
+ 位代表0和1
+ 1个字节=8位
+ unSigned不以补码的形式，意思没有负数，主要用作移位
+ 如果用unsigned标识，可以在后面加一个U
+ 或者用l或者L标识long
+ 字节之间的加减可以吧整个字节看成一个圆，返回是6点钟方向分别是-1和0,12点方向分别是-128和127 所以-128+1等于=127，-1+1=0，127-1 = -128，1-1=0

### 整型类型

+ int 4个字节
+ short 2个字节
+ long 4个或8个字节
+ long long 8个字节
+ Unsigned 修饰符
+ signed 修饰符

### 整数的输入输出

+ 只有两种形式：int和long
  + %d:int
  + %u:unsigned
  + %ld:long long
  + %lu unsigned longlong
+ 没有特殊需要直接用int

### 浮点类型

+ float 32位  有效7个数字 输出 %f 需要带f来表面身份：0.033f
+ double 64位 有效15个数字 输出 %lf



### 浮点输出进度

+ %f:浮点数
+ %.3f浮点数保留小数点
+ 正数/0= inf 正无穷大
+ 负数/0 = -inf 无穷大
+ 0/0 = nan
+ 浮点数运算是没有精度的
+ 没有特殊需要直接用double，



### 字符类型

+ char c = '1'



### 字符的输出

+ Scanf("%c",&c);

 

### 转转义字符

+ \b 回退
+ \t 到下一个tab位
+ \n 换行
+ \r 回车
+ \\" 双映好
+ \\' 单引号
+  \\\ 反斜杠



### 自动类型转换

+ 当两边类型不一致会自动转成较大的类型
+ char->shrot->int->long->long long 
+ Int->float->double 



### 强制类型转换

+ (int)310.2 转换成int
+ (short)32 
+ 强制类型转换只会计算出一个新的值，不会改变原来的值



### bool类型

+ 必须要用#include<stdbool.h>
+ bool b = b>5



## 函数

###  函数的先后关系

+ 需要先声明再使用;
+ 如果没有先后顺序，就先写声明，也叫函数原型
+ 传值有个漏洞，编译器总是把类型转换好。后续c++就很严格



### 本地变量

+ c是块级作用域
+ 就近原则，访问



## 数组

+ 类型 变量名称[元素数量]  //定义
+ 数组的特点：
  + 其中所有的元素有同一种类型
  + 一旦创建，不能改变大小
  + 数组元素是依次排序的
+ 数组初始化可以集成初始化 int a[] = {1,2,3,45......}
+ Sizeof(a)/Sizeof(0)  返回a 的长度 

 

##  指针

### 运算符&

+ scanf("%d",&i)里面的&后面的必须是变量
+ 地址的大小是否与int相同取决于编译器 
+ %p获取地址

### 指针 *

+ int *p = &i 代表i的地址指向指针p
+ int* p 和int *p是一个意思
+ 指针做为函数实参传递，会改变指针的值 
+ 没有赋值前，指针不能访问
+ 数组的地址指针关系
  + 数组无需取址直接用 int a[10];int *p = a;
  + 数组的元素需要取值 a==&a[0]

### 指针与const

+ 一旦得到了某个变量的地址后，不能再指向其他的变量

  ```C
  Int *const q = &i; // 代表指针是const q是 const
  
  *q = 26 //可以
  
  q++ //error
  ```

+ 标识不能通过这个指针去修改那个变量（并不能使用那个变量成为const）

  ```c
  const int *p = &i;
  *p = 26 //error
  i = 26 //ok
  p = &j;//ok
  ```

  就是const靠近哪个哪个就是const，比如第一个靠近q 说明，q是const，不能自增

### 指针运算

+ 加减
+ 比较



### 动态内存分配

Malloc 关键字

```c
   #include <stdlib.h>

//创建指针
   int *a;

   int number = 10;
//  动态分配
a = (int *)malloc(number*sizeof(int));
   for (int i = 0; i < number; i++)
   {
      /* code */
      printf("%d\n",a[i]);
   }
//释放内存
free(a)


   
```



+ 要记住free，没有free，内存会逐渐下降





## 字符



### 字符串数组

+ 以0结尾的一串字符串
+ 放在string.h中
+ 字符串就是数组(一下写法会自动添加0)
  + char *str = "hello";指向某个字符串，不可修改，
  + char word[] = "hello";  代表字符串就在这里，可以修改
  + char line p[10] = "hello"
  + 如果有要构造一个字符串用数组，如果出来一个字符串用指针
+ 输入输出
  + Scanf("%s",word)
  + printf("%s",word)
+ Putchar
+ string.h
  + strlen 获取长度
  + strcmp 比较两个字符串是否相等，以及大小,返回之间的差
  + strcpy 复制两个值
  + strcat 在字符串中找字符
  + strrchar  从右边开始从字符串中找字符
  + Strstr查找单个字符
  + strcasestr查找单个字符忽略大小写



## 其他类型

### 枚举

+ 和js一样

### 结构类型

+ 相当于自定义对象
+ 可以通过.去访问
+ 使用之前需要声明一下

```c
   struct date{
      int month;
      int day;
      int year;
   };

int main(){
   char s[] = "helo";
   struct date today;//使用结构
   today.day =1;
   today.month = 2;
   today.year = 3;
   return 0;
}
```



### *返回指针的函数

+ 返回本地变量的地址是危险的

+ 返回全局变量或者静态本地变量的地址是安全的

+ 返回在函数内malloc的内存是安全的，但是容易存在问题

+ 最好的做法是返回传入的指针

  > 因为函数中本地变量在函数运行结束就会被销毁，在其他函数使用的时候会被再次用到被销毁的那个变量的地址

tips:

+ 不要用全局变量在函数之间传递参数和结果
+ 劲量避免使用全局变量
+ *使用全局变量和静态本地变量的函数是线程不安全的



###  编译预处理指令

+ #开头的都是编译预处理指令

+ 他们不是C语言的成分，但是c离不开他们

+ #define来定义一个宏(类似全局的const)

  + #define PI 3.1415

  + \#define PR printf("1212");\           //添加\可以保持语句继续

    ​            printf("333");

  + #define _DEBUGGER

  + #define __LINE__

  + #define cube(x)((x)\*(x)\* (x))   相当于顶一个宏函数，x\*x\*x 

    + 注意函数需要被括号括住
    + 参数也需要被括号括住
    + 在最后不需要加分号
    + 他不是c的语句

### 文件分块

+ 使用\#include "test.c" 来导入文件
+ 引入的文件里面的方法不需要写方法原型定义
+ #include
  + 作用：
    + 函数声明，宏定义，类型定义
    + 程序就可以编译的时候知道哪些函数的原型，从而正确调用这些函数
    + 引入其他源文件
  + 两种形式
    + 带尖括号的形式 ，代表回去系统目中搜索文件<stdo.h>
    + 双引号，代表在当前目录中搜索 "test.h"

### 文件声明

+ extern 关键字，让项目中知道全局变量的存在

+ 同一单元同名结构不能重复声明，只针对结构，为了解决这个问题，需要在头文件（.h结尾的文件）

  + ```c
    // test.h
    #ifndef TEST_H
    #define TEST_H
    
    // 函数声明
    void printMessage();
    
    #endif
    ```

  + 他的作用意思是如果定义过了就不会重复定义

+ 如果头文件没有结构声明，很难这个头文件不会在一个编译单元里被#include多次

+ `typedef` 最常见的用途是为已有的类型定义一个新的名字，这可以使代码更加清晰易读

  + ```
    typedef int Integer;
    
    使用intger a =10;
    ```

  + 

  

## 格式化输入输出

+ Printf()
  + 结构:printf("%[flag]\[width]\[.prec][hil]")
    + flag
      + \-： 左对齐   "%-9d"  输出：(9个空格)2         
      + +：在字符串前面输出+    "%+d" 输出： +2
      + 0:空位填充为0  "%09d" 输出： 000000002
    + with
      + Number  输出的最小字符数  
      + .number 小数点后的位数
      + \* 小数点后的位数   printf("%*d\n",6,123) 代表\*替换成6 
      + .* 下一个小数点后的位数
    + .prec修饰符 ("%5hh")
      + hh:单个字符
      + h: short
      + l: long
      + ll: longlong
      + L :long double
    + hil 类型
      + i 或d: int
      + u: unsigned int
      + o: 八进制
      + x:十六进制
      + X:字母大写的十六进制
      + f或F:float
      + e或E:指数
      + g或float:float
      + a或A:十六进制浮点
      + c:char
      + s:字符串
      + p:指针
      + n:读入/写出
+ Scanf()
  + 结构:Scanf("%[flag]type")
    + *:跳过
    + 数字：最大数字
    + hh:char
    + h:short
    + l:long或double
    + ll:longlong 
    + L:longdouble
+ 文件输入输出 (用的时候可以去学)
  + \> 将文件输出到某个文件中
  + \<将文件输入到某个文件中
  + FILE
+ 二进制文件 用的时候可以去学
  + fread
  + fwrite

### 位运算

+ & 按位的与   

  + 每一位都1的时候，才是1

  + ```
    1010 1100
    0101 1010
    结果：
    1111 1110
    ```

    

+ | 按位的或

  + 有一个1都是1，否则为0

  + ```
    1010 1100
    0101 1010
    结果：
    0000 1000 
    ```

+ ~ 按位的去反

  + 每一位都取反

  + ```
    1010 1100
    结果：
    0101 0011
    ```

+ ^按位的异或 

  + 两个位相等结果为0，不相等为1

  + ```
    10110100
    01001010
    结果
    11111110
    
    ```

  + x^y^y 等于什么都没有做

+ << 左移

  + 把2进制码都向左移动n位，空出来的用0补上

  + ```
      10101011<<2
      10101011
    1010101100
    结果：
    10101100
    ```

  +  x<< = n 等价于 x* = 2^n

+ \>\> 右移

  + 把2进制码都向又移动n位，空出来的用0补上

  + ```
      10101011>> 2
      10101011
    	00101010
    结果：
    00101010
    ```

  +  x>> = n 等价于 x* = 2^n

### 位段 （搞不懂）



## 可变数组和链表



## 可变数组

 
