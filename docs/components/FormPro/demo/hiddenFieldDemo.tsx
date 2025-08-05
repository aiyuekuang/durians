const columns = [
  {
    title: '字段',
    dataIndex: 'field',
    hidden: (form) => form.getFieldValue('type') !== 'custom',
  },
  // 其他字段
];

export default columns;