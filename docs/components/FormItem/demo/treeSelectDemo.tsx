import React, { useState } from 'react';
import { TreeSelectPro } from 'durians';
import { Card, Space, Switch, Input } from 'antd';

const { Search } = Input;

const TreeSelectDemo: React.FC = () => {
  const [multiple, setMultiple] = useState(false);
  const [searchable, setSearchable] = useState(true);
  const [async, setAsync] = useState(false);

  const treeData = [
    {
      title: '技术部',
      value: 'tech',
      children: [
        {
          title: '前端组',
          value: 'frontend',
          children: [
            { title: 'React开发', value: 'react' },
            { title: 'Vue开发', value: 'vue' },
          ],
        },
        {
          title: '后端组',
          value: 'backend',
          children: [
            { title: 'Java开发', value: 'java' },
            { title: 'Python开发', value: 'python' },
          ],
        },
      ],
    },
    {
      title: '产品部',
      value: 'product',
      children: [
        { title: '产品经理', value: 'pm' },
        { title: 'UI设计师', value: 'ui' },
      ],
    },
  ];

  const asyncTreeData = [
    {
      title: '异步加载节点',
      value: 'async',
      isLeaf: false,
    },
  ];

  const onLoadData = (node: any) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        node.children = [
          { title: '异步子节点1', value: `${node.value}-1`, isLeaf: true },
          { title: '异步子节点2', value: `${node.value}-2`, isLeaf: true },
        ];
        resolve();
      }, 1000);
    });
  };

  return (
    <div style={{ padding: '24px' }}>
      <Card title="TreeSelectPro 树形选择器" style={{ marginBottom: '24px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space>
            <span>多选：</span>
            <Switch checked={multiple} onChange={setMultiple} />
            <span>搜索：</span>
            <Switch checked={searchable} onChange={setSearchable} />
            <span>异步加载：</span>
            <Switch checked={async} onChange={setAsync} />
          </Space>

          <TreeSelectPro
            placeholder="请选择部门"
            treeData={async ? asyncTreeData : treeData}
            multiple={multiple}
            searchable={searchable}
            async={async}
            onLoadData={async ? onLoadData : undefined}
            style={{ width: '100%' }}
            onChange={(value) => {
              console.log('选中值：', value);
            }}
          />
        </Space>
      </Card>

      <Card title="基本用法">
        <TreeSelectPro
          placeholder="请选择"
          treeData={treeData}
          style={{ width: '100%' }}
        />
      </Card>
    </div>
  );
};

export default TreeSelectDemo; 