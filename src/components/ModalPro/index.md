---
title: ModalPro 高级弹窗
group:
  title: 组件
  order: 1
---

# ModalPro 高级弹窗

```jsx
/**
 * title: 基础使用
 */

import {ModalPro} from "durians";
import {useEffect} from "react";
import {Button} from "antd"


export default () => {

  return (
    <div style={{
      width: "100%",
      overflow: "hidden"
    }}>
      <ModalPro
        Content={(props) => {
          return (<div>我是内容</div>)
        }}
      >
        <Button type="primary">点出出弹窗</Button>
      </ModalPro>
    </div>
  );
};
```
<API id="ModalPro"></API>
