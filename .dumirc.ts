import { defineConfig } from 'dumi';


const repo = 'durians'; // 项目名(也就是你的仓库名)
export default defineConfig({
  outputPath: 'docs-dist',
  apiParser: {},
  themeConfig: {
    name: 'durians',
  },
  resolve: {
    entryFile: './src/index.ts',
    atomDirs: [
      { type: 'component', dir: './src/components' },
    ],
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  logo: 'https://img1.baidu.com/it/u=2018354835,1125004781&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200',
});
