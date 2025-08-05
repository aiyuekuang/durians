# Utils 工具函数

Durians 提供了一些实用的工具函数，用于简化常见的开发任务�?

## common.tsx

通用工具函数集合，包含常用的辅助函数�?

### ajaxCommon

通用�?AJAX 请求函数，支�?GET �?POST 请求�?

```tsx
import { ajaxCommon } from 'durians';

// GET 请求
ajaxCommon('/api/users', {}, (data) => {
  console.log('用户数据�?, data);
}, (error) => {
  console.error('请求失败�?, error);
});

// POST 请求
ajaxCommon('/api/users', { name: '张三', email: 'zhangsan@example.com' }, (data) => {
  console.log('创建成功�?, data);
}, (error) => {
  console.error('创建失败�?, error);
}, 'POST');
```

### API

| 参数 | 说明 | 类型 | 默认�?|
| --- | --- | --- | --- |
| url | 请求地址 | `string` | - |
| params | 请求参数 | `object` | `{}` |
| success | 成功回调 | `(data: any) => void` | - |
| error | 错误回调 | `(error: any) => void` | - |
| method | 请求方法 | `'GET' \| 'POST'` | `'GET'` |

### 其他工具函数

```tsx
import { 
  debounce, 
  throttle, 
  deepClone, 
  formatDate,
  generateId 
} from 'durians';

// 防抖函数
const debouncedSearch = debounce((value) => {
  console.log('搜索�?, value);
}, 300);

// 节流函数
const throttledScroll = throttle(() => {
  console.log('滚动事件');
}, 100);

// 深拷�?
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);

// 格式化日�?
const formatted = formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss');

// 生成唯一ID
const id = generateId();
```

## constants.ts

常量定义文件，包含项目中使用的各种常量�?

### 常用常量

```tsx
import { 
  HTTP_STATUS, 
  MESSAGE_TYPE, 
  DATE_FORMAT,
  REGEX_PATTERNS 
} from 'durians';

// HTTP 状态码
console.log(HTTP_STATUS.OK); // 200
console.log(HTTP_STATUS.NOT_FOUND); // 404

// 消息类型
console.log(MESSAGE_TYPE.SUCCESS); // 'success'
console.log(MESSAGE_TYPE.ERROR); // 'error'

// 日期格式
console.log(DATE_FORMAT.DATE); // 'YYYY-MM-DD'
console.log(DATE_FORMAT.DATETIME); // 'YYYY-MM-DD HH:mm:ss'

// 正则表达�?
console.log(REGEX_PATTERNS.EMAIL); // 邮箱验证正则
console.log(REGEX_PATTERNS.PHONE); // 手机号验证正�?
```

### 完整常量列表

| 常量�?| 说明 | 类型 |
| --- | --- | --- |
| HTTP_STATUS | HTTP 状态码 | `object` |
| MESSAGE_TYPE | 消息类型 | `object` |
| DATE_FORMAT | 日期格式 | `object` |
| REGEX_PATTERNS | 正则表达�?| `object` |
| API_ENDPOINTS | API 端点 | `object` |
| UI_CONSTANTS | UI 相关常量 | `object` |

## storage.ts

本地存储工具函数，提供了�?localStorage �?sessionStorage 的封装�?

### 基本用法

```tsx
import { 
  setLocalStorage, 
  getLocalStorage, 
  removeLocalStorage,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage 
} from 'durians';

// localStorage 操作
setLocalStorage('user', { id: 1, name: '张三' });
const user = getLocalStorage('user');
removeLocalStorage('user');

// sessionStorage 操作
setSessionStorage('token', 'abc123');
const token = getSessionStorage('token');
removeSessionStorage('token');
```

### 高级用法

```tsx
import { 
  storage,
  clearExpiredStorage,
  getStorageSize 
} from 'durians';

// 使用 storage 对象
storage.set('key', 'value', { expires: 3600 }); // 1小时后过�?
const value = storage.get('key');
storage.remove('key');

// 清理过期数据
clearExpiredStorage();

// 获取存储大小
const size = getStorageSize();
console.log('存储大小�?, size);
```

### API

#### localStorage 相关

| 函数 | 说明 | 参数 | 返回�?|
| --- | --- | --- | --- |
| setLocalStorage | 设置 localStorage | `(key: string, value: any, options?: StorageOptions)` | `void` |
| getLocalStorage | 获取 localStorage | `(key: string)` | `any` |
| removeLocalStorage | 删除 localStorage | `(key: string)` | `void` |
| clearLocalStorage | 清空 localStorage | `()` | `void` |

#### sessionStorage 相关

| 函数 | 说明 | 参数 | 返回�?|
| --- | --- | --- | --- |
| setSessionStorage | 设置 sessionStorage | `(key: string, value: any, options?: StorageOptions)` | `void` |
| getSessionStorage | 获取 sessionStorage | `(key: string)` | `any` |
| removeSessionStorage | 删除 sessionStorage | `(key: string)` | `void` |
| clearSessionStorage | 清空 sessionStorage | `()` | `void` |

#### StorageOptions

| 参数 | 说明 | 类型 | 默认�?|
| --- | --- | --- | --- |
| expires | 过期时间（秒�?| `number` | - |
| encrypt | 是否加密 | `boolean` | `false` |

## format.ts

格式化工具函数，用于数据格式化�?

### 基本用法

```tsx
import { formatNumber, formatCurrency, formatFileSize } from 'durians';

// 数字格式�?
console.log(formatNumber(1234567)); // "1,234,567"
console.log(formatNumber(1234.567, 2)); // "1,234.57"

// 货币格式�?
console.log(formatCurrency(1234.56)); // "¥1,234.56"
console.log(formatCurrency(1234.56, 'USD')); // "$1,234.56"

// 文件大小格式�?
console.log(formatFileSize(1024)); // "1 KB"
console.log(formatFileSize(1048576)); // "1 MB"
```

### API

| 函数 | 说明 | 参数 | 返回�?|
| --- | --- | --- | --- |
| formatNumber | 数字格式�?| `(num: number, decimals?: number)` | `string` |
| formatCurrency | 货币格式�?| `(amount: number, currency?: string)` | `string` |
| formatFileSize | 文件大小格式�?| `(bytes: number)` | `string` |

## 完整示例

```tsx
import React, { useState, useEffect } from 'react';
import { 
  ajaxCommon, 
  debounce, 
  setLocalStorage, 
  getLocalStorage,
  formatNumber,
  HTTP_STATUS 
} from 'durians';
import { Button, Input, Card, Space, message } from 'antd';

const UtilsDemo: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [userData, setUserData] = useState(null);

  // 防抖搜索
  const debouncedSearch = debounce((value) => {
    if (value) {
      ajaxCommon('/api/search', { q: value }, (data) => {
        console.log('搜索结果�?, data);
        message.success(`找到 ${data.length} 条结果`);
      }, (error) => {
        message.error('搜索失败');
      });
    }
  }, 500);

  // 保存用户数据
  const saveUserData = () => {
    const data = { name: '张三', age: 25, timestamp: Date.now() };
    setLocalStorage('userData', data, { expires: 3600 });
    message.success('数据已保存到本地存储');
  };

  // 加载用户数据
  const loadUserData = () => {
    const data = getLocalStorage('userData');
    if (data) {
      setUserData(data);
      message.success('数据已从本地存储加载');
    } else {
      message.warning('本地存储中没有数�?);
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <Card title="工具函数示例">
        <Space direction="vertical" style={{ width: '100%' }}>
          <div>
            <h4>防抖搜索</h4>
            <Input
              placeholder="输入搜索关键�?
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                debouncedSearch(e.target.value);
              }}
            />
          </div>

          <div>
            <h4>本地存储</h4>
            <Space>
              <Button onClick={saveUserData}>保存数据</Button>
              <Button onClick={loadUserData}>加载数据</Button>
            </Space>
            {userData && (
              <div style={{ marginTop: '8px' }}>
                <p>用户数据：{JSON.stringify(userData)}</p>
              </div>
            )}
          </div>

          <div>
            <h4>格式化示�?/h4>
            <p>数字格式化：{formatNumber(1234567.89, 2)}</p>
            <p>HTTP状态：{HTTP_STATUS.OK} - {HTTP_STATUS.NOT_FOUND}</p>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default UtilsDemo;
``
