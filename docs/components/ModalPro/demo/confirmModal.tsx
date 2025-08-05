import ModalPro from '@/components/ModalPro';
import { Button } from 'antd';

const ConfirmModal = () => (
  <ModalPro
    title="确认操作"
    Content={() => <div>确定要执行此操作吗？</div>}
    handleOk={(callback) => {
      // 执行确认操作
      console.log('执行操作');
      callback(); // 关闭模态框
    }}
  >
    <Button type="primary">确认操作</Button>
  </ModalPro>
);

export default ConfirmModal; 