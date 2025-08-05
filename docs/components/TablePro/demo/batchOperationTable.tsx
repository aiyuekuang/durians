import { Button } from 'antd';

const BatchOperationTable = () => (
  <TablePro
    url="/api/data/list"
    deleteUrl="/api/data/batchDelete"
    fieldProps={{
      columns,
      rowKey: 'id',
    }}
    tableAlertOptionRenderPro={[
      ({ selectedRowKeys, selectedRows, onCleanSelected }) => (
        <Button
          key="batchExport"
          onClick={() => handleBatchExport(selectedRows)}
        >
          批量导出
        </Button>
      ),
      ({ selectedRowKeys, selectedRows, onCleanSelected }) => (
        <Button
          key="batchUpdate"
          onClick={() => handleBatchUpdate(selectedRows)}
        >
          批量更新
        </Button>
      ),
    ]}
  />
);

export default BatchOperationTable; 