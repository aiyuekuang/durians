import {Dropdown, MenuProps, message, Popconfirm, Spin, Tree} from 'antd';
import React, {FC, useEffect, useState} from 'react';
import {DeleteOutlined, EditOutlined, PlusOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {FormPro} from "durians";
import {ajaxCommon} from "../../utils/common";
import {addChildToNode} from "../FormItem/TreeSelectPro";


// 脚手架示例组件
const TreePro: FC<{
  /**
   * 名称
   * */
  title: string;
  /**
   * 表单的参数
   * */
  addFormProFieldProps: any;
  /**
   * 请求数据的ajax
   * */
  ajax?: Function;
  /**
   * @description 获取数据的URL,例子，/api/new_find
   * @default -
   */
  url?: string;
  /**
   * @description 获取详情数据的URL
   * @default -
   */
  detailUrl?: string;
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
   * @description 获取查询数据滞后的中间件，处理一下数据，再返回出去就是表格最终拿到的dataSource
   * @default (data)=>{return data.data}
   */
  setData?: Function;
  /**
   * @description 额外的参数
   * @default {}
   */
  /**
   * @description 额外的参数
   * @default {}
   */
  params?: any;
  /**
   * @description 表单的字段属性
   * @default {}
   */
  fieldProps?: any;
  /**
   * @description 设置消息的函数
   * @default (data) => data.msg
   */
  setMsg?: any;
  /**
   * @description 编辑字段上传接口的字段
   * @default "id"
   */
  editField?: string;
  /**
   * @description 是否选择
   * @default false
   */
  isSelect: boolean;
  /**
   * @description 是否显示详情
   * @default true
   */
  detail: boolean;
  /**
   * @description 行的唯一标识字段
   * @default "id"
   */
  rowKey: string;
  /**
   * @description 是否按需加载树子的数据，默认不是
   * @default false
   */
  isLoadData: boolean
}> = ({
        title = "选择",
        ajax = ajaxCommon,
        url = null,
        params = (data: any) => {
          return {}
        },
        addUrl,
        editUrl,
        deleteUrl,
        deleteFields = "idList",
        deleteField = "id",
        deleteFieldIsArr = false,
        deleteParams = {},
        addFormProFieldProps = {},
        setData = (data: any) => {
          return data.data
        },
        setMsg = (data: any) => {
          return data.msg
        },
        editField = "id",
        fieldProps = {
          fieldNames: {title: "title", key: "key", children: "children"},
          // onSelect: () => {
          // },
        },
        isSelect = false,
        detail = true,
        rowKey = "id",
        isLoadData = false
      }) => {
  const [treeData, setTreeData]: any = useState("loading");
  const {
    fieldNames={title: "title", key: "key", children: "children"},
  } = fieldProps;

  const treeProps = {
    ajax,
    addUrl,
    editUrl,
    deleteUrl,
    deleteFields,
    deleteField,
    editField,
    deleteFieldIsArr,
    deleteParams,
    addFormProFieldProps
  };

  useEffect(() => {
    if (url) {
      onLoadData({}, {...params({})})
    } else {
      setTreeData([])
    }
  }, []);


  //删除的执行函数
  const deleteHandle = (selectedRowKeys: any, batch = false) => {
    let keys = selectedRowKeys;
    if (!deleteFieldIsArr && !batch) {
      keys = selectedRowKeys[0]
    }

    let params_: any = {...deleteParams}
    if (batch) {
      params_[deleteFields] = keys
    } else {
      params_[deleteField] = keys
    }

    ajax(deleteUrl, params_, (data: any) => {
      message.success(setMsg(data));
      onLoadData({}, {...params({})})
    })
  }


  const onLoadData = (_params: any, values: any = {}) => {
    return ajax(url, {...params(_params), ...values}, (data: any) => {
      let result = setData(data);

      setTreeData((org: any) => {
        if (_params.key) {
          return addChildToNode(org, _params.key, result, fieldNames.key)
        } else {
          return result
        }
      })
    })
  }


  let FormNode = (formProps: any) => {
    const {children, ajax, addUrl, record, fieldProps} = formProps;
    const [isEdit, setIsEdit] = useState(editField && record?.[rowKey])

    let url_ = addUrl
    let _params: any = {}
    if (editField && record?.[rowKey]) {
      _params[editField] = record?.[rowKey]
      if (editUrl) {
        url_ = editUrl
      }
    }


    return (
      <FormPro
        isEdit={isEdit}
        finishFun={() => {
          onLoadData({}, {...params({})})
        }}
        ajax={ajax}
        url={url_}
        {...addFormProFieldProps}
        fieldProps={{
          ...addFormProFieldProps.fieldProps,
          ...fieldProps,
          onOpenChange: () => {
            if (!record) {
              setIsEdit(false)
            } else {
              setIsEdit(editField && record?.[rowKey])
            }
          }
        }}
        record={{...record, ..._params, ...(addFormProFieldProps?.record || {})}}
      >
        {children}
      </FormPro>
    )
  }


  let menuItem = (nodeData: any): MenuProps['items'] => {
    return [{
      key: '1',
      label: (
        <FormNode
          {...treeProps}
          addUrl={addUrl}
          record={{...nodeData, id: nodeData[rowKey]}}
          fieldProps={{
            readonly: true,
          }}
        >
          <a>
            详情
          </a>
        </FormNode>
      ),
      icon: <UnorderedListOutlined/>,
      disabled: !detail,
    }, {
      key: '2',
      label: (
        <FormNode
          {...treeProps}
          addUrl={addUrl}
          record={{...nodeData, id: nodeData[rowKey]}}
        >
          <a>
            编辑
          </a>
        </FormNode>
      ),
      icon: <EditOutlined/>,
      disabled: !editUrl,
    }, {
      key: '3',
      label: (
        <Popconfirm
          title="删除"
          description="确定删除这条数据吗？"
          onConfirm={() => {
            deleteHandle([nodeData[rowKey]])
          }}
          okText="是"
          cancelText="否"
        >
          <a style={{color: "red"}}>删除</a>
        </Popconfirm>
      ),
      icon: <DeleteOutlined/>,
      disabled: !deleteUrl,
    }]
  }


  const titleRender = (nodeData: any) => {
    return (
      <Dropdown menu={{items: menuItem(nodeData)}} getPopupContainer={() => document.body} trigger={['contextMenu']}>
        <span>
          {nodeData[fieldNames.title]}
        </span>
      </Dropdown>
    );
  };


  return (
    <div className="durians_tree_body">
      <div className="durians_tree_body_title">
        <div className="durians_tree_body_title_l">
          {title}
        </div>
        <div className="durians_tree_body_title_r">
          <FormNode
            {...treeProps}
          >
            <PlusOutlined/>
          </FormNode>
        </div>
      </div>
      <div className="durians_tree_body_tree">
        {treeData === "loading" && url ? <Spin style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 200
        }}/> : <Tree
          {...(isLoadData ? {loadData: onLoadData} : {})}
          treeData={treeData}
          titleRender={titleRender}
          {...fieldProps}
        />}

      </div>
    </div>
  );
};

export default TreePro;
