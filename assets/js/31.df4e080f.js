(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{310:function(n,e,t){"use strict";t.r(e);var r=t(14),a=Object(r.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"nginx-学习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-学习"}},[n._v("#")]),n._v(" nginx 学习")]),n._v(" "),e("h2",{attrs:{id:"docker部署nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker部署nginx"}},[n._v("#")]),n._v(" docker部署nginx")]),n._v(" "),e("ul",[e("li",[n._v("/usr/share/nginx/html：nginx容器存放html所在的目录")]),n._v(" "),e("li",[n._v("/etc/nginx/nginx.conf：nginx容器的配置文件所在的位置")]),n._v(" "),e("li",[n._v("/var/log/nginx：nginx容器的日志所在的位置")])]),n._v(" "),e("ol",[e("li",[n._v("先拉一个镜像")]),n._v(" "),e("li",[n._v("创建一个普通的容器用来拷贝配置文件")]),n._v(" "),e("li",[n._v("删除零时容器")]),n._v(" "),e("li",[n._v("创建容器")])]),n._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" pull nginx "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#1")]),n._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("mkdir")]),n._v(" /home/app/nginx "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-p")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#2 创建本地存放映射目录")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("--name")]),n._v(" nginx "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-d")]),n._v(" nginx "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#2 启动零时容器")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("cp")]),n._v(" nginx:/usr/share/nginx/html /home/app/nginx/html "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 2 复制配置文件")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("cp")]),n._v(" nginx:/etc/nginx/nginx.conf /home/app/nginx/config.conf "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 2 复制配置文件")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("cp")]),n._v(" nginx:/var/log/nginx /home/app/nginx/log "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 2 复制配置文件")]),n._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" stop nginx "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 3 删除docker")]),n._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("rm")]),n._v(" nginx "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#3")]),n._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("docker")]),n._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("--name")]),n._v(" nginx "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("--privileged")]),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v("true "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-v")]),n._v(" /home/app/nginx/html:/usr/share/nginx/html "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-v")]),n._v(" /home/app/nginx/config.conf:/etc/nginx/nginx.conf "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-v")]),n._v(" /home/app/nginx/log:/var/log/nginx "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-p")]),n._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[n._v("8080")]),n._v(":80 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[n._v("-d")]),n._v(" nginx "),e("span",{pre:!0,attrs:{class:"token comment"}},[n._v("#4创建最终的容器")]),n._v("\n\n\n")])])]),e("h2",{attrs:{id:"配置nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx"}},[n._v("#")]),n._v(" 配置nginx")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\nuser  nginx;\nworker_processes  auto;\n\nerror_log  /var/log/nginx/error.log notice;\npid        /var/run/nginx.pid;\n\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n\n    log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '\n                      '$status $body_bytes_sent \"$http_referer\" '\n                      '\"$http_user_agent\" \"$http_x_forwarded_for\"';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    keepalive_timeout  65;\n\n  \n\n    server {\n        listen       80;\n        listen  [::]:80;\n        server_name  localhost;\n        charset utf-8;\n\n        access_log  /var/log/nginx/host.access.log  main;\n\n        location / {\n            root   /usr/share/nginx/html;\n            index  index.html index.htm;\n        }\n\n        location /fgpt/ {\n            # if ($request_method = 'OPTIONS') {\n            #     add_header Access-Control-Allow-Origin $http_origin;\n            #     add_header Access-Control-Allow-Methods 'POST,GET,OPTIONS,DELETE';\n            #     add_header Access-Control-Allow-Credentials true;\n            #     add_header Access-Control-Max-Age 3600;\n            #     return 200;\n            # }\n\n            proxy_pass http://172.16.6.160:1700/;\n            proxy_set_header X-Forwarded-Proto http;\n            proxy_set_header X-Url-Scheme $scheme;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header Host $http_host;\n            add_header Access-Control-Allow-Origin $http_origin;\n            add_header Access-Control-Allow-Credentials true;\n\n        }\n        location /api/ {\n                # if ($request_method = 'OPTIONS') {\n                #     add_header Access-Control-Allow-Origin $http_origin;\n                #     add_header Access-Control-Allow-Methods 'POST,GET,OPTIONS,DELETE';\n                #     add_header Access-Control-Allow-Credentials true;\n                #     add_header Access-Control-Max-Age 3600;\n                #     return 200;\n                # }\n\n                proxy_pass http://172.16.6.161:18080/api/;\n                proxy_set_header X-Forwarded-Proto http;\n                proxy_set_header X-Url-Scheme $scheme;\n                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n                proxy_set_header Host $http_host;\n                add_header Access-Control-Allow-Origin $http_origin;\n                add_header Access-Control-Allow-Credentials true;\n                \n            }\n            \n        location /auth/ {\n                # if ($request_method = 'OPTIONS') {\n                #     add_header Access-Control-Allow-Origin $http_origin;\n                #     add_header Access-Control-Allow-Methods 'POST,GET,OPTIONS,DELETE';\n                #     add_header Access-Control-Allow-Credentials true;\n                #     add_header Access-Control-Max-Age 3600;\n                #     return 200;\n                # }\n\n                proxy_pass http://172.16.6.161:18080/auth/;\n                proxy_set_header X-Forwarded-Proto http;\n                proxy_set_header X-Url-Scheme $scheme;\n                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n                proxy_set_header Host $http_host;\n                add_header Access-Control-Allow-Origin $http_origin;\n                add_header Access-Control-Allow-Credentials true;\n\n            }\n\n            \n            \n            # cto server\n        location /cto/ {\n                # if ($request_method = 'OPTIONS') {\n                #     add_header Access-Control-Allow-Origin $http_origin;\n                #     add_header Access-Control-Allow-Methods 'POST,GET,OPTIONS,DELETE';\n                #     add_header Access-Control-Allow-Credentials true;\n                #     add_header Access-Control-Max-Age 3600;\n                #     return 200;\n                # }\n\n                proxy_pass http://172.16.6.141:18090/;\n                proxy_set_header X-Forwarded-Proto http;\n                proxy_set_header X-Url-Scheme $scheme;\n                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n                proxy_set_header Host $http_host;\n                add_header Access-Control-Allow-Origin $http_origin;\n                add_header Access-Control-Allow-Credentials true;\n\n            }\n\n            \n\n        # redirect server error pages to the static page /50x.html\n        #\n        error_page   500 502 503 504  /50x.html;\n        location = /50x.html {\n            root   /usr/share/nginx/html;\n        }\n\n        # proxy the PHP scripts to Apache listening on 127.0.0.1:80\n        #\n        #location ~ \\.php$ {\n        #    proxy_pass   http://127.0.0.1;\n        #}\n\n        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000\n        #\n        #location ~ \\.php$ {\n        #    root           html;\n        #    fastcgi_pass   127.0.0.1:9000;\n        #    fastcgi_index  index.php;\n        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;\n        #    include        fastcgi_params;\n        #}\n\n        # deny access to .htaccess files, if Apache's document root\n        # concurs with nginx's one\n        #\n        #location ~ /\\.ht {\n        #    deny  all;\n        #}\n    }\n\n\n    #gzip  on;\n    \n\n    # include /etc/nginx/conf.d/*.conf;\n}\n\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);