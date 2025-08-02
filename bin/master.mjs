import { execSync } from 'child_process';
import { readFileSync } from 'fs';

const env = Object.assign({}, process.env);

/**
 * 执行命令行命令
 * @param {string} cmd 命令
 * @param {boolean} silent 是否静默执行
 * @returns {string} 执行结果
 */
const execSyncFun = (cmd, silent = false) => {
  try {
    const result = execSync(cmd, {
      cwd: process.cwd(),
      env: env,
      encoding: 'utf8'
    });
    if (!silent) {
      console.log(`✅ 执行成功: ${cmd}`);
    }
    return result;
  } catch (e) {
    console.error(`❌ 命令执行失败: ${cmd}`);
    console.error(e.message);
    process.exit(1);
  }
};

/**
 * 检查工作区是否干净
 */
const checkWorkingDirectory = () => {
  const status = execSyncFun('git status --porcelain', true);
  if (status.trim()) {
    console.log('⚠️  工作区有未提交的更改，请先提交或暂存');
    process.exit(1);
  }
};

/**
 * 获取当前分支
 */
const getCurrentBranch = () => {
  const branches = execSyncFun('git branch', true);
  const currentBranch = branches
    .split('\n')
    .find(line => line.startsWith('*'))
    ?.split('*')[1]
    ?.trim();

  if (!currentBranch) {
    console.error('❌ 无法获取当前分支');
    process.exit(1);
  }

  return currentBranch;
};

/**
 * 获取包版本
 */
const getPackageVersion = () => {
  try {
    const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
    return packageJson.version;
  } catch (e) {
    console.error('❌ 无法读取 package.json');
    process.exit(1);
  }
};

/**
 * 主函数
 */
const main = () => {
  console.log('🚀 开始自动化发版流程...\n');

  // 检查工作区
  checkWorkingDirectory();

  // 获取当前分支
  const currentBranch = getCurrentBranch();
  console.log(`📍 当前分支: ${currentBranch}`);

  // 获取版本号
  const version = getPackageVersion();
  console.log(`📦 当前版本: ${version}\n`);

  // 拉取最新代码
  console.log('📥 拉取最新代码...');
  execSyncFun(`git pull origin ${currentBranch}`);

  // 添加所有更改
  console.log('📝 添加所有更改...');
  execSyncFun('git add .');

  // 提交更改
  console.log('💾 提交更改...');
  execSyncFun(`git commit -m "chore(release): v${version} 自动化发版"`);

  // 推送到远程
  console.log('📤 推送到远程仓库...');
  execSyncFun(`git push origin ${currentBranch}`);

  console.log('\n🎉 自动化发版流程完成！');
};

// 执行主函数
main();
