import {exec, execSync} from 'child_process';

let env = Object.assign({}, process.env);

let execSyncFun = (cmd) => {
  try{
    return execSync(cmd, {cwd: process.cwd(), env: env}).toString();
  }catch (e){
    console.log("命令行有错误，",e)
  }
}


//获取当前分支，再试试
let actBranch = execSyncFun("git branch").split('\n').find(line => line.startsWith('*')).split('*')[1].trim();
execSyncFun(`git pull`)
console.log(`拉取最新代码成功`)
execSyncFun(`git add .`)
console.log(`本地提交成功`)
execSyncFun(`git commit -m "feat(BIN): 自动化发版"`)
console.log(`本地推送成功`)
execSyncFun(`git push origin ${actBranch}`)
console.log("发版代码推送成功")
