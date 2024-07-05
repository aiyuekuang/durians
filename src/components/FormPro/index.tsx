import {Button, message} from 'antd';
import React from 'react';
import {BetaSchemaForm} from "@ant-design/pro-components";
import {ajaxCommon} from "../../utils/common";
import ProProviderPro from "../ProProviderPro"


// 脚手架示例组件
const Index: React.FC<{
  /**
   * @description 高级表单类型:ModalForm
   * @default "ModalForm"
   */
  layoutType?: any;
  /**
   * @description 高级表单自带的参数
   * @default {}
   */
  fieldProps?: any;
  url?: string;
  ajax?: Function;
  finishFun?: Function;
  setMsg?: Function;
  children?: any;
  params?: any;
}> = ({
        params = {}, layoutType = "ModalForm", fieldProps = {}, url, ajax = ajaxCommon, finishFun = () => {
  }, setMsg = (data: any) => {
    return data.msg
  }, children = <Button>点击我</Button>
      }) => {
  console.log(777888, fieldProps)
  return (
    <ProProviderPro>
      <BetaSchemaForm
        trigger={children}
        layoutType={'ModalForm'}
        onFinish={async (values:any = {}) => {
          let isSuccess = false

          let _values = {...params, ...values}
          console.log(values);
          await ajax(url, _values, (data: any) => {
            // 刷新页面
            message.success(setMsg(data));
            finishFun()
            isSuccess = true
          })
          return isSuccess
        }}
        {...(layoutType === 'ModalForm'
          ? {
            modalProps: {destroyOnClose: true},
          }
          : {
            drawerProps: {destroyOnClose: true},
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
    </ProProviderPro>
  );
};

export default Index;
