---
title: Table 表格
group:
  title: 通用
  order: 1
---

# TablePro 高级表格


```jsx
/**
 * title: demo预览
 */

import {TablePro} from "durians";


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
      width:"100%",
      overflow:"hidden"
    }}>

      <TablePro
        className={"xlb_table_demo"}
        // rowHeight={200}
        bordered={true}
        rowKey={"key"}
        columns={[
          {
            title: 'Full Name',
            dataIndex: 'name',
            width: 100,
            key: 'name',
            sorter:true,
            fixed: 'left',
            align:"center"
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
            sorter:true,

            children:[
              {
                title: 'Name1',
                width: 100,
                dataIndex: 'name1',
                key: 'name',
                sorter:true,
                children:[
                  {
                    title: 'Name3',
                    width: 100,
                    dataIndex: 'name3',
                    key: 'name',
                    sorter:true,
                  }]
              },{
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
          // {
          //   title: 'Column 2',
          //   dataIndex: '2',
          //   key: '2',
          //   width: 150,
          // },
          // {
          //   title: 'Column 3',
          //   dataIndex: '3',
          //   key: '3',
          //   width: 150,
          // },
          // {
          //   title: 'Column 4',
          //   dataIndex: '4',
          //   key: '4',
          //   width: 150,
          // },
          // {
          //   title: 'Column 5',
          //   dataIndex: '5',
          //   key: '5',
          //   width: 150,
          // },
          // {
          //   title: 'Column 6',
          //   dataIndex: '6',
          //   key: '6',
          //   width: 150,
          // },
          // {
          //   title: 'Column 7',
          //   dataIndex: '7',
          //   key: '7',
          //   width: 150,
          // },
          // {title: 'Column 8', dataIndex: '8', key: '8'},
          // {
          //   title: 'Action',
          //   dataIndex: 'operation',
          //   key: 'operation',
          //   width: 100,
          //   render: () => <a>action</a>,
          // },
        ]}
        dataSource={data}
      />
    </div>
  );
};
```
