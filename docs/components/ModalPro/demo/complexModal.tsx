import ModalPro from '@/components/ModalPro';
import { Button } from 'antd';

const ComplexModal = () => {
  const ComplexContent = ({ isModalOpen, setIsModalOpen }) => (
    <div>
      <p>这是一个复杂的模态框内容</p>
      <Button onClick={() => setIsModalOpen(false)}>
        关闭模态框
      </Button>
    </div>
  );

  return (
    <ModalPro
      title="复杂模态框"
      Content={ComplexContent}
      fieldProps={{
        width: 800,
        footer: null, // 隐藏默认底部按钮
      }}
    >
      <Button type="primary">打开复杂模态框</Button>
    </ModalPro>
  );
};

export default ComplexModal; 