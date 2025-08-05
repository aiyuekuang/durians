import ModalPro from '@/components/ModalPro';
import { Button } from 'antd';

const ConfirmCloseModal = () => (
  <ModalPro
    title="确认关闭模态框"
    confirmOnClose={true}
    confirmCloseText="确定要关闭这个模态框吗？"
    Content={() => (
      <div>
        <p>这个模态框在关闭时会显示确认提示</p>
        <p>你可以尝试点击关闭按钮或遮罩层</p>
      </div>
    )}
  >
    <Button type="primary">确认关闭模态框</Button>
  </ModalPro>
);

export default ConfirmCloseModal; 