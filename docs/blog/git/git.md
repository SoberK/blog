# 常用命令大全

+ git merge

  ```
  git switch master 
  git merge v1  //吧v1的版本合并到master上
  ```

+ git reflog  查看所有的log

+ Git branch --delete dev //删除分支

+ git log 查看log

+  *git* *log* --*pretty*=format --graph

+ git fetch origin 分支 //将远程分支拉拉取到版本库

+ git fetch  //更新所有远程分支到本地

+ git pull origin 分支 //将远程分支拉取到本地

+ git mege origin/分支 或者 git rebase origin/分支   //将远程git fetch origin 下来的代码，相当于git pull origin 分支 拉去到本地,这是一个重要的知识点

+ git remote get-url origin //获取远程地址

+ git add -A //添加所有的文件到缓存

+ git commit -m "备注" //提供所有文件到

+ git pull origin [分支名称] //拉取最新分支

+ git push origin [分支名称] //推送最新分支

+ git remote -v //查看所有的远程分支 

+ git stash //贮藏

+ git stash list//贮藏列表

+ git stash apply //恢复最近储藏

+ git stash apply --index //使用第几个贮藏

+ git stash apply stash@{0} ////恢复某个储藏

+ git stash drop stash@{0}//删除某个贮藏

+ git stash pop //删除最后一个贮藏

+ git branch -m old  new  //重命名 

+ git config --global https.proxy http://127.0.0.1:1080

+ 
   git config --global --unset https.proxy



