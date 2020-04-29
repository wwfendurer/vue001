# 本地仓库

git config --global user.name "wwfendurer"
git config --global user.email "425845682@qq.com"

## 使用git init命令，初始化一个Git仓库。
## 添加文件
1 新建一个文件
2 使用命令git add <file>
3 使用命令git commit -m <message>，完成

## 修改文件
1 修改文件
2 使用命令git add <file>
3 使用命令git commit -m <message>，完成

## 删除文件
1 删除一个文件
2 git rm test.txt
3 git commit -m 'delete'

## 使用git status命令，要查看工作区的状态。

## 如果git status告诉你有文件被修改过，用git diff查看具体的修改内容。

## 返回历史版本
git reset --hard HEAD^ 返回上一个版本
git reset --hard HEAD^ 返回上上一个版本
git reset --hard 43b95ba0624ee7d5fcb56bc5df348ba6beb25473 返回到指定的版本

## 重复以上动作
像这样，你不断对文件进行修改，然后不断提交修改到版本库里，
就好比玩RPG游戏时，每通过一关就会自动把游戏状态存盘，如果某一关没过去，你还可以选择读取前一关的状态。
有些时候，在打Boss之前，你会手动存盘，以便万一打Boss失败了，可以从最近的地方重新开始。
Git也是一样，每当你觉得文件修改到一定程度的时候，就可以“保存一个快照”，这个快照在Git中被称为commit。
一旦你把文件改乱了，或者误删了文件，还可以从最近的一个commit恢复，然后继续工作，而不是把几个月的工作成果全部丢失。

## 使用git log命令，查看历史记录

## 使用git log --pretty=oneline命令，可以输出简化日志

## 使用git reflogGit命令，用来记录你的每一次命令

1 HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id。
2 穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。
3 要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本。

## 工作区（Working Directory）
就是你在电脑里能看到的目录，比如我的learngit文件夹就是一个工作区：

## 版本库（Repository）
工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。
Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支master，以及指向master的一个指针叫HEAD。

前面讲了我们把文件往Git版本库里添加的时候，是分两步执行的：
第一步是用git add把文件添加进去，实际上就是把文件修改添加到暂存区；
第二步是用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支。

Git跟踪并管理的是修改，而非文件。
1 新增了一行
2 删除了一行
3 更改了某些字符
4 删了一些又加了一些
5 甚至创建一个新文件

第一次修改 -> git add -> 第二次修改 -> git commit
当你用git add命令后，在工作区的第一次修改被放入暂存区，准备提交，
但是，在工作区的第二次修改并没有放入暂存区，所以，git commit只负责把暂存区的修改提交了，也就是第一次的修改被提交了，第二次的修改不会被提交。

## git diff HEAD -- readme.txt  可以查看工作区和版本库里面最新版本的区别

## git restore readme.txt   把readme.txt文件在工作区的修改全部撤销

## git restore --staged readme.txt  把readme.txt文件在暂存区的修改全部撤销

场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git restore readme.txt。
场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git restore --staged readme.txt，就回到了场景1，第二步按场景1操作。
场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。



# 远程仓库
Git是分布式版本控制系统，同一个Git仓库，可以分布到不同的机器上。怎么分布呢？
最早，肯定只有一台机器有一个原始版本库，此后，别的机器可以“克隆”这个原始版本库，而且每台机器的版本库其实都是一样的，并没有主次之分。

实际情况往往是这样，找一台电脑充当服务器的角色，每天24小时开机，
其他每个人都从这个“服务器”仓库克隆一份到自己的电脑上，并且各自把各自的提交推送到服务器仓库里，也从服务器仓库中拉取别人的提交。

完全可以自己搭建一台运行Git的服务器，不过现阶段，为了学Git先搭个服务器绝对是小题大作。
好在这个世界上有个叫GitHub的神奇的网站，从名字就可以看出，这个网站就是提供Git仓库托管服务的，所以，只要注册一个GitHub账号，就可以免费获得Git远程仓库。

在继续阅读后续内容前，请自行注册GitHub账号。由于你的本地Git仓库和GitHub仓库之间的传输是通过SSH加密的，所以，需要一点设置：

第1步：创建SSH Key。
在用户主目录下，看看有没有C:\Users\Administrator\.ssh这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果已经有了，可直接跳到下一步。
如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key
ssh-keygen -t rsa -C "425845682@qq.com"
你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可，由于这个Key也不是用于军事目的，所以也无需设置密码。
里面有id_rsa和id_rsa.pub两个文件，这两个就是SSH Key的秘钥对，id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人。

为什么GitHub需要SSH Key呢？
因为GitHub需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而Git支持SSH协议，所以，GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。
当然，GitHub允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了。
最后友情提示，在GitHub上免费托管的Git仓库，任何人都可以看到喔（但只有你自己才能改）。所以，不要把敏感信息放进去。
如果你不想让别人看到Git库，有两个办法，一个是交点保护费，让GitHub把公开的仓库变成私有的，这样别人就看不见了（不可读更不可写）。
另一个办法是自己动手，搭一个Git服务器，因为是你自己的Git服务器，所以别人也是看不见的。这个方法我们后面会讲到的，相当简单，公司内部开发必备。

现在的情景是，你已经在本地创建了一个Git仓库后，又想在GitHub创建一个Git仓库，并且让这两个仓库进行远程同步，
这样，GitHub上的仓库既可以作为备份，又可以让其他人通过该仓库来协作，真是一举多得。

1 github创建仓库
2 在本地仓库目录中，执行git remote add origin git@github.com:wwfendurer/learngit.git，让本地仓库和远程仓库关联
3 在本地仓库目录中，执行git push -u origin master
由于远程库是空的，我们第一次推送master分支时，加上了-u参数，
Git不但会把本地的master分支内容推送的远程新的master分支，
还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。
4 从现在起，只要本地作了提交，就可以通过命令：git push origin master

Git支持多种协议，默认的git://使用ssh，也可以使用https等其他协议。
使用https除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令，但是在某些只开放http端口的公司内部就无法使用ssh协议而只能用https。
git clone git@github.com:wwfendurer/vue.git
git clone https://github.com/wwfendurer/vue.git

分支在实际中有什么用呢？
假设你准备开发一个新功能，但是需要两周才能完成，第一周你写了50%的代码，如果立刻提交，由于代码还没写完，不完整的代码库会导致别人不能干活了。
如果等代码全部写完再一次提交，又存在丢失每天进度的巨大风险。
现在有了分支，就不用怕了。
你创建了一个属于你自己的分支，别人看不到，还继续在原来的分支上正常工作，而你在自己的分支上干活，想提交就提交，直到开发完毕后，再一次性合并到原来的分支上，这样，既安全，又不影响别人工作。


你已经知道，每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。
截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即master分支。
HEAD严格来说不是指向提交，而是指向master，master才是指向提交的，所以，HEAD指向的就是当前分支。
一开始的时候，master分支是一条线，Git用master指向最新的提交，再用HEAD指向master，就能确定当前分支，以及当前分支的提交点：
每次提交，master分支都会向前移动一步，这样，随着你不断提交，master分支的线也越来越长。
当我们创建新的分支，例如dev时，Git新建了一个指针叫dev，指向master相同的提交，再把HEAD指向dev，就表示当前分支在dev上：
你看，Git创建一个分支很快，因为除了增加一个dev指针，改改HEAD的指向，工作区的文件都没有任何变化！
不过，从现在开始，对工作区的修改和提交就是针对dev分支了，比如新提交一次后，dev指针往前移动一步，而master指针不变：
假如我们在dev上的工作完成了，就可以把dev合并到master上。
Git怎么合并呢？最简单的方法，就是直接把master指向dev的当前提交，就完成了合并：
合并完分支后，甚至可以删除dev分支。删除dev分支就是把dev指针给删掉，删掉后，我们就剩下了一条master分支：

git switch -c dev	创建分支，切换到该分支，等于下面两条指令
git branch dev		创建分支
git switch dev		切换分支
git branch			查看当前所有分支

1 现在head指向dev分支
1 修改文件
2 git add readme.txt
3 git commit -m "branch test"
4 git switch master，现在head指向master主分支
5 git merge dev，把dev分支合并到master，快进模式
6 git branch -d dev，删除分支
因为创建、合并和删除分支非常快，所以Git鼓励你使用分支完成某个任务，合并后再删掉分支，这和直接在master分支上工作效果是一样的，但过程更安全。

查看分支：git branch
创建分支：git branch <name>
切换分支：git switch <name>
创建+切换分支：git switch -c <name>
合并某分支到当前分支：git merge <name>
删除分支：git branch -d <name>

当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。
解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。
用git log --graph命令可以看到分支合并图。



