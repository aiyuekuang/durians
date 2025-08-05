import TablePro from '@/components/TablePro';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    valueType: 'text',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    valueType: 'digit',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    valueType: 'text',
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueType: 'select',
    valueEnum: {
      1: { text: '启用', status: 'Success' },
      0: { text: '禁用', status: 'Error' },
    },
  },
];

const UserTableWithCRUD = () => (
  <TablePro
    url="/api/user/list"
    addUrl="/api/user/add"
    editUrl="/api/user/edit"
    deleteUrl="/api/user/delete"
    fieldProps={{
      columns,
      rowKey: 'id',
    }}
  />
);

export default UserTableWithCRUD; 