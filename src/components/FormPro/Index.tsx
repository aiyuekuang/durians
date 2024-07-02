import {Button, Layout, message, Row, Typography} from 'antd';
import React from 'react';
import {BetaSchemaForm} from "@ant-design/pro-components";
import {ajaxCommon} from "durians/utils/common";


// 脚手架示例组件
const Index: React.FC<{
  /**
   * @description 高级表单类型:ModalForm
   * @default "ModalForm"
   */
  layoutType?:any;
  /**
   * @description 高级表单自带的参数
   * @default {}
   */
  fieldProps?:any;
  url:string;
  ajax?: Function;
  finishFun?:Function;
  setMsg?:Function
}> = ({layoutType="ModalForm",fieldProps={},url,ajax = ajaxCommon,finishFun=()=>{},setMsg = (data: any) => {
  return data.msg
},}) => {
  return (
    <BetaSchemaForm
        trigger={<Button>点击我</Button>}
        layoutType={'ModalForm'}
        onFinish={async (values) => {
          console.log(values);
          await ajax(url, values, (data: any) => {
            // 刷新页面
            message.success(setMsg(data));
            finishFun()
          })
        }}
        {...(layoutType === 'ModalForm'
          ? {
            modalProps: { destroyOnClose: true },
          }
          : {
            drawerProps: { destroyOnClose: true },
          })}
        columns={[
          {
            title: '标题',
            dataIndex: 'title',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '此项为必填项',
                },
              ],
            },
            width: 'md',
          },
        ]}
        {...fieldProps}
      />
  );
};

export default Index;
