import TreePro from '@/components/TreePro';

const CustomContextMenuTree = () => (
  <TreePro
    url="/api/data/tree"
    fieldProps={{
      fieldNames: { title: 'name', key: 'id', children: 'children' },
      // 自定义右键菜单
      onRightClick: ({ node, event }) => {
        console.log('右键点击节点:', node);
        // 可以在这里显示自定义右键菜单
      },
    }}
  />
);

export default CustomContextMenuTree; 