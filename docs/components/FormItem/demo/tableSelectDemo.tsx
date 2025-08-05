import React, { useState } from 'react';
import { TableSelect } from 'durians';
import { Card, Space, Switch, Input, Tag } from 'antd';

const { Search } = Input;

const TableSelectDemo: React.FC = () => {
  const [multiple, setMultiple] = useState(false);
  const [searchable, setSearchable] = useState(true);

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: 120,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      width: 200,
    },
    {
      title: '部门',
      dataIndex: 'department',
      key: 'department',
      width: 120,
    },
    {
      title: '职位',
      dataIndex: 'position',
      key: 'position',
      width: 120,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: string) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status === 'active' ? '在职' : '离职'}
        </Tag>
      ),
    },
  ];

  const dataSource = [
    {
      id: 1,
      name: '张三',
      email: 'zhangsan@example.com',
      department: '技术部',
      position: '前端工程师',
      status: 'active',
    },
    {
      id: 2,
      name: '李四',
      email: 'lisi@example.com',
      department: '产品部',
      position: '产品经理',
      status: 'active',
    },
    {
      id: 3,
      name: '王五',
      email: 'wangwu@example.com',
      department: '技术部',
      position: '后端工程师',
      status: 'active',
    },
    {
      id: 4,
      name: '赵六',
      email: 'zhaoliu@example.com',
      department: '设计部',
      position: 'UI设计师',
      status: 'inactive',
    },
    {
      id: 5,
      name: '钱七',
      email: 'qianqi@example.com',
      department: '技术部',
      position: '测试工程师',
      status: 'active',
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Card title="TableSelect 表格选择器" style={{ marginBottom: '24px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space>
            <span>多选：</span>
            <Switch checked={multiple} onChange={setMultiple} />
            <span>搜索：</span>
            <Switch checked={searchable} onChange={setSearchable} />
          </Space>

          <TableSelect
            placeholder="请选择用户"
            columns={columns}
            dataSource={dataSource}
            rowKey="id"
            multiple={multiple}
            searchable={searchable}
            style={{ width: '100%' }}
            onSelect={(selectedRows, selectedRowKeys) => {
              console.log('选中的行：', selectedRows);
              console.log('选中的键：', selectedRowKeys);
            }}
          />
        </Space>
      </Card>

      <Card title="单选模式">
        <TableSelect
          placeholder="请选择单个用户"
          columns={columns}
          dataSource={dataSource}
          rowKey="id"
          multiple={false}
          searchable={true}
          style={{ width: '100%' }}
        />
      </Card>

      <Card title="多选模式">
        <TableSelect
          placeholder="请选择多个用户"
          columns={columns}
          dataSource={dataSource}
          rowKey="id"
          multiple={true}
          searchable={true}
          style={{ width: '100%' }}
        />
      </Card>
    </div>
  );
};

export default TableSelectDemo; 