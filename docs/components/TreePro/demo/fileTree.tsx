import React from 'react';
import TreePro from '@/components/TreePro';
import { Tag } from 'antd';
import { FolderOutlined, FileOutlined } from '@ant-design/icons';

const FileTree = () => {
  const columns = [
    {
      title: '文件名称',
      dataIndex: 'name',
      valueType: 'text',
      formItemProps: {
        rules: [{ required: true, message: '请输入文件名称' }],
      },
    },
    {
      title: '文件类型',
      dataIndex: 'type',
      valueType: 'select',
      fieldProps: {
        options: [
          { label: '文件夹', value: 'folder' },
          { label: '文件', value: 'file' },
        ],
      },
    },
    {
      title: '文件大小',
      dataIndex: 'size',
      valueType: 'digit',
      fieldProps: {
        min: 0,
        addonAfter: 'KB',
      },
      hideInTable: true,
    },
    {
      title: '描述',
      dataIndex: 'description',
      valueType: 'textarea',
      fieldProps: {
        rows: 3,
        maxLength: 200,
      },
      hideInTable: true,
    },
  ];

  const customTitleRender = (nodeData) => {
    const isFolder = nodeData.type === 'folder';
    const icon = isFolder ? <FolderOutlined /> : <FileOutlined />;
    
    return (
      <span>
        {icon}
        <span style={{ marginLeft: 8 }}>{nodeData.name}</span>
        {nodeData.size && (
          <Tag size="small" style={{ marginLeft: 8 }}>
            {nodeData.size}KB
          </Tag>
        )}
      </span>
    );
  };

  return (
    <TreePro
      title="文件管理"
      url="/api/file/tree"
      addUrl="/api/file/add"
      editUrl="/api/file/edit"
      deleteUrl="/api/file/delete"
      isLoadData={true}
      fieldProps={{
        fieldNames: { title: 'name', key: 'id', children: 'children' },
        showLine: true,
        showIcon: false, // 使用自定义图标
        selectable: true,
        expandable: true,
        titleRender: customTitleRender,
      }}
      addFormProFieldProps={{
        fieldProps: {
          columns,
          title: '文件信息',
          width: 500,
        },
      }}
      setData={(data) => data?.data || []}
      setMsg={(data) => data?.msg || '操作成功'}
    />
  );
};

export default FileTree; 