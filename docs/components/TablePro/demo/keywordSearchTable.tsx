const KeywordSearchTable = () => (
  <TablePro
    url="/api/data/list"
    keywordField="keyword"
    keywordPlaceholder="请输入关键词搜索"
    fieldProps={{
      columns,
      rowKey: 'id',
    }}
  />
);

export default KeywordSearchTable; 