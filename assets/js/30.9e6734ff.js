(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{307:function(s,t,n){"use strict";n.r(t);var a=n(14),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker学习-centos9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker学习-centos9"}},[s._v("#")]),s._v(" docker学习(centos9)")]),s._v(" "),t("h2",{attrs:{id:"安装docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[s._v("#")]),s._v(" 安装docker")]),s._v(" "),t("ol",[t("li",[s._v("卸载所有的已存在的docker")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum remove "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-client "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-client-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-common "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-latest-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-logrotate "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-selinux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-engine-selinux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ndocker-engine\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("安装yum-utils")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" yum-utils\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加阿里云的源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --add-repo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/download.docker.com/mirrors.aliyun.com\\/docker-ce/g'")]),s._v(" /etc/yum.repos.d/docker-ce.repo\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官方源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ sudo yum-config-manager \\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     --add-repo \\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#     https://download.docker.com/linux/centos/docker-ce.repo")]),s._v("\n\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("安装docker")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce docker-ce-cli containerd.io\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("centos8以上需要设置防火墙")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/firewalld/firewalld.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# FirewallBackend=nftables")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FirewallBackend")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("iptables\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("添加docker的镜像源")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/docker/daemon.json\n\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://mpn6zqak.mirror.aliyuncs.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("启动docker")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n")])])]),t("h2",{attrs:{id:"基础docker命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础docker命令"}},[s._v("#")]),s._v(" 基础docker命令")]),s._v(" "),t("ul",[t("li",[s._v("docker pull nginx 下载镜像")]),s._v(" "),t("li",[s._v("docker ps 查看所有的已启动的进程")]),s._v(" "),t("li",[s._v("docker ps -A 查看所有进程")]),s._v(" "),t("li",[s._v("docker stop nginx 停止nginx")]),s._v(" "),t("li",[s._v("docker start nginx 启动nginx")]),s._v(" "),t("li",[s._v("docker restart nginx 重启nginx")]),s._v(" "),t("li",[s._v("docker rm nginx 删除nginx")]),s._v(" "),t("li",[s._v("docker inspect nginx | grep Mounts -A 20 查看容器的基本信息，过滤Mounts关键字20行")]),s._v(" "),t("li",[s._v("docker run 启动容器\n"),t("ul",[t("li",[s._v("--name nginx  命名")]),s._v(" "),t("li",[s._v("-v /home/app/nginx:/etc/nginx/config 设置映射关系")]),s._v(" "),t("li",[s._v("-d nginx 使用某个镜像")]),s._v(" "),t("li",[s._v("--privileged=true 使得容器拥有root权限")]),s._v(" "),t("li",[s._v("-p 8080:80 端口映射")])])]),s._v(" "),t("li",[s._v("docker cp nginx:/etc/nginx/nginx.conf /home/app/nginx/config/nginx.conf 拷贝容器中的文件内容到本地")])])])}),[],!1,null,null,null);t.default=e.exports}}]);