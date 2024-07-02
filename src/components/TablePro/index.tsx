import {DeleteOutlined, PlusOutlined} from '@ant-design/icons';
import {ActionType, BetaSchemaForm, ProTable} from '@ant-design/pro-components';
import {Button, Divider, message, Popconfirm, Space, Table} from 'antd';
import React, {FC, Fragment, useRef} from 'react';
import {ajaxCommon} from "../../utils/common";
import {ModalPro} from "durians";


const columns_: any = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tooltip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
];

const TablePro: FC<{
  /**
   * @description 通用ajax实现方法
   * @default (url: string, params: object, callback: Function, isApi = true) => {
   *     let api_ = "";
   *     if (isApi) {
   *         api_ = "api";
   *     }
   *
   *     return request.post(api_ + url, {data: params}).then((data) => {
   *         if (data.code == 0) {
   *             callback(data)
   *         } else {
   *             message.error(data.msg)
   *         }
   *     }).catch(function (error) {
   *         console.log(error);
   *     })
   * }
   * }
   */
  ajax?: Function;
  /**
   * @description 获取数据的URL,例子，/api/new_find
   * @default -
   */
  url?: string;
  /**
   * @description 新增的表单URL
   * @default -
   */
  addUrl?: string;
  /**
   * @description 编辑的表单URL
   * @default -
   */
  editUrl?: string;
  /**
   * @description 删除数据的URL
   * @default -
   */
  deleteUrl?: string;
  /**
   * @description 批量删除数据的字段名
   * @default idList
   */
  deleteField?: string;
  /**
   * @description pro-table的props参数，包括columns，dataSource等
   * @default {}
   */
  fieldProps?: any,
  /**
   * @description BetaSchemaForm的props参数
   * @default {}
   */
  addFieldProps?: any;
  /**
   * @description 获取查询数据滞后的中间件，处理一下数据，再返回出去就是表格最终拿到的dataSource
   * @default (data)=>{return data.data}
   */
  setData?: Function;
  /**
   * @description 获取查询数据滞后的中间件，处理一下数据，再返回出去就是表格数据总数据量，分页时用的
   * @default (data)=>{return data.total}
   */
  setTotal?: Function;
  /**
   * @description 新增表单提交成功之后，需要返回给页面的一个message弹窗中的提示，返回值是一个字符串
   * @default (data)=>{return data.message}
   */
  setMsg?: Function;
  /**
   * @description 表格后面的操作组，类型是个数组，元素是组件，会传递record
   * @default [({record})=>{return <div>跳转</div>}]
   */
  actionBar?: any[];
  /**
   * @description 表格操作列的宽度
   * @default 100
   */
  actionWidth?: number
}> = ({
        ajax ,
        url = 'https://proapi.azurewebsites.net/github/issues',
        addUrl,
        editUrl,
        deleteUrl,
        deleteField = "idList",
        addFieldProps = {},
        actionWidth = 100,
        fieldProps = {
          search: {},
          columns: columns_,
        },
        setData = (data: any) => {
          return data.data.records
        },
        setTotal = (data: any) => {
          return data.data.total
        },
        setMsg = (data: any) => {
          return data.msg
        },
        actionBar = []
      }) => {
  const actionRef: any = useRef<ActionType>();
  let id_ = fieldProps.rowKey || "id"
  let actionBarComponent = [...(deleteUrl ? [({record}: any) => <BaseForm
    record={record}><a>编辑</a></BaseForm>] : []), ...actionBar, ...(deleteUrl ? [({record}: any) => <Popconfirm
    title="删除"
    description="确定删除这条数据吗？"
    onConfirm={() => {
      deleteHandle([record[id_]])
    }}
    okText="是"
    cancelText="否"
  >
    <a style={{color: "red"}}>删除</a>
  </Popconfirm>] : [])]


  let BaseForm: FC<{ children?: any; record?: any }> = ({children, record}) => {
    return (
      <BetaSchemaForm
        initialValues={record}
        columns={fieldProps.columns.map((data: any) => {
          return {
            ...data,
            width: 'md',
          }
        }) as any}
        trigger={children}
        onFinish={async (values: any) => {
          let isSuccess = false
          let url_ = addUrl
          let values_ = values

          if (record?.[id_] && editUrl) {
            values_[id_] = record?.[id_]
            url_ = editUrl
          }
          await ajax(url_, values_, (data: any) => {
            // 刷新页面
            actionRef.current?.reload();
            message.success(setMsg(data));
            isSuccess = true
          })
          return isSuccess
        }}
        layoutType="ModalForm"
        rowProps={{
          gutter: [16, 16],
        }}
        colProps={{
          span: 12,
        }}
        grid={true}
        {...addFieldProps}
      />
    )
  }


  let action = (_: any, record: any) => {

    return (
      <div className="durians_table_pro_action">
        {actionBarComponent.map((Comp, i) => {
          return (
            <Fragment key={i}>
              <Comp record={record}/>
              {actionBarComponent.length > 1 && i < actionBarComponent.length - 1 ?
                <Divider type="vertical"/> : null}
            </Fragment>
          )
        })}
      </div>
    )
  }

  //删除的执行函数
  const deleteHandle = (selectedRowKeys: any, callback = () => {
  }) => {
    let params_: any = {}
    params_[deleteField] = selectedRowKeys
    ajax(deleteUrl, params_, (data: any) => {
      message.success(setMsg(data));
      actionRef.current?.reload();
      actionRef.current.clearSelected();
      callback()
    })
  }

  return (
    <ProTable
      defaultSize="small"
      scroll={{x: "100%"}}
      rowSelection={{
        // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
        // 注释该行则默认不显示下拉选项
        selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
      }}
      tableAlertRender={({
                           selectedRowKeys,
                           selectedRows,
                           onCleanSelected,
                         }) => {
        console.log(selectedRowKeys, selectedRows);
        return (
          <Space size={24}>
                        <span>
                          已选 {selectedRowKeys.length} 项
                          <a style={{marginInlineStart: 8}} onClick={onCleanSelected}>
                            取消选择
                          </a>
                        </span>
          </Space>
        );
      }}
      tableAlertOptionRender={({
                                 selectedRowKeys,
                                 selectedRows,
                                 onCleanSelected,
                               }) => {
        return (
          <Space size={16}>
            {deleteUrl ?
              <ModalPro
                title="是否确定删除？"
                Content={() => "确定删除？"}
                handleOk={(callback: any) => {
                  deleteHandle(selectedRowKeys, () => {
                    callback();
                  })
                }}
              >
                <Button
                  size="small"
                  key="danger"
                  icon={<DeleteOutlined/>}
                  danger
                >
                  批量删除
                </Button>
              </ModalPro> : null}
            {/*<a>导出数据</a>*/}
          </Space>
        );
      }}
      actionRef={actionRef}
      request={async (params, sort, filter) => {
        console.log(777,ajax, sort, params, filter);
        let result = null
        await ajax(url, {
          pageIndex: params.current,
          pageSize: params.pageSize,
          ...params,
        }, (data: any) => {
          console.log(data)
          result = data
        })

        return Promise.resolve({
          data: setData(result),
          success: true,
          total: setTotal(result)
        });
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        defaultValue: {
          option: {fixed: 'right', disable: true},
        },
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        // syncToUrl: (values, type) => {
        //   if (type === 'get') {
        //     return {
        //       ...values,
        //     };
        //   }
        //   return values;
        // },
        syncToUrl:false
      }}
      pagination={{
        pageSize: 10,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      {...fieldProps}

      columns={[...fieldProps.columns, ...(actionBarComponent.length ? [{
        title: "操作",
        dataIndex: "actionTablePro",
        fixed: "right",
        actionWidth,
        render: action
      }] : [])]}
      search={fieldProps.search ? {
        labelWidth: 'auto',
        span: 4,
        defaultCollapsed: false,
        ...(fieldProps.search || {})
      } : {
        labelWidth: 'auto',
      }}
      toolBarRender={() => [
        ...(addUrl ? [
          <BaseForm>
            <Button
              key="button"
              icon={<PlusOutlined/>}
              type="primary"
            >
              新建
            </Button>
          </BaseForm>] : []),
        ...(fieldProps.toolBarRender || [])
      ]}
    />
  );
};

export default TablePro
