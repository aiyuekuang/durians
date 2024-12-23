---
title: TreePro
group:
  title: 组件
  order: 2
---

# TreePro 高级表格

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
