import React, {ElementType, ReactElement, ReactNode, useState} from 'react';
import {Modal} from 'antd';
import "./index.less"

const App: React.FC<{
  /**
   * 标题
   * @default "基础"
   */
  title?: string;
  /**
   * 点击OK的时候，会有一个callback回调函数，在你的函数中执行callback可以传递ture或者false打开或者关闭弹窗
   * @default (callback: any) => {
   *           callback()
   *         }
   */
  handleOk?: Function;
  /**
   * 弹窗里的内容
   * @default () => <div>示例</div>
   */
  Content?: ElementType;
  /**
   * 触发点击事件弹窗包裹的内容
   * @default <div>点击</div>
   */
  children?: ReactNode;
  /**
   * antd中modal的fieldProps-自有属性
   * @default {}
   */
  fieldProps?: object
}> = ({
        title = "基础",
        handleOk = (callback: any) => {
          callback()
        },
        Content = () => <div>示例</div>,
        children = <div>点击</div>,
        fieldProps={}
      }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk_ = () => {
    handleOk(() => {
      setIsModalOpen(false);
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={showModal}>
        {children}
      </div>
      <Modal title={title} open={isModalOpen} onOk={handleOk_} onCancel={handleCancel} {...fieldProps}>
        <Content isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      </Modal>
    </>
  );
};

export default App;
