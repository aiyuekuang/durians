import React from 'react';
import ModalPro from '@/components/ModalPro';
import { Button } from 'antd';

const CustomStyleModal = () => (
  <ModalPro
    title="自定义样式模态框"
    Content={() => <div>这是一个自定义样式的模态框</div>}
    fieldProps={{
      style: { top: 20 },
      className: 'custom-modal',
      wrapClassName: 'custom-modal-wrap',
    }}
  >
    <Button type="primary">打开自定义样式模态框</Button>
  </ModalPro>
);

export default CustomStyleModal; 