---
title: TreePro 树形组件
order: 5
group:
  title: 组件
  order: 1
nav:
  title: 组件
  order: 2
---

# TreePro 树形组件

TreePro 是一个基于 Ant Design Tree 的高级树形组件，提供了丰富的功能和配置选项。

## 基础用法

最简单的树形组件使用方式。

```tsx
import React from 'react';
import { TreePro } from 'durians';

export default () => {
  return (
    <TreePro
      title="组织架构"
      url="/api/departments"
      fieldProps={{
        fieldNames: {
          title: 'name',
          key: 'id',
          children: 'children'
        }
      }}
    />
  );
};
```

## 完整 CRUD 功能

包含新增、编辑、删除功能的完整示例。

```tsx
import React from 'react';
import { TreePro } from 'durians';
import { message } from 'antd';

export default () => {
  return (
    <TreePro
      title="部门管理"
      url="/api/departments"
      addUrl="/api/departments"
      editUrl="/api/departments"
      deleteUrl="/api/departments"
      isLoadData={true}
      fieldProps={{
        fieldNames: {
          title: 'name',
          key: 'id',
          children: 'children'
        },
        columns: [
          {
            title: '部门名称',
            dataIndex: 'name',
            valueType: 'text',
            formItemProps: {
              rules: [{ required: true, message: '请输入部门名称' }],
            },
          },
          {
            title: '部门编码',
            dataIndex: 'code',
            valueType: 'text',
            formItemProps: {
              rules: [{ required: true, message: '请输入部门编码' }],
            },
          },
          {
            title: '负责人',
            dataIndex: 'manager',
            valueType: 'text',
          },
          {
            title: '联系电话',
            dataIndex: 'phone',
            valueType: 'text',
            formItemProps: {
              rules: [
                { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
              ],
            },
          },
          {
            title: '邮箱',
            dataIndex: 'email',
            valueType: 'text',
            formItemProps: {
              rules: [
                { type: 'email', message: '请输入正确的邮箱格式' },
              ],
            },
          },
          {
            title: '描述',
            dataIndex: 'description',
            valueType: 'textarea',
            fieldProps: {
              rows: 3,
            },
          },
          {
            title: '状态',
            dataIndex: 'status',
            valueType: 'select',
            valueEnum: {
              0: { text: '禁用', status: 'Error' },
              1: { text: '启用', status: 'Success' },
            },
          },
        ],
      }}
      finishFun={(data, values) => {
        message.success('操作成功');
        console.log('操作结果:', data, values);
      }}
    />
  );
};
```

## 基本 TreePro 示例

```jsx
/**
 * title: 基本 TreePro 示例
 */

import React from 'react';
import {TreePro} from 'durians';

const treeData = [
  {
    title: '节点1',
    key: '0-0',
    children: [
      {
        title: '子节点1',
        key: '0-0-0',
      },
    ],
  },
  {
    title: '节点2',
    key: '0-1',
    children: [
      {
        title: '子节点2',
        key: '0-1-0',
      },
    ],
  },
];

const TreeProExample = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('选中', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('勾选', checkedKeys, info);
  };

  return (
    <TreePro fieldProps={{treeData}}/>);
};

export default TreeProExample;
```
<API id="TreePro"></API>
