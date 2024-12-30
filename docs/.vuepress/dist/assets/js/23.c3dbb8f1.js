(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{301:function(e,t,a){"use strict";a.r(t);var _=a(14),r=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"启动项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动项目"}},[e._v("#")]),e._v(" 启动项目")]),e._v(" "),t("p",[e._v("python3 ./manaage.py runserver [0.0.0.0:8080]")]),e._v(" "),t("ul",[t("li",[e._v("启动后会提示：有18个文件未迁移")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.\nRun 'python manage.py migrate' to apply them.\n")])])]),t("ul",[t("li",[e._v("创建app python3 ./manage.py startapp App")]),e._v(" "),t("li",[e._v("views 主要是视图文件")]),e._v(" "),t("li",[e._v("定义多层的模型"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("现在app中新增urls.py\nurlpatterns = [\n    path('index22/',index2),\n    path('index223/', index)\n]\n\n再主环境的urls中定义父路由，使用include \npath('index/',include('user.urls'))\n\n")])])])]),e._v(" "),t("li",[e._v("创建admin后台管理 python3 ./manage.py createsuperuser")])]),e._v(" "),t("h1",{attrs:{id:"模型的增删改查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型的增删改查"}},[e._v("#")]),e._v(" 模型的增删改查")]),e._v(" "),t("h2",{attrs:{id:"增"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增"}},[e._v("#")]),e._v(" 增")]),e._v(" "),t("ul",[t("li",[e._v("obj = Author() obj.first = 'zhangsan' obj.save()")]),e._v(" "),t("li",[e._v("obj = Author(first = 'zhangsan') obj.save()")]),e._v(" "),t("li",[e._v("Author.objects.create(first = 'zhangsan')")]),e._v(" "),t("li",[e._v("Author.objects.get_or_create(first = 'zhangsan')")])]),e._v(" "),t("h2",{attrs:{id:"删"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删"}},[e._v("#")]),e._v(" 删")]),e._v(" "),t("ul",[t("li",[e._v("p = Author.objects.filter(age);p.delete() 删除")])]),e._v(" "),t("h2",{attrs:{id:"改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改"}},[e._v("#")]),e._v(" 改")]),e._v(" "),t("ul",[t("li",[e._v("Author.objects.all().update(name ='11') 批量修改")]),e._v(" "),t("li",[e._v("obj = Author() obj.first = 'zhangsan' obj.save() 单个修改")]),e._v(" "),t("li",[e._v("obj.save(update_fields=['name']) 只更新某个字段、")])]),e._v(" "),t("h2",{attrs:{id:"查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查"}},[e._v("#")]),e._v(" 查")]),e._v(" "),t("ul",[t("li",[e._v(".get(age=18) 查询单个，如果多个或者没有，回报错")]),e._v(" "),t("li",[e._v(".first() 第一个对象")]),e._v(" "),t("li",[e._v("last() 最后一个对象")]),e._v(" "),t("li",[e._v("count() 查询对象个数")]),e._v(" "),t("li",[e._v("exists() 是否存在")]),e._v(" "),t("li",[e._v("all() 全部数据")]),e._v(" "),t("li",[e._v("values('age','name') 指定列")]),e._v(" "),t("li",[e._v("value_list()")])]),e._v(" "),t("h2",{attrs:{id:"进阶操作过滤操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进阶操作过滤操作"}},[e._v("#")]),e._v(" 进阶操作过滤操作")]),e._v(" "),t("ul",[t("li",[e._v("Author.object.filter(name='seven')")]),e._v(" "),t("li",[e._v("Author.object.filter(age__gt=18) >18")]),e._v(" "),t("li",[e._v("Author.object.filter(age__gte=18) >=18")]),e._v(" "),t("li",[e._v("Author.object.filter(age__lt=18) <18")]),e._v(" "),t("li",[e._v("Author.object.filter(age__lte=18) <=18")]),e._v(" "),t("li",[e._v("Author.object.filter(age__lte=18,age__gt=12) <=18 且 age >12")]),e._v(" "),t("li",[e._v("Author.object.filter(id__in = [11,12]) id有11、12的")]),e._v(" "),t("li",[e._v("Author.object.exclude(id__in = [11,12]) id没有11、12的")]),e._v(" "),t("li",[e._v("Author.object.filter(id__contain ='1') like操作")]),e._v(" "),t("li",[e._v("Author.object.filter(id__icontain ='1') like操作 大小写不敏感")]),e._v(" "),t("li",[e._v("Author.object.filter(id__regex ='^1') 正则")]),e._v(" "),t("li",[e._v("Author.object.filter(id__iregex ='^1') 正则 大小写不敏感")]),e._v(" "),t("li",[e._v("Author.object.filter(id__range =[10,20]) between and")]),e._v(" "),t("li",[e._v("Author.object.filter(id__range =[10,20]).order_by('id') between and 正序")]),e._v(" "),t("li",[e._v("Author.object.filter(id__range =[10,20]).order_by('-id') between and 降序")]),e._v(" "),t("li",[e._v("Author.object.filter(name__startwith='wu') 以什么开始")]),e._v(" "),t("li",[e._v("Author.object.filter(name__istartwith='wu') 以什么开始  大小写不敏感")]),e._v(" "),t("li",[e._v("Author.object.filter(name__endwith='wu') 以什么结尾")]),e._v(" "),t("li",[e._v("Author.object.filter(name__iendwith='wu') 以什么结尾 大小写不敏感")])]),e._v(" "),t("h2",{attrs:{id:"聚合函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#聚合函数"}},[e._v("#")]),e._v(" 聚合函数")]),e._v(" "),t("ul",[t("li",[e._v("Author.object.aggregate(Max('age'))  最大值")]),e._v(" "),t("li",[e._v("Author.object.aggregate(Min('age'))  最小值")]),e._v(" "),t("li",[e._v("Author.object.aggregate(Sum('age'))  求和")]),e._v(" "),t("li",[e._v("Author.object.aggregate(Avg('age'))  平均值")]),e._v(" "),t("li",[e._v("Author.object.aggregate(Count('age'))  统计个数")])]),e._v(" "),t("h1",{attrs:{id:"使用远程数据包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用远程数据包"}},[e._v("#")]),e._v(" 使用远程数据包")]),e._v(" "),t("p",[e._v("如果使用远程sql的情况下，不安装mysqlclient的前提下，可以安装pymysql")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pip3 install pymysql\n[setting.py]\nimport pymysql\npymysql.install_as_MySQLdb()\n....\n执行迁移操作\n")])])]),t("h1",{attrs:{id:"一对多"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一对多"}},[e._v("#")]),e._v(" 一对多")]),e._v(" "),t("p",[e._v("在model关联键")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("     user_type = models.ForeignKey(Usertype,on_delete=models.CASCADE)\n")])])]),t("p",[e._v("删除数据 on_delete")]),e._v(" "),t("ul",[t("li",[e._v("models.CASCADE 级联删除")]),e._v(" "),t("li",[e._v("models.PROTECT 保护删除")]),e._v(" "),t("li",[e._v("models.SET_NULL 设置为空")]),e._v(" "),t("li",[e._v("models.SET_DEFAULT 设置为默认值")])]),e._v(" "),t("p",[e._v("连表查询")]),e._v(" "),t("ul",[t("li",[e._v("User.objects.filter(user_type = UserType.object.get(pk=1)) 关联模型查找")]),e._v(" "),t("li",[e._v("User.objects.filter(user_type_id = 1) 关联id查询")]),e._v(" "),t("li",[e._v("User.objects.filter(user_type__name = '张三') 关联字段查询")])]),e._v(" "),t("h1",{attrs:{id:"response"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" response")]),e._v(" "),t("ul",[t("li",[e._v("return HttpRequest('ok')")]),e._v(" "),t("li",[e._v("return render('index.html')")]),e._v(" "),t("li",[e._v("return HttpResponseRedirect('/request/')")]),e._v(" "),t("li",[e._v('return JsonResponse({"data":{}})')])]),e._v(" "),t("h1",{attrs:{id:"回话请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回话请求"}},[e._v("#")]),e._v(" 回话请求")]),e._v(" "),t("ul",[t("li",[e._v("session")]),e._v(" "),t("li",[e._v("cookie")])])])}),[],!1,null,null,null);t.default=r.exports}}]);