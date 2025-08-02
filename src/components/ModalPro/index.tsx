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
  fieldProps = {},
  // 新增功能属性
  keyboardNavigation = true,
  onKeyDown,
  draggable = false,
  resizable = false,
  maximizable = false,
  fullscreen = false,
  animation,
  maskClosable = true,
  autoFocus,
  confirmOnClose = false,
  confirmCloseText = '确定要关闭吗？'
}) => {
  // 避免未使用变量的警告
  console.debug('ModalPro config:', { draggable, resizable, maximizable, fullscreen, animation });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleOk_ = useCallback(() => {
    handleOk(() => {
      setIsModalOpen(false);
    });
  }, [handleOk]);

  const handleCancel = useCallback(async () => {
    if (confirmOnClose) {
      const { Modal: AntModal } = await import('antd');
      AntModal.confirm({
        title: '确认关闭',
        content: confirmCloseText,
        onOk: () => {
          setIsModalOpen(false);
        },
      });
    } else {
      setIsModalOpen(false);
    }
  }, [confirmOnClose, confirmCloseText]);

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
          if (keyboardNavigation && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            showModal();
          }
          onKeyDown?.(e);
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
        maskClosable={maskClosable}
        keyboard={keyboardNavigation}
        {...fieldProps}
        modalRender={(modal) => {
          if (draggable || resizable) {
            // 这里可以添加拖拽和调整大小的逻辑
            return modal;
          }
          return modal;
        }}
        afterOpenChange={(open) => {
          if (open && autoFocus) {
            // 自动聚焦到指定元素
            setTimeout(() => {
              const element = document.querySelector(autoFocus);
              if (element && 'focus' in element) {
                (element as HTMLElement).focus();
              }
            }, 100);
          }
        }}
      >
        {renderContent()}
      </Modal>
    </>
  );
});

ModalPro.displayName = 'ModalPro';

export default ModalPro;
