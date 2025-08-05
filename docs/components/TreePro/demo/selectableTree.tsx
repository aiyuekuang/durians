import TreePro from '@/components/TreePro';

const SelectableTree = () => (
  <TreePro
    url="/api/data/tree"
    fieldProps={{
      onSelect: (selectedKeys, info) => {
        console.log('选中的节点:', selectedKeys);
        console.log('节点信息:', info);
      },
    }}
  />
);

export default SelectableTree; 