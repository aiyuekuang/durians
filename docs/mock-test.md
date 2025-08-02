---
title: Mock 系统测试
order: 5
nav:
  title: Mock 测试
  order: 5
---

# Mock 系统测试

这个页面用于测试 Mock 数据系统是否正常工作。

## API 测试

点击下面的按钮测试各个 Mock API 接口：

```tsx
import React, { useState } from 'react';
import { Button, Card, message, Space, Table } from 'antd';

export default () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [apiResponse, setApiResponse] = useState(null);

  // 测试获取用户列表
  const testGetUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users?current=1&pageSize=5');
      const data = await response.json();
      
      if (data.success) {
        setUserData(data.data.list);
        setApiResponse(data);
        message.success('获取用户列表成功');
        console.log('用户数据:', data);
      } else {
        message.error('获取用户列表失败');
      }
    } catch (error) {
      console.error('API 调用失败:', error);
      message.error('API 调用失败');
    } finally {
      setLoading(false);
    }
  };

  // 测试创建用户
  const testCreateUser = async () => {
    setLoading(true);
    try {
      const newUser = {
        name: '测试用户' + Date.now(),
        email: `test${Date.now()}@example.com`,
        phone: '13800138000',
        department: '技术部',
        position: '前端工程师',
        status: 1
      };

      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      
      const data = await response.json();
      
      if (data.success) {
        message.success('创建用户成功');
        console.log('创建结果:', data);
        // 重新获取用户列表
        testGetUsers();
      } else {
        message.error('创建用户失败: ' + data.msg);
      }
    } catch (error) {
      console.error('创建用户失败:', error);
      message.error('创建用户失败');
    } finally {
      setLoading(false);
    }
  };

  // 测试登录
  const testLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'admin',
          password: '123456'
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        message.success('登录成功');
        console.log('登录结果:', data);
        setApiResponse(data);
      } else {
        message.error('登录失败: ' + data.msg);
      }
    } catch (error) {
      console.error('登录失败:', error);
      message.error('登录失败');
    } finally {
      setLoading(false);
    }
  };

  // 测试树形数据
  const testTreeData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/tree');
      const data = await response.json();
      
      if (data.success) {
        message.success('获取树形数据成功');
        console.log('树形数据:', data);
        setApiResponse(data);
      } else {
        message.error('获取树形数据失败');
      }
    } catch (error) {
      console.error('获取树形数据失败:', error);
      message.error('获取树形数据失败');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 60,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '部门',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: '职位',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => status === 1 ? '启用' : '禁用',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Card title="Mock API 测试" style={{ marginBottom: 20 }}>
        <Space wrap>
          <Button 
            type="primary" 
            loading={loading} 
            onClick={testGetUsers}
          >
            测试获取用户列表
          </Button>
          <Button 
            loading={loading} 
            onClick={testCreateUser}
          >
            测试创建用户
          </Button>
          <Button 
            loading={loading} 
            onClick={testLogin}
          >
            测试登录 (admin/123456)
          </Button>
          <Button 
            loading={loading} 
            onClick={testTreeData}
          >
            测试树形数据
          </Button>
        </Space>
      </Card>

      {userData.length > 0 && (
        <Card title="用户数据" style={{ marginBottom: 20 }}>
          <Table 
            columns={columns} 
            dataSource={userData} 
            rowKey="id"
            pagination={false}
            size="small"
          />
        </Card>
      )}

      {apiResponse && (
        <Card title="API 响应数据">
          <pre style={{ 
            background: '#f5f5f5', 
            padding: '10px', 
            borderRadius: '4px',
            overflow: 'auto',
            maxHeight: '400px'
          }}>
            {JSON.stringify(apiResponse, null, 2)}
          </pre>
        </Card>
      )}
    </div>
  );
};
```

## 使用说明

1. **打开浏览器开发者工具** - 查看 Network 面板和 Console 面板
2. **点击测试按钮** - 观察 Mock API 的请求和响应
3. **检查控制台日志** - 查看 Mock 服务的日志输出
4. **验证数据** - 确认返回的数据格式正确

## 预期结果

如果 Mock 系统正常工作，您应该看到：

- ✅ 控制台输出 Mock 服务启动信息
- ✅ Network 面板显示 API 请求被拦截
- ✅ 返回正确格式的 JSON 数据
- ✅ 用户列表正常显示
- ✅ 创建用户功能正常
- ✅ 登录功能正常
- ✅ 树形数据正常

## 故障排除

如果遇到问题：

1. **检查控制台** - 查看是否有错误信息
2. **刷新页面** - 重新加载 Mock 服务
3. **检查网络请求** - 确认请求 URL 正确
4. **查看响应** - 检查 Mock 数据格式

Mock 系统正常工作后，所有组件的演示都应该能够正常运行！
