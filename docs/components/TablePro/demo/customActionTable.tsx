import { Button } from 'antd';

const CustomActionTable = () => (
  <TablePro
    url="/api/data/list"
    fieldProps={{
      columns,
      rowKey: 'id',
    }}
    actionBar={[
      ({ record }) => (
        <Button
          type="link"
          onClick={() => handleCustomAction(record)}
        >
          自定义操作
        </Button>
      ),
      ({ record }) => (
        <Button
          type="link"
          danger
          onClick={() => handleSpecialDelete(record)}
        >
          特殊删除
        </Button>
      ),
    ]}
  />
);

export default CustomActionTable; 