import React, {useEffect, useState} from 'react';
import ModalPro from "../ModalPro";
import TablePro from "../TablePro";
import {Button} from "antd";


// 脚手架示例组件-uploadPro
const Index: React.FC<{
  /**
   * 名称
   * */
  children?: string;
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
        children = <Button type="link">
          选择
        </Button>, tableFieldProps = {}, modalFieldProps = {}, value = [], onChange
      }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState(value);

  console.log(3333, tableFieldProps)

  useEffect(() => {
    setSelectedRowKeys(value)
  }, [value]);

  const onSelectChange = (newSelectedRowKeys: any) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };


  return (
    <ModalPro
      Content={() => <TablePro
        {...tableFieldProps}
        fieldProps={{...tableFieldProps.fieldProps, rowSelection}}
      />}
      {...modalFieldProps}
      handleOk={() => {
        onChange(onChange(selectedRowKeys))
      }}
    >
      {children}
    </ModalPro>
  );
};

export default Index;
