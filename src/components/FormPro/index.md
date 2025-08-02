---
title: FormPro 高级表单
group:
  title: 组件
  order: 1
---

# FormPro 高级表单的 pro 版本

FormPro 是一个基于 [Ant Design Pro Components](https://procomponents.ant.design/) 的高级表单组件，它封装了常见的表单场景，支持模态框、抽屉等多种布局形式，并提供了丰富的配置项和自定义组件。

## 何时使用

- 需要快速创建一个模态框或抽屉形式的表单
- 需要处理表单提交、数据获取等复杂逻辑
- 需要统一管理表单验证和提交行为
- 需要灵活配置表单字段和布局
- 需要处理异步数据加载和提交

## 基础用法

```tsx
import { FormPro } from 'durians';
import { Button } from 'antd';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      layoutType="ModalForm"
      fieldProps={{
        title: '基础表单',
        columns: [
          {
            title: '用户名',
            dataIndex: 'username',
            valueType: 'text',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '请输入用户名',
                }
              ]
            }
          },
          {
            title: '年龄',
            dataIndex: 'age',
            valueType: 'digit',
            fieldProps: {
              min: 0,
              max: 100
            }
          }
        ]
      }}
    >
      <Button type="primary">打开表单</Button>
    </FormPro>
  );
};

export default Demo;
```

## API

### FormPro

```typescript
import type { FormProProps } from 'durians';

interface FormProProps {
  layoutType?: 'ModalForm' | 'DrawerForm';
  children?: React.ReactNode;
  fieldProps?: BetaSchemaFormProps;
  url?: string;
  detailUrl?: string;
  record?: Record<string, any>;
  ajax?: (url: string, params: any, callback: (data: any) => void) => Promise<void>;
  finishFun?: (data: any, values: any) => void;
  setMsg?: (data: any) => string;
  detailSetData?: (data: any) => any;
  isEdit?: boolean;
  beforeSubmit?: (values: any, record: any, originValues: any) => any;
}
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layoutType | 表单布局类型，支持模态框或抽屉形式 | `'ModalForm' \| 'DrawerForm'` | `'ModalForm'` |
| children | 触发表单显示的元素，通常是一个按钮 | `ReactNode` | `<Button>点击我</Button>` |
| fieldProps | 表单字段配置，继承自 [BetaSchemaForm](https://procomponents.ant.design/components/schema-form) 的所有属性 | `BetaSchemaFormProps` | `{}` |
| url | 表单提交的接口地址 | `string` | - |
| detailUrl | 获取表单详情数据的接口地址，编辑模式时使用 | `string` | - |
| record | 表单初始值，用于编辑模式下的数据回显 | `Record<string, any>` | `{}` |
| ajax | 自定义请求方法，用于覆盖默认的请求实现 | `(url: string, params: any, callback: (data: any) => void) => Promise<void>` | `ajaxCommon` |
| finishFun | 表单提交成功后的回调函数 | `(data: any, values: any) => void` | `() => {}` |
| setMsg | 自定义提示消息处理函数 | `(data: any) => string` | `(data) => data.msg` |
| detailSetData | 处理详情数据的函数，用于转换接口返回的数据格式 | `(data: any) => any` | - |
| isEdit | 是否为编辑模式，true 时会自动加载详情数据 | `boolean` | `false` |
| beforeSubmit | 表单提交前的数据处理函数 | `(values: any, record: any, originValues: any) => any` | `(data) => data` |

### 内置组件

FormPro 内置了以下几个特殊的表单组件：

#### TableSelect

表格选择器组件，继承自 [TablePro](./TablePro)。

```tsx
import { FormPro } from 'durians';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      fieldProps={{
        columns: [
          {
            title: '选择用户',
            dataIndex: 'users',
            valueType: 'tableSelect',
            fieldProps: {
              title: '选择用户',
              tableFieldProps: {
                url: '/api/users',
                columns: [
                  { title: '姓名', dataIndex: 'name' },
                  { title: '部门', dataIndex: 'department' }
                ]
              }
            }
          }
        ]
      }}
    />
  );
};

export default Demo;
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 选择按钮文字 | `string` | `'选择'` |
| tableFieldProps | TablePro 的配置项 | `TableProProps` | - |
| modalFieldProps | ModalPro 的配置项 | `ModalProProps` | - |

#### TreeSelectPro

树形选择器组件，支持异步加载数据。

```tsx
import { FormPro } from 'durians';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      fieldProps={{
        columns: [
          {
            title: '部门选择',
            dataIndex: 'department',
            valueType: 'treeSelect',
            fieldProps: {
              url: '/api/departments',
              params: (node) => ({ parentId: node?.id }),
              setData: (res) => res.data,
              fieldNames: {
                label: 'name',
                value: 'id'
              }
            }
          }
        ]
      }}
    />
  );
};

export default Demo;
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | 数据接口地址 | `string` | - |
| params | 请求参数处理函数 | `(node: any) => object` | `() => ({})` |
| setData | 响应数据处理函数 | `(res: any) => any[]` | - |
| fieldNames | 自定义节点字段 | `object` | - |

#### UploadPro

文件上传组件，基于 [Ant Design Upload](https://ant.design/components/upload-cn)。

```tsx
import { FormPro } from 'durians';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      fieldProps={{
        columns: [
          {
            title: '附件',
            dataIndex: 'files',
            valueType: 'upload',
            fieldProps: {
              title: '上传文件',
              url: '/api/upload',
              setData: (res) => res.url,
              fieldPropsUpload: {
                multiple: true,
                maxCount: 5
              }
            }
          }
        ]
      }}
    />
  );
};

export default Demo;
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| url | 上传接口地址 | `string` | `/upload` |
| setData | 处理上传响应数据 | `(res: any) => string` | - |
| fieldPropsUpload | Upload 组件的属性 | `UploadProps` | - |

### 自定义表单示例

```tsx
import { FormPro } from 'durians';
import { ProForm, ProFormList, ProFormText } from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      fieldProps={{
        title: '自定义表单',
        columns: [
          {
            title: '用户列表',
            dataIndex: 'users',
            renderFormItem: () => (
              <ProFormList
                name="users"
                initialValue={[{ name: '' }]}
              >
                {(f, index) => (
                  <ProFormText
                    name={['name']}
                    label={`用户 ${index + 1}`}
                  />
                )}
              </ProFormList>
            )
          }
        ]
      }}
    >
      <Button type="primary">添加用户</Button>
    </FormPro>
  );
};

export default Demo;
```

## 数据结构

```typescript
// 表单字段定义
interface FormColumn {
  title: string;
  dataIndex: string;
  valueType?: string;
  formItemProps?: any;
  fieldProps?: any;
  renderFormItem?: () => React.ReactNode;
}

// 表单接口响应数据
interface ApiResponse {
  code: number;
  msg?: string;
  data?: any;
}

// 表单提交参数
interface SubmitParams {
  [key: string]: any;
}
```

## FAQ

### 1. 如何自定义表单验证规则？

```tsx
import { FormPro } from 'durians';
import { Button } from 'antd';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      fieldProps={{
        columns: [
          {
            title: '手机号',
            dataIndex: 'mobile',
            formItemProps: {
              rules: [
                { required: true, message: '请输入手机号' },
                { pattern: /^1\d{10}$/, message: '手机号格式不正确' }
              ]
            }
          }
        ]
      }}
    >
      <Button>提交</Button>
    </FormPro>
  );
};

export default Demo;
```

### 2. 如何在表单提交前转换数据？

```tsx
import { FormPro } from 'durians';
import { Button } from 'antd';
import React, { FC } from 'react';
import moment from 'moment';

const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      beforeSubmit={(values) => ({
        ...values,
        birthday: moment(values.birthday).format('YYYY-MM-DD'),
        age: Number(values.age)
      })}
    >
      <Button>提交</Button>
    </FormPro>
  );
};

export default Demo;
```

### 3. 如何处理编辑模式下的数据回显？

```tsx
import { FormPro } from 'durians';
import { Button } from 'antd';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      isEdit={true}
      detailUrl="/api/detail"
      record={{ id: 1 }}
      detailSetData={(response) => ({
        ...response.data,
        files: JSON.parse(response.data.files)
      })}
    >
      <Button>编辑</Button>
    </FormPro>
  );
};

export default Demo;
```

### 4. 如何自定义表单项渲染？

```tsx
import { FormPro } from 'durians';
import { Input, Button } from 'antd';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      fieldProps={{
        columns: [
          {
            title: '自定义输入',
            dataIndex: 'custom',
            renderFormItem: () => (
              <Input.TextArea
                placeholder="请输入内容"
                maxLength={100}
                showCount
              />
            )
          }
        ]
      }}
    >
      <Button>提交</Button>
    </FormPro>
  );
};

export default Demo;
```

### 5. 如何自定义表单布局？

```tsx
import { FormPro } from 'durians';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      layoutType="DrawerForm"
      fieldProps={{
        grid: true,
        colProps: { span: 12 },
        columns: [
          {
            title: '用户名',
            dataIndex: 'username',
            colProps: { span: 24 }
          },
          {
            title: '年龄',
            dataIndex: 'age'
          },
          {
            title: '邮箱',
            dataIndex: 'email'
          }
        ]
      }}
    />
  );
};

export default Demo;
```

### 6. 如何自定义请求方法？

```tsx
import { FormPro } from 'durians';
import { message } from 'antd';
import React, { FC } from 'react';

const Demo: FC = () => {
  const customAjax = async (url: string, params: any, callback: (data: any) => void) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(params)
      });
      const data = await response.json();
      
      if (data.code === 0) {
        callback(data);
      } else {
        message.error(data.msg || '请求失败');
      }
    } catch (error) {
      message.error('网络错误');
      console.error(error);
    }
  };

  return (
    <FormPro
      url="/api/submit"
      ajax={customAjax}
      fieldProps={{
        columns: [
          {
            title: '用户名',
            dataIndex: 'username'
          }
        ]
      }}
    />
  );
};

export default Demo;
```

### 7. 如何处理复杂的表单依赖关系？

```tsx
import { FormPro } from 'durians';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      fieldProps={{
        columns: [
          {
            title: '类型',
            dataIndex: 'type',
            valueType: 'select',
            fieldProps: {
              options: [
                { label: '个人', value: 'personal' },
                { label: '企业', value: 'company' }
              ]
            }
          },
          {
            title: '企业名称',
            dataIndex: 'companyName',
            dependencies: ['type'],
            formItemProps: (form) => {
              const type = form.getFieldValue('type');
              return {
                hidden: type !== 'company'
              };
            }
          }
        ]
      }}
    />
  );
};

export default Demo;
```

### 8. 如何自定义表单提交前的数据转换？

```tsx
import { FormPro } from 'durians';
import React, { FC } from 'react';

const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      beforeSubmit={(values, record, originalValues) => {
        // 转换提交数据
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
          } else if (value instanceof File) {
            formData.append(key, value);
          } else {
            formData.append(key, String(value));
          }
        });
        return formData;
      }}
      fieldProps={{
        columns: [
          {
            title: '附件',
            dataIndex: 'file',
            valueType: 'upload'
          }
        ]
      }}
    />
  );
};

export default Demo;
```
