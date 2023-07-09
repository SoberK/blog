# docker 学习


## 常用命令

### 容器相关
+ docker logs id/name  查看镜像的log
+ docker stop id/name  停止容器
+ docker ps 查看docker容器
+ docker start/restart b750bbbcfd88 启动/重启容器
+ docker run -it ubuntu /bin/bash 启动容器
+ docker exec -it 243c32535da7 /bin/bash 进入容器并打开bash
+ docker rm -f 243c32535da7  删除容器/镜像
+ docker export 1e560fca3906 > ubuntu.tar 导出容器
+ docker import ubuntu.tar 导入容器
+ docker run -d -P training/webapp python app.py 默认端口映射到本地
    + -P:将容器内部使用的网络端口随机映射到我们使用的主机上。
+ docker run -d -p 5000:5000 training/webapp python app.py 指定端口映射
+ docker port 70dc8b5bffe0 查看port映射情况
+ docker top 70dc8b5bffe0 来查看容器内部运行的进程

### 镜像相关 
+ docker images 查看所有镜像
+ docker pull ubuntu docker拉取容器镜像
+ docker search httpd 搜索镜像
+ docker rmi hello-world 删除镜像

### 网路相关互联
+ docker network ls 查看所有网络
+ docker network create -d bridge test-net 创建网络
    + -d:指定模式 有 bridge、overlay。


### dockerfile 
+ 创建一个Dockerfile 文件 ,里面写入
```
FROM nginx
RUN echo '这是一个本地构建的nginx镜像' > /usr/share/nginx/html/index.html
```

docker build -t nginx:v3 . 打包当文件到nginx

+ 指令详解:
   后面补起

### docker compose(Compose 是用于定义和运行多容器 Docker 应用程序的工具)






## 容器的启动


### 运行基本容器
docker run ubuntu:15.10 /bin/echo "hello world"

### 运行交互式的容器

+ -t: 在新容器内指定一个伪终端或终端。
+ -i: 允许你对容器内的标准输入 (STDIN) 进行交互。

docker run -i -t ubuntu:15.10 /bin/bash


进入容器打出:exit;退出

### 启动后台容器

docker run -d ubuntu:15.10 /bin/sh -c "while true; do echo hello world; sleep 1; done"




