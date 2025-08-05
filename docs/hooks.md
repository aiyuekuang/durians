# Hooks

Durians �ṩ��һЩʵ�õ� React Hooks�����ڼ򻯳����Ŀ�������??

## useAsyncOperation

���ڴ����첽����??Hook���ṩ�˼���״̬��������ȹ���??

### �����÷�

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
    console.log('���������, result);
  };

  return (
    <div>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? '����??..' : '�ύ'}
      </button>
      {error && <div>����{error.message}</div>}
      {data && <div>���ݣ�{JSON.stringify(data)}</div>}
    </div>
  );
};
```

### API

| ���� | ˵�� | ���� | Ĭ��ֵ?|
| --- | --- | --- | --- |
| asyncFn | �첽���� | `(...args: any[]) => Promise<T>` | - |
| options | ����ѡ�� | `UseAsyncOperationOptions` | `{}` |

#### UseAsyncOperationOptions

| ���� | ˵�� | ���� | Ĭ��ֵ?|
| --- | --- | --- | --- |
| onSuccess | �ɹ��ص� | `(data: T) => void` | - |
| onError | ����ص� | `(error: Error) => void` | - |
| onFinally | ��ɻص� | `() => void` | - |
| immediate | �Ƿ�����ִ�� | `boolean` | `false` |
| initialData | ��ʼ���� | `T` | - |

#### ����ֵ?

| ���� | ˵�� | ���� |
| --- | --- | --- |
| execute | ִ���첽���� | `(...args: any[]) => Promise<T>` |
| loading | ����״̬?| `boolean` |
| error | ������Ϣ | `Error \| null` |
| data | �������� | `T \| undefined` |
| reset | ����״̬?| `() => void` |

### ����ʾ��

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
        throw new Error('�����û�ʧ��');
      }
      
      return response.json();
    },
    {
      onSuccess: (data) => {
        message.success('�û������ɹ�??);
        console.log('�û�����??, data);
      },
      onError: (error) => {
        message.error(`����ʧ��??{error.message}`);
      },
    }
  );

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      message.warning('����д������??);
      return;
    }
    
    await execute(formData);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '' });
    reset();
  };

  return (
    <Card title="�û�����">
      <Space direction="vertical" style={{ width: '100%' }}>
        <Input
          placeholder="����"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
        <Input
          placeholder="����"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
        
        <Space>
          <Button 
            type="primary" 
            onClick={handleSubmit} 
            loading={loading}
          >
            {loading ? '����??..' : '�����û�'}
          </Button>
          <Button onClick={handleReset}>����</Button>
        </Space>

        {error && (
          <div style={{ color: 'red' }}>
            ����{error.message}
          </div>
        )}

        {data && (
          <div style={{ color: 'green' }}>
            �����ɹ���{JSON.stringify(data)}
          </div>
        )}
      </Space>
    </Card>
  );
};

export default UserForm;
```

## useErrorHandler

����ͳһ�������??Hook���ṩ�˴���߽�ʹ�������??

### �����÷�

```tsx
import { useErrorHandler } from 'durians';

const Demo = () => {
  const { handleError, error } = useErrorHandler();

  const handleAsyncOperation = async () => {
    try {
      // ���ܳ�����첽��??
      await someAsyncOperation();
    } catch (err) {
      handleError(err);
    }
  };

  if (error) {
    return <div>��������{error.message}</div>;
  }

  return (
    <button onClick={handleAsyncOperation}>
      ִ�в���
    </button>
  );
};
```

### API

| ���� | ˵�� | ���� | Ĭ��ֵ?|
| --- | --- | --- | --- |
| options | ����ѡ�� | `UseErrorHandlerOptions` | `{}` |

#### UseErrorHandlerOptions

| ���� | ˵�� | ���� | Ĭ��ֵ?|
| --- | --- | --- | --- |
| onError | ������ص� | `(error: Error) => void` | - |
| fallback | ����߽���� | `React.ComponentType<{ error: Error }>` | - |
| resetOnPropsChange | ���Ա仯ʱ�Ƿ����� | `boolean` | `true` |

#### ����ֵ?

| ���� | ˵�� | ���� |
| --- | --- | --- |
| handleError | ������� | `(error: Error) => void` |
| error | ��ǰ���� | `Error \| null` |
| reset | ���ô���״??| `() => void` |

### ����ʾ��

```tsx
import React from 'react';
import { useErrorHandler } from 'durians';
import { Button, Card, message, Space } from 'antd';

// �Զ������߽���??
const ErrorFallback: React.FC<{ error: Error }> = ({ error }) => (
  <Card title="������Ϣ" style={{ borderColor: 'red' }}>
    <p>������һ������</p>
    <p style={{ color: 'red' }}>{error.message}</p>
    <p>�����������ӻ���ϵ����Ա??/p>
  </Card>
);

const ErrorDemo: React.FC = () => {
  const { handleError, error, reset } = useErrorHandler({
    onError: (error) => {
      message.error(`����ʧ��??{error.message}`);
    },
    fallback: ErrorFallback,
  });

  const simulateError = () => {
    try {
      throw new Error('����һ��ģ��Ĵ���');
    } catch (err) {
      handleError(err as Error);
    }
  };

  const simulateAsyncError = async () => {
    try {
      await new Promise((_, reject) => {
        setTimeout(() => reject(new Error('�첽����ʧ��')), 1000);
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
          ����
        </Button>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px' }}>
      <Card title="������ʾ��">
        <Space direction="vertical">
          <Button onClick={simulateError}>
            ����ͬ������
          </Button>
          <Button onClick={simulateAsyncError}>
            �����첽����
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default ErrorDemo;
```

## ���ʹ��

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
        throw new Error('����ʧ��');
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
        {loading ? '����??..' : 'ִ�в���'}
      </button>
      {data && <div>�����{JSON.stringify(data)}</div>}
    </div>
  );
};

export default CombinedDemo;
```
