import React from 'react';
import ModalPro from '@/components/ModalPro';
import { Button } from 'antd';

const DataModal = ({ data }) => {
  const Content = ({ isModalOpen, setIsModalOpen }) => (
    <div>
      <p>外部数据: {data}</p>
      <Button onClick={() => setIsModalOpen(false)}>关闭</Button>
    </div>
  );

  return (
    <ModalPro
      title="数据模态框"
      Content={Content}
    >
      <Button>打开模态框</Button>
    </ModalPro>
  );
};

export default DataModal; 