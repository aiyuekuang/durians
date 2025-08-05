const customColumns = [
  // 树形选择器
  {
    title: '部门',
    dataIndex: 'departmentId',
    valueType: 'treeSelectPro',
    fieldProps: {
      url: '/api/department/tree',
      fieldNames: { label: 'name', value: 'id', children: 'children' },
    },
  },
  // 表格选择器
  {
    title: '用户',
    dataIndex: 'userIds',
    valueType: 'tableSelect',
    fieldProps: {
      url: '/api/user/list',
      columns: userColumns,
    },
  },
  // 文件上传
  {
    title: '附件',
    dataIndex: 'files',
    valueType: 'uploadPro',
    fieldProps: {
      url: '/api/upload',
      multiple: true,
    },
  },
  // 验证码
  {
    title: '验证码',
    dataIndex: 'captcha',
    valueType: 'captcha',
    fieldProps: {
      url: '/api/captcha/send',
      phoneName: 'phone',
    },
  },
];

export default customColumns; 