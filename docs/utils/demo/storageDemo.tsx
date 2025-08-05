import React, { useState, useEffect } from 'react';
import { 
  setLocalStorage, 
  getLocalStorage, 
  removeLocalStorage,
  clearLocalStorage,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  clearSessionStorage,
  storage,
  clearExpiredStorage,
  getStorageSize
} from 'durians';
import { Button, Input, Card, Space, message, Typography, Divider, Tag } from 'antd';

const { Title, Text } = Typography;

const StorageDemo: React.FC = () => {
  const [localKey, setLocalKey] = useState('user');
  const [localValue, setLocalValue] = useState('张三');
  const [sessionKey, setSessionKey] = useState('token');
  const [sessionValue, setSessionValue] = useState('abc123');
  const [storageData, setStorageData] = useState<any>(null);
  const [storageSize, setStorageSize] = useState<string>('');

  // 获取存储大小
  useEffect(() => {
    updateStorageSize();
  }, []);

  const updateStorageSize = () => {
    const size = getStorageSize();
    setStorageSize(size);
  };

  // localStorage 操作
  const handleSetLocal = () => {
    const data = { name: localValue, timestamp: Date.now() };
    setLocalStorage(localKey, data, { expires: 3600 }); // 1小时后过期
    message.success('数据已保存到 localStorage');
    updateStorageSize();
  };

  const handleGetLocal = () => {
    const data = getLocalStorage(localKey);
    if (data) {
      setStorageData({ type: 'localStorage', key: localKey, data });
      message.success('数据已从 localStorage 获取');
    } else {
      message.warning('localStorage 中没有找到数据');
      setStorageData(null);
    }
  };

  const handleRemoveLocal = () => {
    removeLocalStorage(localKey);
    message.success('数据已从 localStorage 删除');
    setStorageData(null);
    updateStorageSize();
  };

  const handleClearLocal = () => {
    clearLocalStorage();
    message.success('localStorage 已清空');
    setStorageData(null);
    updateStorageSize();
  };

  // sessionStorage 操作
  const handleSetSession = () => {
    const data = { token: sessionValue, timestamp: Date.now() };
    setSessionStorage(sessionKey, data);
    message.success('数据已保存到 sessionStorage');
    updateStorageSize();
  };

  const handleGetSession = () => {
    const data = getSessionStorage(sessionKey);
    if (data) {
      setStorageData({ type: 'sessionStorage', key: sessionKey, data });
      message.success('数据已从 sessionStorage 获取');
    } else {
      message.warning('sessionStorage 中没有找到数据');
      setStorageData(null);
    }
  };

  const handleRemoveSession = () => {
    removeSessionStorage(sessionKey);
    message.success('数据已从 sessionStorage 删除');
    setStorageData(null);
    updateStorageSize();
  };

  const handleClearSession = () => {
    clearSessionStorage();
    message.success('sessionStorage 已清空');
    setStorageData(null);
    updateStorageSize();
  };

  // 高级操作
  const handleSetWithExpiry = () => {
    const data = { 
      name: '过期数据', 
      timestamp: Date.now(),
      expires: Date.now() + 5000 // 5秒后过期
    };
    storage.set('expiryTest', data, { expires: 5 });
    message.success('设置了5秒后过期的数据');
    updateStorageSize();
  };

  const handleGetWithExpiry = () => {
    const data = storage.get('expiryTest');
    if (data) {
      setStorageData({ type: 'storage', key: 'expiryTest', data });
      message.success('获取到数据');
    } else {
      message.warning('数据不存在或已过期');
      setStorageData(null);
    }
  };

  const handleClearExpired = () => {
    clearExpiredStorage();
    message.success('已清理过期数据');
    updateStorageSize();
  };

  return (
    <div style={{ padding: '24px' }}>
      <Card title="Storage 工具函数示例" style={{ marginBottom: '24px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <div>
            <Title level={5}>存储大小</Title>
            <Tag color="blue">当前存储大小：{storageSize}</Tag>
          </div>

          <Divider />

          <div>
            <Title level={5}>localStorage 操作</Title>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Space>
                <Input
                  placeholder="键名"
                  value={localKey}
                  onChange={(e) => setLocalKey(e.target.value)}
                  style={{ width: '120px' }}
                />
                <Input
                  placeholder="值"
                  value={localValue}
                  onChange={(e) => setLocalValue(e.target.value)}
                  style={{ width: '120px' }}
                />
              </Space>
              <Space wrap>
                <Button onClick={handleSetLocal}>设置</Button>
                <Button onClick={handleGetLocal}>获取</Button>
                <Button onClick={handleRemoveLocal}>删除</Button>
                <Button danger onClick={handleClearLocal}>清空</Button>
              </Space>
            </Space>
          </div>

          <Divider />

          <div>
            <Title level={5}>sessionStorage 操作</Title>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Space>
                <Input
                  placeholder="键名"
                  value={sessionKey}
                  onChange={(e) => setSessionKey(e.target.value)}
                  style={{ width: '120px' }}
                />
                <Input
                  placeholder="值"
                  value={sessionValue}
                  onChange={(e) => setSessionValue(e.target.value)}
                  style={{ width: '120px' }}
                />
              </Space>
              <Space wrap>
                <Button onClick={handleSetSession}>设置</Button>
                <Button onClick={handleGetSession}>获取</Button>
                <Button onClick={handleRemoveSession}>删除</Button>
                <Button danger onClick={handleClearSession}>清空</Button>
              </Space>
            </Space>
          </div>

          <Divider />

          <div>
            <Title level={5}>高级操作</Title>
            <Space wrap>
              <Button onClick={handleSetWithExpiry}>设置过期数据</Button>
              <Button onClick={handleGetWithExpiry}>获取过期数据</Button>
              <Button onClick={handleClearExpired}>清理过期数据</Button>
            </Space>
          </div>

          {storageData && (
            <div>
              <Title level={5}>当前数据：</Title>
              <pre style={{ 
                background: '#f5f5f5', 
                padding: '8px', 
                borderRadius: '4px',
                fontSize: '12px'
              }}>
                {JSON.stringify(storageData, null, 2)}
              </pre>
            </div>
          )}
        </Space>
      </Card>

      <Card title="Storage 功能说明">
        <Space direction="vertical">
          <Text><strong>localStorage</strong>：持久化存储，数据不会过期</Text>
          <Text><strong>sessionStorage</strong>：会话存储，关闭标签页后数据丢失</Text>
          <Text><strong>过期时间</strong>：可以设置数据的过期时间</Text>
          <Text><strong>自动清理</strong>：可以清理过期的数据</Text>
          <Text><strong>存储大小</strong>：监控存储空间使用情况</Text>
        </Space>
      </Card>
    </div>
  );
};

export default StorageDemo; 