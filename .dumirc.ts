import { defineConfig } from 'dumi';

const repo = 'durians'; // 项目名(也就是你的仓库名)

export default defineConfig({
  outputPath: 'docs-dist',
  apiParser: {},
  themeConfig: {
    name: 'Durians',
    logo: 'https://img1.baidu.com/it/u=2018354835,1125004781&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200',
    nav: [
      {
        title: '架构设计',
        link: '/architecture',
      },
      {
        title: '组件',
        link: '/components',
      },
      {
        title: 'Mock 测试',
        link: '/mock-test',
      },
      {
        title: '更新日志',
        link: '/changelog',
      },
    ],
    footer: 'Copyright © 2024 | Powered by Durians',
    socialLinks: {
      github: 'https://github.com/aiyuekuang/durians',
    },
  },
  resolve: {
    entryFile: './src/index.ts',
    atomDirs: [
      { type: 'component', dir: './src/components' },
    ],
    docDirs: ['docs'],
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  logo: 'https://img1.baidu.com/it/u=2018354835,1125004781&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200',
  // 添加mock配置
  mock: {
    exclude: ['node_modules/**', 'dist/**', 'docs-dist/**'],
  },
  // 确保在开发时加载mock
  extraBabelPlugins: process.env.NODE_ENV === 'development' ? ['babel-plugin-dynamic-import-node'] : [],
});