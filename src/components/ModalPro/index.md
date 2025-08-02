---
title: ModalPro 高级弹窗
order: 3
group:
  title: 组件
  order: 1
nav:
  title: 组件
  order: 2
---

# ModalPro 高级弹窗

ModalPro 是一个基于 [Ant Design Modal](https://ant.design/components/modal-cn) 的高级弹窗组件，提供了更便捷的使用方式和更灵活的控制方法。通过简单的配置即可实现复杂的弹窗交互逻辑。

## 基础用法

最简单的弹窗使用方式。

```tsx
import React from 'react';
import { ModalPro } from 'durians';
import { Button } from 'antd';

export default () => {
  return (
    <ModalPro
      title="用户详情"
      Content={() => (
        <div>
          <p><strong>姓名:</strong> 张三</p>
          <p><strong>邮箱:</strong> zhangsan@example.com</p>
          <p><strong>部门:</strong> 技术部</p>
          <p><strong>职位:</strong> 前端工程师</p>
        </div>
      )}
    >
      <Button type="primary">查看详情</Button>
    </ModalPro>
  );
};
```

## 自定义内容

可以传入任何 React 组件作为弹窗内容。

```tsx
import React, { useState } from 'react';
import { ModalPro } from 'durians';
import { Button, Form, Input, Select, message } from 'antd';

const UserForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('表单数据:', values);
    message.success('保存成功');
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={{
        name: '李四',
        email: 'lisi@example.com',
        department: '产品部',
      }}
    >
      <Form.Item
        label="姓名"
        name="name"
        rules={[{ required: true, message: '请输入姓名' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="邮箱"
        name="email"
        rules={[
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '请输入正确的邮箱格式' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="部门"
        name="department"
        rules={[{ required: true, message: '请选择部门' }]}
      >
        <Select>
          <Select.Option value="技术部">技术部</Select.Option>
          <Select.Option value="产品部">产品部</Select.Option>
          <Select.Option value="运营部">运营部</Select.Option>
          <Select.Option value="市场部">市场部</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
      </Form.Item>
    </Form>
  );
};

export default () => {
  return (
    <ModalPro
      title="编辑用户"
      Content={UserForm}
      fieldProps={{
        width: 600,
        footer: null, // 隐藏默认的确定/取消按钮
      }}
    >
      <Button>编辑用户</Button>
    </ModalPro>
  );
};
```

## 何时使用

- 需要快速创建一个可控的弹窗组件
- 需要在弹窗内部动态控制弹窗的显示状态
- 需要自定义弹窗的触发元素
- 需要处理弹窗的异步操作和表单提交
- 需要对弹窗进行二次封装和扩展

## 代码示例

### 基础用法

最简单的弹窗使用方式。

```tsx
import {ModalPro} from 'durians';
import {Button} from 'antd';

const Demo = () => {
  return (
    <ModalPro
      title="基础弹窗"
      Content={() => <div>这是一个基础弹窗示例</div>}
    >
      <Button type="primary">打开弹窗</Button>
    </ModalPro>
  );
};

export default Demo;
```

### 表单提交

在弹窗中使用表单，并控制提交后的弹窗关闭。

```tsx
import {ModalPro} from 'durians';
import {Button, Form, Input, message} from 'antd';
import React, {FC} from 'react';

const Demo: FC = () => {
  return (
    <ModalPro
      title="表单提交"
      Content={({setIsModalOpen}) => (
        <Form
          onFinish={(values) => {
            console.log('表单值：', values);
            message.success('提交成功');
            setIsModalOpen(false);
          }}>
          <Form.Item
            name="username"
            label="用户名"
            rules={[{required: true, message: '请输入用户名'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              {required: true, message: '请输入邮箱'},
              {type: 'email', message: '请输入有效的邮箱'}
            ]}
          >
            <Input/>
          </Form.Item>
        </Form>
      )}
      handleOk={(callback) => {
        // 表单通过 Content 内部提交，这里只需关闭弹窗
        callback(true);
      }}
    >
      <Button type="primary">打开表单</Button>
    </ModalPro>
  );
};

export default Demo;
```

### 异步处理

处理异步操作并控制弹窗状态。

```tsx
import {ModalPro} from 'durians';
import {Button, Spin, message} from 'antd';
import {useState} from 'react';

const Demo = () => {
  const [loading, setLoading] = useState(false);

  return (
    <ModalPro
      title="异步操作"
      Content={() => (
        <div style={{textAlign: 'center', padding: '20px'}}>
          {loading ? <Spin/> : '点击确定模拟异步操作'}
        </div>
      )}
      handleOk={async (callback) => {
        setLoading(true);
        try {
          await new Promise(resolve => setTimeout(resolve, 2000));
          message.success('操作成功');
          callback(true);
        } catch (error) {
          message.error('操作失败');
        } finally {
          setLoading(false);
        }
      }}
      fieldProps={{
        confirmLoading: loading
      }}
    >
      <Button type="primary">异步操作</Button>
    </ModalPro>
  );
};

export default Demo;
```

## API

### ModalPro

| 参数         | 说明                                                                         | 类型                                                         | 默认值                        |
|------------|----------------------------------------------------------------------------|------------------------------------------------------------|----------------------------|
| title      | 弹窗标题                                                                       | `string`                                                   | `'基础'`                     |
| handleOk   | 点击确定按钮的回调函数。接收一个 callback 参数，执行 callback(true) 关闭弹窗，callback(false) 保持弹窗打开 | `(callback: (close?: boolean) => void) => void`            | `(callback) => callback()` |
| Content    | 弹窗内容组件。可以是 ReactNode 或函数组件，函数组件会接收 isModalOpen 和 setIsModalOpen 作为参数       | `ReactNode \| ((props: ContentProps) => ReactNode)`        | `() => <div>示例</div>`      |
| children   | 触发弹窗显示的元素                                                                  | `ReactNode`                                                | `<div>点击</div>`            |
| fieldProps | Modal 组件的属性配置，完整继承自 antd Modal 的所有属性                                       | [`ModalProps`](https://ant.design/components/modal-cn#api) | `{}`                       |

### Content 组件 Props

```typescript
interface ContentProps {
  /**
   * 当前弹窗的显示状态
   */
  isModalOpen: boolean;
  /**
   * 控制弹窗显示/隐藏的函数
   */
  setIsModalOpen: (open: boolean) => void;
}
```

### 类型定义

```typescript
import {ReactNode} from 'react';
import {ModalProps} from 'antd';

interface ModalProProps {
  title?: string;
  handleOk?: (callback: (close?: boolean) => void) => void;
  Content?: ReactNode | ((props: ContentProps) => ReactNode);
  children?: ReactNode;
  fieldProps?: ModalProps;
}
```

### 依赖说明

- [Ant Design](https://ant.design/) ^5.0.0
  - Modal 组件：[详细文档](https://ant.design/components/modal-cn)

## FAQ

### 1. 如何在 Content 中获取最新的外部数据？

```tsx
import {ModalPro} from 'durians';
import {Button} from 'antd';
import {useState} from 'react';

const Demo = () => {
  const [count, setCount] = useState(0);

  return (
    <ModalPro
      Content={() => (
        <div>
          <p>当前计数：{count}</p>
          <Button onClick={() => setCount(c => c + 1)}>增加</Button>
        </div>
      )}
    >
      <Button>打开弹窗</Button>
    </ModalPro>
  );
};

export default Demo;
```

### 2. 如何自定义弹窗的按钮文案和样式？

```tsx
import {ModalPro} from 'durians';
import {Button} from 'antd';

const Demo = () => {
  return (
    <ModalPro
      fieldProps={{
        okText: '确认提交',
        cancelText: '取消操作',
        okButtonProps: {
          type: 'primary',
          danger: true
        },
        cancelButtonProps: {
          type: 'default'
        }
      }}
    >
      <Button>自定义按钮</Button>
    </ModalPro>
  );
};

export default Demo;
```

### 3. 如何在弹窗中进行数据校验？

```tsx
import {ModalPro} from 'durians';
import {Button, Form, Input, message} from 'antd';

const Demo = () => {
  const [form] = Form.useForm();

  return (
    <ModalPro
      Content={() => (
        <Form form={form}>
          <Form.Item
            name="email"
            rules={[
              {required: true},
              {type: 'email'}
            ]}
          >
            <Input/>
          </Form.Item>
        </Form>
      )}
      handleOk={async (callback) => {
        try {
          await form.validateFields();
          callback(true);
        } catch {
          message.error('请完成表单校验');
        }
      }}
    >
      <Button>表单校验</Button>
    </ModalPro>
  );
};

export default Demo;
```

### 4. 如何在关闭弹窗时重置状态？

```tsx
import {ModalPro} from 'durians';
import {Button} from 'antd';
import {useState} from 'react';

const Demo = () => {
  const [data, setData] = useState([]);

  return (
    <ModalPro
      fieldProps={{
        afterClose: () => setData([]),
        destroyOnClose: true
      }}
      Content={() => (
        <div>当前数据：{JSON.stringify(data)}</div>
      )}
    >
      <Button>状态重置</Button>
    </ModalPro>
  );
};

export default Demo;
```
