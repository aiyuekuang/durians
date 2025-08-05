import ModalPro from '@/components/ModalPro';
import { Button } from 'antd';

const AutoFocusModal = () => (
  <ModalPro
    title="自动聚焦模态框"
    autoFocus="#focus-input"
    Content={() => (
      <div>
        <p>模态框打开后会自动聚焦到输入框</p>
        <input
          id="focus-input"
          placeholder="这个输入框会自动获得焦点"
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
    )}
  >
    <Button type="primary">自动聚焦模态框</Button>
  </ModalPro>
);

export default AutoFocusModal; 