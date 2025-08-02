import { Dropdown, message, Popconfirm, Spin, Tree } from 'antd';
import type { MenuProps } from 'antd';
import React, { FC, useEffect, useState, useCallback, useMemo, memo } from 'react';
import { DeleteOutlined, EditOutlined, PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import FormPro from '../FormPro';
import { ajaxCommon } from "../../utils/common";
import { DEFAULT_CONFIG } from "../../utils/constants";
import type { TreeProProps } from "../../types";
import { addChildToNode } from "../FormItem/TreeSelectPro";


/**
 * 树形组件 - 支持 CRUD 操作的高级树形组件
 */
const TreePro: FC<TreeProProps> = memo(({
  title = DEFAULT_CONFIG.TREE_PRO.TITLE,
  ajax = ajaxCommon,
  url,
  params = () => ({}),
  addUrl,
  editUrl,
  deleteUrl,
  deleteFields = DEFAULT_CONFIG.TREE_PRO.DELETE_FIELDS,
  deleteField = DEFAULT_CONFIG.TREE_PRO.DELETE_FIELD,
  deleteFieldIsArr = DEFAULT_CONFIG.TREE_PRO.DELETE_FIELD_IS_ARR,
  deleteParams = DEFAULT_CONFIG.TREE_PRO.DELETE_PARAMS,
  addFormProFieldProps = {},
  setData = (data: any) => data?.data || [],
  setMsg = (data: any) => data?.msg || '操作成功',
  editField = DEFAULT_CONFIG.TREE_PRO.EDIT_FIELD,
  fieldProps = {
    fieldNames: DEFAULT_CONFIG.TREE_PRO.FIELD_NAMES,
  },
  isSelect = DEFAULT_CONFIG.TREE_PRO.IS_SELECT,
  detail = DEFAULT_CONFIG.TREE_PRO.DETAIL,
  rowKey = DEFAULT_CONFIG.TREE_PRO.ROW_KEY,
  isLoadData = DEFAULT_CONFIG.TREE_PRO.IS_LOAD_DATA
}) => {
  const [treeData, setTreeData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 避免未使用变量的警告
  console.debug('TreePro config:', { isSelect, detail, rowKey, isLoadData, loading, error });

  const {
    fieldNames = DEFAULT_CONFIG.TREE_PRO.FIELD_NAMES,
  } = fieldProps;

  // 缓存树形组件的属性
  const treeProps = useMemo(() => ({
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
  }), [
    ajax, addUrl, editUrl, deleteUrl, deleteFields,
    deleteField, editField, deleteFieldIsArr,
    deleteParams, addFormProFieldProps
  ]);

  // 加载数据的函数
  const onLoadData = useCallback(async (_params: any = {}, values: any = {}) => {
    if (!url) {
      console.warn('TreePro: url is required for loading data');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const requestParams = {
        ...params(_params),
        ...values
      };

      await ajax(url, requestParams, (data: any) => {
        const result = setData(data);

        if (!Array.isArray(result)) {
          console.warn('TreePro: setData should return an array');
          setTreeData([]);
          return;
        }

        setTreeData((prevData) => {
          if (_params.key) {
            return addChildToNode(prevData, _params.key, result, fieldNames.key);
          } else {
            return result;
          }
        });
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '加载数据失败';
      setError(errorMessage);
      console.error('TreePro: Failed to load data:', err);
    } finally {
      setLoading(false);
    }
  }, [url, ajax, params, setData, fieldNames.key]);

  // 初始化数据加载
  useEffect(() => {
    if (url) {
      onLoadData({}, params({}));
    }
  }, [url, onLoadData, params]);


  // 删除操作处理函数
  const deleteHandle = useCallback(async (selectedRowKeys: any[], batch = false) => {
    if (!deleteUrl) {
      console.warn('TreePro: deleteUrl is required for delete operation');
      return;
    }

    if (!selectedRowKeys || selectedRowKeys.length === 0) {
      message.warning('请选择要删除的数据');
      return;
    }

    try {
      let keys = selectedRowKeys;
      if (!deleteFieldIsArr && !batch) {
        keys = selectedRowKeys[0];
      }

      const requestParams = {
        ...deleteParams,
        [batch ? deleteFields : deleteField]: keys
      };

      await ajax(deleteUrl, requestParams, (data: any) => {
        message.success(setMsg(data));
        onLoadData({}, params({}));
      });
    } catch (err) {
      console.error('TreePro: Delete operation failed:', err);
      message.error('删除失败，请稍后重试');
    }
  }, [
    deleteUrl, deleteFieldIsArr, deleteParams,
    deleteFields, deleteField, ajax, setMsg,
    onLoadData, params
  ]);


  const FormNode = (formProps: any) => {
    const {children, ajax, addUrl, record, fieldProps} = formProps;
    const [isEdit, setIsEdit] = useState(editField && record?.[rowKey])

    let url_ = addUrl
    const _params: any = {}
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


  const menuItem = (nodeData: any): MenuProps['items'] => {
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
});

TreePro.displayName = 'TreePro';

export default TreePro;
