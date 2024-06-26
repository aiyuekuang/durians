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
});
