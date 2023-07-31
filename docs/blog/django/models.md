# models

## 常用字段模型
  + autoField 自增模型
  + CharField 字符串
  + InterField 整数
  + DecimalField 小数
  + FloatField 浮点数
  + BooleanField 布尔 
  + DateFiled 时间  
    + DateFiled.auto_now 最后一次修改的时间自动，一般是更新时间
    + DateFiled.auto_now_add  最后一次被创建的时间，一般是创建时间
  + TimeField 时间
  + DateTimeField 日期时间
  + FileField 上传问紧啊
  + ImageFiled 图片

    
## 常用数据约束（参数）
  + verbose_name admin中字段现实名称
  + blank = True django admin 中数据是否允许为空值，一般和上面的搭配使用
  + choices admin下拉框菜单
  + editable = True 在admin中书否可以编辑，不可以编辑则不现实
  + null = True  数据库是可以空
  + primary_key =True 主键是否为空
  + auto_now 最后一次修改的时间自动，一般是更新时间
  + auto_now_add 最后一次被创建的时间，一般是创建时间
  + max_length 最大值
  + default 默认值
  + name|db_colum 数据库呀字段名称
  + unique=True 不允许重复
  + db_index = True 数据库索引
  + editable = True 在admin中书否可以编辑，不可以编辑则不现实
  + 设置表民
      class Meta:
        db_table = 'person'


## 关联关系

### 一对多 关键字 ForeignKey
```
from django.db import models
class Manufacturer(models.Model):
    # ...
    pass


class Car(models.Model):
    manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE)
```


### 多对多 关键字 ManyToManyField

+ 创建普通模型
```
from django.db import models


class Topping(models.Model):
    # ...
    pass


class Pizza(models.Model):
    # ...
    toppings = models.ManyToManyField(Topping)
```

+ 添加二外的字段,自定义表去建立多对多关系

```
from django.db import models


class Person(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name


class Group(models.Model):
    name = models.CharField(max_length=128)
    members = models.ManyToManyField(Person, through="Membership")

    def __str__(self):
        return self.name


class Membership(models.Model):
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    date_joined = models.DateField()
    invite_reason = models.CharField(max_length=64)
```




### 一对一