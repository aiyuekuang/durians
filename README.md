# Durians 🥇

[![NPM version](https://img.shields.io/npm/v/durians.svg?style=flat)](https://npmjs.org/package/durians)
[![NPM downloads](http://img.shields.io/npm/dm/durians.svg?style=flat)](https://npmjs.org/package/durians)
[![Build Status](https://img.shields.io/github/workflow/status/aiyuekuang/durians/CI)](https://github.com/aiyuekuang/durians/actions)
[![Coverage Status](https://img.shields.io/codecov/c/github/aiyuekuang/durians)](https://codecov.io/gh/aiyuekuang/durians)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

> 一个基于 Ant Design Pro 的企业级低代码组件库，提供开箱即用的高级组件，助力快速构建企业级应用。

## ✨ 特性

- 🚀 **开箱即用**：基于 Ant Design Pro，提供企业级组件
- 💪 **TypeScript**：完整的 TypeScript 支持，提供完善的类型定义
- 🎨 **主题定制**：支持主题定制，满足不同设计需求
- 📱 **响应式**：组件支持响应式设计，适配各种屏幕尺寸
- 🔧 **可配置**：丰富的配置选项，满足各种业务场景
- 🧪 **测试覆盖**：完善的单元测试，保证代码质量
- 📖 **文档完善**：详细的文档和示例，快速上手

## 📦 安装

```bash
# npm
npm install durians

# yarn
yarn add durians

# pnpm
pnpm add durians
```

## 🔨 使用

```tsx
import React from 'react';
import { TablePro, FormPro, ModalPro } from 'durians';

const App = () => {
  return (
    <div>
      <TablePro
        url="/api/users"
        addUrl="/api/users"
        editUrl="/api/users"
        deleteUrl="/api/users"
        fieldProps={{
          columns: [
            {
              title: '姓名',
              dataIndex: 'name',
              valueType: 'text',
            },
            {
              title: '邮箱',
              dataIndex: 'email',
              valueType: 'text',
            },
          ],
        }}
      />
    </div>
  );
};

export default App;
```

## 📚 组件

### TablePro - 高级表格

提供完整的 CRUD 功能，支持分页、搜索、排序等特性。

```tsx
import { TablePro } from 'durians';

<TablePro
  url="/api/data"
  addUrl="/api/data"
  editUrl="/api/data"
  deleteUrl="/api/data"
  fieldProps={{
    columns: [
      // 列配置
    ],
  }}
/>
```

### FormPro - 高级表单

支持模态框和抽屉两种布局的表单组件。

```tsx
import { FormPro } from 'durians';

<FormPro
  layoutType="ModalForm"
  url="/api/submit"
  fieldProps={{
    columns: [
      // 表单字段配置
    ],
  }}
>
  <Button>打开表单</Button>
</FormPro>
```

### ModalPro - 高级弹窗

增强的弹窗组件，支持自定义内容和回调。

```tsx
import { ModalPro } from 'durians';

<ModalPro
  title="自定义弹窗"
  Content={() => <div>弹窗内容</div>}
>
  <Button>打开弹窗</Button>
</ModalPro>
```

### LoginPro - 登录组件

支持账号密码和短信验证码两种登录方式。

```tsx
import { LoginPro } from 'durians';

<LoginPro
  url="/api/login"
  captchaUrl="/api/captcha"
  hasSmsLogin={true}
  callback={(data) => {
    // 登录成功回调
  }}
/>
```

### TreePro - 树形组件

支持 CRUD 操作的树形组件。

```tsx
import { TreePro } from 'durians';

<TreePro
  title="组织架构"
  url="/api/tree"
  addUrl="/api/tree"
  editUrl="/api/tree"
  deleteUrl="/api/tree"
/>
```

## 🔗 链接

- [📖 文档地址](https://aiyuekuang.github.io/durians/components/login-pro)
- [🐛 问题反馈](https://github.com/aiyuekuang/durians/issues)
- [💡 功能建议](https://github.com/aiyuekuang/durians/discussions)

## 🤝 贡献

欢迎贡献代码！请查看 [贡献指南](./CONTRIBUTING.md)。

## 📄 许可证

[MIT](./LICENSE) © [ztao](https://github.com/aiyuekuang)
