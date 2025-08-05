import ModalPro from '@/components/ModalPro';
import { Button } from 'antd';

const SimpleModal = () => (
  <ModalPro
    title="简单模态框"
    Content={() => <div>这是模态框的内容</div>}
  >
    <Button type="primary">打开模态框</Button>
  </ModalPro>
);

export default SimpleModal; 