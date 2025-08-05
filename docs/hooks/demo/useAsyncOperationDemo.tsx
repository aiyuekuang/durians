import React, { useState } from 'react';
import { useAsyncOperation } from 'durians';
import { Button, Card, Input, message, Space, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const UseAsyncOperationDemo: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  // 模拟API调用
  const mockApiCall = async (data: any) => {
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 模拟随机成功/失败
    if (Math.random() > 0.3) {
      return {
        id: Date.now(),
        ...data,
        createdAt: new Date().toISOString(),
      };
    } else {
      throw new Error('服务器错误，请稍后重试');
    }
  };

  const { execute, loading, error, data, reset } = useAsyncOperation(
    mockApiCall,
    {
      onSuccess: (result) => {
        message.success('操作成功！');
        console.log('成功结果：', result);
      },
      onError: (err) => {
        message.error(`操作失败：${err.message}`);
        console.error('错误信息：', err);
      },
      onFinally: () => {
        console.log('操作完成');
      },
    }
  );

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      message.warning('请填写完整信息');
      return;
    }
    
    await execute(formData);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '' });
    reset();
  };

  return (
    <div style={{ padding: '24px' }}>
      <Card title="useAsyncOperation 示例" style={{ marginBottom: '24px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <div>
            <Title level={5}>表单数据：</Title>
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
            </Space>
          </div>

          <Divider />

          <Space>
            <Button 
              type="primary" 
              onClick={handleSubmit} 
              loading={loading}
            >
              {loading ? '处理中...' : '提交数据'}
            </Button>
            <Button onClick={handleReset}>重置</Button>
          </Space>

          <Divider />

          <div>
            <Title level={5}>状态信息：</Title>
            <Space direction="vertical">
              <Text>加载状态：{loading ? '是' : '否'}</Text>
              {error && (
                <Text type="danger">
                  错误信息：{error.message}
                </Text>
              )}
              {data && (
                <Text type="success">
                  成功数据：{JSON.stringify(data, null, 2)}
                </Text>
              )}
            </Space>
          </div>
        </Space>
      </Card>

      <Card title="即时执行示例">
        <InstantExecutionDemo />
      </Card>
    </div>
  );
};

// 即时执行示例
const InstantExecutionDemo: React.FC = () => {
  const { loading, error, data, reset } = useAsyncOperation(
    async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      return { message: '数据加载完成', timestamp: Date.now() };
    },
    {
      immediate: true, // 组件挂载时立即执行
      onSuccess: (result) => {
        message.success('数据加载成功！');
      },
    }
  );

  return (
    <Space direction="vertical">
      <Text>这个示例会在组件挂载时自动执行异步操作</Text>
      <Text>加载状态：{loading ? '加载中...' : '完成'}</Text>
      {error && <Text type="danger">错误：{error.message}</Text>}
      {data && <Text type="success">数据：{JSON.stringify(data)}</Text>}
      <Button onClick={reset}>重新加载</Button>
    </Space>
  );
};

export default UseAsyncOperationDemo; 