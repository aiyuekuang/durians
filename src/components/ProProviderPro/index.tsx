import {ProFormCaptcha, ProProvider,} from '@ant-design/pro-components';
import React, {FC, useContext} from 'react';
import TreeSelectPro from "../FormItem/TreeSelectPro";
import UploadPro from "../FormItem/UploadPro";
import TableSelect from "../FormItem/TableSelect";
import {MailTwoTone} from "@ant-design/icons";
import {message} from "antd";
import {ajaxCommon} from "../../utils/common";

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
            renderFormItem: (text, props) => {
              console.log(7666,props)
              return (
                <TreeSelectPro {...props}/>
              )
            },
          }, uploadPro: {
            render: (props) => {
              console.log(6566,props)
              return (<UploadPro value={props} fieldPropsUpload={{
                disabled:true
              }}/>)
            },
            renderFormItem: (text, props) => {
              console.log(67655,props)
              return (
                <UploadPro {...props.fieldProps}/>
              )
            },
          },
          tableSelect: {
            renderFormItem: (text, props) => {
              console.log(667555, props)
              return (
                <TableSelect {...props} {...props.fieldProps}/>
              )
            },
            render: (props) => {
              return (<>已选择{props.length}项</>)
            },
          },
          captcha: {
            renderFormItem: (text, props: any) => {
              console.log(66766,props)
                const {ajax=ajaxCommon, url="", phoneName = "phone", name = "captcha"} = props?.fieldProps || {};
              return (
                <ProFormCaptcha
                  noStyle
                  captchaProps={{}}
                  fieldProps={{
                    prefix: <MailTwoTone/>,
                  }}
                  // 手机号的 name，onGetCaptcha 会注入这个值
                  phoneName={phoneName}
                  name={name}
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码',
                    },
                  ]}
                  placeholder="请输入验证码"
                  {...props}
                  // 如果需要失败可以 throw 一个错误出来，onGetCaptcha 会自动停止
                  // throw new Error("获取验证码错误")
                  onGetCaptcha={async (phone) => {
                    const _params: any = {};
                    _params[phoneName] = phone
                    ajax(url, _params, (data: any) => {
                      // setData(data)
                      message.success(`手机号 ${phone} 验证码发送成功!`);
                    },()=>{
                      throw new Error("获取验证码错误")
                    })
                  }}

                />
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
