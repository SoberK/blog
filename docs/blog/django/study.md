## 启动项目
python3 ./manaage.py runserver [0.0.0.0:8080]

+ 启动后会提示：有18个文件未迁移
```
You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
```
+ 创建app python3 ./manage.py startapp App
+ views 主要是视图文件
+ 定义多层的模型
    ``` 
    现在app中新增urls.py
    urlpatterns = [
        path('index22/',index2),
        path('index223/', index)
    ]
  
    再主环境的urls中定义父路由，使用include 
    path('index/',include('user.urls'))

    ```
+ 创建admin后台管理 python3 ./manage.py createsuperuser 


    

# 模型的增删改查
## 增
  + obj = Author() obj.first = 'zhangsan' obj.save()
  + obj = Author(first = 'zhangsan') obj.save()
  + Author.objects.create(first = 'zhangsan')
  + Author.objects.get_or_create(first = 'zhangsan')
## 删
  + p = Author.objects.filter(age);p.delete() 删除
## 改
  + Author.objects.all().update(name ='11') 批量修改
  + obj = Author() obj.first = 'zhangsan' obj.save() 单个修改
  + obj.save(update_fields=['name']) 只更新某个字段、
## 查
  + .get(age=18) 查询单个，如果多个或者没有，回报错
  + .first() 第一个对象
  + last() 最后一个对象
  + count() 查询对象个数
  + exists() 是否存在
  + all() 全部数据
  + values('age','name') 指定列
  + value_list()
## 进阶操作过滤操作
  + Author.object.filter(name='seven')
  + Author.object.filter(age__gt=18) >18 
  + Author.object.filter(age__gte=18) >=18
  + Author.object.filter(age__lt=18) <18 
  + Author.object.filter(age__lte=18) <=18
  + Author.object.filter(age__lte=18,age__gt=12) <=18 且 age >12 
  + Author.object.filter(id__in = [11,12]) id有11、12的
  + Author.object.exclude(id__in = [11,12]) id没有11、12的
  + Author.object.filter(id__contain ='1') like操作
  + Author.object.filter(id__icontain ='1') like操作 大小写不敏感
  + Author.object.filter(id__regex ='^1') 正则 
  + Author.object.filter(id__iregex ='^1') 正则 大小写不敏感
  + Author.object.filter(id__range =[10,20]) between and 
  + Author.object.filter(id__range =[10,20]).order_by('id') between and 正序 
  + Author.object.filter(id__range =[10,20]).order_by('-id') between and 降序 
  + Author.object.filter(name__startwith='wu') 以什么开始 
  + Author.object.filter(name__istartwith='wu') 以什么开始  大小写不敏感
  + Author.object.filter(name__endwith='wu') 以什么结尾 
  + Author.object.filter(name__iendwith='wu') 以什么结尾 大小写不敏感
## 聚合函数
  + Author.object.aggregate(Max('age'))  最大值
  + Author.object.aggregate(Min('age'))  最小值
  + Author.object.aggregate(Sum('age'))  求和
  + Author.object.aggregate(Avg('age'))  平均值
  + Author.object.aggregate(Count('age'))  统计个数

# 使用远程数据包
如果使用远程sql的情况下，不安装mysqlclient的前提下，可以安装pymysql

```
pip3 install pymysql
[setting.py]
import pymysql
pymysql.install_as_MySQLdb()
....
执行迁移操作
```



# 一对多

在model关联键
```
     user_type = models.ForeignKey(Usertype,on_delete=models.CASCADE)
```

删除数据 on_delete
  + models.CASCADE 级联删除
  + models.PROTECT 保护删除
  + models.SET_NULL 设置为空
  + models.SET_DEFAULT 设置为默认值



连表查询
  + User.objects.filter(user_type = UserType.object.get(pk=1)) 关联模型查找
  + User.objects.filter(user_type_id = 1) 关联id查询
  + User.objects.filter(user_type__name = '张三') 关联字段查询




# response 
+ return HttpRequest('ok')
+ return render('index.html')
+ return HttpResponseRedirect('/request/')
+ return JsonResponse({"data":{}}) 

# 回话请求
+ session 
+ cookie