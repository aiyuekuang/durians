import {DeleteOutlined, PlusOutlined} from '@ant-design/icons';
import {ActionType, ProTable} from '@ant-design/pro-components';
import {Button, Divider, message, Popconfirm, Space, Table} from 'antd';
import React, {FC, Fragment, useEffect, useRef, useState} from 'react';
import {ajaxCommon, arrHasKey, commonFormHandler} from "../../utils/common";
import {FormPro, ModalPro, TreePro} from "durians";
import ProProviderPro from '../ProProviderPro';
import {cloneDeep} from "lodash-es";


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
   * @description 批量删除需要传递的字段
   * @default idLists
   */
  deleteFields?: string;
  /**
   * @description 单个删除的时候是不是需要传递数组
   * @default false
   */
  deleteFieldIsArr?: boolean;
  /**
   * @description 删除需要传递的额外参数
   * @default {}
   */
  deleteParams?: any;
  /**
   * @description pro-table的props参数，包括columns，dataSource等
   * @default {}
   */
  fieldProps?: any;
  /**
   * @description BetaSchemaForm的props参数
   * @default {}
   */
  addFormProFieldProps?: any;
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
  actionWidth?: number;
  /**
   * @description ajax接口分页参数的字段别名
   * @default {pageIndex:"pageIndex",pageSize:"pageSize"}
   */
  paginationAlias?: any;
  /**
   * @description pro的tableAlertOptionRender，不过这个是传递一个数组，数组中可以传递组件
   * @default [] 组件的props可以拿到selectedRowKeys,selectedRows,onCleanSelected这三个参数
   */
  tableAlertOptionRenderPro?: any[];
  /**
   * @description treePro的props参数，包括columns，dataSource等
   * @default null
   */
  treeFieldProps?: any;
  /**
   * @description 在请求分页接口的时候，进行的参数的处理
   * @default （data）=>{return data}
   */
  paramsFun?: any;
  treeParamsFun?: Function;
  treeWidth?: number
}> = ({
        ajax = ajaxCommon,
        url = 'https://proapi.azurewebsites.net/github/issues',
        addUrl,
        editUrl,
        deleteUrl,
        deleteFields = "idList",
        deleteField = null,
        deleteFieldIsArr = false,
        deleteParams = {},
        addFormProFieldProps = {},
        actionWidth = 100,
        fieldProps = {
          search: {},
          columns: columns_,
          rowKey: "id"
        },
        setData = (data: any) => {
          return data?.data?.records
        },
        setTotal = (data: any) => {
          return data?.data?.total
        },
        setMsg = (data: any) => {
          return data?.msg
        },
        actionBar = [],
        paginationAlias = {
          pageIndex: "pageIndex",
          pageSize: "pageSize"
        },
        tableAlertOptionRenderPro = [],
        treeFieldProps = null,
        paramsFun = (data: any) => {
          return data
        },
        treeParamsFun = (data: any) => {
          return {
            treeId: data
          }
        },
        treeWidth = 200
      }) => {
  // 表格其他的
  const [tableParams, setTableParams] = useState({})
  const [searchValues, setSearchValues] = useState({})
  // const tableParams = useRef({})
  const actionRef: any = useRef<ActionType>();
  const formRef: any = useRef();
  let id_ = fieldProps.rowKey || "id"
  let actionBarComponent = [...(editUrl ? [({record}: any) => <BaseForm title="编辑" id={id_}
                                                                        record={record}><a>编辑</a></BaseForm>] : []), ...actionBar, ...(deleteUrl ? [({record}: any) =>
    <Popconfirm
      title="删除"
      description="确定删除这条数据吗？"
      onConfirm={() => {
        deleteHandle([record[id_]], () => {
        }, false)
      }}
      okText="是"
      cancelText="否"
    >
      <a style={{color: "red"}}>删除</a>
    </Popconfirm>] : [])]

  useEffect(() => {
    console.log(67666, formRef.current.getFieldsValue())
    if (formRef?.current) {
      setSearchValues(formRef.current.getFieldsValue())
    }
  }, []);


  // let yy = () => {
  //   return <BetaSchemaForm
  //     initialValues={record}
  //     columns={fieldProps.columns.map((data: any) => {
  //       return {
  //         ...data,
  //         width: 'md',
  //       }
  //     }) as any}
  //     trigger={children}
  //     onFinish={async (values: any) => {
  //       let isSuccess = false
  //       let url_ = addUrl
  //       let values_ = values
  //
  //       if (record?.[id_] && editUrl) {
  //         values_[id_] = record?.[id_]
  //         url_ = editUrl
  //       }
  //       await ajax(url_, values_, (data: any) => {
  //         // 刷新页面
  //         actionRef.current?.reload();
  //         message.success(setMsg(data));
  //         isSuccess = true
  //       })
  //       return isSuccess
  //     }}
  //     layoutType="ModalForm"
  //     rowProps={{
  //       gutter: [16, 16],
  //     }}
  //     colProps={{
  //       span: 12,
  //     }}
  //     grid={true}
  //     {...addFormProFieldProps}
  //   />
  // }
  let BaseForm: FC<{ children?: any; record?: any, id?: string, title?: string }> = ({
                                                                                       children,
                                                                                       record,
                                                                                       id,
                                                                                       title = "新增"
                                                                                     }) => {

    let columns_ = typeof fieldProps.columns === "function" ? fieldProps.columns("add") : fieldProps.columns;
    let url_ = addUrl
    let _params: any = {}
    if (id && record?.[id]) {
      _params[id] = record?.[id]
      if (editUrl) {
        url_ = editUrl
      }
    }

    return (
      <FormPro
        ajax={ajax}
        {...addFormProFieldProps}
        url={url_}
        finishFun={() => {
          actionRef.current?.reload();
        }}
        params={{..._params, ...addFormProFieldProps.params}}
        fieldProps={{
          initialValues: {...record, ...tableParams},
          columns: columns_.map((data: any) => {
            return {
              ...data,
              width: null,
            }
          }),
          title,
          ...addFormProFieldProps.fieldProps
        }}
      >
        {children}
      </FormPro>
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
  }, batch = true) => {
    let keys = selectedRowKeys;
    if (!deleteFieldIsArr && !batch) {
      keys = selectedRowKeys[0]
    }

    let params_: any = {...deleteParams}
    if (batch) {
      params_[deleteFields] = keys
    } else {
      if (deleteField) {
        params_[deleteField] = keys
      } else {
        params_[fieldProps.rowKey || "id"] = keys
      }
    }

    ajax(deleteUrl, params_, (data: any) => {
      message.success(setMsg(data));
      actionRef.current?.reload();
      actionRef.current.clearSelected();
      callback()
    })
  }
  // 判断是否有关键词搜索的
  let keywordModel = arrHasKey((data: any) => {
    return data?.proConfig?.isKeyword
  }, fieldProps.columns);

  console.log(666,keywordModel)

  return (
    <ProProviderPro>
      <div className="durians_table_body">
        {treeFieldProps ? <div className="durians_table_body_l" style={{
          width: treeWidth
        }}>
          <TreePro
            ajax={ajax}
            {...treeFieldProps}
            fieldProps={{
              onSelect: (selectedKeys: any) => {
                setTableParams(org => {
                  let _org = cloneDeep(org);
                  return {
                    ..._org,
                    ...treeParamsFun(selectedKeys)
                  }
                })

                // tableParams.current = {
                //   ...tableParams.current,
                //   ...treeParamsFun(selectedKeys)
                // }
                // formRef.current.setFieldsValue(cloneDeep({...formRef.current.getFieldsValue(),...treeParamsFun(selectedKeys)}))
                actionRef.current?.reload();
              },
              ...treeFieldProps.fieldProps
            }}
          />
        </div> : null}
        <div className="durians_table_body_r" style={{
          ...(treeFieldProps ? {maxWidth: `calc(100% - ${treeWidth + 8}px)`} : {})
        }}>
          <ProTable
            onSubmit={(values) => {
              setSearchValues(values);
            }}
            formRef={formRef}
            defaultSize="small"
            scroll={{x: "100%"}}
            rowSelection={deleteUrl || tableAlertOptionRenderPro.length ? {
              // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
              // 注释该行则默认不显示下拉选项
              selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
              preserveSelectedRowKeys: true,
            } : false}
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
                  {tableAlertOptionRenderPro.map((Comp, i) => {
                    return <Comp
                      selectedRowKeys={selectedRowKeys}
                      selectedRows={selectedRows}
                      onCleanSelected={onCleanSelected}
                      key={i}
                      formRef={formRef}
                      actionRef={actionRef}
                      searchValues={searchValues}
                    />
                  })}
                  {/*<a>导出数据</a>*/}
                </Space>
              );
            }}
            actionRef={actionRef}
            request={async (params, sort, filter) => {
              let result = fieldProps.dataSource
              let _params: any = {...tableParams}
              _params[paginationAlias.pageIndex] = params.current
              _params[paginationAlias.pageSize] = params.pageSize

              if (url) {
                await ajax(url, paramsFun({
                  ..._params,
                  ...params,
                }), (data: any) => {
                  console.log(data)
                  result = data
                })
              }

              return Promise.resolve({
                data: result ? setData(result) : [],
                success: true,
                total: result ? setTotal(result) : 0
              });
            }}
            // editable={{
            //   type: 'multiple',
            // }}
            // columnsState={{
            //   persistenceKey: 'pro-table-singe-demos',
            //   persistenceType: 'localStorage',
            //   defaultValue: {
            //     option: {fixed: 'right', disable: true},
            //   },
            //   onChange(value) {
            //     console.log('value: ', value);
            //   },
            // }}
            rowKey="id"

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
              syncToUrl: false
            }}
            pagination={{
              pageSize: 10,
              onChange: (page) => console.log(page),
            }}
            dateFormatter="string"

            {...fieldProps}
            options={{
              ...(keywordModel ? {search: {name: keywordModel.dataIndex, placeholder: `请输入${keywordModel.title}`}} : {}),
              setting: {
                listsHeight: 400,
              },
              ...fieldProps.options
            }}
            columns={[...commonFormHandler(typeof fieldProps.columns === "function" ? fieldProps.columns("table") : fieldProps.columns || [], ajax), ...(actionBarComponent.length ? [{
              title: "操作",
              dataIndex: "actionTablePro",
              fixed: "right",
              hideInSearch: true,
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
            toolBarRender={(action) => {
              return [
                ...(addUrl ? [
                  <BaseForm>
                    <Button
                      key="button"
                      icon={<PlusOutlined/>}
                      type="primary"
                    >
                      新建
                    </Button>
                  </BaseForm>
                ] : []),
                ...(fieldProps.toolBarRender?.map((Comp: any) => {
                  console.log(7656, typeof Comp)
                  if (typeof Comp === "function") {
                    return <Comp action={action} formRef={formRef} searchValues={searchValues}/>
                  } else {
                    return Comp
                  }
                }) || [])
              ]
            }}
          />
        </div>
      </div>
    </ProProviderPro>
  );
};

export default TablePro
