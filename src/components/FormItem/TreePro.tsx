import {Dropdown, MenuProps, message, Tree} from 'antd';
import React, {useEffect, useState} from 'react';
import {EditOutlined, EllipsisOutlined, PlusOutlined} from "@ant-design/icons";
import {FormPro} from "durians";
import {ajaxCommon} from "../../utils/common";
import {addChildToNode} from "../FormItem/treeSelectPro";


const initTreeData = [
  {title: 'Expand to load', key: '0'},
  {title: 'Expand to load', key: '1'},
  {title: 'Tree Node', key: '2', isLeaf: true},
];

// 脚手架示例组件
const Index: React.FC<{
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
  params?: any;
  fieldNames?: any;
  setMsg?: any;
  onSelect: any;
  editField?: string;
}> = ({
        title = "选择",
        ajax = ajaxCommon,
        url = 'https://proapi.azurewebsites.net/github/issues',
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
        fieldNames,
        onSelect = () => {
        },
        editField
      }) => {
  const [treeData, setTreeData]: any = useState([]);

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
    onLoadData({}, {...params({})})
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

      if (fieldNames) {
        result = result.map((value: any) => {
          value.label = value[fieldNames.label]
          value.value = value[fieldNames.value]
          return value
        })
      }

      setTreeData((org: any) => {
        if (_params.value) {
          return addChildToNode(org, _params.value, result)
        } else {
          return result
        }
      })
    })
  }

  let FormNode = (props: any) => {
    const {children, addFormProFieldProps, ajax, addUrl, record} = props;

    let url_ = addUrl
    let _params: any = {}
    if (editField && record.id) {
      _params[editField] = record.id
      if (editUrl) {
        url_ = editUrl
      }
    }

    return (
      <FormPro
        finishFun={() => {
          onLoadData({}, {...params({})})
        }}
        ajax={ajax}
        url={url_}
        fieldProps={{
          columns: [
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
            }
          ]
        }}
        {...addFormProFieldProps}
        params={{..._params, ...(addFormProFieldProps?.params || {})}}
      >
        {children}
      </FormPro>
    )
  }


  let menuItem = (nodeData: any): MenuProps['items'] => {
    return [{
      key: '1',
      label: (
        <FormNode {...treeProps} addUrl={addUrl} record={{id: nodeData.value}}>
          <a>
            编辑
          </a>
        </FormNode>
      ),
      icon: <EditOutlined/>,
      disabled: !editUrl,
    }, {
      key: '2',
      label: (
        <a onClick={() => {
          deleteHandle([nodeData.value])
        }}
        >
          删除
        </a>
      ),
      icon: <EditOutlined/>,
      disabled: !deleteUrl,
    }]
  }

  return (
    <div className="durians_tree_body">
      <div className="durians_tree_body_title">
        <div className="durians_tree_body_title_l">
          {title}
        </div>
        <div className="durians_tree_body_title_r">
          <FormNode {...treeProps} addUrl={addUrl}>
            <PlusOutlined/>
          </FormNode>
        </div>
      </div>
      <div className="durians_tree_body_tree">
        <Tree
          onSelect={onSelect}
          loadData={onLoadData}
          treeData={treeData}
          titleRender={(nodeData) => {
            return (
              <div className="durians_tree_body_title_node" key={nodeData.value}>
                <div className="durians_tree_body_title_node_l">
                  {nodeData.label}
                </div>
                <div className="durians_tree_body_title_node_r">
                  <Dropdown menu={{items: menuItem(nodeData)}}>
                    <a onClick={(e) => e.preventDefault()}>
                      <EllipsisOutlined/>
                    </a>
                  </Dropdown>
                </div>
              </div>
            )
          }}></Tree>
      </div>
    </div>
  );
};

export default Index;
