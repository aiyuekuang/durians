import React from 'react';
import ModalPro from '@/components/ModalPro';
import { Button, Image, Space } from 'antd';

const ImagePreviewModal = () => {
  const ImageContent = () => (
    <div>
      <h3>图片预览</h3>
      <Space wrap>
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt="示例图片1"
        />
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt="示例图片2"
        />
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          alt="示例图片3"
        />
      </Space>
    </div>
  );

  return (
    <ModalPro
      title="图片预览"
      Content={ImageContent}
      fieldProps={{
        width: 800,
        footer: null,
      }}
    >
      <Button type="primary">查看图片</Button>
    </ModalPro>
  );
};

export default ImagePreviewModal; 