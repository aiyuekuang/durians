import React, { useState } from 'react';
import { YB } from 'durians';
import { Card, Input, Space, Typography } from 'antd';

const { Title } = Typography;

const BasicDemo: React.FC = () => {
  const [name, setName] = useState('Durians');

  return (
    <div style={{ padding: '24px' }}>
      <Card title="YB 组件示例" style={{ marginBottom: '24px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <div>
            <Title level={5}>自定义名称：</Title>
            <Input
              placeholder="请输入名称"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '200px' }}
            />
          </div>
          <YB name={name} />
        </Space>
      </Card>

      <Card title="默认用法">
        <YB />
      </Card>
    </div>
  );
};

export default BasicDemo; 