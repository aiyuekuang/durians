import TreePro from '@/components/TreePro';

const SearchableTree = () => (
  <TreePro
    url="/api/data/tree"
    fieldProps={{
      fieldNames: { title: 'name', key: 'id', children: 'children' },
      showSearch: true,
      filterTreeNode: (inputValue, treeNode) => {
        return treeNode.title.indexOf(inputValue) !== -1;
      },
    }}
  />
);

export default SearchableTree; 