import TreePro from '@/components/TreePro';
import { Tag } from 'antd';
import { FolderOutlined, FileOutlined } from '@ant-design/icons';

const CustomTitleRenderTree = () => (
  <TreePro
    url="/api/data/tree"
    fieldProps={{
      titleRender: (nodeData) => (
        <span>
          {nodeData.icon === 'folder' ? <FolderOutlined /> : <FileOutlined />}
          {nodeData.name}
          <Tag>{nodeData.status}</Tag>
        </span>
      ),
    }}
  />
);

export default CustomTitleRenderTree; 