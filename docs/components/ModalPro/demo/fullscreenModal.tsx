import ModalPro from '@/components/ModalPro';
import { Button } from 'antd';

const FullscreenModal = () => (
  <ModalPro
    title="全屏模态框"
    fullscreen={true}
    Content={() => (
      <div style={{ height: '100vh', padding: '20px' }}>
        <h2>全屏模态框内容</h2>
        <p>这个模态框会占据整个屏幕</p>
        <div style={{ height: '80vh', overflow: 'auto' }}>
          {/* 大量内容 */}
          {Array.from({ length: 100 }, (_, i) => (
            <p key={i}>这是第 {i + 1} 行内容</p>
          ))}
        </div>
      </div>
    )}
  >
    <Button type="primary">全屏模态框</Button>
  </ModalPro>
);

export default FullscreenModal; 