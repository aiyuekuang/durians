import {Button, message, Upload} from 'antd';
import React from 'react';
import {UploadOutlined} from "@ant-design/icons";


// 脚手架示例组件-uploadPro
const Index: React.FC<{
  /**
   * 名称
   * */
  title?: string;
  /**
   * antd上传自己的API
   * */
  fieldProps?: any;
  /**
   * URL
   * */
  url?: string;
  /**
   * 头部
   * */
  headers?: any;
  /**
   * 变化后的函数
   * */
  onChange?: any;
  /**
   * 接口请求完成后的数据处理
   * */
  setData?: any;
}> = ({title = "上传", fieldProps = {},url="/upload",headers={}}) => {

  const uploadProps = {
    name: 'file',
    action: url,
    headers: {
      // authorization: 'authorization-text',
      ...headers
    },
    onChange(info:any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} 上传成功`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
    },
  };

  return (
    <Upload {...fieldProps} {...uploadProps}>
      <Button icon={<UploadOutlined/>}>{title}</Button>
    </Upload>
  );
};

export default Index;
