# LoginPro 高级登录组件

## 概述

LoginPro 是一个基于 Ant Design Pro Components 的高级登录组件，支持账号密码登录和手机号验证码登录两种方式。它封装了登录的常用功能，包括表单验证、密码加密、自动登录、记住密码等。

## 特性

- 🎯 **基于 Ant Design Pro Components**: 使用 `@ant-design/pro-components` 的 `LoginForm`
- 🔐 **多种登录方式**: 支持账号密码登录和手机号验证码登录
- 🔒 **密码加密**: 支持多种加密方式（AES、MD5、SHA等）
- 💾 **自动登录**: 支持自动登录和记住密码功能
- 📱 **验证码**: 支持短信验证码登录
- 🎨 **自定义样式**: 支持自定义登录表单样式
- 🛡️ **表单验证**: 内置完整的表单验证规则
- ⚡ **异步处理**: 支持异步登录处理

## 基础用法

### 简单登录

```jsx
import LoginPro from '@/components/LoginPro';

const SimpleLogin = () => (
  <LoginPro
    url="/api/login"
    hasAccountLogin={true}
    hasSmsLogin={false}
  />
);
```

### 账号密码登录

```jsx
const AccountLogin = () => (
  <LoginPro
    url="/api/login"
    hasAccountLogin={true}
    hasSmsLogin={false}
    usernameField="username"
    passwordField="password"
    tokenField="token"
    callback={(data) => {
      console.log('登录成功:', data);
      // 跳转到首页
      window.location.href = '/dashboard';
    }}
  />
);
```

### 手机号验证码登录

```jsx
const SmsLogin = () => (
  <LoginPro
    url="/api/login/sms"
    captchaUrl="/api/sms/send"
    hasAccountLogin={false}
    hasSmsLogin={true}
    phoneField="mobile"
    captchaField="code"
    callback={(data) => {
      console.log('登录成功:', data);
    }}
  />
);
```

### 混合登录方式

```jsx
const MixedLogin = () => (
  <LoginPro
    url="/api/login"
    captchaUrl="/api/sms/send"
    hasAccountLogin={true}
    hasSmsLogin={true}
    usernameField="username"
    passwordField="password"
    phoneField="mobile"
    captchaField="code"
    tokenField="token"
    callback={(data) => {
      console.log('登录成功:', data);
    }}
  />
);
```

## API 文档

### Props

| 参数 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| ajax | 通用ajax实现方法 | `function` | `ajaxCommon` | 否 |
| url | 点击登录的url | `string` | - | 是 |
| captchaUrl | 发送短信验证码的url | `string` | - | 否 |
| loginFormFieldProps | antd-pro登录表单的props | `object` | `{}` | 否 |
| hasSmsLogin | 是否有短信登录模式 | `boolean` | `false` | 否 |
| hasAccountLogin | 是否有账号密码登录模式 | `boolean` | `true` | 否 |
| phoneField | 发送短信验证码接口的手机号字段 | `string` | `'mobile'` | 否 |
| usernameField | 用户名字段 | `string` | `'username'` | 否 |
| passwordField | 密码字段 | `string` | `'password'` | 否 |
| captchaField | 验证码字段 | `string` | `'captcha'` | 否 |
| tokenField | token字段 | `string` | `'token'` | 否 |
| encryption | CryptoJS的加密方式 | `string` | `'SHA256'` | 否 |
| extraPasswordText | 额外的密码混淆文本 | `string` | `''` | 否 |
| secretKey | 秘钥,AES加密 | `string` | `''` | 否 |
| setData | 返回结果的处理 | `function` | `(data) => data.data` | 否 |
| callback | 登录成功之后的处理 | `function` | `() => {}` | 否 |
| encrypt | 自定义加密函数 | `function` | - | 否 |
| ForGetPassword | 忘记密码的DOM | `ReactNode` | 默认忘记密码链接 | 否 |
| BottomDom | 底部自定义组件 | `ReactNode` | `() => <></>` | 否 |

### loginFormFieldProps 配置

LoginPro 的 `loginFormFieldProps` 继承自 `LoginForm` 的所有属性：

```jsx
const loginFormFieldProps = {
  // 登录表单标题
  title: '系统登录',
  // 登录表单副标题
  subTitle: '欢迎使用系统',
  // Logo
  logo: 'https://example.com/logo.png',
  // 登录表单样式
  style: { backgroundColor: '#f0f2f5' },
  // 登录表单类名
  className: 'custom-login-form',
  // 登录表单布局
  layout: 'horizontal',
  // 登录表单大小
  size: 'large',
  // 登录表单标签宽度
  labelWidth: 80,
  // 登录表单提交按钮文本
  submitter: {
    submitButtonProps: {
      children: '登录',
    },
  },
  // 登录表单验证规则
  rules: {
    username: [
      { required: true, message: '请输入用户名' },
    ],
    password: [
      { required: true, message: '请输入密码' },
    ],
  },
};
```

## 加密方式

### 支持的加密方式

```jsx
// AES 加密
<LoginPro
  encryption="AES"
  secretKey="your-secret-key"
/>

// MD5 加密
<LoginPro
  encryption="MD5"
/>

// SHA-1 加密
<LoginPro
  encryption="SHA-1"
/>

// SHA-256 加密
<LoginPro
  encryption="SHA-256"
/>

// SHA-512 加密
<LoginPro
  encryption="SHA-512"
/>

// RIPEMD 加密
<LoginPro
  encryption="RIPEMD"
/>
```

### 自定义加密函数

```jsx
const customEncrypt = (password) => {
  // 自定义加密逻辑
  return btoa(password + 'custom-salt');
};

<LoginPro
  encrypt={customEncrypt}
/>
```

## 完整示例

### 企业级登录页面

```jsx
import React from 'react';
import LoginPro from '@/components/LoginPro';
import { Button, Divider } from 'antd';
import { 
  WechatOutlined, 
  QqOutlined, 
  AlipayOutlined,
  UserOutlined,
  LockOutlined,
  MobileOutlined 
} from '@ant-design/icons';

const EnterpriseLogin = () => {
  const handleLoginSuccess = (data) => {
    console.log('登录成功:', data);
    // 存储用户信息
    localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
    localStorage.setItem('token', data.token);
    // 跳转到首页
    window.location.href = '/dashboard';
  };

  const handleForgetPassword = () => {
    window.open('/forget-password', '_blank');
  };

  const handleRegister = () => {
    window.open('/register', '_blank');
  };

  const BottomContent = () => (
    <div style={{ textAlign: 'center', marginTop: 24 }}>
      <Divider>其他登录方式</Divider>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
        <Button 
          type="text" 
          icon={<WechatOutlined />} 
          size="large"
          onClick={() => console.log('微信登录')}
        >
          微信登录
        </Button>
        <Button 
          type="text" 
          icon={<QqOutlined />} 
          size="large"
          onClick={() => console.log('QQ登录')}
        >
          QQ登录
        </Button>
        <Button 
          type="text" 
          icon={<AlipayOutlined />} 
          size="large"
          onClick={() => console.log('支付宝登录')}
        >
          支付宝登录
        </Button>
      </div>
      <div style={{ marginTop: 16 }}>
        <Button type="link" onClick={handleRegister}>
          还没有账号？立即注册
        </Button>
      </div>
    </div>
  );

  return (
    <LoginPro
      url="/api/auth/login"
      captchaUrl="/api/sms/send"
      hasAccountLogin={true}
      hasSmsLogin={true}
      usernameField="username"
      passwordField="password"
      phoneField="mobile"
      captchaField="code"
      tokenField="token"
      encryption="SHA-256"
      extraPasswordText="company-salt"
      callback={handleLoginSuccess}
      ForGetPassword={handleForgetPassword}
      BottomDom={BottomContent}
      loginFormFieldProps={{
        title: '企业管理系统',
        subTitle: '欢迎使用企业管理系统，请登录您的账号',
        logo: 'https://example.com/company-logo.png',
        style: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        submitter: {
          submitButtonProps: {
            size: 'large',
            style: { width: '100%' },
          },
        },
      }}
    />
  );
};

export default EnterpriseLogin;
```

### 移动端登录页面

```jsx
import React from 'react';
import LoginPro from '@/components/LoginPro';
import { Button, Divider } from 'antd';
import { 
  WechatOutlined, 
  AppleOutlined,
  SafetyOutlined 
} from '@ant-design/icons';

const MobileLogin = () => {
  const handleLoginSuccess = (data) => {
    console.log('登录成功:', data);
    // 移动端登录成功处理
    if (window.ReactNativeWebView) {
      // 在 React Native WebView 中
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'LOGIN_SUCCESS',
        data: data,
      }));
    } else {
      // 普通移动端浏览器
      window.location.href = '/mobile/dashboard';
    }
  };

  const BottomContent = () => (
    <div style={{ textAlign: 'center', marginTop: 24 }}>
      <Divider>快速登录</Divider>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
        <Button 
          type="text" 
          icon={<WechatOutlined />} 
          size="large"
          onClick={() => console.log('微信登录')}
        >
          微信
        </Button>
        <Button 
          type="text" 
          icon={<AppleOutlined />} 
          size="large"
          onClick={() => console.log('Apple登录')}
        >
          Apple
        </Button>
      </div>
      <div style={{ marginTop: 16, fontSize: '12px', color: '#999' }}>
        <SafetyOutlined /> 登录即表示同意
        <Button type="link" size="small" style={{ padding: 0 }}>
          《用户协议》
        </Button>
        和
        <Button type="link" size="small" style={{ padding: 0 }}>
          《隐私政策》
        </Button>
      </div>
    </div>
  );

  return (
    <LoginPro
      url="/api/mobile/login"
      captchaUrl="/api/mobile/sms/send"
      hasAccountLogin={true}
      hasSmsLogin={true}
      usernameField="username"
      passwordField="password"
      phoneField="mobile"
      captchaField="code"
      tokenField="token"
      callback={handleLoginSuccess}
      BottomDom={BottomContent}
      loginFormFieldProps={{
        title: '移动端登录',
        subTitle: '请使用您的账号登录',
        style: {
          background: '#f5f5f5',
          minHeight: '100vh',
          padding: '20px',
        },
        submitter: {
          submitButtonProps: {
            size: 'large',
            style: { width: '100%', height: '44px' },
          },
        },
      }}
    />
  );
};

export default MobileLogin;
```

### 第三方登录集成

```jsx
import React from 'react';
import LoginPro from '@/components/LoginPro';
import { Button, Divider, message } from 'antd';
import { 
  WechatOutlined, 
  QqOutlined, 
  AlipayOutlined,
  DingtalkOutlined 
} from '@ant-design/icons';

const ThirdPartyLogin = () => {
  const handleThirdPartyLogin = (type) => {
    // 第三方登录处理
    const config = {
      wechat: {
        appId: 'your-wechat-appid',
        redirectUri: encodeURIComponent(window.location.origin + '/auth/wechat/callback'),
      },
      qq: {
        appId: 'your-qq-appid',
        redirectUri: encodeURIComponent(window.location.origin + '/auth/qq/callback'),
      },
      alipay: {
        appId: 'your-alipay-appid',
        redirectUri: encodeURIComponent(window.location.origin + '/auth/alipay/callback'),
      },
      dingtalk: {
        appId: 'your-dingtalk-appid',
        redirectUri: encodeURIComponent(window.location.origin + '/auth/dingtalk/callback'),
      },
    };

    const { appId, redirectUri } = config[type];
    const authUrl = `https://open.weixin.qq.com/connect/qrconnect?appid=${appId}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_login&state=${type}#wechat_redirect`;
    
    window.open(authUrl, '_blank', 'width=600,height=600');
  };

  const BottomContent = () => (
    <div style={{ textAlign: 'center', marginTop: 24 }}>
      <Divider>第三方登录</Divider>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
        <Button 
          type="text" 
          icon={<WechatOutlined style={{ color: '#07c160' }} />} 
          size="large"
          onClick={() => handleThirdPartyLogin('wechat')}
        >
          微信登录
        </Button>
        <Button 
          type="text" 
          icon={<QqOutlined style={{ color: '#12b7f5' }} />} 
          size="large"
          onClick={() => handleThirdPartyLogin('qq')}
        >
          QQ登录
        </Button>
        <Button 
          type="text" 
          icon={<AlipayOutlined style={{ color: '#1677ff' }} />} 
          size="large"
          onClick={() => handleThirdPartyLogin('alipay')}
        >
          支付宝登录
        </Button>
        <Button 
          type="text" 
          icon={<DingtalkOutlined style={{ color: '#1677ff' }} />} 
          size="large"
          onClick={() => handleThirdPartyLogin('dingtalk')}
        >
          钉钉登录
        </Button>
      </div>
    </div>
  );

  return (
    <LoginPro
      url="/api/auth/login"
      captchaUrl="/api/sms/send"
      hasAccountLogin={true}
      hasSmsLogin={true}
      usernameField="username"
      passwordField="password"
      phoneField="mobile"
      captchaField="code"
      tokenField="token"
      callback={(data) => {
        message.success('登录成功');
        window.location.href = '/dashboard';
      }}
      BottomDom={BottomContent}
      loginFormFieldProps={{
        title: '第三方登录系统',
        subTitle: '支持多种登录方式，安全便捷',
        logo: 'https://example.com/logo.png',
        style: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    />
  );
};

export default ThirdPartyLogin;
```

## 高级功能

### 自定义验证规则

```jsx
const CustomValidationLogin = () => (
  <LoginPro
    url="/api/login"
    loginFormFieldProps={{
      rules: {
        username: [
          { required: true, message: '请输入用户名' },
          { min: 3, max: 20, message: '用户名长度为3-20个字符' },
          { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名只能包含字母、数字和下划线' },
        ],
        password: [
          { required: true, message: '请输入密码' },
          { min: 8, message: '密码长度至少8位' },
          { 
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            message: '密码必须包含大小写字母、数字和特殊字符'
          },
        ],
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' },
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { len: 6, message: '验证码长度为6位' },
        ],
      },
    }}
  />
);
```

### 自定义加密处理

```jsx
const CustomEncryptionLogin = () => {
  const customEncrypt = (password) => {
    // 自定义加密逻辑
    const salt = 'custom-salt-' + Date.now();
    const encrypted = btoa(password + salt);
    return {
      password: encrypted,
      salt: salt,
    };
  };

  return (
    <LoginPro
      url="/api/login"
      encrypt={customEncrypt}
      beforeSubmit={(values) => {
        // 提交前处理
        const encrypted = customEncrypt(values.password);
        return {
          ...values,
          password: encrypted.password,
          salt: encrypted.salt,
        };
      }}
    />
  );
};
```

## 注意事项

1. **URL 配置**: 必须提供 `url` 参数用于登录请求
2. **加密配置**: 使用加密时，确保前后端加密方式一致
3. **验证码**: 使用短信验证码时，需要配置 `captchaUrl`
4. **回调处理**: 登录成功后，建议在 `callback` 中处理跳转逻辑
5. **安全性**: 建议使用 HTTPS 协议，确保数据传输安全

## 常见问题

### Q: 如何自定义登录表单样式？

A: 可以通过 `loginFormFieldProps` 的 `style` 或 `className` 属性自定义样式：

```jsx
<LoginPro
  loginFormFieldProps={{
    style: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
    },
    className: 'custom-login-form',
  }}
/>
```

### Q: 如何处理登录失败？

A: 可以在 `callback` 中处理登录失败的情况：

```jsx
<LoginPro
  callback={(data) => {
    if (data.success) {
      // 登录成功
      window.location.href = '/dashboard';
    } else {
      // 登录失败
      message.error(data.message || '登录失败');
    }
  }}
/>
```

### Q: 如何禁用自动登录功能？

A: 可以通过不传递相关参数来禁用自动登录：

```jsx
<LoginPro
  // 不传递 autoLogin 相关配置
  loginFormFieldProps={{
    initialValues: {
      autoLogin: false,
    },
  }}
/>
``` 