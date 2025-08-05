import React from 'react';
import TablePro from '@/components/TablePro';
import { Image, Tag } from 'antd';

const ProductTable = () => {
  const columns = [
    {
      title: '产品名称',
      dataIndex: 'name',
      valueType: 'text',
      formItemProps: {
        rules: [{ required: true, message: '请输入产品名称' }],
      },
    },
    {
      title: '产品分类',
      dataIndex: 'categoryId',
      valueType: 'treeSelectPro',
      fieldProps: {
        url: '/api/category/tree',
        fieldNames: { label: 'name', value: 'id', children: 'children' },
      },
      render: (_, record) => record.categoryName,
    },
    {
      title: '价格',
      dataIndex: 'price',
      valueType: 'money',
      fieldProps: {
        min: 0,
        precision: 2,
      },
      sorter: true,
    },
    {
      title: '库存',
      dataIndex: 'stock',
      valueType: 'digit',
      fieldProps: {
        min: 0,
      },
      render: (text) => (
        <Tag color={text > 10 ? 'green' : text > 0 ? 'orange' : 'red'}>
          {text}
        </Tag>
      ),
    },
    {
      title: '产品图片',
      dataIndex: 'images',
      valueType: 'uploadPro',
      fieldProps: {
        url: '/api/upload',
        multiple: true,
        maxCount: 5,
        accept: 'image/*',
      },
      render: (_, record) => (
        <Image.PreviewGroup>
          <div style={{ display: 'flex', gap: 4 }}>
            {record.images?.slice(0, 3).map((img, index) => (
              <Image
                key={index}
                width={40}
                height={40}
                src={img.url}
                style={{ objectFit: 'cover' }}
              />
            ))}
            {record.images?.length > 3 && (
              <div style={{ width: 40, height: 40, background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                +{record.images.length - 3}
              </div>
            )}
          </div>
        </Image.PreviewGroup>
      ),
      hideInSearch: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: {
        1: { text: '上架', status: 'Success' },
        0: { text: '下架', status: 'Default' },
      },
      fieldProps: {
        options: [
          { label: '上架', value: 1 },
          { label: '下架', value: 0 },
        ],
      },
    },
    {
      title: '上架时间',
      dataIndex: 'publishTime',
      valueType: 'dateTime',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '产品描述',
      dataIndex: 'description',
      valueType: 'richtext',
      hideInSearch: true,
      hideInTable: true,
    },
  ];

  return (
    <TablePro
      url="/api/product/list"
      addUrl="/api/product/add"
      editUrl="/api/product/edit"
      deleteUrl="/api/product/delete"
      treeFieldProps={{
        url: '/api/category/tree',
        fieldNames: { title: 'name', key: 'id', children: 'children' },
      }}
      treeParamsFun={(selectedKeys) => ({
        categoryId: selectedKeys[0],
      })}
      fieldProps={{
        columns,
        rowKey: 'id',
        search: {
          labelWidth: 'auto',
          collapsed: false,
        },
        pagination: {
          pageSize: 10,
          showSizeChanger: true,
        },
      }}
      setData={(data) => data?.data?.records || []}
      setTotal={(data) => data?.data?.total || 0}
    />
  );
};

export default ProductTable; 