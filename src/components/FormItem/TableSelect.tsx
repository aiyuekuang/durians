import React, {useEffect, useState} from 'react';
import ModalPro from "../ModalPro";
import TablePro from "../TablePro";
import {Button} from "antd";


// 脚手架示例组件-uploadPro
const Index: React.FC<{
  /**
   * 名称
   * */
  title?: string;
  /**
   * 值
   * */
  value?: any;
  /**
   * 改变之后的回调
   * */
  onChange?: any;
  /**
   * TablePro的参数配置
   * */
  tableFieldProps?: any;
  /**
   * ModalPro的参数配置
   * */
  modalFieldProps?: any;
}> = ({
        title = "选择", tableFieldProps = {}, modalFieldProps = {}, value = [], onChange
      }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState(value);

  console.log(2122,selectedRowKeys)

  return (
    <ModalPro
      Content={<TablePro
        {...tableFieldProps}
        value={value}
        onSelectChange={(data:any)=> {
          console.log(6666,data)
          setSelectedRowKeys(data)
        }}
        fieldProps={{...tableFieldProps.fieldProps}}
      />}
      {...modalFieldProps}
      handleOk={(hide:any) => {
        onChange(selectedRowKeys)
        hide()
      }}
    >
      <Button type="link">
        {value && value.length ? `已选择${value.length}个` : title}
      </Button>
    </ModalPro>
  );
};

export default Index;
