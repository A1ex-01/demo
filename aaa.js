// 1. 连接仓库
// git remote add xxx

// 2.  git fetch
// 拿到远程的分支到origin/main

// 建立分支连接 设置上有分支main
// git branch --set-upstream-to=origin/main
//? 没有共同祖先无法合并
// git merge --allow-unrelated-histories
// 配置push使用上有分支
// git config push.default upstream
// 推送远程
// git push

// 跟中远程分支

// git checkout --track origin/main
