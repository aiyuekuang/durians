import React from 'react';
import "./index.less";
declare const App: React.FC<{
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
     * 弹窗里的内容
     * @default ()=>{}
     */
    Content?: any;
    /**
     * 触发点击事件弹窗包裹的内容
     * @default ()=>{}
     */
    children?: any;
    /**
     * antd中modal的fieldProps-自有属性
     * @default ()=>{}
     */
    fieldProps?: any;
}>;
export default App;
