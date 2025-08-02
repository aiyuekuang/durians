---
hero:
  title: Durians
  description: 🥇 基于 Ant Design Pro 的企业级低代码组件库，提供开箱即用的高级组件，助力快速构建企业级应用
  actions:
    - text: 快速开始
      link: /docs/development-guide
      type: primary
    - text: 组件文档
      link: /components/table-pro
    - text: GitHub
      link: https://github.com/aiyuekuang/durians
features:
  - title: 🚀 开箱即用
    description: 基于 Ant Design Pro，提供完整的 CRUD 功能组件，无需重复开发
  - title: 💪 TypeScript
    description: 完整的 TypeScript 支持，提供完善的类型定义，提升开发体验
  - title: 🎨 主题定制
    description: 支持主题定制，满足不同设计需求，适配各种业务场景
  - title: 📱 响应式
    description: 组件支持响应式设计，适配各种屏幕尺寸，提供优秀的用户体验
  - title: 🔧 可配置
    description: 丰富的配置选项，满足各种业务场景，支持灵活的功能扩展
  - title: 🧪 测试覆盖
    description: 完善的单元测试，保证代码质量，确保组件的稳定性和可靠性
---

## 📦 安装

```bash
# npm
npm install durians

# yarn
yarn add durians

# pnpm
pnpm add durians
```

## 🔨 快速使用

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

## ✨ 核心特性

### 高级表格 TablePro
- 完整的 CRUD 操作
- 分页、搜索、排序
- 批量操作支持
- 树形选择集成

### 高级表单 FormPro
- 模态框/抽屉布局
- 表单验证和联动
- 自定义组件支持
- 数据处理管道

### 高级弹窗 ModalPro
- 自定义内容渲染
- 回调控制机制
- 键盘导航支持
- 可访问性增强

### 登录组件 LoginPro
- 多种登录方式
- 密码加密处理
- 验证码集成
- 自动登录功能

### 树形组件 TreePro
- 懒加载支持
- CRUD 操作
- 选择状态管理
- 自定义渲染

## 🌟 为什么选择 Durians？

- **企业级**: 基于 Ant Design Pro，满足企业级应用需求
- **低代码**: 通过配置化的方式快速构建复杂功能
- **类型安全**: 完整的 TypeScript 支持，提供类型安全保障
- **高性能**: 内置性能优化，支持虚拟滚动、缓存等特性
- **可扩展**: 灵活的配置选项，支持自定义扩展
- **文档完善**: 详细的文档和示例，快速上手

## 📞 获取帮助

- 📖 [查看文档](/docs/architecture)
- 🐛 [提交 Issue](https://github.com/aiyuekuang/durians/issues)
- 💬 [参与讨论](https://github.com/aiyuekuang/durians/discussions)

## 🤝 贡献

欢迎贡献代码！请查看 [贡献指南](https://github.com/aiyuekuang/durians/blob/main/CONTRIBUTING.md)。

## 📄 许可证

[MIT](https://github.com/aiyuekuang/durians/blob/main/LICENSE) © [ztao](https://github.com/aiyuekuang)
