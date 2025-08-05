import FormPro from '@/components/FormPro';
import { Button } from 'antd';

const columns = [
  // 请根据实际情况补充字段
];

const EditForm = () => (
  <FormPro
    url="/api/user/edit"
    detailUrl="/api/user/detail"
    record={{ id: 1 }}
    fieldProps={{
      columns,
      title: '编辑用户',
    }}
  >
    <Button>编辑</Button>
  </FormPro>
);

export default EditForm;