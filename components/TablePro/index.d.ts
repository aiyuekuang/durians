import { FC } from 'react';
declare const TablePro: FC<{
    /**
     * @description 通用ajax实现方法
     * @default "默认值"
     */
    ajax?: any;
    url?: any;
    addUrl?: any;
    editUrl?: any;
    deleteUrl?: any;
    deleteFieldUrl?: any;
    fieldProps?: any;
    fieldPropsAdd?: any;
    setData?: Function;
    setTotal?: Function;
    setMsg?: Function;
    actionBar?: any;
    actionWidth?: number;
}>;
export default TablePro;
