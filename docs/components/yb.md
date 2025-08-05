# YB 组件

YB 组件是一个简单的脚手架示例组件，用于演示组件的基本结构和用法。

## 功能特性

- 简单的欢迎页面展示
- 可自定义名称
- 基于 Ant Design Layout 组件

## 基本用法

```tsx
import { YB } from 'durians';

const Demo = () => {
  return (
    <YB name="Durians" />
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 显示的名称 | `string` | `'1111'` |

## 完整示例

```tsx
import React from 'react';
import { YB } from 'durians';
import { Card, Input, Space } from 'antd';

const YBDemo: React.FC = () => {
  const [name, setName] = React.useState('Durians');

  return (
    <div style={{ padding: '24px' }}>
      <Card title="YB 组件示例">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input
            placeholder="请输入名称"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '200px' }}
          />
          <YB name={name} />
        </Space>
      </Card>
    </div>
  );
};

export default YBDemo;
```

## 自定义样式

```tsx
import { YB } from 'durians';
import { ConfigProvider } from 'antd';

const CustomStyleDemo = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <YB name="自定义主题" />
    </ConfigProvider>
  );
};
``` 