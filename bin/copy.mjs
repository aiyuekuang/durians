import fs, {readdirSync, statSync, copyFile, writeFileSync, copyFileSync, constants} from "fs"
import path from "path"

// 删除文件夹
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach(function(file, index) {
      var curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath);
    console.log("******删除成功")
  }else {
    console.log("******没有文件夹")

  }
}

// 复制文件夹
function copyFolder(sourcePath, destPath) {
  //recursive:true}创建多级目录
  fs.mkdirSync(destPath, { recursive: true })

  const files = fs.readdirSync(sourcePath, { withFileTypes: true })

  files.forEach(item => {
    const sourceItemPath = path.resolve(sourcePath, item.name)
    const destItemPath = path.resolve(destPath, item.name)

    if (item.isDirectory()) {
      copyFolder(sourceItemPath, destItemPath)
    } else {
      // 开始复制文件
      fs.copyFileSync(sourceItemPath, destItemPath)
      console.log(`${item.name}---拷贝成功`);
    }
  })
}

// 示例用法
// 替换下面的路径为你的实际路径
const srcDir = 'D:\\code\\durians\\dist';
const destDir = 'D:\\code\\demo\\web\\my_crm_web\\node_modules\\durians\\dist';
const cache = 'D:\\code\\demo\\web\\my_crm_web\\node_modules\\.cache';

copyFolder(srcDir, destDir)
deleteFolderRecursive(cache);
