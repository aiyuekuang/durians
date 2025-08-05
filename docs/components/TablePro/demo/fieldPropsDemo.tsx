import { Button } from 'antd';

const fieldProps = {
  // 表格列配置
  columns: [
    {
      title: '列标题',
      dataIndex: 'fieldName',
      valueType: 'text', // 字段类型
      // 在搜索表单中隐藏
      hideInSearch: true,
      // 在表格中隐藏
      hideInTable: true,
      // 自定义渲染
      render: (text, record) => <span>{text}</span>,
      // 排序
      sorter: true,
      // 筛选
      filters: [
        { text: '选项1', value: '1' },
        { text: '选项2', value: '2' },
      ],
    },
  ],
  // 行键
  rowKey: 'id',
  // 分页配置
  pagination: {
    pageSize: 10,
    showSizeChanger: true,
    showQuickJumper: true,
  },
  // 搜索配置
  search: {
    labelWidth: 'auto',
    collapsed: false,
    collapseRender: (collapsed) => (collapsed ? '展开' : '收起'),
  },
  // 工具栏配置
  toolBarRender: (action, rows) => [
    <Button key="add" type="primary">新增</Button>,
  ],
  // 表格大小
  size: 'small',
  // 滚动配置
  scroll: { x: 'max-content' },
};

export default fieldProps; 