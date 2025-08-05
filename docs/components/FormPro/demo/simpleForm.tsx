import FormPro from '@/components/FormPro';
import { Button } from 'antd';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    valueType: 'text',
    formItemProps: {
      rules: [{ required: true, message: '请输入姓名' }],
    },
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
];

const MyForm = () => (
  <FormPro
    url="/api/user/add"
    fieldProps={{
      columns,
      title: '新增用户',
    }}
  >
    <Button type="primary">新增用户</Button>
  </FormPro>
);

export default MyForm;