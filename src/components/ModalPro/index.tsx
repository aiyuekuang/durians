import React, { memo, useState, useCallback } from 'react';
import { Modal } from 'antd';
import type { ModalProProps } from '../../types';
import { DEFAULT_CONFIG } from '../../utils/constants';
import "./index.less";

const ModalPro: React.FC<ModalProProps> = memo(({
  title = DEFAULT_CONFIG.MODAL_PRO.TITLE,
  handleOk = (callback: () => void) => {
    callback();
  },
  Content = () => <div>示例</div>,
  children = <div>点击</div>,
  fieldProps = {}
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleOk_ = useCallback(() => {
    handleOk(() => {
      setIsModalOpen(false);
    });
  }, [handleOk]);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const renderContent = useCallback(() => {
    if (typeof Content === "function") {
      return <Content isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />;
    }
    return Content;
  }, [Content, isModalOpen]);

  return (
    <>
      <div
        onClick={showModal}
        style={{ width: "max-content", cursor: "pointer" }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            showModal();
          }
        }}
      >
        {children}
      </div>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk_}
        onCancel={handleCancel}
        destroyOnClose
        {...fieldProps}
      >
        {renderContent()}
      </Modal>
    </>
  );
});

ModalPro.displayName = 'ModalPro';

export default ModalPro;
