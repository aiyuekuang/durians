import TreePro from '@/components/TreePro';

const LazyLoadTree = () => (
  <TreePro
    url="/api/department/tree"
    addUrl="/api/department/add"
    editUrl="/api/department/edit"
    deleteUrl="/api/department/delete"
    isLoadData={true}
    fieldProps={{
      fieldNames: { title: 'name', key: 'id', children: 'children' },
    }}
  />
);

export default LazyLoadTree; 