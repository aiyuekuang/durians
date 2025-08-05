import TreePro from '@/components/TreePro';

const DisabledOperationsTree = () => (
  <TreePro
    url="/api/data/tree"
    detail={false} // 禁用详情查看
    addUrl={null}  // 禁用新增
    editUrl={null} // 禁用编辑
    deleteUrl={null} // 禁用删除
  />
);

export default DisabledOperationsTree; 