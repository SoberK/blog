# mongo 数据库学习

## docker 安装mongo

### 设置
```
//创建映射目录
sudo mkdir -p /usr/local/mongodb/datadb
#mongodb下面所有子目录给予777权限
sudo chmod 777 -R /usr/local/mongodb/

//创建容器
docker run -d --name mongodb -p 27018:27017 -v /usr/local/mongodb/datadb:/data/db -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin123 --privileged=true --restart always mongo


-d 后台运行容器
–name mongodb 运行容器名
-p 27018:27017 将容器的27017端口映射到主机的27018端口
-v /usr/local/mongodb/datadb:/data/db 文件挂载： 本机:容器
-e MONGO_INITDB_ROOT_USERNAME=admin 指定用户名
-e MONGO_INITDB_ROOT_PASSWORD=admin123 指定密码
–privileged=true 使得容器内的root拥有真正的root权限
–restart always 跟随docker一起启动，即docker启动时会自动运行容器
mongo 运行的镜像名字
//进入容器
docker exec -it  mongodb  mongosh 
//验证身份
db.auth("admin","admin123456");



```


## 数据库学习

### 数据库操作
    + show dbs 展示所有的数据库
    + use databaseName 创建数据库名称
    + db.dropDatabase() 删除数据库
### 表操作    
    + show tables 查看所有集合
    + db.createCollection(name,options) 创建集合
    + db.runoob.drop() 删除集合
### 文档操作
    + 插入
        + db.runoob.insert/insertOne({"name":"菜鸟"}) 插入数据
        + db.runoob.insertMany([{"name":"菜鸟"}])
        + db.collection.update()与该 选项一起使用时。upsert: true
        + db.collection.updateOne()与该选项一起使用时。upsert: true
        + db.collection.updateMany()与该选项一起使用时。upsert: true
        + db.collection.findAndModify()与该选项一起使用时。upsert: true
        + db.collection.findOneAndUpdate()与该选项一起使用时 。upsert: true
        + db.collection.findOneAndReplace()与该选项一起使用时 。upsert: true
        + db.collection.save()。
        + db.collection.bulkWrite()。
    + 查询操作
        + db.table.find(query,project) 查询
        + db.table.find().pretty() 美化
        + db.col.find({"by":"菜鸟教程"}).pretty() 条件搜索等于 by = '菜鸟'
        + db.col.find({"likes":1},{id:1,like:1}).pretty()	条件搜索等于 where likes 为1的选取like和id字段
        + db.col.find({"likes":{$lt:50}}).pretty()	条件搜索等于 where likes < 50
        + db.col.find({"likes":{$lte:50}}).pretty()	条件搜索等于 where likes <= 50
        + db.col.find({"likes":{$gt:50}}).pretty()	条件搜索等于 where likes > 50
        + db.col.find({"likes":{$gte:50}}).pretty()	条件搜索等于 where likes >= 50
        + db.col.find({"likes":{$ne:50}}).pretty()	条件搜索等于 where likes != 50
        + db.col.find({key1:value1, key2:value2}).pretty() 查询多个
        + db.col.find( { $or: [ {key1: value1}, {key2:value2} ] } ).pretty() 或者条件查询
        + db.col.find({"likes": {$gt:50}, $or: [{"by": "菜鸟教程"},{"title": "MongoDB 教程"}]}).pretty()  
        + db.COLLECTION_NAME.find().limit(NUMBER)  获取 LIMIT 数量的记录
        + db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER) 跳过 SKIP 数量的记录
        + db.COLLECTION_NAME.find().sort({KEY:1}) 排序 1正序 -1倒序
        + db.COLLECTION_NAME.find({type:/so/}) 正则
    + 更新文件
        + db.collection.update/updateMany/updateOne(query,update,options)
        + query : update的查询条件，类似sql update查询内where后面的。
        + update : update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的
        + upsert : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
        + multi : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
        + writeConcern :可选，抛出异常的级别。
        ```
        db.collection.update(
            <query>,
            <update>,
            {
                upsert: <boolean>,
                multi: <boolean>,
                writeConcern: <document>
            }
        )
        db.students.updateOne( { _id: 3 }, [ { $set: { "test3": 98, modified: "$$NOW"} } ] ) 
        ```

        + $set {$set:{filed:value}} 指定一个键更新值,如不存在就不创建
        + $unset {$set:{filed:1}} 删除一个键
        + $inc {$inc:{filed:value}} 对一个值进行增减
        + $rename {$rename:{old:new}} 丢改字段名称
        + $push {$push:{filed:value}} 将数值追加到数组中,如数组不存在,会进行初始化
        + $pushAll {$pushAll:{filed:value_array}} 将多个数值追加到数组中,如数组不存在,会进行初始化
        + $pull {$pull:{filed:value}} 删除数组中指定的元素
        + $addToSet {$addToSet:{filed:value}} 添加元素到数组中,具有重排功能
        + $pop {$pop:{filed:1}} 删除数组中第一个或最后一个元素
        + $project
        + $replaceRoot
        + $replaceWith

        ```
        //标准化字段
            db.students2.updateMany( {},  
                [
                    { $replaceRoot: { newRoot:
                    { $mergeObjects: [ { quiz1: 0, quiz2: 0, test1: 0, test2: 0 }, "$$ROOT" ] }
                    } },
                    { $set: { modified: "$$NOW"}  }
                ]
            )

        ```
    + 替换文档
        + db.collection.replace()是直接替换整个文档
    + 查找修改
        + db.collection.findAndModify({query:<query>,update:<update>,new:true}) 返回修改后的值
    + 删除文件
        + db.collection.remove/deleteOne(<query>,options)
        + justOne : （可选）如果设为 true 或 1，则只删除一个文档，如果不设置该参数，或使用默认值 false，则删除所有匹配条件的文档。
        + writeConcern :（可选）抛出异常的级别。
        + findOneAndDelete({tyep:""}) 删除并返回删除的文档 
### 索引
    + db.collection.createIndex(keys, options) 创建索引
### 聚合操作
    + db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)