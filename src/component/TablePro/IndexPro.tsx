import {DeleteOutlined, EllipsisOutlined, PlusOutlined} from '@ant-design/icons';
import {ActionType, ProTable} from '@ant-design/pro-components';
import {Button, Divider, Dropdown, message, Popconfirm, Space, Table} from 'antd';
import React, {FC, Fragment, useRef} from 'react';
import {ajaxCommon} from "@/utils/common";
import {BetaSchemaForm} from "@ant-design/pro-form";
import ModalPro from "@/components/ModalPro";


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

interface type {
    ajax?: any;
    url?: any;
    urlAdd?: any;
    urlEdit?: any;
    urlDelete?: any;
    urlDeleteField?: any;
    fieldProps?: any,
    fieldPropsAdd?: any;
    setData?: Function;
    setTotal?: Function;
    setMsg?: Function;
    actionBar?: any;
    actionWidth?: number
}

const TablePro: FC<type> = ({
                                ajax = ajaxCommon,
                                url = 'https://proapi.azurewebsites.net/github/issues',
                                urlAdd,
                                urlEdit,
                                urlDelete,
                                urlDeleteField = "idList",
                                fieldPropsAdd = {},
                                actionWidth = 100,
                                fieldProps = {
                                    search: {},
                                    columns: columns_,
                                },
                                setData = (data) => {
                                    return data.data.records
                                },
                                setTotal = (data) => {
                                    return data.data.total
                                },
                                setMsg = (data) => {
                                    return data.msg
                                },
                                actionBar = []
                            }) => {
    const actionRef = useRef<ActionType>();
    let id_ = fieldProps.rowKey || "id"
    let actionBarComponent = [...(urlDelete ? [({record}) => <BaseForm
        record={record}><a>编辑</a></BaseForm>] : []), ...actionBar, ...(urlDelete ? [({record}) => <Popconfirm
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


    let BaseForm:FC<{children?:any;record?:any}> = ({children, record}) => {
        return (
            <BetaSchemaForm
                initialValues={record}
                columns={fieldProps.columns.map((data) => {
                    return {
                        ...data,
                        width: 'md',
                    }
                }) as any}
                trigger={children}
                onFinish={async (values: any) => {
                    let isSuccess = false
                    let url_ = urlAdd
                    let values_ = values

                    if (record?.[id_] && urlEdit) {
                        values_[id_] = record?.[id_]
                        url_ = urlEdit
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
                {...fieldPropsAdd}
            />
        )
    }


    let action = (_, record) => {

        return (
            <div className="ztao_table_pro_action">
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
    const deleteHandle = (selectedRowKeys, callback = () => {
    }) => {
        let params_ = {}
        params_[urlDeleteField] = selectedRowKeys
        ajax(urlDelete, params_, (data) => {
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
                        {urlDelete ?
                            <ModalPro
                                title="是否确定删除？"
                                Content={() => "确定删除？"}
                                handleOk={(callback) => {
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
                console.log(777,sort, params, filter);
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
                syncToUrl: (values, type) => {
                    if (type === 'get') {
                        return {
                            ...values,
                        };
                    }
                    return values;
                },
            }}
            pagination={{
                pageSize: 10,
                onChange: (page) => console.log(page),
            }}
            dateFormatter="string"
            {...fieldProps}

            columns={[...fieldProps.columns, ...(actionBarComponent.length?[{
                title: "操作",
                dataIndex: "actionTablePro",
                fixed: "right",
                actionWidth,
                render: action
            }]:[])]}
            search={fieldProps.search ?{
                labelWidth: 'auto',
                span: 4,
                defaultCollapsed: false,
                ...(fieldProps.search || {})
            }:false}
            toolBarRender={() => [
                ...(urlAdd ? [
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