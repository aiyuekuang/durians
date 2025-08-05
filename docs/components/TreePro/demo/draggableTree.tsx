import TreePro from '@/components/TreePro';

const DraggableTree = () => (
  <TreePro
    url="/api/data/tree"
    fieldProps={{
      fieldNames: { title: 'name', key: 'id', children: 'children' },
      draggable: true,
      onDrop: (info) => {
        console.log('拖拽信息:', info);
        // 处理拖拽逻辑
      },
    }}
  />
);

export default DraggableTree; 