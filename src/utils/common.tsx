import request from "umi-request";
import {message} from "antd";

export const ajaxCommon = (url: string, params: object, callback: Function, isApi = true) => {
  let api_ = "";
  if (isApi) {
    api_ = "api";
  }

  return request.post(api_ + url, {data: params}).then((data) => {
    if (data.code == 0) {
      callback(data)
    } else {
      message.error(data.msg)
    }
  }).catch(function (error) {
    console.log(error);
  })
}

//通用处理Form的columns
export const commonFormHandler = (columns: any, ajax: any) => {
  for (let i of columns) {
    let proConfig = i.proConfig
    if (!i.request) {
      if (i.valueType === "select" || i.valueType === "treeSelect" ) {
        i.request = async (params: any, props: any) => {
          let arr: any = []
          console.log(33333, params)
          await ajax(proConfig.url, {...params, ...(typeof proConfig.params === "function" ? proConfig.params(params, props) : proConfig.params)}, (data: any) => {
            console.log(2222, data)
            arr = proConfig.setData(data)
          })
          return arr
        }
      }
    }
  }
  return columns
}
