import {TreeSelect} from 'antd';
import React, {FC, useEffect, useState} from 'react';
import {ajaxCommon} from "../../utils/common";
import {cloneDeep} from "lodash-es";
// 脚手架示例组件
const Index: FC<any> = (props) => {
  const {ajax = ajaxCommon} = props;
  const {
    fieldNames, params = (data: any) => {
      return {}
    }, url, setData
  } = props.fieldProps;
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    onLoadData({}, {...params({})})
  }, []);

  function addChildToNode(tree: any, id: any, newNode: any, rowKey: string = "value", children: string = "children") {
    let _tree = cloneDeep(tree);
    for (let i of _tree) {
      if (i[rowKey] === id) {
        i.children = newNode
      } else {
        if (i.children) {
          i.children = addChildToNode(i.children, id, newNode, rowKey, children)
        }
      }
    }
    return _tree;
  }

  const onLoadData = (_params: any, values: any = {}) => {
    return ajax(url, {...params(_params)}, (data: any) => {
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

  return (
    <TreeSelect
      {...props?.fieldProps}
      treeDataSimpleMode
      style={{width: '100%'}}
      dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
      placeholder="请选择"
      loadData={onLoadData}
      treeData={treeData}
    />
  );
};

export default Index;
