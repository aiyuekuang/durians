---
title: ModalPro 高级弹窗
group:
  title: 组件
  order: 1
---

# ModalPro 高级弹窗

ModalPro 是一个基于 [Ant Design Modal](https://ant.design/components/modal-cn) 的高级弹窗组件，提供了更简便的使用方式和更灵活的控制方法。

## 何时使用

- 需要快速创建一个弹窗
- 需要在弹窗内部控制弹窗的显示状态
- 需要自定义弹窗的触发元素
- 需要对弹窗进行二次封装和扩展

## 代码示例

### 基础用法

<code src="./demo/basic.tsx" title="基础使用" description="最简单的弹窗示例，点击按钮打开弹窗。"></code>

### 自定义内容和控制

```tsx
import { ModalPro } from 'durians';
import { Button, Form, Input } from 'antd';

const Demo: FC = () => {
  return (
    <ModalPro
      title="自定义表单"
      Content={({ setIsModalOpen }) => (
        <Form
          onFinish={(values) => {
            console.log(values);
            setIsModalOpen(false);
          }}
        >
          <Form.Item name="name" label="姓名">
            <Input />
          </Form.Item>
        </Form>
      )}
      handleOk={(callback) => {
        console.log('点击了确定');
        callback(true);
      }}
    >
      <Button type="primary">打开表单</Button>
    </ModalPro>
  );
};

export default Demo;
```

## API

### ModalPro

```typescript
import { ModalPro } from 'durians';
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 弹窗标题 | `string` | `'基础'` |
| handleOk | 点击确定按钮的回调 | `(callback: (close?: boolean) => void) => void` | `(callback) => callback()` |
| Content | 弹窗内容组件 | `ReactNode \| ((props: { isModalOpen: boolean; setIsModalOpen: (open: boolean) => void }) => ReactNode)` | `() => <div>示例</div>` |
| children | 触发弹窗的元素 | `ReactNode` | `<div>点击</div>` |
| fieldProps | Modal 组件的属性配置，继承自 [Ant Design Modal](https://ant.design/components/modal-cn#api) | `ModalProps` | `{}` |

### Content 组件 Props

```typescript
interface ContentProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}
```

### 依赖说明

- [Ant Design](https://ant.design/components/overview-cn/) - ^5.0.0
  - Modal 组件: [文档链接](https://ant.design/components/modal-cn)

## FAQ

### 1. 如何在弹窗内部关闭弹窗？

```tsx
const Demo: FC = () => {
  return (
    <ModalPro
      Content={({ setIsModalOpen }) => (
        <Button onClick={() => setIsModalOpen(false)}>
          关闭弹窗
        </Button>
      )}
    >
      <Button>打开弹窗</Button>
    </ModalPro>
  );
};
export default Demo;
```

### 2. 如何自定义确认按钮的逻辑？

```tsx
const Demo: FC = () => {
  return (
    <ModalPro
      handleOk={(callback) => {
        // 执行自定义逻辑
        setTimeout(() => {
          console.log('处理完成');
          callback(true); // 传入 true 关闭弹窗
        }, 1000);
      }}
    >
      <Button>打开弹窗</Button>
    </ModalPro>
  );
};
export default Demo;
```

### 3. 如何自定义弹窗样式？

```tsx
const Demo: FC = () => {
  return (
    <ModalPro
      fieldProps={{
        width: 800,
        centered: true,
        className: 'custom-modal',
        maskClosable: false
      }}
    >
      <Button>打开弹窗</Button>
    </ModalPro>
  );
};
export default Demo;
```

### 4. 如何在弹窗中实现异步操作？

```tsx
const Demo: FC = () => {
  return (
    <ModalPro
      handleOk={async (callback) => {
        try {
          await fetch('/api/submit');
          callback(true); // 成功后关闭弹窗
        } catch (error) {
          console.error(error);
          callback(false); // 失败不关闭弹窗
        }
      }}
    >
      <Button>打开弹窗</Button>
    </ModalPro>
  );
};
export default Demo;
```
