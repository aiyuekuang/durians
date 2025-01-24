import {Button, message} from 'antd';
import React, {FC} from 'react';
import {BetaSchemaForm} from "@ant-design/pro-components";
import {ajaxCommon, commonFormHandler} from "../../utils/common";
import ProProviderPro from "../ProProviderPro"




// 脚手架示例组件
const Index: FC<{
  /**
   * @description 高级表单类型，默认为 "ModalForm"。可以是 "ModalForm" 或 "DrawerForm" 等。
   * @type any
   * @default "ModalForm"
   */
  layoutType?: any;

  /**
   * @description 表单的子组件，可以是按钮或其他触发表单显示的组件。
   * @type any
   * @default <Button>点击我</Button>
   */
  children?: any;

  /**
   * @description 高级表单自带的参数，包含表单字段属性、布局等。
   * @type object
   * @default {}
   */
  fieldProps?: any;

  /**
   * @description 提交表单数据的 URL。
   * @type string
   * @default undefined
   */
  url?: string;

  /**
   * @description 获取表单详情数据的 URL。
   * @type string
   * @default undefined
   */
  detailUrl?: string;

  /**
   * @description 表单的初始数据，通常用于编辑时填充表单。
   * @type object
   * @default {}
   */
  record?: any;

  /**
   * @description 自定义的 AJAX 请求函数，用于提交表单数据。
   * @type Function
   * @default ajaxCommon
   */
  ajax?: Function;

  /**
   * @description 表单提交成功后的回调函数。
   * @type Function
   * @default () => {}
   */
  finishFun?: Function;

  /**
   * @description 自定义的消息提示函数，用于显示表单提交后的消息。
   * @type Function
   * @default (data: any) => data.msg
   */
  setMsg?: Function;

  /**
   * @description 处理详情数据的函数，用于在获取详情数据后进行处理。
   * @type Function
   * @default undefined
   */
  detailSetData?: any;

  /**
   * @description 是否为编辑模式，默认为 false。
   * @type boolean
   * @default false
   */
  isEdit?: boolean;
  /**
   * @description 表单提交之前的钩子函数，用于自定义表单提交前的逻辑。
   * @type any
   * @default []
   * */
  beforeSubmit?: Function;
}> = ({
        /**
         * @description 高级表单类型，默认为 "ModalForm"。可以是 "ModalForm" 或 "DrawerForm" 等。
         * @type any
         * @default "ModalForm"
         */
        layoutType = "ModalForm",

        /**
         * @description 表单字段的属性，包括布局和其他配置。
         * @type object
         * @default {}
         */
        fieldProps = {},

        /**
         * @description 提交表单数据的 URL。
         * @type string
         * @default undefined
         */
        url,

        /**
         * @description 自定义的 AJAX 请求函数，用于提交表单数据。
         * @type Function
         * @default ajaxCommon
         */
        ajax = ajaxCommon,

        /**
         * @description 表单提交成功后的回调函数。
         * @type Function
         * @default () => {}
         */
        finishFun = () => {
        },

        /**
         * @description 自定义的消息提示函数，用于显示表单提交后的消息。
         * @type Function
         * @default (data: any) => data.msg
         */
        setMsg = (data: any) => {
          return data.msg
        },

        /**
         * @description 表单的子组件，可以是按钮或其他触发表单显示的组件。
         * @type any
         * @default <Button>点击我</Button>
         */
        children = <Button>点击我</Button>,

        /**
         * @description 获取表单详情数据的 URL。
         * @type string
         * @default undefined
         */
        detailUrl,

        /**
         * @description 处理详情数据的函数，用于在获取详情数据后进行处理。
         * @type Function
         * @default undefined
         */
        detailSetData,

        /**
         * @description 是否为编辑模式，默认为 false。
         * @type boolean
         * @default false
         */
        isEdit = false,

        /**
         * @description 表单的初始数据，通常用于编辑时填充表单。
         * @type object
         * @default {}
         */
        record = {},

        /**
         * @description 表单提交之前的钩子函数，用于自定义表单提交前的逻辑，返回一个最终参数。
         * @type Function
         * @default () => {}
         */
        beforeSubmit = (data:any) => {
          return data;
        }
      }) => {

  //
  const formRef: any = React.useRef();


  return (
    <ProProviderPro>
      <BetaSchemaForm
        isKeyPressSubmit={true}
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
          await ajax(url, beforeSubmit(_values, record,values), (data: any) => {

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
