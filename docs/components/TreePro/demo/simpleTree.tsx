import TreePro from '@/components/TreePro';

const SimpleTree = () => (
  <TreePro
    url="/api/department/tree"
    fieldProps={{
      fieldNames: { title: 'name', key: 'id', children: 'children' },
    }}
  />
);

export default SimpleTree; 