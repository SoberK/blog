# Getx

## 状态管理

### GetView

创建一个Get视图，类似Stateless

``` js

class TestController extends GetxController {
  var title = 'User Info:'.obs;

  increament() => title.value = "2121";
}

class Home extends GetView<TestController> {
//final TestController c = Get.put(TestController());
Get.put(GetViewCountController());
//展示
Text(controller.title)
//修改
onPressed: () {
controller.title.value = '33344';
}

}

```

### GetView
用法和GetView很相似，只不过缓存了一个catch

``` js

class TestController extends GetxController {
  var title = 'User Info:'.obs;

  increament() => title.value = "2121";
}

class Home extends GetView<TestController> {
//final TestController c = Get.put(TestController());
Get.put(GetViewCountController());
//展示
Text(controller.title)
//修改
onPressed: () {
controller.title.value = '33344';
}

}

```


### 控制器
+ GetxController 普通控制器
+ GetxService 持久化控制器
``` js
class TestController extends GetxController {
  var title = 'User Info:'.obs;

  increament() => title.value = "2121";
}
```

## 路由管理

### 常用api
+ Get.to(NextScreen()) 跳转到新页面
+ Get.off(NextScreen()); 进入下一个页面，但没有返回上一个页面的选项（用于SplashScreens，登录页面等）。
+ Get.back(); 关闭弹框的
+ Get.offAll(NextScreen());进入下一个界面并取消之前的所有路由（在购物车、投票和测试中很有用）。
+ var data = await Get.to(Payment()); 要导航到下一条路由，并在返回后立即接收或更新数据。
+ Get.back(result: 'success'); 在另一个页面上，发送前一个路由的数据。
+ Get.toNamed("/NextScreen");
+ Get.offNamed("/NextScreen");
+ Get.offAllNamed("/NextScreen"); 
+ Get.toNamed("/NextScreen", arguments: 'Get is the best'); 带参数
+ print(Get.arguments); 获取参数
+ Get.offAllNamed("/NextScreen?device=phone&id=354&name=Enzo");
+ print(Get.parameters['id']);
+ GetPage(name: '/profile/:user',page: () => UserProfile(),),  动态路由 
+ Get.dialog(YourDialogWidget()); dialog
+ Get.bottomSheet(YourDialogWidget()) BottomSheets
+ Get.snackbar('Hi', 'i am a modern snackbar'); snackbar

### 中间件

``` js
GetMaterialApp(
  routingCallback: (routing) {
    if(routing.current == '/second'){
      openAds();
    }
  }
)
```


### 定义路由
  ``` js
	GetMaterialApp(
		 unknownRoute: GetPage(name: '/notfound', page: () => UnknownRoutePage()), //404
      initialRoute: '/',
      getPages: [
        GetPage(name: '/', page: () => MyHomePage()),
        GetPage(name: '/second', page: () => Second()),
        GetPage(
          name: '/third',
          page: () => Third(),
          transition: Transition.zoom  
        ),
      ],
    )
	```
### 嵌套路由
```js
Navigator(
  key: Get.nestedKey(1), // create a key by index
  initialRoute: '/',
  onGenerateRoute: (settings) {
    if (settings.name == '/') {
      return GetPageRoute(
        page: () => Scaffold(
          appBar: AppBar(
            title: Text("Main"),
          ),
          body: Center(
            child: TextButton(
              color: Colors.blue,
              onPressed: () {
                Get.toNamed('/second', id:1); // navigate by your nested route by index
              },
              child: Text("Go to second"),
            ),
          ),
        ),
      );
    } else if (settings.name == '/second') {
      return GetPageRoute(
        page: () => Center(
          child: Scaffold(
            appBar: AppBar(
              title: Text("Main"),
            ),
            body: Center(
              child:  Text("second")
            ),
          ),
        ),
      );
    }
  }
),
```

## 依赖管理

+ Get.put()
+ Get.put()： 不使用控制器实例也会被创建
+ Get.lazyPut()： 懒加载方式创建实例，只有在使用时才创建
+ Get.putAsync()：`Get.put()`的异步版版本
+ Get.create()： 每次使用都会创建一个新的实例
+ Get.find();
  
``` js
	class MyApp extends StatelessWidget {
  MyApp({super.key});

  final MovieController c = Get.put(MovieController()); //依赖注入

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(home: Scaffold(body: Obx(() {
      if (c.isLoading.value) {
        return Center(
          child: CircularProgressIndicator(),
        );
      } else {
        print(c.movieList);
        return Son();
      }
    })));
  }
}

class Son extends StatelessWidget {
  Son({Key? key}) : super(key: key);

  MovieController c = Get.find(); //子组件去找到注入的控制器

  @override
  Widget build(BuildContext context) {
    return Column(
      children: c.movieList.value.map((e) => Text(e.title.toString())).toList(),
    ); // const Placeholder();
  }
}
```