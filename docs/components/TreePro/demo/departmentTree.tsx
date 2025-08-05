import React from 'react';
import TreePro from '@/components/TreePro';

const DepartmentTree = () => {
  const columns = [
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
      title: '排序',
      dataIndex: 'sort',
      valueType: 'digit',
      fieldProps: {
        min: 0,
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
      },
    },
  ];

  return (
    <TreePro
      title="部门管理"
      url="/api/department/tree"
      addUrl="/api/department/add"
      editUrl="/api/department/edit"
      deleteUrl="/api/department/delete"
      fieldProps={{
        fieldNames: { title: 'name', key: 'id', children: 'children' },
        showLine: true,
        showIcon: true,
        selectable: true,
        expandable: true,
        defaultExpandedKeys: ['1'],
      }}
      addFormProFieldProps={{
        fieldProps: {
          columns,
          title: '部门信息',
          width: 500,
        },
      }}
      setData={(data) => data?.data || []}
      setMsg={(data) => data?.msg || '操作成功'}
    />
  );
};

export default DepartmentTree; 