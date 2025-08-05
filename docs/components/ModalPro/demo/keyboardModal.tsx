import ModalPro from '@/components/ModalPro';
import { Button } from 'antd';

const KeyboardModal = () => (
  <ModalPro
    title="键盘导航模态框"
    keyboardNavigation={true}
    onKeyDown={(e) => {
      if (e.key === 'Escape') {
        console.log('按下了 ESC 键');
      }
    }}
    Content={() => (
      <div>
        <p>支持键盘导航的模态框</p>
        <p>按 Enter 或空格键可以打开模态框</p>
        <p>按 ESC 键可以关闭模态框</p>
      </div>
    )}
  >
    <Button type="primary">键盘导航模态框</Button>
  </ModalPro>
);

export default KeyboardModal; 