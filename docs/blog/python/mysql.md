# mysql

## docker安装mysql

+ ```vim mysql/my.cnf```
+ 写入内容

``` shell

[mysqld]
user=mysql
character-set-server=utf8
default_authentication_plugin=mysql_native_password
secure_file_priv=/var/lib/mysql
expire_logs_days=7
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
max_connections=1000

[client]
default-character-set=utf8

[mysql]
default-character-set=utf8
```

+ ```docker run --restart=always --privileged=true -d -v /opt/mysql/data/:/var/lib/mysql -v /opt/mysql/conf.d:/etc/mysql/conf.d -v /opt/mysql/my.cnf:/etc/mysql/my.cnf -p 33060:3306 --name my-mysql -e MYSQL_ROOT_PASSWORD=123456 mysql```

+ navicate连接工具免费地址 https://github.com/yhan219/navicat_reset_mac

## 基础命令

### 登录登出

+ mysql -uroot -p
+ exit;

### 数据库操作

+ show databases; 查看所有表
+ create database python31 chartset=utf8;  创建数据库
+ use python31; 选中数据库
+ select database();查看选中的数据库
+ drop database python3; 删除数据库

### 表的操作

+ 创建表
+ desc tablename 查看表结构
+ show tables
+ alter table 表明 add 字段名 类型   添加字段名
+ alter table 表明 modify 字段名 类型   修改字段名

### [表类型](https://www.runoob.com/mysql/mysql-data-types.html)

### 表操作

#### 查询

select * from tableName;
select name,nam2,name3 from tableName;

#### 插入

insert into tableName (列明....) values (内容...);
``` sql
INSERT into student  (id,NAME,age,tall) values (6,'关于',55,1.82),(7,'吕布',38,1.88),(8,'孙权',28,1.78),(9,'诸葛亮',48,1.62),(10,'嫂夫人',36,1.52);
```

#### 修改

update tablename set tablename=value,tablename2=value2 where 条件

```sql
UPDATE student SET gender=2 WHERE id in (2,5,10)
```

#### 删除语句

delete from tablename where 条件 

#### as和distinct

+ as别名 或者空格 ```SELECT * from student as s WHERE s.age>50```
+ distinct 去除重复行 ```select distinct age,gender from student```

#### where 比较运算符

+ >、=、>=、<、<=、!=\<>

#### where 逻辑运算符

+ and
+ or
+ not

#### where like模糊查询

+ name like '%sang'
+ name like 'sang%'
+ name like '%sang%'

#### where between...and...和in

+ where id between 20 and 30;
+ where id in (3,4,6);

#### where空判断;

+ is null;
+ is not null;

#### 排序

+ order by name desc;
+ order by name desc,name2 asc;
+ 默认升序asc

#### 分页查询
+ limit 0,3 第一次参数位置，第二个条数
+ limit (n-1)*m,m 分页

#### 聚合函数

聚合函数不对空值进行统计

+ count() select count(id) from student; 统计个数
+ max() select max(id) from student; 统计最大的id是
+ min() select min(id) from student; 统计最小的id是
+ sum() select sum(id) from student; 求和
+ avg() select avg(id) from student; 平均值
+ group_concat(name) select gender,group_concat(name) from student group by gender; 拼接数据
+ ifnull() select avg(ifull(id,0)) from student; 如果是空就加入统计默认值

## 条件查询

### 分组查询

分组选择的字段必须要和分组的字段保持一致
+ having 对分组后的数据进行过滤 ``` sql  SELECT department_name, SUM(salary) AS avg_salary FROM employees GROUP BY department_name HAVING SUM(salary) > (SELECT AVG(salary) FROM employees); ```
+ select gender from student group by gender;
+ select gender,avg(age) from student group by gender; 配合聚合函数
+ with rollup  对分组后的数据进行统计 ```SELECT name,SUM(signin) as signin_count FROM employee_tbl GROUP BY name WITH ROLLUP;``` 在基础之上统计

### 连接查询

#### 内连接

+ INNER JOIN（内连接,或等值连接）：获取两个表中字段匹配关系的记录。
+ LEFT JOIN（左连接）：获取左表所有记录，即使右表没有对应匹配的记录。
+ RIGHT JOIN（右连接）： 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录。

```sql
 	SELECT * from student INNER JOIN classes as c on student.cid = c.id;
	SELECT * from student left JOIN classes as c on student.cid = c.id;
	SELECT * from student RIGHT JOIN classes as c on student.cid = c.id; 
```

## 三大范式

+ 第一范式(确保每列保持原子性)
+ 第二范式(确保表中的每列都和主键相关)
+ 第三范式(确保每列都和主键列直接相关,而不是间接相关)

## 事务四大特性
1、原子性（Atomicity）
　　原子性是指事务包含的所有操作要么全部成功，要么全部失败回滚，因此事务的操作如果成功就必须要完全应用到数据库，如果操作失败则不能对数据库有任何影响。

2、一致性（Consistency）
　　一致性是指事务必须使数据库从一个一致性状态变换到另一个一致性状态，也就是说一个事务执行之前和执行之后都必须处于一致性状态。

　　拿转账来说，假设用户A和用户B两者的钱加起来一共是5000，那么不管A和B之间如何转账，转几次账，事务结束后两个用户的钱相加起来应该还得是5000，这就是事务的一致性。

3、隔离性（Isolation）
　　隔离性是当多个用户并发访问数据库时，比如操作同一张表时，数据库为每一个用户开启的事务，不能被其他事务的操作所干扰，多个并发事务之间要相互隔离。

　　即要达到这么一种效果：对于任意两个并发的事务T1和T2，在事务T1看来，T2要么在T1开始之前就已经结束，要么在T1结束之后才开始，这样每个事务都感觉不到有其他事务在并发地执行。

       MySQL标准的事务隔离级别包括：

              1. 读未提交（read uncommitted）：一个事务还没提交时，它做的变更就能被别的事务看到。

              2. 读已提交（read committed）：一个事务提交之后，它做的变更才会被其他事务看到（为什么有些产商会把隔离级别设置成这个？）。

              3. 可重复读（repeatable read）：默认（为什么默认是这个？），一个事务执行过程中看到的数据，总是跟这个事务在启动时看到的数据是一致的。当然在可重复读隔离级别下，未提交变更对其他事务也是不可见的。

              4. 串行化（serializable ）：对于同一行记录，“写”会加“写锁”，“读”会加“读锁”。当出现读写锁冲突的时候，后访问的事务必须等前一个事务执行完成，才能继续执行。

       Oracle标准的事务隔离级别包括：

              1. 读已提交（read committed）：默认隔离级别。

              2. 串行化（serializable ）

4、持久性（Durability）
　　持久性是指一个事务一旦被提交了，那么对数据库中的数据的改变就是永久性的，即便是在数据库系统遇到故障的情况下也不会丢失提交事务的操作。

	例如我们在使用JDBC操作数据库时，在提交事务方法后，提示用户事务操作完成，当我们程序执行完成直到看到提示后，就可以认定事务已经正确提交，即使这时候数据库出现了问题，也必须要将我们的事务完全执行完成，否则就会造成我们看到提示事务处理完毕，但是数据库因为故障而没有执行事务的重大错误。

## 事务

引擎要为innerDB的才可以支持事务，默认innerDB,还有个MySAM不支持事务，但是访问速度快

修改手动提交 ```set autocommit = 0;```

``` sql
begin;手动开启；
insert into classes (name,id) values ('zhans',0);
commit; 提交操作
rollback;回滚操作


```

## 索引

主要为了提高查询速度
### 普通索引
+ show inde from classes 查看表的索引
+ 带有Key的就是索引标识

### 联合索引

+ 最左原则

```sql
比如index(name,age)创建了联合索引,左边的字段必须再where条件中，否则联合索引不起作用
select ..... where name='11' 起作用
select ..... where age='11' 不起作用
select ..... where name=22 and age='11' 起作用

```

### 建索引的原则

+ 不是越多越好，合理利用
+ 不要对经常跟新的表做索引，对经常查询的字段做索引
+ 数据量小不要建索引
+ 字段相同值的时候不要建索引


## 函数

+ around(price,2) 保留两位小数
