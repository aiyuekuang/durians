import {ProProvider,} from '@ant-design/pro-components';
import React, {FC, useContext} from 'react';
import TreeSelectPro from "../FormItem/TreeSelectPro";
import UploadPro from "../FormItem/UploadPro";
import TableSelect from "../FormItem/TableSelect";

const Index: FC<{
  children: any
}> = ({
        children
      }) => {
  const values = useContext(ProProvider);

  return (
    <ProProvider.Provider
      value={{
        ...values,
        valueTypeMap: {
          treeSelectPro: {
            // render: (props) => <>{}</>,
            renderFormItem: (text, props) => (
              <TreeSelectPro {...props}/>
            ),
          },uploadPro: {
            // render: (props) => <>{}</>,
            renderFormItem: (text, props) => (
              <UploadPro {...props}/>
            ),
          },
          tableSelect:{
            renderFormItem: (text, props) => {
              console.log(667555,props)
              return (
                <TableSelect {...props} {...props.fieldProps}/>
              )
            },
          }
        },
      }}
    >
      {children}
    </ProProvider.Provider>
  );
};
export default Index;
