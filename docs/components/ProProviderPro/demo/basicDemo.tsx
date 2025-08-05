import React from 'react';
import { ProProviderPro } from 'durians';
import { ProForm, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { Card, message } from 'antd';

const BasicDemo: React.FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Card title="ProProviderPro 基本用法">
        <ProProviderPro>
          <ProForm
            onFinish={async (values) => {
              console.log('表单数据：', values);
              message.success('提交成功！');
            }}
            submitter={{
              searchConfig: {
                submitText: '提交',
                resetText: '重置',
              },
            }}
          >
            <ProFormText
              name="name"
              label="姓名"
              placeholder="请输入姓名"
              rules={[{ required: true, message: '请输入姓名' }]}
            />
            
            <ProFormText
              name="phone"
              label="手机号"
              placeholder="请输入手机号"
              rules={[
                { required: true, message: '请输入手机号' },
                { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
              ]}
            />
            
            <ProForm.Item
              name="captcha"
              label="验证码"
              valueType="captcha"
              fieldProps={{
                url: '/api/send-captcha',
                phoneName: 'phone',
              }}
            />
            
            <ProForm.Item
              name="department"
              label="部门"
              valueType="treeSelectPro"
              fieldProps={{
                treeData: [
                  {
                    title: '技术部',
                    value: 'tech',
                    children: [
                      { title: '前端组', value: 'frontend' },
                      { title: '后端组', value: 'backend' },
                      { title: '测试组', value: 'test' },
                    ],
                  },
                  {
                    title: '产品部',
                    value: 'product',
                    children: [
                      { title: '产品经理', value: 'pm' },
                      { title: 'UI设计师', value: 'ui' },
                    ],
                  },
                  {
                    title: '运营部',
                    value: 'operation',
                    children: [
                      { title: '市场运营', value: 'marketing' },
                      { title: '用户运营', value: 'user' },
                    ],
                  },
                ],
                placeholder: '请选择部门',
              }}
            />
            
            <ProForm.Item
              name="avatar"
              label="头像"
              valueType="uploadPro"
              fieldProps={{
                action: '/api/upload',
                listType: 'picture-card',
                maxCount: 1,
                accept: 'image/*',
              }}
            />
            
            <ProForm.Item
              name="team"
              label="团队成员"
              valueType="tableSelect"
              fieldProps={{
                columns: [
                  { title: '姓名', dataIndex: 'name', width: 120 },
                  { title: '邮箱', dataIndex: 'email', width: 200 },
                  { title: '部门', dataIndex: 'department', width: 120 },
                  { title: '职位', dataIndex: 'position', width: 120 },
                ],
                dataSource: [
                  { id: 1, name: '张三', email: 'zhangsan@example.com', department: '技术部', position: '前端工程师' },
                  { id: 2, name: '李四', email: 'lisi@example.com', department: '产品部', position: '产品经理' },
                  { id: 3, name: '王五', email: 'wangwu@example.com', department: '技术部', position: '后端工程师' },
                  { id: 4, name: '赵六', email: 'zhaoliu@example.com', department: '设计部', position: 'UI设计师' },
                  { id: 5, name: '钱七', email: 'qianqi@example.com', department: '技术部', position: '测试工程师' },
                ],
                rowKey: 'id',
                multiple: true,
                placeholder: '请选择团队成员',
              }}
            />
            
            <ProFormTextArea
              name="description"
              label="描述"
              placeholder="请输入描述信息"
              rows={4}
            />
          </ProForm>
        </ProProviderPro>
      </Card>
    </div>
  );
};

export default BasicDemo; 