import React, { useState } from 'react';
import TreePro from '@/components/TreePro';

const ExpandedKeysTree = () => {
  const [expandedKeys, setExpandedKeys] = useState(['1', '2']);

  return (
    <TreePro
      url="/api/data/tree"
      fieldProps={{
        expandedKeys,
        onExpand: (keys) => {
          setExpandedKeys(keys);
        },
      }}
    />
  );
};

export default ExpandedKeysTree; 