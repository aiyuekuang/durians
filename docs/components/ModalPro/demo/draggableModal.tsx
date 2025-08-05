import ModalPro from '@/components/ModalPro';
import { Button } from 'antd';

const DraggableModal = () => (
  <ModalPro
    title="可拖拽模态框"
    draggable={true}
    resizable={true}
    fieldProps={{
      width: 600,
      height: 400,
    }}
    Content={() => (
      <div>
        <p>这是一个可以拖拽和调整大小的模态框</p>
        <p>你可以拖拽标题栏来移动模态框</p>
        <p>你可以拖拽右下角来调整大小</p>
      </div>
    )}
  >
    <Button type="primary">可拖拽模态框</Button>
  </ModalPro>
);

export default DraggableModal; 