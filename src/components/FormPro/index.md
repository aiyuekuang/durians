---
title: FormPro 高级表单
group:
  title: 组件
  order: 1
---

# FormPro 高级表单的 pro 版本

FormPro 是一个基于 [Ant Design Pro Components](https://procomponents.ant.design/) 的高级表单组件，它封装了常见的表单场景，支持模态框、抽屉等多种布局形式，并提供了丰富的配置项。

## 何时使用

- 需要快速创建一个模态框或抽屉形式的表单
- 需要处理表单提交、数据获取等复杂逻辑
- 需要统一管理表单验证和提交行为

## 代码示例

### 基础用法

以下示例展示了 FormPro 的基础列表表单功能：

<code src="./demo/customForm.tsx" title="基础列表表单" description="使用 ProFormList 实现动态表单项，支持添加、删除和设置表单项。"></code>

## API

### FormPro

```typescript
import { FormPro } from '@your-package/components';
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| layoutType | 表单布局类型，支持 ModalForm 或 DrawerForm | `'ModalForm' \| 'DrawerForm'` | `'ModalForm'` |
| children | 触发表单显示的元素 | `ReactNode` | `<Button>点击我</Button>` |
| fieldProps | 表单字段配置，继承自 [BetaSchemaForm](https://procomponents.ant.design/components/schema-form) 的所有属性 | `object` | `{}` |
| url | 表单提交的接口地址 | `string` | - |
| detailUrl | 获取表单详情数据的接口地址 | `string` | - |
| record | 表单初始值 | `object` | `{}` |
| ajax | 自定义请求方法 | `(url: string, params: object, callback: Function) => Promise<void>` | `ajaxCommon` |
| finishFun | 表单提交成功后的回调 | `(data: any, values: object) => void` | `() => {}` |
| setMsg | 自定义提示消息处理函数 | `(data: any) => string` | `(data) => data.msg` |
| detailSetData | 处理详情数据的函数 | `(data: any) => object` | - |
| isEdit | 是否为编辑模式 | `boolean` | `false` |
| beforeSubmit | 表单提交前的数据处理函数 | `(values: object, record: object, originValues: object) => object` | `(data) => data` |

### 依赖说明

- [Ant Design](https://ant.design/components/overview-cn/) - ^5.0.0
- [@ant-design/pro-components](https://procomponents.ant.design/) - ^2.0.0

## 数据结构

### 表单数据结构

```typescript
interface FormData {
  [key: string]: any;
}

interface FormResponse {
  msg: string;
  [key: string]: any;
}
```

## 表单组件

### TableSelect 表格选择器

TableSelect 是一个基于 TablePro 和 ModalPro 的表格选择组件，支持多选和单选模式。

```tsx
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
                  { title: '年龄', dataIndex: 'age' }
                ]
              },
              modalFieldProps: {
                title: '选择用户'
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

#### TableSelect API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 选择按钮文字 | `string` | `'选择'` |
| value | 选中的值 | `any[]` | `[]` |
| onChange | 选择改变时的回调 | `(value: any[]) => void` | - |
| tableFieldProps | TablePro 的属性配置 | `TableProProps` | `{}` |
| modalFieldProps | ModalPro 的属性配置 | `ModalProProps` | `{}` |

### TreeSelectPro 树形选择器

TreeSelectPro 是一个支持异步加载的树形选择器组件。

```tsx
const Demo: FC = () => {
  return (
    <FormPro
      fieldProps={{
        columns: [
          {
            title: '部门',
            dataIndex: 'department',
            valueType: 'treeSelect',
            fieldProps: {
              url: '/api/departments',
              params: (data) => ({ pid: data.value }),
              setData: (response) => response.data,
              fieldNames: {
                label: 'name',
                value: 'id',
                children: 'children'
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

#### TreeSelectPro API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ajax | 自定义请求方法 | `Function` | `ajaxCommon` |
| rowKey | 行唯一标识 | `string` | `'value'` |
| fieldProps | 配置项，包含以下属性 | `object` | - |
| fieldProps.url | 数据接口地址 | `string` | - |
| fieldProps.params | 请求参数处理函数 | `(data: any) => object` | `() => ({})` |
| fieldProps.setData | 响应数据处理函数 | `(response: any) => any[]` | - |
| fieldProps.fieldNames | 自定义节点字段 | `object` | - |

### UploadPro 上传组件

UploadPro 是一个基于 Ant Design Upload 的文件上传组件。

```tsx
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
              setData: (response) => response.url,
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

#### UploadPro API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 上传按钮文字 | `string` | `'上传'` |
| url | 上传接口地址 | `string` | `'/upload'` |
| fieldPropsUpload | Upload 组件的属性配置 | `UploadProps` | `{}` |
| onChange | 文件列表变化的回调 | `(fileList) => void` | - |
| setData | 上传响应数据处理函数 | `(response) => string` | `() => ''` |
| ajaxSuccess | 上传成功的回调 | `(response, callback) => void` | - |
| ajaxError | 上传失败的回调 | `(response, callback) => void` | - |

### 使用示例

```tsx
const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      fieldProps={{
        columns: [
          {
            title: '部门选择',
            dataIndex: 'department',
            valueType: 'treeSelect',
            fieldProps: {
              url: '/api/departments',
              setData: (res) => res.data
            }
          },
          {
            title: '人员选择',
            dataIndex: 'users',
            valueType: 'tableSelect',
            fieldProps: {
              tableFieldProps: {
                url: '/api/users'
              }
            }
          },
          {
            title: '附件上传',
            dataIndex: 'files',
            valueType: 'upload',
            fieldProps: {
              url: '/api/upload',
              multiple: true
            }
          }
        ]
      }}
    />
  );
};
export default Demo;
```

这部分补充文档详细说明了 TableSelect、TreeSelectPro 和 UploadPro 这三个组件的使用方式，包括：
1. 每个组件的基本介绍
2. 代码示例
3. 详细的 API 文档
4. 组合使用示例

文档保持了原有的格式和风格，同时添加了新的内容。这些组件都可以作为 FormPro 的表单项使用，通过 valueType 来指定对应的组件类型。



## FAQ

### 1. 如何在表单提交前对数据进行处理？

```tsx
const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      beforeSubmit={(values) => {
        // 处理提交数据
        return {
          ...values,
          timestamp: Date.now()
        };
      }}
    />
  );
};
export default Demo;
```

### 2. 如何自定义表单验证消息？

```tsx
const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      fieldProps={{
        columns: [
          {
            title: '用户名',
            dataIndex: 'username',
            formItemProps: {
              rules: [
                {
                  required: true,
                  message: '请输入用户名！'
                }
              ]
            }
          }
        ]
      }}
    />
  );
};
export default Demo;
```

### 3. 如何处理表单详情数据？

```tsx
const Demo: FC = () => {
  return (
    <FormPro
      detailUrl="/api/detail"
      isEdit={true}
      detailSetData={(data) => {
        // 处理详情数据
        return {
          ...data,
          createTime: moment(data.createTime).format('YYYY-MM-DD')
        };
      }}
    />
  );
};
export default Demo;
```

### 4. 如何在表单提交成功后刷新页面？

```tsx
const Demo: FC = () => {
  return (
    <FormPro
      url="/api/submit"
      finishFun={(data, values) => {
        // 刷新页面或更新列表
        console.log('提交成功：', data);
        window.location.reload();
      }}
    />
  );
};
export default Demo;
```
