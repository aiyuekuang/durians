import React, { useState } from 'react';
import { 
  ajaxCommon, 
  debounce, 
  throttle, 
  deepClone, 
  formatDate,
  generateId 
} from 'durians';
import { Button, Input, Card, Space, message, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const CommonDemo: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [scrollCount, setScrollCount] = useState(0);
  const [result, setResult] = useState<any>(null);

  // 防抖搜索
  const debouncedSearch = debounce((value) => {
    if (value) {
      message.info(`搜索关键词：${value}`);
      // 模拟API调用
      setTimeout(() => {
        setResult({ type: 'search', value, timestamp: Date.now() });
      }, 500);
    }
  }, 300);

  // 节流滚动
  const throttledScroll = throttle(() => {
    setScrollCount(prev => prev + 1);
  }, 100);

  // 模拟AJAX请求
  const handleAjaxRequest = () => {
    ajaxCommon(
      '/api/test',
      { test: 'data' },
      (data) => {
        message.success('请求成功');
        setResult({ type: 'ajax', data, timestamp: Date.now() });
      },
      (error) => {
        message.error('请求失败');
        setResult({ type: 'ajax', error: error.message, timestamp: Date.now() });
      },
      'POST'
    );
  };

  // 深拷贝测试
  const handleDeepClone = () => {
    const original = {
      a: 1,
      b: { c: 2, d: [3, 4, 5] },
      e: new Date(),
    };
    const cloned = deepClone(original);
    original.b.c = 999;
    setResult({ type: 'clone', original, cloned });
  };

  // 格式化日期
  const handleFormatDate = () => {
    const now = new Date();
    const formatted = formatDate(now, 'YYYY-MM-DD HH:mm:ss');
    setResult({ type: 'date', original: now, formatted });
  };

  // 生成ID
  const handleGenerateId = () => {
    const id = generateId();
    setResult({ type: 'id', id });
  };

  return (
    <div style={{ padding: '24px' }}>
      <Card title="Common 工具函数示例" style={{ marginBottom: '24px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <div>
            <Title level={5}>防抖搜索</Title>
            <Input
              placeholder="输入搜索关键词（300ms防抖）"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                debouncedSearch(e.target.value);
              }}
            />
          </div>

          <div>
            <Title level={5}>节流滚动</Title>
            <div
              style={{
                height: '100px',
                border: '1px solid #d9d9d9',
                overflow: 'auto',
                padding: '8px',
              }}
              onScroll={throttledScroll}
            >
              <p>滚动这个区域（100ms节流）</p>
              <p>滚动次数：{scrollCount}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
          </div>

          <Divider />

          <Space wrap>
            <Button onClick={handleAjaxRequest}>
              模拟AJAX请求
            </Button>
            <Button onClick={handleDeepClone}>
              深拷贝测试
            </Button>
            <Button onClick={handleFormatDate}>
              格式化日期
            </Button>
            <Button onClick={handleGenerateId}>
              生成ID
            </Button>
          </Space>

          {result && (
            <div>
              <Title level={5}>结果：</Title>
              <pre style={{ 
                background: '#f5f5f5', 
                padding: '8px', 
                borderRadius: '4px',
                fontSize: '12px'
              }}>
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}
        </Space>
      </Card>

      <Card title="工具函数说明">
        <Space direction="vertical">
          <Text><strong>debounce</strong>：防抖函数，延迟执行，避免频繁调用</Text>
          <Text><strong>throttle</strong>：节流函数，限制执行频率</Text>
          <Text><strong>ajaxCommon</strong>：通用AJAX请求函数</Text>
          <Text><strong>deepClone</strong>：深拷贝对象</Text>
          <Text><strong>formatDate</strong>：格式化日期</Text>
          <Text><strong>generateId</strong>：生成唯一ID</Text>
        </Space>
      </Card>
    </div>
  );
};

export default CommonDemo; 