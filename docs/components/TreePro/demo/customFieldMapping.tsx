import TreePro from '@/components/TreePro';

const customTreeData = [
  {
    key: '1',
    title: '根节点1',
    children: [
      {
        key: '1-1',
        title: '子节点1-1',
      },
    ],
  },
];

// 使用自定义字段映射
const CustomFieldMappingTree = () => (
  <TreePro
    url="/api/custom/tree"
    fieldProps={{
      fieldNames: { title: 'title', key: 'key', children: 'children' },
    }}
  />
);

export default CustomFieldMappingTree; 