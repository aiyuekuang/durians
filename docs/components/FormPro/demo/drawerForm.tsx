import FormPro from '@/components/FormPro';
import { Button } from 'antd';

const columns = [
  // 请根据实际情况补充字段
];

const DrawerForm = () => (
  <FormPro
    layoutType="DrawerForm"
    url="/api/user/add"
    fieldProps={{
      columns,
      title: '新增用户',
    }}
  >
    <Button type="primary">新增用户</Button>
  </FormPro>
);

export default DrawerForm;