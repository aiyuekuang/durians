import React, {useState} from 'react';
import {Modal} from 'antd';
import "./index.less"
interface APP {
    /**
     * 标题
     * @default "基础"
     */
    title?: string;
    /**
     * 点击OK的时候
     * @default ()=>{}
     */
    handleOk?: Function;
    /**
     * 弹窗包裹的内容
     * @default ()=>{}
     */
    Content?: any;
    /**
     * 弹窗包裹的内容
     * @default ()=>{}
     */
    children?: any;
    /**
     * fieldProps-自有属性
     * @default ()=>{}
     */
    fieldProps?: any
}

const App: React.FC<APP> = ({
                                title = "基础",
                                handleOk = (callback: any) => {
                                    callback()
                                },
                                Content = () => <div>示例</div>,
                                children = <div>点击</div>,
                                fieldProps
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
