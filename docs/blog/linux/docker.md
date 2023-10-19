# docker学习(centos9)

## 安装docker

1. 卸载所有的已存在的docker

```bash
sudo yum remove docker \
docker-client \
docker-client-latest \
docker-common \
docker-latest \
docker-latest-logrotate \
docker-logrotate \
docker-selinux \
docker-engine-selinux \
docker-engine
```

2. 安装yum-utils

```bash
sudo yum install -y yum-utils
# 添加阿里云的源
sudo yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

sudo sed -i 's/download.docker.com/mirrors.aliyun.com\/docker-ce/g' /etc/yum.repos.d/docker-ce.repo

# 官方源
# $ sudo yum-config-manager \
#     --add-repo \
#     https://download.docker.com/linux/centos/docker-ce.repo

```

3. 安装docker

```bash
sudo yum install docker-ce docker-ce-cli containerd.io
```

4. centos8以上需要设置防火墙

```bash
vim /etc/firewalld/firewalld.conf

# FirewallBackend=nftables
FirewallBackend=iptables
```
5. 添加docker的镜像源

```bash
 vim /etc/docker/daemon.json


{
  "registry-mirrors": ["https://mpn6zqak.mirror.aliyuncs.com"]
}
```

6. 启动docker

```bash
sudo systemctl enable docker
sudo systemctl start docker
```


## 基础docker命令

+ docker pull nginx 下载镜像
+ docker ps 查看所有的已启动的进程
+ docker ps -A 查看所有进程
+ docker stop nginx 停止nginx
+ docker start nginx 启动nginx
+ docker restart nginx 重启nginx
+ docker rm nginx 删除nginx
+ docker inspect nginx | grep Mounts -A 20 查看容器的基本信息，过滤Mounts关键字20行
+ docker run 启动容器
  + --name nginx  命名
  + -v /home/app/nginx:/etc/nginx/config 设置映射关系
  + -d nginx 使用某个镜像
  + --privileged=true 使得容器拥有root权限
  + -p 8080:80 端口映射
+ docker cp nginx:/etc/nginx/nginx.conf /home/app/nginx/config/nginx.conf 拷贝容器中的文件内容到本地