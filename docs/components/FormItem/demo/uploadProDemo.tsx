import React, { useState } from 'react';
import { UploadPro } from 'durians';
import { Card, Space, Switch, Select, InputNumber, message } from 'antd';

const { Option } = Select;

const UploadProDemo: React.FC = () => {
  const [listType, setListType] = useState<'text' | 'picture' | 'picture-card'>('text');
  const [maxCount, setMaxCount] = useState<number | undefined>(undefined);
  const [disabled, setDisabled] = useState(false);

  const handleSuccess = (response: any, file: any) => {
    message.success(`${file.name} 上传成功`);
  };

  const handleError = (error: any, file: any) => {
    message.error(`${file.name} 上传失败`);
  };

  return (
    <div style={{ padding: '24px' }}>
      <Card title="UploadPro 文件上传" style={{ marginBottom: '24px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Space>
            <span>显示类型：</span>
            <Select value={listType} onChange={setListType} style={{ width: 120 }}>
              <Option value="text">文本</Option>
              <Option value="picture">图片</Option>
              <Option value="picture-card">卡片</Option>
            </Select>
            <span>最大数量：</span>
            <InputNumber
              value={maxCount}
              onChange={setMaxCount}
              min={1}
              max={10}
              style={{ width: 80 }}
              placeholder="无限制"
            />
            <span>禁用：</span>
            <Switch checked={disabled} onChange={setDisabled} />
          </Space>

          <UploadPro
            action="/api/upload"
            listType={listType}
            maxCount={maxCount}
            accept="image/*"
            disabled={disabled}
            onSuccess={handleSuccess}
            onError={handleError}
            onChange={(info) => {
              console.log('上传状态变化：', info);
            }}
          />
        </Space>
      </Card>

      <Card title="图片上传" style={{ marginBottom: '24px' }}>
        <UploadPro
          action="/api/upload"
          listType="picture-card"
          accept="image/*"
          maxCount={6}
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </Card>

      <Card title="文档上传">
        <UploadPro
          action="/api/upload"
          listType="text"
          accept=".pdf,.doc,.docx,.xls,.xlsx"
          maxCount={5}
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </Card>
    </div>
  );
};

export default UploadProDemo; 