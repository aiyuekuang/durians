---
title: LoginPro 高级登录
group:
  title: 组件
  order: 1
---

# LoginPro 高级登录

LoginPro 是一个基于 [Ant Design Pro Components](https://procomponents.ant.design/) 的高级登录组件，支持账号密码登录和手机验证码登录两种方式，并提供了自动登录、密码加密等功能。

## 何时使用

- 需要快速构建登录页面
- 需要支持账号密码和手机验证码登录
- 需要对密码进行加密处理
- 需要支持自动登录功能

## 代码示例


### 手机验证码登录

```tsx
import { LoginPro } from 'durians';

const Demo: FC = () => {
  return (
    <LoginPro
      hasSmsLogin={true}
      url="/api/login"
      captchaUrl="/api/sendSms"
      loginFormFieldProps={{
        title: "系统登录"
      }}
    />
  );
};

export default Demo;
```

## API

### LoginPro

```typescript
import { LoginPro } from 'durians';
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ajax | 通用请求方法 | `(url: string, params: object, callback: Function, isApi?: boolean) => void` | `ajaxCommon` |
| url | 登录接口地址 | `string` | - |
| captchaUrl | 验证码发送接口地址 | `string` | - |
| loginFormFieldProps | LoginForm 组件的属性配置 | `object` | `{}` |
| hasSmsLogin | 是否启用短信验证码登录 | `boolean` | `false` |
| hasAccountLogin | 是否启用账号密码登录 | `boolean` | `true` |
| phoneField | 手机号字段名 | `string` | `'mobile'` |
| usernameField | 用户名字段名 | `string` | `'username'` |
| passwordField | 密码字段名 | `string` | `'password'` |
| captchaField | 验证码字段名 | `string` | `'captcha'` |
| extraPasswordText | 密码加密额外混淆文本 | `string` | `''` |
| secretKey | AES 加密密钥 | `string` | - |
| encrypt | 自定义加密函数 | `(password: string) => string` | - |
| tokenField | token 字段名 | `string` | `'token'` |
| setData | 登录响应数据处理函数 | `(response: any) => any` | `(data) => data.data` |
| callback | 登录成功回调 | `(data: any) => void` | `() => {}` |
| BottomDom | 自定义底部组件 | `ReactNode` | `() => </>` |
| ForGetPassword | 自定义忘记密码组件 | `ReactNode` | `默认忘记密码组件` |

### 依赖说明

- [Ant Design](https://ant.design/components/overview-cn/) - ^5.0.0
- [@ant-design/pro-components](https://procomponents.ant.design/) - ^2.0.0
- [crypto-js](https://www.npmjs.com/package/crypto-js) - ^4.1.1

## 数据结构

### 登录请求数据

```typescript
interface LoginParams {
  username?: string;
  password?: string;
  mobile?: string;
  captcha?: string;
  autoLogin?: boolean;
}
```

### 登录响应数据

```typescript
interface LoginResponse {
  code: number;
  msg: string;
  data: {
    token: string;
    [key: string]: any;
  }
}
```

## FAQ

### 1. 如何自定义密码加密方式？

```tsx
const Demo: FC = () => {
  return (
    <LoginPro
      url="/api/login"
      encrypt={(password) => {
        // 自定义加密逻辑
        return CryptoJS.MD5(password).toString();
      }}
    />
  );
};
export default Demo;
```

### 2. 如何处理登录成功后的逻辑？

```tsx
const Demo: FC = () => {
  return (
    <LoginPro
      url="/api/login"
      callback={(data) => {
        // 存储用户信息
        localStorage.setItem('userInfo', JSON.stringify(data));
        // 跳转页面
        window.location.href = '/dashboard';
      }}
    />
  );
};
export default Demo;
```

### 3. 如何自定义底部额外内容？

```tsx
const Demo: FC = () => {
  return (
    <LoginPro
      url="/api/login"
      BottomDom={() => (
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <a href="/register">注册账号</a>
        </div>
      )}
    />
  );
};
export default Demo;
```

### 4. 如何修改表单字段名？

```tsx
const Demo: FC = () => {
  return (
    <LoginPro
      url="/api/login"
      usernameField="account"
      passwordField="pwd"
      phoneField="phone"
      captchaField="code"
    />
  );
};
export default Demo;
```
