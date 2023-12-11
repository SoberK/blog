(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{294:function(e,a,l){"use strict";l.r(a);var n=l(14),s=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#models"}},[e._v("#")]),e._v(" models")]),e._v(" "),a("h2",{attrs:{id:"常用字段模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用字段模型"}},[e._v("#")]),e._v(" 常用字段模型")]),e._v(" "),a("ul",[a("li",[e._v("autoField 自增模型")]),e._v(" "),a("li",[e._v("CharField 字符串")]),e._v(" "),a("li",[e._v("InterField 整数")]),e._v(" "),a("li",[e._v("DecimalField 小数")]),e._v(" "),a("li",[e._v("FloatField 浮点数")]),e._v(" "),a("li",[e._v("BooleanField 布尔")]),e._v(" "),a("li",[e._v("DateFiled 时间\n"),a("ul",[a("li",[e._v("DateFiled.auto_now 最后一次修改的时间自动，一般是更新时间")]),e._v(" "),a("li",[e._v("DateFiled.auto_now_add  最后一次被创建的时间，一般是创建时间")])])]),e._v(" "),a("li",[e._v("TimeField 时间")]),e._v(" "),a("li",[e._v("DateTimeField 日期时间")]),e._v(" "),a("li",[e._v("FileField 上传问紧啊")]),e._v(" "),a("li",[e._v("ImageFiled 图片")])]),e._v(" "),a("h2",{attrs:{id:"常用数据约束-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用数据约束-参数"}},[e._v("#")]),e._v(" 常用数据约束（参数）")]),e._v(" "),a("ul",[a("li",[e._v("verbose_name admin中字段现实名称")]),e._v(" "),a("li",[e._v("blank = True django admin 中数据是否允许为空值，一般和上面的搭配使用")]),e._v(" "),a("li",[e._v("choices admin下拉框菜单")]),e._v(" "),a("li",[e._v("editable = True 在admin中书否可以编辑，不可以编辑则不现实")]),e._v(" "),a("li",[e._v("null = True  数据库是可以空")]),e._v(" "),a("li",[e._v("primary_key =True 主键是否为空")]),e._v(" "),a("li",[e._v("auto_now 最后一次修改的时间自动，一般是更新时间")]),e._v(" "),a("li",[e._v("auto_now_add 最后一次被创建的时间，一般是创建时间")]),e._v(" "),a("li",[e._v("max_length 最大值")]),e._v(" "),a("li",[e._v("default 默认值")]),e._v(" "),a("li",[e._v("name|db_colum 数据库呀字段名称")]),e._v(" "),a("li",[e._v("unique=True 不允许重复")]),e._v(" "),a("li",[e._v("db_index = True 数据库索引")]),e._v(" "),a("li",[e._v("editable = True 在admin中书否可以编辑，不可以编辑则不现实")]),e._v(" "),a("li",[e._v("设置表民\nclass Meta:\ndb_table = 'person'")])]),e._v(" "),a("h2",{attrs:{id:"关联关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关联关系"}},[e._v("#")]),e._v(" 关联关系")]),e._v(" "),a("h3",{attrs:{id:"一对多-关键字-foreignkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一对多-关键字-foreignkey"}},[e._v("#")]),e._v(" 一对多 关键字 ForeignKey")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("from django.db import models\nclass Manufacturer(models.Model):\n    # ...\n    pass\n\n\nclass Car(models.Model):\n    manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE)\n")])])]),a("h3",{attrs:{id:"多对多-关键字-manytomanyfield"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多对多-关键字-manytomanyfield"}},[e._v("#")]),e._v(" 多对多 关键字 ManyToManyField")]),e._v(" "),a("ul",[a("li",[e._v("创建普通模型")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("from django.db import models\n\n\nclass Topping(models.Model):\n    # ...\n    pass\n\n\nclass Pizza(models.Model):\n    # ...\n    toppings = models.ManyToManyField(Topping)\n")])])]),a("ul",[a("li",[e._v("添加二外的字段,自定义表去建立多对多关系")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('from django.db import models\n\n\nclass Person(models.Model):\n    name = models.CharField(max_length=128)\n\n    def __str__(self):\n        return self.name\n\n\nclass Group(models.Model):\n    name = models.CharField(max_length=128)\n    members = models.ManyToManyField(Person, through="Membership")\n\n    def __str__(self):\n        return self.name\n\n\nclass Membership(models.Model):\n    person = models.ForeignKey(Person, on_delete=models.CASCADE)\n    group = models.ForeignKey(Group, on_delete=models.CASCADE)\n    date_joined = models.DateField()\n    invite_reason = models.CharField(max_length=64)\n')])])]),a("h3",{attrs:{id:"一对一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一对一"}},[e._v("#")]),e._v(" 一对一")])])}),[],!1,null,null,null);a.default=s.exports}}]);