import React from 'react';

const fieldProps = {
  // 字段名称映射
  fieldNames: {
    title: 'name',    // 显示文本字段
    key: 'id',        // 唯一标识字段
    children: 'children', // 子节点字段
  },
  // 是否显示连接线
  showLine: true,
  // 是否显示图标
  showIcon: true,
  // 是否可选择
  selectable: true,
  // 是否可展开
  expandable: true,
  // 是否可拖拽
  draggable: false,
  // 默认展开的节点
  defaultExpandedKeys: ['1', '2'],
  // 默认选中的节点
  defaultSelectedKeys: ['1'],
  // 展开的节点
  expandedKeys: ['1', '2'],
  // 选中的节点
  selectedKeys: ['1'],
  // 节点选择事件
  onSelect: (selectedKeys, info) => {
    console.log('选中节点:', selectedKeys, info);
  },
  // 节点展开事件
  onExpand: (expandedKeys, info) => {
    console.log('展开节点:', expandedKeys, info);
  },
  // 节点拖拽事件
  onDrop: (info) => {
    console.log('拖拽节点:', info);
  },
  // 自定义节点渲染
  titleRender: (nodeData) => {
    return <span>{nodeData.name}</span>;
  },
  // 树形组件大小
  size: 'default',
  // 是否显示加载状态
  loading: false,
  // 是否虚拟滚动
  virtual: false,
  // 高度
  height: 400,
};

export default fieldProps; 