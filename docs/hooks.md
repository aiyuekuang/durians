# Hooks

Durians 提供了一些实用的 React Hooks，用于简化常见的开发场景??

## useAsyncOperation

用于处理异步操作??Hook，提供了加载状态、错误处理等功能??

### 基本用法

```tsx
import { useAsyncOperation } from 'durians';

const Demo = () => {
  const { execute, loading, error, data } = useAsyncOperation(
    async (params) => {
      const response = await fetch('/api/data', {
        method: 'POST',
        body: JSON.stringify(params),
      });
      return response.json();
    }
  );

  const handleSubmit = async () => {
    const result = await execute({ name: 'test' });
    console.log('操作结果：, result);
  };

  return (
    <div>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? '处理??..' : '提交'}
      </button>
      {error && <div>错误：{error.message}</div>}
      {data && <div>数据：{JSON.stringify(data)}</div>}
    </div>
  );
};
```

### API

| 参数 | 说明 | 类型 | 默认值?|
| --- | --- | --- | --- |
| asyncFn | 异步函数 | `(...args: any[]) => Promise<T>` | - |
| options | 配置选项 | `UseAsyncOperationOptions` | `{}` |

#### UseAsyncOperationOptions

| 参数 | 说明 | 类型 | 默认值?|
| --- | --- | --- | --- |
| onSuccess | 成功回调 | `(data: T) => void` | - |
| onError | 错误回调 | `(error: Error) => void` | - |
| onFinally | 完成回调 | `() => void` | - |
| immediate | 是否立即执行 | `boolean` | `false` |
| initialData | 初始数据 | `T` | - |

#### 返回值?

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| execute | 执行异步函数 | `(...args: any[]) => Promise<T>` |
| loading | 加载状态?| `boolean` |
| error | 错误信息 | `Error \| null` |
| data | 返回数据 | `T \| undefined` |
| reset | 重置状态?| `() => void` |

### 完整示例

```tsx
import React, { useState } from 'react';
import { useAsyncOperation } from 'durians';
import { Button, Card, Input, message, Space } from 'antd';

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const { execute, loading, error, data, reset } = useAsyncOperation(
    async (userData) => {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error('创建用户失败');
      }
      
      return response.json();
    },
    {
      onSuccess: (data) => {
        message.success('用户创建成功??);
        console.log('用户数据??, data);
      },
      onError: (error) => {
        message.error(`创建失败??{error.message}`);
      },
    }
  );

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      message.warning('请填写完整信??);
      return;
    }
    
    await execute(formData);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '' });
    reset();
  };

  return (
    <Card title="用户创建">
      <Space direction="vertical" style={{ width: '100%' }}>
        <Input
          placeholder="姓名"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
        <Input
          placeholder="邮箱"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
        
        <Space>
          <Button 
            type="primary" 
            onClick={handleSubmit} 
            loading={loading}
          >
            {loading ? '创建??..' : '创建用户'}
          </Button>
          <Button onClick={handleReset}>重置</Button>
        </Space>

        {error && (
          <div style={{ color: 'red' }}>
            错误：{error.message}
          </div>
        )}

        {data && (
          <div style={{ color: 'green' }}>
            创建成功：{JSON.stringify(data)}
          </div>
        )}
      </Space>
    </Card>
  );
};

export default UserForm;
```

## useErrorHandler

用于统一处理错误??Hook，提供了错误边界和错误处理功能??

### 基本用法

```tsx
import { useErrorHandler } from 'durians';

const Demo = () => {
  const { handleError, error } = useErrorHandler();

  const handleAsyncOperation = async () => {
    try {
      // 可能出错的异步操??
      await someAsyncOperation();
    } catch (err) {
      handleError(err);
    }
  };

  if (error) {
    return <div>发生错误：{error.message}</div>;
  }

  return (
    <button onClick={handleAsyncOperation}>
      执行操作
    </button>
  );
};
```

### API

| 参数 | 说明 | 类型 | 默认值?|
| --- | --- | --- | --- |
| options | 配置选项 | `UseErrorHandlerOptions` | `{}` |

#### UseErrorHandlerOptions

| 参数 | 说明 | 类型 | 默认值?|
| --- | --- | --- | --- |
| onError | 错误处理回调 | `(error: Error) => void` | - |
| fallback | 错误边界组件 | `React.ComponentType<{ error: Error }>` | - |
| resetOnPropsChange | 属性变化时是否重置 | `boolean` | `true` |

#### 返回值?

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| handleError | 处理错误 | `(error: Error) => void` |
| error | 当前错误 | `Error \| null` |
| reset | 重置错误状??| `() => void` |

### 完整示例

```tsx
import React from 'react';
import { useErrorHandler } from 'durians';
import { Button, Card, message, Space } from 'antd';

// 自定义错误边界组??
const ErrorFallback: React.FC<{ error: Error }> = ({ error }) => (
  <Card title="错误信息" style={{ borderColor: 'red' }}>
    <p>发生了一个错误：</p>
    <p style={{ color: 'red' }}>{error.message}</p>
    <p>请检查网络连接或联系管理员??/p>
  </Card>
);

const ErrorDemo: React.FC = () => {
  const { handleError, error, reset } = useErrorHandler({
    onError: (error) => {
      message.error(`操作失败??{error.message}`);
    },
    fallback: ErrorFallback,
  });

  const simulateError = () => {
    try {
      throw new Error('这是一个模拟的错误');
    } catch (err) {
      handleError(err as Error);
    }
  };

  const simulateAsyncError = async () => {
    try {
      await new Promise((_, reject) => {
        setTimeout(() => reject(new Error('异步操作失败')), 1000);
      });
    } catch (err) {
      handleError(err as Error);
    }
  };

  if (error) {
    return (
      <div style={{ padding: '24px' }}>
        <ErrorFallback error={error} />
        <Button onClick={reset} style={{ marginTop: '16px' }}>
          重试
        </Button>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px' }}>
      <Card title="错误处理示例">
        <Space direction="vertical">
          <Button onClick={simulateError}>
            触发同步错误
          </Button>
          <Button onClick={simulateAsyncError}>
            触发异步错误
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default ErrorDemo;
```

## 组合使用

```tsx
import React from 'react';
import { useAsyncOperation, useErrorHandler } from 'durians';

const CombinedDemo: React.FC = () => {
  const { handleError } = useErrorHandler();
  
  const { execute, loading, data } = useAsyncOperation(
    async (params) => {
      const response = await fetch('/api/data', {
        method: 'POST',
        body: JSON.stringify(params),
      });
      
      if (!response.ok) {
        throw new Error('请求失败');
      }
      
      return response.json();
    },
    {
      onError: handleError,
    }
  );

  return (
    <div>
      <button onClick={() => execute({ test: true })} disabled={loading}>
        {loading ? '处理??..' : '执行操作'}
      </button>
      {data && <div>结果：{JSON.stringify(data)}</div>}
    </div>
  );
};

export default CombinedDemo;
```
