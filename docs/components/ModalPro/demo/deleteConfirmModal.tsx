import React from 'react';
import ModalPro from '@/components/ModalPro';
import { Button, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const DeleteConfirmModal = ({ record, onDelete }) => {
  const DeleteContent = ({ setIsModalOpen }) => (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <ExclamationCircleOutlined 
        style={{ fontSize: '48px', color: '#faad14', marginBottom: '16px' }} 
      />
      <h3>确认删除</h3>
      <p>确定要删除 "{record?.name}" 吗？</p>
      <p style={{ color: '#999', fontSize: '14px' }}>
        此操作不可撤销，请谨慎操作。
      </p>
    </div>
  );

  const handleDelete = (callback) => {
    // 执行删除操作
    onDelete?.(record);
    message.success('删除成功');
    callback(); // 关闭模态框
  };

  return (
    <ModalPro
      title="删除确认"
      Content={DeleteContent}
      handleOk={handleDelete}
      fieldProps={{
        width: 400,
        okText: '确定删除',
        cancelText: '取消',
        okButtonProps: { danger: true },
      }}
    >
      <Button type="link" danger>
        删除
      </Button>
    </ModalPro>
  );
};

export default DeleteConfirmModal; 