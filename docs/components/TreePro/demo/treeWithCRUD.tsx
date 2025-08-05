import TreePro from '@/components/TreePro';

const TreeWithCRUD = () => (
  <TreePro
    url="/api/department/tree"
    addUrl="/api/department/add"
    editUrl="/api/department/edit"
    deleteUrl="/api/department/delete"
    fieldProps={{
      fieldNames: { title: 'name', key: 'id', children: 'children' },
    }}
  />
);

export default TreeWithCRUD; 