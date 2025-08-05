import React from 'react';
import ModalPro from '@/components/ModalPro';
import { Button } from 'antd';

const DisabledFeaturesModal = () => (
  <ModalPro
    title="禁用功能的模态框"
    Content={() => <div>这个模态框禁用了某些功能</div>}
    keyboardNavigation={false} // 禁用键盘导航
    maskClosable={false} // 禁用遮罩层点击关闭
    fieldProps={{
      keyboard: false, // 禁用 ESC 键关闭
      closable: false, // 隐藏关闭按钮
    }}
  >
    <Button type="primary">打开禁用功能模态框</Button>
  </ModalPro>
);

export default DisabledFeaturesModal; 