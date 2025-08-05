import React from 'react';
import TablePro from '@/components/TablePro';
import { Button, Tag, Space } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const UserTable = () => {
  const columns = [
    {
      title: '用户名',
      dataIndex: 'username',
      valueType: 'text',
      formItemProps: {
        rules: [{ required: true, message: '请输入用户名' }],
      },
    },
    {
      title: '真实姓名',
      dataIndex: 'realName',
      valueType: 'text',
      formItemProps: {
        rules: [{ required: true, message: '请输入真实姓名' }],
      },
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      valueType: 'text',
      formItemProps: {
        rules: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' },
        ],
      },
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      valueType: 'text',
      formItemProps: {
        rules: [{ type: 'email', message: '邮箱格式不正确' }],
      },
    },
    {
      title: '部门',
      dataIndex: 'departmentId',
      valueType: 'treeSelectPro',
      fieldProps: {
        url: '/api/department/tree',
        fieldNames: { label: 'name', value: 'id', children: 'children' },
      },
      render: (_, record) => record.departmentName,
    },
    {
      title: '角色',
      dataIndex: 'roleIds',
      valueType: 'select',
      fieldProps: {
        mode: 'multiple',
        options: [
          { label: '管理员', value: 1 },
          { label: '普通用户', value: 2 },
          { label: '访客', value: 3 },
        ],
      },
      render: (_, record) => (
        <Space>
          {record.roleNames?.map((name) => (
            <Tag key={name} color="blue">{name}</Tag>
          ))}
        </Space>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType: 'radio',
      valueEnum: {
        1: { text: '启用', status: 'Success' },
        0: { text: '禁用', status: 'Error' },
      },
      fieldProps: {
        options: [
          { label: '启用', value: 1 },
          { label: '禁用', value: 0 },
        ],
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '备注',
      dataIndex: 'remark',
      valueType: 'textarea',
      hideInSearch: true,
      hideInTable: true,
    },
  ];

  return (
    <TablePro
      url="/api/user/list"
      addUrl="/api/user/add"
      editUrl="/api/user/edit"
      deleteUrl="/api/user/delete"
      treeFieldProps={{
        url: '/api/department/tree',
        fieldNames: { title: 'name', key: 'id', children: 'children' },
      }}
      treeParamsFun={(selectedKeys) => ({
        departmentId: selectedKeys[0],
      })}
      fieldProps={{
        columns,
        rowKey: 'id',
        search: {
          labelWidth: 'auto',
          collapsed: false,
        },
        pagination: {
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
        },
        toolBarRender: (action, rows) => [
          <Button key="export" onClick={() => action.export()}>
            导出数据
          </Button>,
        ],
      }}
      actionBar={[
        ({ record }) => (
          <Button
            type="link"
            icon={<EyeOutlined />}
            onClick={() => console.log('查看详情', record)}
          >
            详情
          </Button>
        ),
      ]}
    />
  );
};

export default UserTable; 