---
title: TablePro 高级表格
group:
  title: 组件
  order: 1
---

# TablePro 高级表格

TablePro 是一个基于 [Ant Design Pro Table](https://procomponents.ant.design/components/table) 的高级表格组件，提供了更丰富的功能和更简便的使用方式。集成了分页、搜索、筛选、树形选择、批量操作等特性，简化了表格的开发流程。

## 何时使用

- 需要展示大量结构化数据
- 需要对数据进行排序、搜索、筛选等操作
- 需要对数据进行增删改查
- 需要支持树形结构的数据展示
- 需要支持批量操作功能
- 需要自定义表格操作列
- 需要与服务端进行数据交互

## 基础示例

### 基础用法

```tsx
import { TablePro } from 'durians';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: 100,
    sorter: true,  
    fixed: 'left'
  },
  {
    title: '年龄', 
    dataIndex: 'age',
    width: 100
  },
  {
    title: '地址',
    dataIndex: 'address'
  }
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    id: i,
    name: `用户${i}`,
    age: Math.floor(Math.random() * 100),
    address: `地址${i}`
  });
}

const Demo = () => {
  return (
    <TablePro
      fieldProps={{
        rowKey: 'id',
        columns,
        dataSource: data
      }}
      addUrl="/api/add"
      editUrl="/api/edit"
      deleteUrl="/api/delete"
    />
  );
};

export default Demo;
```

### 树形选择表格

```tsx
import { TablePro } from 'durians';

const Demo = () => {
  return (
    <TablePro
      url="/api/list"
      treeFieldProps={{
        url: '/api/tree',
        fieldProps: {
          fieldNames: {
            title: 'name',
            key: 'id',
            children: 'children'
          }
        }
      }}
      fieldProps={{
        columns: [
          {
            title: '名称',
            dataIndex: 'name'
          },
          {
            title: '状态',
            dataIndex: 'status',
            valueEnum: {
              0: { text: '禁用', status: 'Error' },
              1: { text: '启用', status: 'Success' }
            }
          }
        ]
      }}
    />
  );
};

export default Demo;
```

### 自定义工具栏

```tsx
import { TablePro } from 'durians';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Demo = () => {
  return (
    <TablePro
      fieldProps={{
        toolBarRender: () => [
          <Button 
            key="export" 
            icon={<DownloadOutlined />}
            onClick={() => console.log('导出')}
          >
            导出数据
          </Button>
        ],
        columns: [
          // ...columns
        ]
      }}
    />
  );
};

export default Demo;
```

## API

### TablePro

继承自 [ProTable](https://procomponents.ant.design/components/table)，以下为额外增加或修改的属性：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ajax | 自定义请求方法 | `(url: string, params: object, callback: Function, isApi?: boolean) => void` | `ajaxCommon` |
| url | 数据接口地址 | `string` | - |
| addUrl | 新增表单提交地址 | `string` | - |
| editUrl | 编辑表单提交地址 | `string` | - |
| deleteUrl | 删除接口地址 | `string` | - |
| deleteField | 单个删除时的字段名 | `string` | 使用 rowKey 值 |
| deleteFields | 批量删除的字段名 | `string` | `'idList'` |
| deleteFieldIsArr | 单个删除时是否使用数组格式 | `boolean` | `false` |
| deleteParams | 删除接口的额外参数 | `object` | `{}` |
| deleteBatchHidden | 是否隐藏批量删除功能 | `boolean` | `false` |
| fieldProps | 表格相关配置，继承 ProTable 的 props | `ProTableProps & { columns: Columns }` | - |
| addFormProFieldProps | 新增/编辑表单的配置项 | `FormProProps` | `{}` |
| setData | 处理接口返回的数据 | `(response: any) => any[]` | `(data) => data?.data?.records` |
| setTotal | 处理接口返回的总数 | `(response: any) => number` | `(data) => data?.data?.total` |
| setMsg | 处理操作提示信息 | `(response: any) => string` | `(data) => data?.msg` |
| actionBar | 自定义操作列 | `((record: any) => ReactNode)[]` | `[]` |
| actionWidth | 操作列宽度 | `number` | `100` |
| paginationAlias | 分页参数别名 | `{ pageIndex: string; pageSize: string }` | `{ pageIndex: 'pageIndex', pageSize: 'pageSize' }` |
| tableAlertOptionRenderPro | 选中项工具栏 | `((props: { selectedRowKeys: any[], selectedRows: any[] }) => ReactNode)[]` | `[]` |
| treeFieldProps | 树形选择器配置，参考 TreePro 组件 | `TreeProProps` | `null` |
| treeWidth | 树形选择器宽度 | `number` | `200` |
| paramsFun | 请求参数处理函数 | `(params: any) => any` | `(params) => params` |
| treeParamsFun | 树选择参数处理函数 | `(selectedKeys: string[]) => any` | `(keys) => ({ treeId: keys })` |
| keywordField | 关键词搜索字段 | `string` | - |
| keywordPlaceholder | 关键词搜索占位文案 | `string` | - |

### 类型定义

```typescript
interface TableProColumn extends ProColumns {
  proConfig?: {
    url?: string;
    setData?: (response: any) => any;
    isKeyword?: boolean;
  }
}

interface TableProProps {
  columns: TableProColumn[];
  dataSource?: any[];
  rowKey?: string | ((record: any) => string);
  pagination?: false | TablePaginationConfig;
  loading?: boolean | SpinProps;
  search?: false | SearchConfig;
  // ...继承自 ProTable 的其他属性
}
```

### 依赖说明

- [antd](https://ant.design/) ^5.0.0
- [@ant-design/pro-components](https://procomponents.ant.design/) ^2.0.0
- [lodash-es](https://lodash.com/docs) ^4.17.21

## FAQ

### 1. 如何自定义请求方法？

```tsx
import { TablePro } from 'durians';
import axios from 'axios';

const Demo = () => {
  const customRequest = async (url, params, callback) => {
    try {
      const res = await axios.post(url, params);
      if (res.data.code === 0) {
        callback(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TablePro
      ajax={customRequest}
      url="/api/list"
      fieldProps={{
        columns: [
          // ...columns
        ]
      }}
    />
  );
};

export default Demo;
```

### 2. 如何处理表格数据？

```tsx
import { TablePro } from 'durians';

const Demo = () => {
  return (
    <TablePro
      url="/api/list"
      setData={(response) => {
        return response.data.list.map(item => ({
          ...item,
          fullName: `${item.firstName} ${item.lastName}`
        }));
      }}
      setTotal={(response) => response.data.total}
      fieldProps={{
        columns: [
          // ...columns
        ]
      }}
    />
  );
};

export default Demo;
```

### 3. 如何添加自定义操作？

```tsx
import { TablePro } from 'durians';
import { Button, message } from 'antd';

const Demo = () => {
  return (
    <TablePro
      actionBar={[
        (record) => (
          <Button 
            type="link" 
            onClick={() => message.success(`查看详情：${record.id}`)}
          >
            查看
          </Button>
        ),
        (record) => (
          <Button
            type="link"
            danger
            onClick={() => message.success(`删除：${record.id}`)}
          >
            删除
          </Button>
        )
      ]}
      actionWidth={150}
      fieldProps={{
        columns: [
          // ...columns
        ]
      }}
    />
  );
};

export default Demo;
```

### 4. 如何实现树形数据与表格联动？

```tsx
import { TablePro } from 'durians';

const Demo = () => {
  return (
    <TablePro
      url="/api/list"
      treeFieldProps={{
        url: '/api/tree',
        fieldProps: {
          fieldNames: {
            title: 'name',
            key: 'id',
            children: 'children'
          }
        }
      }}
      treeParamsFun={(selectedKeys) => ({
        departmentId: selectedKeys[0]
      })}
      fieldProps={{
        columns: [
          // ...columns
        ]
      }}
    />
  );
};

export default Demo;
```

### 5. 如何使用关键词搜索？

```tsx
import { TablePro } from 'durians';

const Demo = () => {
  return (
    <TablePro
      keywordField="keyword"
      keywordPlaceholder="请输入关键词"
      fieldProps={{
        columns: [
          {
            title: '名称',
            dataIndex: 'name',
            proConfig: {
              isKeyword: true
            }
          }
          // ...other columns
        ]
      }}
    />
  );
};

export default Demo;
```
