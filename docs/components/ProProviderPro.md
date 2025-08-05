# ProProviderPro 组件

ProProviderPro 是一个增强的 ProProvider 组件，为 ProForm 提供了额外的 valueType 支持，包括自定义的表单项组件。

## 功能特性

- 集成 TreeSelectPro 组件
- 集成 UploadPro 组件  
- 集成 TableSelect 组件
- 集成验证码组件
- 支持自定义 valueType

## 基本用法

```tsx
import { ProProviderPro } from 'durians';
import { ProForm } from '@ant-design/pro-components';

const App = () => {
  return (
    <ProProviderPro>
      <ProForm>
        <ProForm.Item
          name="tree"
          label="树形选择"
          valueType="treeSelectPro"
        />
        <ProForm.Item
          name="upload"
          label="文件上传"
          valueType="uploadPro"
        />
        <ProForm.Item
          name="table"
          label="表格选择"
          valueType="tableSelect"
        />
        <ProForm.Item
          name="captcha"
          label="验证码"
          valueType="captcha"
        />
      </ProForm>
    </ProProviderPro>
  );
};
```

## 支持的 valueType

### treeSelectPro

树形选择器，支持多选、搜索、异步加载等功能。

```tsx
<ProForm.Item
  name="tree"
  label="树形选择"
  valueType="treeSelectPro"
  fieldProps={{
    treeData: [
      {
        title: '父节点',
        value: 'parent',
        children: [
          { title: '子节点', value: 'child' },
        ],
      },
    ],
    multiple: true,
    searchable: true,
  }}
/>
```

### uploadPro

文件上传组件，支持多种上传模式。

```tsx
<ProForm.Item
  name="upload"
  label="文件上传"
  valueType="uploadPro"
  fieldProps={{
    action: '/api/upload',
    listType: 'picture-card',
    maxCount: 5,
    accept: 'image/*',
  }}
/>
```

### tableSelect

表格选择器，支持从表格中选择数据。

```tsx
<ProForm.Item
  name="table"
  label="表格选择"
  valueType="tableSelect"
  fieldProps={{
    columns: [
      { title: '姓名', dataIndex: 'name' },
      { title: '邮箱', dataIndex: 'email' },
    ],
    dataSource: [
      { id: 1, name: '张三', email: 'zhangsan@example.com' },
    ],
    rowKey: 'id',
    multiple: true,
  }}
/>
```

### captcha

验证码组件，支持短信验证码发送。

```tsx
<ProForm.Item
  name="captcha"
  label="验证码"
  valueType="captcha"
  fieldProps={{
    url: '/api/send-captcha',
    phoneName: 'phone',
    ajax: customAjaxFunction,
  }}
/>
```

## API

### ProProviderPro Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 子组件 | `ReactNode` | - |

### fieldProps 配置

#### treeSelectPro fieldProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| treeData | 树形数据 | `TreeNode[]` | `[]` |
| multiple | 是否支持多选 | `boolean` | `false` |
| searchable | 是否支持搜索 | `boolean` | `true` |
| async | 是否异步加载 | `boolean` | `false` |
| onLoadData | 异步加载数据的回调 | `(node) => Promise<void>` | - |

#### uploadPro fieldProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| action | 上传地址 | `string` | - |
| listType | 上传列表的内建样式 | `'text' \| 'picture' \| 'picture-card'` | `'text'` |
| maxCount | 最大上传数量 | `number` | - |
| accept | 接受上传的文件类型 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |

#### tableSelect fieldProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 表格列配置 | `ColumnType[]` | `[]` |
| dataSource | 数据源 | `any[]` | `[]` |
| rowKey | 行数据的 key | `string` | `'id'` |
| multiple | 是否支持多选 | `boolean` | `false` |
| searchable | 是否支持搜索 | `boolean` | `true` |

#### captcha fieldProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | 发送验证码的接口地址 | `string` | - |
| phoneName | 手机号字段名 | `string` | `'phone'` |
| name | 验证码字段名 | `string` | `'captcha'` |
| ajax | 自定义请求函数 | `(url, params, success, error) => void` | - |

## 完整示例

```tsx
import React from 'react';
import { ProProviderPro } from 'durians';
import { ProForm, ProFormText } from '@ant-design/pro-components';

const UserForm: React.FC = () => {
  return (
    <ProProviderPro>
      <ProForm
        onFinish={async (values) => {
          console.log('表单数据：', values);
        }}
      >
        <ProFormText
          name="name"
          label="姓名"
          rules={[{ required: true, message: '请输入姓名' }]}
        />
        
        <ProFormText
          name="phone"
          label="手机号"
          rules={[
            { required: true, message: '请输入手机号' },
            { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
          ]}
        />
        
        <ProForm.Item
          name="captcha"
          label="验证码"
          valueType="captcha"
          fieldProps={{
            url: '/api/send-captcha',
            phoneName: 'phone',
          }}
        />
        
        <ProForm.Item
          name="department"
          label="部门"
          valueType="treeSelectPro"
          fieldProps={{
            treeData: [
              {
                title: '技术部',
                value: 'tech',
                children: [
                  { title: '前端组', value: 'frontend' },
                  { title: '后端组', value: 'backend' },
                ],
              },
            ],
          }}
        />
        
        <ProForm.Item
          name="avatar"
          label="头像"
          valueType="uploadPro"
          fieldProps={{
            action: '/api/upload',
            listType: 'picture-card',
            maxCount: 1,
            accept: 'image/*',
          }}
        />
        
        <ProForm.Item
          name="team"
          label="团队成员"
          valueType="tableSelect"
          fieldProps={{
            columns: [
              { title: '姓名', dataIndex: 'name' },
              { title: '邮箱', dataIndex: 'email' },
            ],
            dataSource: [
              { id: 1, name: '张三', email: 'zhangsan@example.com' },
              { id: 2, name: '李四', email: 'lisi@example.com' },
            ],
            rowKey: 'id',
            multiple: true,
          }}
        />
      </ProForm>
    </ProProviderPro>
  );
};

export default UserForm;
``` 