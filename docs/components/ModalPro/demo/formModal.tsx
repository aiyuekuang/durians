import React, { useState } from 'react';
import ModalPro from '@/components/ModalPro';
import { Button, Form, Input, Select, message } from 'antd';

const FormModal = () => {
  const [form] = Form.useForm();

  const FormContent = ({ isModalOpen, setIsModalOpen }) => {
    const handleSubmit = async () => {
      try {
        const values = await form.validateFields();
        console.log('表单数据:', values);
        message.success('提交成功');
        setIsModalOpen(false);
        form.resetFields();
      } catch (error) {
        console.error('表单验证失败:', error);
      }
    };

    return (
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="name"
          label="姓名"
          rules={[{ required: true, message: '请输入姓名' }]}
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>
        
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            { required: true, message: '请输入邮箱' },
            { type: 'email', message: '邮箱格式不正确' },
          ]}
        >
          <Input placeholder="请输入邮箱" />
        </Form.Item>
        
        <Form.Item
          name="role"
          label="角色"
          rules={[{ required: true, message: '请选择角色' }]}
        >
          <Select placeholder="请选择角色">
            <Select.Option value="admin">管理员</Select.Option>
            <Select.Option value="user">普通用户</Select.Option>
            <Select.Option value="guest">访客</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
            提交
          </Button>
          <Button onClick={() => setIsModalOpen(false)}>
            取消
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <ModalPro
      title="用户信息表单"
      Content={FormContent}
      fieldProps={{
        width: 500,
        footer: null, // 隐藏默认底部按钮
      }}
    >
      <Button type="primary">打开表单模态框</Button>
    </ModalPro>
  );
};

export default FormModal; 