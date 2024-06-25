import { defineConfig } from 'dumi';

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
});