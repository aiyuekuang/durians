---
title: LoginPro 高级登录
group:
  title: 组件
  order: 1
---

# LoginPro 高级登录

LoginPro 是一个基于 [Ant Design Pro Components](https://procomponents.ant.design/components/login) 的高级登录组件，提供了账号密码登录和手机验证码登录两种方式，并集成了自动登录、密码加密等功能。

## 何时使用

- 需要快速构建企业级登录页面
- 需要同时支持账号密码和手机验证码登录
- 需要对密码进行加密处理
- 需要支持自动登录功能
- 需要自定义登录表单布局和样式

## 代码示例

### 基础账号密码登录

最基本的账号密码登录功能展示。

```tsx
import { LoginPro } from 'durians';
import { message } from 'antd';

const Demo = () => {
  return (
    <LoginPro
      url="/api/login"
      callback={(data) => {
        message.success('登录成功！');
        console.log('登录数据：', data);
      }}
    />
  );
};

export default Demo;
```

### 手机验证码登录

展示如何启用短信验证码登录功能。

```tsx
import { LoginPro } from 'durians';
import { message } from 'antd';

const Demo = () => {
  return (
    <LoginPro
      hasSmsLogin={true}
      hasAccountLogin={true}
      url="/api/login"
      captchaUrl="/api/sendSms"
      loginFormFieldProps={{
        title: "系统登录",
        subTitle: "欢迎使用"
      }}
      callback={(data) => {
        message.success('登录成功！');
      }}
    />
  );
};

export default Demo;
```

### 自定义密码加密

展示如何使用 AES 加密或自定义加密方式。

```tsx
import { LoginPro } from 'durians';
import CryptoJS from 'crypto-js';

const Demo = () => {
  return (
    <LoginPro
      url="/api/login"
      secretKey="your-secret-key" // 使用 AES 加密
      extraPasswordText="_salt" // 密码加盐
      // 或使用自定义加密
      encrypt={(password) => {
        return CryptoJS.MD5(password).toString();
      }}
    />
  );
};

export default Demo;
```

## API

### LoginPro

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | 登录接口地址 | `string` | - |
| captchaUrl | 验证码发送接口地址 | `string` | - |
| ajax | 自定义请求方法 | `(url: string, params: object, callback: Function, isApi?: boolean) => void` | `ajaxCommon` |
| loginFormFieldProps | LoginForm 的属性配置，继承自 [Ant Design Pro LoginForm](https://procomponents.ant.design/components/login#loginform) | `object` | `{}` |
| hasSmsLogin | 是否启用短信验证码登录模式 | `boolean` | `false` |
| hasAccountLogin | 是否启用账号密码登录模式 | `boolean` | `true` |
| phoneField | 手机号字段名，发送验证码时使用 | `string` | `'mobile'` |
| usernameField | 用户名字段名 | `string` | `'username'` |
| passwordField | 密码字段名 | `string` | `'password'` |
| captchaField | 验证码字段名 | `string` | `'captcha'` |
| extraPasswordText | 密码加密时的混淆文本 | `string` | `''` |
| secretKey | AES 加密密钥 | `string` | - |
| encryption | CryptoJS 的加密方式，支持 MD5、SHA-1、SHA-256 等 | `string` | `'SHA256'` |
| encrypt | 自定义密码加密函数 | `(password: string) => string` | - |
| tokenField | 登录成功后 token 的字段名 | `string` | `'token'` |
| setData | 处理登录接口返回数据 | `(response: any) => any` | `(data) => data.data` |
| callback | 登录成功后的回调函数 | `(data: any) => void` | - |
| BottomDom | 自定义底部额外组件 | `ReactNode` | `() => </>` |
| ForGetPassword | 自定义忘记密码组件 | `ReactNode` | `默认忘记密码组件` |

### 数据结构

```typescript
// 登录请求参数
interface LoginParams {
  [usernameField]: string; // 用户名
  [passwordField]: string; // 密码
  [phoneField]?: string;   // 手机号（短信登录时）
  [captchaField]?: string; // 验证码（短信登录时）
  autoLogin?: boolean;     // 是否自动登录
}

// 登录响应数据
interface LoginResponse {
  code: number;      // 状态码
  msg?: string;      // 提示信息
  data: {
    [tokenField]: string; // token
    [key: string]: any;   // 其他数据
  }
}
```

### 依赖说明

- [Ant Design](https://ant.design/components/overview-cn) ^5.0.0
- [@ant-design/pro-components](https://procomponents.ant.design) ^2.0.0
  - LoginForm: [API 文档](https://procomponents.ant.design/components/login)
- [crypto-js](https://www.npmjs.com/package/crypto-js) ^4.1.1

## FAQ

### 1. 如何处理登录失败？

```tsx
import { LoginPro } from 'durians';
import { message } from 'antd';

const Demo = () => {
  const customAjax = (url, params, callback) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .then(data => {
        if (data.code === 0) {
          callback(data);
        } else {
          message.error(data.msg || '登录失败');
        }
      })
      .catch(err => {
        message.error('网络错误，请重试');
      });
  };

  return (
    <LoginPro
      url="/api/login"
      ajax={customAjax}
    />
  );
};

export default Demo;
```

### 2. 如何自定义表单校验规则？

```js
import { LoginPro } from 'durians';

const Demo = () => {
  return (
    <LoginPro
      url="/api/login"
      loginFormFieldProps={{
        form: {
          validateMessages: {
            required: `${label}不能为空`,
            types: {
              email: '请输入有效的邮箱地址',
              number: '请输入数字'
            }
          }
        }
      }}
    />
  );
};

export default Demo;
```

### 3. 如何添加第三方登录？

```tsx
import { LoginPro } from 'durians';
import { Space, Button } from 'antd';
import { GithubOutlined, WechatOutlined } from '@ant-design/icons';

const Demo = () => {
  return (
    <LoginPro
      url="/api/login"
      BottomDom={() => (
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Space>
            <Button icon={<GithubOutlined />} onClick={() => window.location.href = '/api/github/login'}>
              Github 登录
            </Button>
            <Button icon={<WechatOutlined />} onClick={() => window.location.href = '/api/wechat/login'}>
              微信登录
            </Button>
          </Space>
        </div>
      )}
    />
  );
};

export default Demo;
```

### 4. 如何持久化登录状态？

```tsx
import { LoginPro } from 'durians';

const Demo = () => {
  return (
    <LoginPro
      url="/api/login"
      callback={(data) => {
        // 存储登录信息
        localStorage.setItem('token', data.token);
        localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
        
        // 设置请求头
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        
        // 跳转首页
        window.location.href = '/dashboard';
      }}
      setData={(response) => {
        // 处理响应数据
        return {
          token: response.data.accessToken,
          userInfo: response.data.userInfo
        };
      }}
    />
  );
};

export default Demo;
```
