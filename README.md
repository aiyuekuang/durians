# durians

<div align="center">

[![NPM version](https://img.shields.io/npm/v/durians.svg?style=flat)](https://npmjs.org/package/durians)
[![NPM downloads](http://img.shields.io/npm/dm/durians.svg?style=flat)](https://npmjs.org/package/durians)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/aiyuekuang/durians/ci.yml?branch=main)](https://github.com/aiyuekuang/durians/actions)
[![License](https://img.shields.io/npm/l/durians)](https://github.com/aiyuekuang/durians/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-≥16.9-blue)](https://reactjs.org/)

</div>

## 📖 简介

durians 是一个基于 Ant Design Pro 的低代码组件库，提供了一系列开箱即用的高级组件，帮助开发者快速构建企业级应用。

## 🔗 链接

- [文档站点](https://aiyuekuang.github.io/durians/components/login-pro)
- [GitHub 仓库](https://github.com/aiyuekuang/durians)
- [更新日志](./CHANGELOG.md)

## ⚡️ 安装

```bash
# npm
npm install durians

# yarn
yarn add durians

# pnpm
pnpm add durians
```

## 💫 主要依赖

- React >=16.9.0
- React DOM >=16.9.0
- Ant Design ^5.22.5
- Ant Design Pro Components ^2.8.2
- TypeScript ^4.x
- Lodash ES ^4.17.21

## 🎯 特性

- 📦 开箱即用的高级组件
- 🎨 基于 Ant Design 体系精心设计
- 💎 使用 TypeScript 开发，提供完整类型定义
- 🛡 完善的文档和示例
- 📱 支持响应式设计

## 🔨 使用

```tsx
import { ModalPro } from 'durians';
import { Button } from 'antd';

const App = () => (
  <ModalPro title="示例弹窗">
    <Button>打开弹窗</Button>
  </ModalPro>
);
```

## 📄 许可证

[MIT](./LICENSE)
