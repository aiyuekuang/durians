import React from 'react';
import { useErrorHandler } from 'durians';
import { Button, Card, message, Space, Typography, Alert, Divider } from 'antd';

const { Title, Text } = Typography;

// 自定义错误边界组件
const ErrorFallback: React.FC<{ error: Error }> = ({ error }) => (
  <Alert
    message="错误信息"
    description={
      <div>
        <p>发生了一个错误：</p>
        <p style={{ color: 'red', fontWeight: 'bold' }}>{error.message}</p>
        <p>请检查网络连接或联系管理员。</p>
      </div>
    }
    type="error"
    showIcon
    style={{ marginBottom: '16px' }}
  />
);

const UseErrorHandlerDemo: React.FC = () => {
  const { handleError, error, reset } = useErrorHandler({
    onError: (error) => {
      message.error(`操作失败：${error.message}`);
    },
    fallback: ErrorFallback,
  });

  const simulateSyncError = () => {
    try {
      throw new Error('这是一个同步错误示例');
    } catch (err) {
      handleError(err as Error);
    }
  };

  const simulateAsyncError = async () => {
    try {
      await new Promise((_, reject) => {
        setTimeout(() => reject(new Error('异步操作失败，请稍后重试')), 1000);
      });
    } catch (err) {
      handleError(err as Error);
    }
  };

  const simulateNetworkError = async () => {
    try {
      // 模拟网络请求失败
      const response = await fetch('/api/nonexistent');
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (err) {
      handleError(err as Error);
    }
  };

  const simulateValidationError = () => {
    try {
      const data = { name: '', email: 'invalid-email' };
      
      if (!data.name) {
        throw new Error('姓名不能为空');
      }
      
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        throw new Error('邮箱格式不正确');
      }
    } catch (err) {
      handleError(err as Error);
    }
  };

  if (error) {
    return (
      <div style={{ padding: '24px' }}>
        <ErrorFallback error={error} />
        <Card title="错误处理">
          <Space direction="vertical">
            <Text>当前错误：{error.message}</Text>
            <Text>错误堆栈：{error.stack}</Text>
            <Button type="primary" onClick={reset}>
              清除错误并重试
            </Button>
          </Space>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px' }}>
      <Card title="useErrorHandler 示例" style={{ marginBottom: '24px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Text>点击下面的按钮来模拟不同类型的错误：</Text>
          
          <Divider />
          
          <Space wrap>
            <Button onClick={simulateSyncError}>
              触发同步错误
            </Button>
            <Button onClick={simulateAsyncError}>
              触发异步错误
            </Button>
            <Button onClick={simulateNetworkError}>
              触发网络错误
            </Button>
            <Button onClick={simulateValidationError}>
              触发验证错误
            </Button>
          </Space>
        </Space>
      </Card>

      <Card title="错误边界示例">
        <ErrorBoundaryDemo />
      </Card>
    </div>
  );
};

// 错误边界示例组件
const ErrorBoundaryDemo: React.FC = () => {
  const { handleError, error } = useErrorHandler({
    fallback: ({ error }) => (
      <Alert
        message="组件错误"
        description={`组件内部发生错误：${error.message}`}
        type="warning"
        showIcon
      />
    ),
  });

  const ComponentWithError = () => {
    const [shouldError, setShouldError] = React.useState(false);

    if (shouldError) {
      throw new Error('组件内部错误');
    }

    return (
      <div>
        <Text>这是一个可能出错的组件</Text>
        <Button 
          danger 
          onClick={() => setShouldError(true)}
          style={{ marginLeft: '8px' }}
        >
          触发组件错误
        </Button>
      </div>
    );
  };

  if (error) {
    return (
      <div>
        <Alert
          message="组件错误"
          description={`组件内部发生错误：${error.message}`}
          type="warning"
          showIcon
        />
        <Button 
          onClick={() => window.location.reload()} 
          style={{ marginTop: '8px' }}
        >
          重新加载页面
        </Button>
      </div>
    );
  }

  return <ComponentWithError />;
};

export default UseErrorHandlerDemo; 