import {ProProvider,} from '@ant-design/pro-components';
import React, {FC, useContext} from 'react';
import "./index.less"
import TreeSelectPro from "../FormItem/treeSelectPro";

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
          },
        },
      }}
    >
      {children}
    </ProProvider.Provider>
  );
};
export default Index;
