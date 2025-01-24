import {DeleteOutlined, PlusOutlined} from '@ant-design/icons';
import {ActionType, ProTable, ProTableProps} from '@ant-design/pro-components';
import {Button, Divider, message, PaginationProps, Popconfirm, Space, Table} from 'antd';
import React, {FC, Fragment, useEffect, useRef, useState} from 'react';
import {ajaxCommon, arrHasKey, commonFormHandler} from "../../utils/common";
import {FormPro, ModalPro, TreePro} from "durians";
import ProProviderPro from '../ProProviderPro';
import {cloneDeep} from "lodash-es";


type LocalProTableProps = Omit<ProTableProps<any, any>, 'pagination'> & { pagination?: PaginationProps, } & any;

type Columns = LocalProTableProps['columns'] & { proConfig?: { url?: string, setData?: Function, isKeyword?: boolean } }


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
   * @type Function
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
   */
  ajax?: Function;
  /**
   * @description 获取数据的URL,例子，/api/new_find
   * @type string
   * @default -
   */
  url?: string;
  /**
   * @description 新增的表单URL
   * @type string
   * @default -
   */
  addUrl?: string;
  /**
   * @description 编辑的表单URL
   * @type string
   * @default -
   */
  editUrl?: string;
  /**
   * @description 删除数据的URL
   * @type string
   * @default -
   */
  deleteUrl?: string;
  /**
   * @description 批量删除数据的字段名
   * @type string
   * @default idList
   */
  deleteField?: string;
  /**
   * @description 批量删除需要传递的字段
   * @type string
   * @default idLists
   */
  deleteFields?: string;
  /**
   * @description 单个删除的时候是不是需要传递数组
   * @type boolean
   * @default false
   */
  deleteFieldIsArr?: boolean;
  /**
   * @description 删除需要传递的额外参数
   * @type object
   * @default {}
   */
  deleteParams?: any;
  /**
   * @description 隐藏批量删除
   * @type boolean
   * @default false
   */
  deleteBatchHidden?: boolean;
  /**
   * @description pro-table的props参数，包括columns，dataSource等
   * @type Omit<LocalProTableProps, 'columns'> & { columns: Columns | ((type: 'table' | 'add') => Columns); }
   * @default {}
   */
  fieldProps?: Omit<LocalProTableProps, 'columns'> & {
    columns: Columns | ((type: 'table' | 'add') => Columns);
  };
  /**
   * @description BetaSchemaForm的props参数
   * @type object
   * @default {}
   */
  addFormProFieldProps?: any;
  /**
   * @description 获取查询数据滞后的中间件，处理一下数据，再返回出去就是表格最终���到的dataSource
   * @type Function
   * @default (data)=>{return data.data}
   */
  setData?: Function;
  /**
   * @description 获取查询数据滞后的中间件，处理一下数据，再返回出去就是表格数据总数据量，分页时用的
   * @type Function
   * @default (data)=>{return data.total}
   */
  setTotal?: Function;
  /**
   * @description 新增表单提交成功之后，需要返回给页面的一个message弹窗中的提示，返回值是一个字符串
   * @type Function
   * @default (data)=>{return data.message}
   */
  setMsg?: Function;
  /**
   * @description 表格后面的操作组，类型是个数组，元素是组件，会传递record
   * @type any[]
   * @default [({record})=>{return <div>跳转</div>}]
   */
  actionBar?: any[];
  /**
   * @description 表格操作列的宽度
   * @type number
   * @default 100
   */
  actionWidth?: number;
  /**
   * @description ajax接口分页参数的字段别名
   * @type object
   * @default {pageIndex:"pageIndex",pageSize:"pageSize"}
   */
  paginationAlias?: any;
  /**
   * @description pro的tableAlertOptionRender，不过这个是传递一个数组，数组中可以传递组件
   * @type any[]
   * @default [] 组件的props可以拿到selectedRowKeys,selectedRows,onCleanSelected这三个参数
   */
  tableAlertOptionRenderPro?: any[];
  /**
   * @description treePro的props参数，包括columns，dataSource等
   * @type object
   * @default null
   */
  treeFieldProps?: any;
  /**
   * @description 在请求分页接口的时候，进行的参数的处理
   * @type Function
   * @default (data)=>{return data}
   */
  paramsFun?: any;
  /**
   * @description treePro的参数处理函数
   * @type Function
   * @default (data)=>{return {treeId: data}}
   */
  treeParamsFun?: Function;
  /**
   * @description treePro的宽度
   * @type number
   * @default 200
   */
  treeWidth?: number;
  /**
   * @description 选中的值
   * @type any
   * @default null
   */
  value?: any;
  /**
   * @description 选中值变化时的回调
   * @type Function
   * @default null
   */
  onSelectChange?: any;
  /**
   * @description 关键词字段
   * @type string
   * @default null
   */
  keywordField?: string;
  /**
   * @description 关键词占位符
   * @type string
   * @default null
   */
  keywordPlaceholder?: string;
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
        deleteBatchHidden = false,
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
        treeWidth = 200,
        value = null,
        onSelectChange = null,
        keywordField = null,
        keywordPlaceholder = null
      }) => {
  // 表格其他的
  const [tableParams, setTableParams] = useState({})
  console.log('treeFieldProps', tableParams)
  // 将搜索的数据保存下来，全局的时候有需要用到
  const [searchValues, setSearchValues] = useState({})

  const onSelectChange_ = (newSelectedRowKeys: any) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    if (onSelectChange) {
      onSelectChange(newSelectedRowKeys)
    }
  };

  const [pageSize, setPageSize] = useState(fieldProps?.pagination?.pageSize || 10)
  // const tableParams = useRef({})
  const actionRef: any = useRef<ActionType>();
  const formRef: any = useRef();
  let id_: any = fieldProps.rowKey || "id"
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
    if (formRef?.current) {
      setSearchValues(formRef.current.getFieldsValue())
    }
  }, []);


  let BaseForm: FC<{ children?: any; record?: any, id?: any, title?: string }> = ({
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
        isEdit={id && record?.[id]}
        ajax={ajax}
        {...addFormProFieldProps}
        url={url_}
        finishFun={() => {
          actionRef.current?.reload();
        }}
        record={{...record, ...tableParams, ..._params}}
        // params={{..._params, ...addFormProFieldProps.params}}
        fieldProps={{
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
              <Comp record={record} formRef={formRef} action={actionRef.current}/>
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
        let _rowKey = typeof fieldProps?.rowKey == "function" ? fieldProps?.rowKey({}) : fieldProps?.rowKey
        params_[_rowKey as string || "id"] = keys
      }
    }

    ajax(deleteUrl, params_, (data: any) => {
      message.success(setMsg(data));
      actionRef.current?.reload();
      actionRef.current.clearSelected();
      callback()
    })
  }

  // 根据columns的类型，进行col数据的转换，table是数据需要塞入的类型，这里用的是塞入表格的
  let columnsTemp = typeof fieldProps.columns === "function" ? fieldProps.columns("table") : fieldProps.columns || []


  // 判断是否有关键词搜索的
  let keywordModel = arrHasKey((data: any) => {
    return data?.proConfig?.isKeyword
  }, columnsTemp);

  console.log(678, actionWidth)
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
            // onSubmit={(values) => {
            //   setSearchValues(values);
            // }}
            formRef={formRef}
            defaultSize="small"
            scroll={{x: 'max-content'}}
            rowSelection={(deleteUrl && !deleteBatchHidden) || tableAlertOptionRenderPro.length || onSelectChange ? {
              // 自定义选择项参考: https://ant.design/components/table-cn/#components-table-demo-row-selection-custom
              // 注释该行则默认不显示下拉选项
              selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
              preserveSelectedRowKeys: true,
              ...(value ? {selectedRowKeys: value} : {}),
              onChange: onSelectChange_,
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
                  {deleteUrl && !deleteBatchHidden ?
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
                        variant="solid"
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
              let _params: any = {...params}
              _params[paginationAlias.pageIndex] = params.current
              _params[paginationAlias.pageSize] = params.pageSize

              // 收集参数
              setSearchValues(_params);

              if (url) {
                await ajax(url, paramsFun({
                  ..._params,
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
            dateFormatter="string"
            {...fieldProps}
            params={{...tableParams, ...(fieldProps?.params || {})}}
            // 分页参数
            {...(fieldProps.pagination ? {
              ...fieldProps?.pagination,
              pageSize: pageSize,
              onChange: (page, pageSize) => {
                if (fieldProps?.pagination?.onChange) {
                  fieldProps?.pagination?.onChange(page, pageSize)
                }
                setPageSize(pageSize)
              },
            } : {})}
            options={{
              // keywordModel.formItemProps.name当搜索和表格不是用同一个字段的时候，也需要做一下字段的处理
              ...(keywordModel ? {
                search: {
                  name: keywordModel.formItemProps ? keywordModel.formItemProps.name : keywordModel.dataIndex,
                  placeholder: `请输入${keywordModel.title}`,
                  allowClear: true
                }
              } : {}),
              setting: {
                listsHeight: 400,
              },
              ...fieldProps.options
            }}
            columns={[...commonFormHandler(columnsTemp, ajax), ...(actionBarComponent.length ? [{
              title: "操作",
              dataIndex: "actionTablePro",
              fixed: "right",
              hideInSearch: true,
              actionWidth,
              render: action
            }] : [])]}
            search={{
              labelWidth: 'auto',
              ...(fieldProps?.search || {})
            }}
            // @ts-ignore
            toolBarRender={(action) => {
              const toolBarRender = fieldProps.toolBarRender
              if (toolBarRender === false) {
                return false
              }
              return [
                ...(addUrl ? [
                  <BaseForm>
                    <Button
                      variant="solid"
                      key="button"
                      icon={<PlusOutlined/>}
                      type="primary"
                    >
                      新建
                    </Button>
                  </BaseForm>
                ] : []),
                ...(toolBarRender?.map((Comp: any) => {
                  if (typeof Comp === "function") {
                    return <Comp action={action} formRef={formRef} searchValues={searchValues}/>
                  } else {
                    return Comp
                  }
                }) || [])
              ]
            }}
            toolbar={{
              ...fieldProps.toolbar,
              ...(keywordField ? {
                search: {
                  onSearch: (value: string) => {
                    setTableParams((org) => {
                      console.log(666, value)
                      let _org = cloneDeep(org);
                      return {..._org, [keywordField]: value}
                    })
                    actionRef.current?.reload();
                  },
                  placeholder: `请输入${keywordPlaceholder}`,
                  allowClear: true,
                  ...(fieldProps?.toolbar?.search || {})
                }
              } : {}),
            }}
          />
        </div>
      </div>
    </ProProviderPro>
  );
};

export default TablePro;
