import {TreeSelect} from 'antd';
import React, {FC, useEffect, useState} from 'react';
import {ajaxCommon} from "../../utils/common";
import {cloneDeep} from "lodash-es";


export function addChildToNode(tree: any, id: any, newNode: any, rowKey: string = "value", children: string = "children") {
  const _tree = cloneDeep(tree);
  for (const i of _tree) {
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


const Index: FC<any> = (props) => {
  const {ajax = ajaxCommon, rowKey = "value"} = props;
  const {
    fieldNames, params = (data: any) => {
      return {}
    }, url, setData
  } = props.fieldProps;
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    onLoadData({}, {...params({})})
  }, []);


  const onLoadData = (_params: any, values: any = {}) => {
    return ajax(url, {...params(_params), ...values}, (data: any) => {
      const result = setData(data);

      // if (fieldNames) {
      //   result = result.map((value: any) => {
      //     value.label = value[fieldNames.label]
      //     value.value = value[fieldNames.value]
      //     return value
      //   })
      // }

      setTreeData((org: any) => {
        if (_params[rowKey]) {
          return addChildToNode(org, _params[rowKey], result, rowKey)
        } else {
          return result
        }
      })
    })
  }


  return (
    <TreeSelect
      placeholder="请选择"
      treeDataSimpleMode
      style={{width: '100%'}}
      dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
      {...props?.fieldProps}
      loadData={onLoadData}
      treeData={treeData}
    />
  );
};

export default Index;
