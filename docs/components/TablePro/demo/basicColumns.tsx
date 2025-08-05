const basicColumns = [
  // 文本列
  {
    title: '姓名',
    dataIndex: 'name',
    valueType: 'text',
    formItemProps: {
      rules: [{ required: true, message: '请输入姓名' }],
    },
  },
  // 数字列
  {
    title: '年龄',
    dataIndex: 'age',
    valueType: 'digit',
    fieldProps: {
      min: 0,
      max: 150,
    },
  },
  // 选择列
  {
    title: '状态',
    dataIndex: 'status',
    valueType: 'select',
    valueEnum: {
      1: { text: '启用', status: 'Success' },
      0: { text: '禁用', status: 'Error' },
    },
  },
  // 日期列
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
  },
];

export default basicColumns; 