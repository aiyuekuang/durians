import React from 'react';
import ModalPro from '@/components/ModalPro';
import { Button } from 'antd';

const AsyncOperationModal = () => (
  <ModalPro
    title="异步操作模态框"
    Content={() => <div>这个模态框演示异步操作</div>}
    handleOk={(callback) => {
      // 异步操作
      fetch('/api/data')
        .then(response => response.json())
        .then(data => {
          console.log('操作成功:', data);
          callback(); // 操作完成后关闭模态框
        })
        .catch(error => {
          console.error('操作失败:', error);
          // 不调用 callback，保持模态框打开
        });
    }}
  >
    <Button type="primary">打开异步操作模态框</Button>
  </ModalPro>
);

export default AsyncOperationModal; 