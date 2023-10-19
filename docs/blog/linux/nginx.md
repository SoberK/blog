# nginx 学习

## docker部署nginx

+ /usr/share/nginx/html：nginx容器存放html所在的目录
+ /etc/nginx/nginx.conf：nginx容器的配置文件所在的位置
+ /var/log/nginx：nginx容器的日志所在的位置


1. 先拉一个镜像
2. 创建一个普通的容器用来拷贝配置文件
3. 删除零时容器
4. 创建容器

``` bash
docker pull nginx #1

mkdir /home/app/nginx -p #2 创建本地存放映射目录
docker docker run --name nginx -d nginx #2 启动零时容器
docker cp nginx:/usr/share/nginx/html /home/app/nginx/html # 2 复制配置文件
docker cp nginx:/etc/nginx/nginx.conf /home/app/nginx/config.conf # 2 复制配置文件
docker cp nginx:/var/log/nginx /home/app/nginx/log # 2 复制配置文件

docker stop nginx # 3 删除docker
docker rm nginx #3


docker run --name nginx --privileged=true -v /home/app/nginx/html:/usr/share/nginx/html -v /home/app/nginx/config.conf:/etc/nginx/nginx.conf -v /home/app/nginx/log:/var/log/nginx -p 8080:80 -d nginx #4创建最终的容器


```

## 配置nginx

```

user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

  

    server {
        listen       80;
        listen  [::]:80;
        server_name  localhost;
        charset utf-8;

        access_log  /var/log/nginx/host.access.log  main;

        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }

        location /fgpt/ {
            # if ($request_method = 'OPTIONS') {
            #     add_header Access-Control-Allow-Origin $http_origin;
            #     add_header Access-Control-Allow-Methods 'POST,GET,OPTIONS,DELETE';
            #     add_header Access-Control-Allow-Credentials true;
            #     add_header Access-Control-Max-Age 3600;
            #     return 200;
            # }

            proxy_pass http://172.16.6.160:1700/;
            proxy_set_header X-Forwarded-Proto http;
            proxy_set_header X-Url-Scheme $scheme;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $http_host;
            add_header Access-Control-Allow-Origin $http_origin;
            add_header Access-Control-Allow-Credentials true;

        }
        location /api/ {
                # if ($request_method = 'OPTIONS') {
                #     add_header Access-Control-Allow-Origin $http_origin;
                #     add_header Access-Control-Allow-Methods 'POST,GET,OPTIONS,DELETE';
                #     add_header Access-Control-Allow-Credentials true;
                #     add_header Access-Control-Max-Age 3600;
                #     return 200;
                # }

                proxy_pass http://172.16.6.161:18080/api/;
                proxy_set_header X-Forwarded-Proto http;
                proxy_set_header X-Url-Scheme $scheme;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_host;
                add_header Access-Control-Allow-Origin $http_origin;
                add_header Access-Control-Allow-Credentials true;
                
            }
            
        location /auth/ {
                # if ($request_method = 'OPTIONS') {
                #     add_header Access-Control-Allow-Origin $http_origin;
                #     add_header Access-Control-Allow-Methods 'POST,GET,OPTIONS,DELETE';
                #     add_header Access-Control-Allow-Credentials true;
                #     add_header Access-Control-Max-Age 3600;
                #     return 200;
                # }

                proxy_pass http://172.16.6.161:18080/auth/;
                proxy_set_header X-Forwarded-Proto http;
                proxy_set_header X-Url-Scheme $scheme;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_host;
                add_header Access-Control-Allow-Origin $http_origin;
                add_header Access-Control-Allow-Credentials true;

            }

            
            
            # cto server
        location /cto/ {
                # if ($request_method = 'OPTIONS') {
                #     add_header Access-Control-Allow-Origin $http_origin;
                #     add_header Access-Control-Allow-Methods 'POST,GET,OPTIONS,DELETE';
                #     add_header Access-Control-Allow-Credentials true;
                #     add_header Access-Control-Max-Age 3600;
                #     return 200;
                # }

                proxy_pass http://172.16.6.141:18090/;
                proxy_set_header X-Forwarded-Proto http;
                proxy_set_header X-Url-Scheme $scheme;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_host;
                add_header Access-Control-Allow-Origin $http_origin;
                add_header Access-Control-Allow-Credentials true;

            }

            

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/share/nginx/html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    #gzip  on;
    

    # include /etc/nginx/conf.d/*.conf;
}

```