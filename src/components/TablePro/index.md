---
title: TablePro 高级表格
group:
  title: 组件
  order: 1
---

# TablePro 高级表格

TablePro 是一个基于 [Ant Design Pro Table](https://procomponents.ant.design/components/table) 的高级表格组件，提供了更丰富的功能和更简便的使用方式。支持树形表格、批量操作、自定义工具栏等特性。

## 何时使用

- 需要展示大量结构化数据
- 需要对数据进行排序、搜索、筛选等操作
- 需要对数据进行增删改查
- 需要支持树形结构的数据展示
- 需要支持批量操作功能

## 代码示例

### 基础用法

以下示例展示了 TablePro 的基础用法，包括固定列、排序、多级表头等功能：

```jsx
/**
 * title: 基础使用
 */

import {TablePro,FormPro} from "durians";
import {useEffect} from "react";


/** 按钮组 */
export default () => {
  const onCancel = () => {
    console.log('取消');
  };
  const onOk = () => {
    console.log('确定');
  };
  const onClick = () => {
    console.log('点击');
  };


  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      key: i,
      name: `Edward ${i}`,
      age: i,
      address: `London Park no. ${i}`,
      name1: `London Park no. ${i}1111`,
      name2: `London Park no. ${i}2222`,
      name3: `London Park no. ${i}2222`,
    });
  }


  return (
    <div style={{
      width: "100%",
      overflow: "hidden"
    }}>

      <TablePro
        className={"xlb_table_demo"}
        bordered={true}
        fieldProps={{
          rowKey:"key",
          dataSource: data,
          columns: [
            {
              title: 'Full Name',
              dataIndex: 'name',
              width: 100,
              key: 'name',
              sorter: true,
              fixed: 'left',
              valueType:"treeSelectPro",
              align: "center"
              // },{
              //   title: 'Full Name222',
              //   dataIndex: 'age',
              //   align:"center",
              //   width: 100,
            },
            {
              title: 'Age',
              width: 100,
              dataIndex: 'age',
              key: 'age',
              sorter: true,
              children: [
                {
                  title: 'Name1',
                  width: 100,
                  dataIndex: 'name1',
                  key: 'name',
                  sorter: true,
                  children: [
                    {
                      title: 'Name3',
                      width: 100,
                      dataIndex: 'name3',
                      key: 'name',
                      sorter: true,
                    }]
                }, {
                  title: 'Name2',
                  width: 100,
                  dataIndex: 'name2',
                  key: 'name',
                },
              ]
            },
            {
              title: 'Column 1',
              dataIndex: 'address',
              key: '1',
              width: 500,
            },
            {
              title: 'Column 2',
              dataIndex: '2',
              key: '2',
              width: 150,
            },
            {
              title: 'Column 3',
              dataIndex: '3',
              key: '3',
              width: 150,
            },
            {
              title: 'Column 4',
              dataIndex: '4',
              key: '4',
              width: 150,
            },
            {
              title: 'Column 5',
              dataIndex: '5',
              key: '5',
              width: 150,
            },
            {
              title: 'Column 6',
              dataIndex: '6',
              key: '6',
              width: 150,
            },
            {
              title: 'Column 7',
              dataIndex: '7',
              key: '7',
              width: 150,
            },
            {title: 'Column 8', dataIndex: '8', key: '8'},
            {
              title: 'Action',
              dataIndex: 'operation',
              key: 'operation',
              width: 100,
              render: () => <a>action</a>,
            },
          ]
        }}
      />
    </div>
  );
};
```

### 带树形选择的表格

```tsx
import { TablePro } from 'durians';

const Demo: FC = () => {
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
            title: '年龄',
            dataIndex: 'age'
          }
        ]
      }}
    />
  );
};

export default Demo;
```

## API

### TablePro

```typescript
import { TablePro } from 'durians';
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| ajax | 通用请求方法 | `(url: string, params: object, callback: Function, isApi?: boolean) => void` | `ajaxCommon` |
| url | 数据接口地址 | `string` | - |
| addUrl | 新增接口地址 | `string` | - |
| editUrl | 编辑接口地址 | `string` | - |
| deleteUrl | 删除接口地址 | `string` | - |
| deleteField | 单个删除的字段名 | `string` | `'id'` |
| deleteFields | 批量删除的字段名 | `string` | `'idList'` |
| deleteFieldIsArr | 单个删除时是否传递数组 | `boolean` | `false` |
| deleteParams | 删除接口的额外参数 | `object` | `{}` |
| deleteBatchHidden | 是否隐藏批量删除功能 | `boolean` | `false` |
| fieldProps | 表格属性配置，继承自 [ProTable](https://procomponents.ant.design/components/table#protable) | `ProTableProps` | `{}` |
| addFormProFieldProps | 新增表单的属性配置 | `object` | `{}` |
| treeFieldProps | 树形选择器的配置，继承自 TreePro 组件 | `object` | `null` |
| treeWidth | 树形选择器的宽度 | `number` | `200` |
| keywordField | 关键词搜索字段 | `string` | - |
| keywordPlaceholder | 关键词搜索占位符 | `string` | - |

### 数据结构

```typescript
// 表格数据结构
interface TableListItem {
  id: string | number;
  [key: string]: any;
}

// 请求参数结构
interface RequestParams {
  pageIndex: number;
  pageSize: number;
  [key: string]: any;
}

// 响应数据结构
interface ResponseData {
  code: number;
  msg: string;
  data: {
    records: TableListItem[];
    total: number;
  };
}
```

### 依赖说明

- [Ant Design](https://ant.design/components/overview-cn/) - ^5.0.0
- [@ant-design/pro-components](https://procomponents.ant.design/) - ^2.0.0
- [lodash-es](https://www.npmjs.com/package/lodash-es) - ^4.17.21

## FAQ

### 1. 如何配置表格的列？

```tsx
const Demo: FC = () => {
  return (
    <TablePro
      fieldProps={{
        columns: [
          {
            title: '姓名',
            dataIndex: 'name',
            sorter: true,
            valueType: 'text'
          },
          {
            title: '年龄',
            dataIndex: 'age',
            valueType: 'digit'
          }
        ]
      }}
    />
  );
};
export default Demo;
```

### 2. 如何实现自定义操作列？

```tsx
const Demo: FC = () => {
  return (
    <TablePro
      actionBar={[
        ({ record }) => (
          <a onClick={() => console.log(record)}>
            查看详情
          </a>
        )
      ]}
      actionWidth={150}
    />
  );
};
export default Demo;
```

### 3. 如何实现批量操作？

```tsx
const Demo: FC = () => {
  return (
    <TablePro
      deleteUrl="/api/delete"
      tableAlertOptionRenderPro={[
        ({ selectedRowKeys, selectedRows }) => (
          <Button 
            onClick={() => console.log(selectedRowKeys, selectedRows)}
          >
            批量导出
          </Button>
        )
      ]}
    />
  );
};
export default Demo;
```

### 4. 如何使用树形表格？

```tsx
const Demo: FC = () => {
  return (
    <TablePro
      treeFieldProps={{
        url: '/api/tree',
        fieldProps: {
          onSelect: (keys) => console.log('选中的节点:', keys)
        }
      }}
      paramsFun={(params) => ({
        ...params,
        treeId: params.treeId
      })}
    />
  );
};
export default Demo;
```
