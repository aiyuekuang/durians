import React from 'react';
import TreePro from '@/components/TreePro';
import { Tag, Space } from 'antd';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';

const PermissionTree = () => {
  const columns = [
    {
      title: '权限名称',
      dataIndex: 'name',
      valueType: 'text',
      formItemProps: {
        rules: [{ required: true, message: '请输入权限名称' }],
      },
    },
    {
      title: '权限编码',
      dataIndex: 'code',
      valueType: 'text',
      formItemProps: {
        rules: [{ required: true, message: '请输入权限编码' }],
      },
    },
    {
      title: '权限类型',
      dataIndex: 'type',
      valueType: 'select',
      fieldProps: {
        options: [
          { label: '菜单', value: 'menu' },
          { label: '按钮', value: 'button' },
          { label: '接口', value: 'api' },
        ],
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType: 'radio',
      fieldProps: {
        options: [
          { label: '启用', value: 1 },
          { label: '禁用', value: 0 },
        ],
      },
    },
    {
      title: '排序',
      dataIndex: 'sort',
      valueType: 'digit',
      fieldProps: {
        min: 0,
      },
    },
  ];

  const customTitleRender = (nodeData) => {
    const isEnabled = nodeData.status === 1;
    const icon = isEnabled ? <UnlockOutlined /> : <LockOutlined />;
    
    return (
      <Space>
        {icon}
        <span>{nodeData.name}</span>
        <Tag size="small" color={isEnabled ? 'green' : 'red'}>
          {isEnabled ? '启用' : '禁用'}
        </Tag>
        <Tag size="small" color="blue">
          {nodeData.type}
        </Tag>
      </Space>
    );
  };

  return (
    <TreePro
      title="权限管理"
      url="/api/permission/tree"
      addUrl="/api/permission/add"
      editUrl="/api/permission/edit"
      deleteUrl="/api/permission/delete"
      fieldProps={{
        fieldNames: { title: 'name', key: 'id', children: 'children' },
        showLine: true,
        showIcon: false,
        selectable: true,
        expandable: true,
        titleRender: customTitleRender,
        checkable: true, // 支持复选框
        checkStrictly: true, // 父子节点选择状态不关联
      }}
      addFormProFieldProps={{
        fieldProps: {
          columns,
          title: '权限信息',
          width: 500,
        },
      }}
      setData={(data) => data?.data || []}
      setMsg={(data) => data?.msg || '操作成功'}
    />
  );
};

export default PermissionTree; 