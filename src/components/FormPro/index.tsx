import {Button, message} from 'antd';
import React, {FC, useEffect} from 'react';
import {BetaSchemaForm} from "@ant-design/pro-components";
import {ajaxCommon, commonFormHandler} from "../../utils/common";
import ProProviderPro from "../ProProviderPro"

type BetaSchemaFormType = typeof BetaSchemaForm;

type BetaSchemaFormProps = Parameters<BetaSchemaFormType>[0];


// 脚手架示例组件
const Index: FC<{
  /**
   * @description 高级表单类型:ModalForm
   * @default "ModalForm"
   */
  layoutType?: any;
  children?: any;
  /**
   * @description 高级表单自带的参数
   * @default {}
   */
  fieldProps?: any;
  url?: string;
  detailUrl?: string;
  record?: any;
  ajax?: Function;
  finishFun?: Function;
  setMsg?: Function;
  // params?: any;
  detailSetData?: any;
  isEdit?: boolean
}> = ({
        // params = {},
        layoutType = "ModalForm", fieldProps = {}, url, ajax = ajaxCommon, finishFun = () => {
  }, setMsg = (data: any) => {
    return data.msg
  }, children = <Button>点击我</Button>, detailUrl, detailSetData, isEdit = false, record = {}
      }) => {

  //
  const formRef: any = React.useRef();


  return (
    <ProProviderPro>
      <BetaSchemaForm
        formRef={formRef}
        layoutType={layoutType}
        request={async (_record) => {
          /*传递的参数中，有params说明有详情要请求，否则就不请求 */
          let result = _record;
          if (detailUrl && isEdit) {
            await ajax(detailUrl, {..._record}, (data: any) => {
              result = detailSetData(data)
            })
          }
          return result || {};
        }}
        onFinish={async (values: any = {}) => {
          let isSuccess = false
          let _values = {...record, ...values}
          console.log(values);
          await ajax(url, _values, (data: any) => {

            // 刷新页面
            message.success(setMsg(data));
            finishFun(data, _values)

            isSuccess = true
          })

          return isSuccess
        }}
        {...fieldProps}
        {...(layoutType === 'ModalForm'
          ? {
            modalProps: {
              // destroyOnClose: true,
              getContainer: document.getElementById("root")
            },
            onOpenChange: (visible: boolean) => {
              fieldProps?.onOpenChange && fieldProps.onOpenChange(visible)
            }
          }
          : {
            drawerProps: {destroyOnClose: true},
          })}
        params={{...record, ...(fieldProps?.params || {})}}
        trigger={children}
        columns={commonFormHandler(fieldProps?.columns || [], ajax, isEdit)}
      />
    </ProProviderPro>
  );
};

export default Index;
