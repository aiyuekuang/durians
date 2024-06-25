import {exec, execSync} from 'child_process';

let env = Object.assign({}, process.env);

let execSyncFun = (cmd) => {
    return execSync(cmd, {cwd: process.cwd(), env: env}).toString();
}

let branch = "master";

//获取当前分支，再试试
let actBranch = execSyncFun("git branch").split('\n').find(line => line.startsWith('*')).split('*')[1].trim();
execSyncFun(`git pull`)
// execSyncFun(`git add -A`)
// execSyncFun(`git commit -m "feat(BIN): 自动化发版"`)
// console.log("自动化提交完成")
// execSyncFun(`git push origin ${actBranch}`)
execSyncFun(`git checkout ${branch}`)
console.log(`切换到${branch}分支`)
execSyncFun(`git merge --no-ff --no-commit origin ${actBranch}`)
execSyncFun(`git commit -m "feat(BIN): 自动化发版"`)
execSyncFun(`git push origin ${branch}`)
console.log("发版代码推送成功")
execSyncFun(`git checkout ${actBranch}`)
console.log(`测试发布完成，并切换回${actBranch}分支`)
