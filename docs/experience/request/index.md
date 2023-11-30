# 请求相关问题

## 跨域问题
+ 问题描述：请求提示跨域，在后台设置完成跨域的条件下，前端框架中无论怎么请求都无效
+ 解决问题：
   在请求的配置中有个withCredentials设置为true，在同源策略下，可以设置，保证安全，但是在跨域的情况下需要放开设置，以便服务端可以识别到 ```Remote Address```
	> 该 XMLHttpRequest.withCredentials 属性是一个布尔值，指示是否应使用 Cookie、授权标头或 TLS 客户端证书等凭据发出跨站点 Access-Control 请求。该设置 withCredentials 对同源请求没有影响。