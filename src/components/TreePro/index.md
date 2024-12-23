---
title: TreePro 示例
group:
  title: 组件
  order: 2
---

# TreePro 示例

此示例演示了 `TreePro` 组件的基本用法，包括可选择和可勾选的节点。

```jsx
/**
 * title: 基本 TreePro 示例
 */

import React from 'react';
import { TreePro } from 'durians';

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
    <TreePro
      checkable
      defaultExpandAll
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  );
};

export default TreeProExample;
