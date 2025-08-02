---
title: 组件总览
order: 2
nav:
  title: 组件
  order: 2
---

# 组件总览

Durians 提供了一套完整的企业级组件，基于 Ant Design Pro 构建，旨在提供开箱即用的高级功能。

## 🚀 核心组件

### TablePro - 高级表格
企业级数据表格组件，提供完整的 CRUD 功能。

**核心特性：**
- 📊 完整的 CRUD 操作（增删改查）
- 🔍 内置搜索、筛选、排序功能
- 📄 智能分页和数据加载
- 🌳 支持树形选择和批量操作
- ⚡ 性能优化：虚拟滚动、缓存机制
- 🎨 高度可定制的列配置

**适用场景：**
- 用户管理系统
- 数据展示和管理
- 后台管理界面
- 报表和统计页面

```typescript
import { TablePro } from 'durians';

<TablePro
  url="/api/users"
  addUrl="/api/users"
  editUrl="/api/users"
  deleteUrl="/api/users"
  fieldProps={{
    columns: [
      { title: '姓名', dataIndex: 'name', valueType: 'text' },
      { title: '邮箱', dataIndex: 'email', valueType: 'text' },
      { title: '状态', dataIndex: 'status', valueType: 'select' },
    ],
  }}
/>
```

### FormPro - 高级表单
灵活的表单组件，支持模态框和抽屉两种布局。

**核心特性：**
- 📝 支持模态框（ModalForm）和抽屉（DrawerForm）布局
- ✅ 内置表单验证和数据处理
- 🔄 支持表单联动和动态字段
- 🎯 自动数据绑定和提交
- 🛠️ 丰富的表单组件支持
- 📱 响应式设计

**适用场景：**
- 数据新增和编辑
- 用户信息录入
- 配置和设置页面
- 多步骤表单

```typescript
import { FormPro } from 'durians';
import { Button } from 'antd';

<FormPro
  layoutType="ModalForm"
  url="/api/users"
  fieldProps={{
    columns: [
      { title: '姓名', dataIndex: 'name', valueType: 'text', formItemProps: { rules: [{ required: true }] } },
      { title: '邮箱', dataIndex: 'email', valueType: 'text' },
      { title: '部门', dataIndex: 'department', valueType: 'select' },
    ],
  }}
>
  <Button type="primary">新增用户</Button>
</FormPro>
```

### ModalPro - 高级弹窗
增强的弹窗组件，提供更好的用户体验。

**核心特性：**
- 🎨 自定义内容渲染
- ⌨️ 键盘导航支持
- 🔒 确认关闭机制
- 🎯 自动聚焦功能
- 📱 响应式适配
- ♿ 可访问性增强

**适用场景：**
- 确认操作提示
- 详情信息展示
- 复杂交互界面
- 多媒体内容展示

```typescript
import { ModalPro } from 'durians';
import { Button } from 'antd';

<ModalPro
  title="用户详情"
  Content={() => <UserDetail />}
  keyboardNavigation={true}
  confirmOnClose={true}
>
  <Button>查看详情</Button>
</ModalPro>
```

### LoginPro - 登录组件
企业级登录组件，支持多种登录方式。

**核心特性：**
- 🔐 账号密码登录
- 📱 手机验证码登录
- 🔒 密码加密处理
- 💾 自动登录功能
- 🛡️ 安全验证机制
- 🎨 可定制的 UI 样式

**适用场景：**
- 系统登录页面
- 用户认证界面
- 安全验证流程
- 多租户登录

```typescript
import { LoginPro } from 'durians';

<LoginPro
  url="/api/login"
  onSuccess={(data) => {
    // 登录成功处理
    localStorage.setItem('token', data.token);
    window.location.href = '/dashboard';
  }}
  enableAutoLogin={true}
  enableSmsLogin={true}
/>
```

### TreePro - 树形组件
高性能的树形数据展示和操作组件。

**核心特性：**
- 🌳 树形数据展示和操作
- ⚡ 懒加载和按需渲染
- ✅ 支持选择和多选
- 🔄 完整的 CRUD 操作
- 🎯 自定义节点渲染
- 📱 移动端适配

**适用场景：**
- 组织架构管理
- 分类和标签管理
- 文件目录结构
- 权限树配置

```typescript
import { TreePro } from 'durians';

<TreePro
  title="组织架构"
  url="/api/departments"
  addUrl="/api/departments"
  editUrl="/api/departments"
  deleteUrl="/api/departments"
  isLoadData={true}
  fieldProps={{
    fieldNames: { title: 'name', key: 'id', children: 'children' }
  }}
/>
```

## 🛠️ 开发指南

### 快速开始

1. **安装依赖**
```bash
npm install durians
# 或
yarn add durians
```

2. **引入组件**
```typescript
import { TablePro, FormPro, ModalPro } from 'durians';
```

3. **使用组件**
```typescript
const App = () => {
  return (
    <div>
      <TablePro url="/api/data" />
    </div>
  );
};
```

### 最佳实践

#### 1. 类型安全
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

<TablePro<User>
  url="/api/users"
  fieldProps={{
    columns: [
      {
        title: '姓名',
        dataIndex: 'name', // 类型安全
        render: (name: string, record: User) => {
          return <span>{name}</span>;
        }
      }
    ]
  }}
/>
```

#### 2. 错误处理
```typescript
import { useErrorHandler } from 'durians';
import { Alert } from 'antd';

const MyComponent = () => {
  const { error, handleError } = useErrorHandler();

  return (
    <div>
      {error && <Alert message={error} type="error" />}
      <TablePro
        url="/api/users"
        onError={handleError}
      />
    </div>
  );
};
```

#### 3. 性能优化
```typescript
<TablePro
  url="/api/large-dataset"
  virtual={true} // 启用虚拟滚动
  cache={{ enabled: true, ttl: 5 * 60 * 1000 }} // 启用缓存
  errorRetry={{ enabled: true, maxRetries: 3 }} // 错误重试
/>
```

## 🎯 设计原则

### 1. 开箱即用
所有组件都提供合理的默认配置，可以直接使用而无需复杂的配置。

### 2. 高度可配置
通过丰富的 props 和配置选项，满足各种业务场景的需求。

### 3. 类型安全
完整的 TypeScript 支持，提供类型安全和更好的开发体验。

### 4. 性能优先
内置性能优化机制，支持大数据量和复杂交互场景。

### 5. 可访问性
遵循 WCAG 标准，提供良好的可访问性支持。

## 📚 更多资源

- [架构设计](/docs/architecture) - 了解技术架构和设计理念
- [更新日志](/docs/changelog) - 查看版本更新和新功能
- [GitHub](https://github.com/aiyuekuang/durians) - 源码和问题反馈
- [示例项目](https://github.com/aiyuekuang/durians-examples) - 完整的使用示例

## 🤝 贡献

欢迎贡献代码和提出建议！请查看我们的贡献指南。

## 📄 许可证

MIT © [ztao](https://github.com/aiyuekuang)
