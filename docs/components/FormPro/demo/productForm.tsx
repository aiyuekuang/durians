import React from 'react';
import FormPro from '@/components/FormPro';
import { Button } from 'antd';

const ProductForm = ({ record, onSuccess }) => {
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
    },
    {
      title: '价格',
      dataIndex: 'price',
      valueType: 'money',
      fieldProps: {
        min: 0,
        precision: 2,
      },
    },
    {
      title: '库存',
      dataIndex: 'stock',
      valueType: 'digit',
      fieldProps: {
        min: 0,
      },
    },
    {
      title: '上架时间',
      dataIndex: 'publishTime',
      valueType: 'dateTime',
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
    },
    {
      title: '产品描述',
      dataIndex: 'description',
      valueType: 'richtext',
    },
  ];

  return (
    <FormPro
      layoutType="DrawerForm"
      url={record?.id ? '/api/product/edit' : '/api/product/add'}
      detailUrl={record?.id ? '/api/product/detail' : undefined}
      record={record}
      fieldProps={{
        columns,
        title: record?.id ? '编辑产品' : '新增产品',
        width: 800,
      }}
      finishFun={onSuccess}
    >
      <Button type="primary">
        {record?.id ? '编辑产品' : '新增产品'}
      </Button>
    </FormPro>
  );
};

export default ProductForm;