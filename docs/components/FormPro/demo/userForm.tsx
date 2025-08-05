import React from 'react';
import FormPro from '@/components/FormPro';
import { Button, Space } from 'antd';

const UserForm = ({ record, onSuccess }) => {
  const columns = [
    {
      title: '用户名',
      dataIndex: 'username',
      valueType: 'text',
      formItemProps: {
        rules: [
          { required: true, message: '请输入用户名' },
          { min: 3, max: 20, message: '用户名长度为3-20个字符' },
        ],
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
        rules: [
          { type: 'email', message: '邮箱格式不正确' },
        ],
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
      title: '备注',
      dataIndex: 'remark',
      valueType: 'textarea',
      fieldProps: {
        rows: 3,
        maxLength: 200,
        showCount: true,
      },
    },
  ];

  return (
    <FormPro
      url={record?.id ? '/api/user/edit' : '/api/user/add'}
      detailUrl={record?.id ? '/api/user/detail' : undefined}
      record={record}
      fieldProps={{
        columns,
        title: record?.id ? '编辑用户' : '新增用户',
        width: 600,
        labelWidth: 100,
      }}
      finishFun={(data, values) => {
        onSuccess?.(data, values);
      }}
      beforeSubmit={(values, record) => {
        // 提交前处理数据
        if (record?.id) {
          values.id = record.id;
        }
        return values;
      }}
    >
      <Button type="primary">
        {record?.id ? '编辑' : '新增'}
      </Button>
    </FormPro>
  );
};

export default UserForm;