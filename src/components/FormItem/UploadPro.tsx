import {Button, message, Upload} from 'antd';
import React, {useEffect, useState} from 'react';
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
  fieldPropsUpload?: any;
  /**
   * URL
   * */
  url?: string;
  /**
   * 变化后的函数
   * */
  onChange?: any;
  /**
   * 接口请求完成后的数据处理
   * */
  setData?: any;
  value?: any;
  ajaxSuccess?: any;
  ajaxError?: any;
}> = ({
        title = "上传", fieldPropsUpload = {}, url = "/upload", setData = () => {
  }, onChange = () => {
  }, value = [], ajaxSuccess = (data: any, callback = () => {
  }) => {
    if (data?.code === 0) {
      callback()
    }
  }, ajaxError = (data: any, callback = () => {
  }) => {
    if (data?.code !== 0) {
      callback()
    }
  }
      }) => {

  const [_fileList, _setFileList]: any = useState([])

  useEffect(() => {
    _setFileList(changeValue(value))
  }, []);


  const changeValue: any = (data: any) => {
    if (data && data.length) {
      if (typeof data === "string") {
        return JSON.parse(data)
      } else {
        return JSON.stringify(data)
      }
    } else {
      return data
    }
  }


  console.log(555, fieldPropsUpload, url, value)


  const uploadProps = {
    name: 'file',
    action: url,
    fileList: _fileList,
    onChange(info: any) {

      console.log(77877,info)
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        ajaxSuccess(info.file.response, (data: any) => {
          onChange(changeValue(info.fileList.map((data: any) => {
            return {
              ...data,
              url: setData(info.file.response)
            }
          })))
          message.success(`${info.file.name} 上传成功`);
        })
        ajaxError(info.file.response, (data: any) => {
          console.log(666,data)
          if(data){
            message.error(data.msg)
          }
        })
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} 上传失败`);
      }
      _setFileList(info.fileList)
    },
    ...fieldPropsUpload
  };

  return (
    <Upload  {...uploadProps}>
      <Button variant="solid" icon={<UploadOutlined/>}>{title}</Button>
    </Upload>
  );
};

export default Index;
