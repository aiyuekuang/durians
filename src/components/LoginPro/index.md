---
title: LoginPro 高级登录
group:
  title: 组件
  order: 1
---

# LoginPro 高级登录


密码的加密使用的是CryptoJS.SHA256

发送短信验证码的字段是mobile

```jsx
/**
 * title: demo预览
 */

import {LoginPro} from "durians";
import {useEffect} from "react";


/** 按钮组 */
export default () => {

  return (
    <div style={{
      width: "100%",
      overflow: "hidden"
    }}>
      <LoginPro
        loginFormFieldProps={{
          title: "内部管理平台"
        }}
      />
    </div>
  );
};
```
