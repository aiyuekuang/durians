import request from "umi-request";
import {message, Space, Tag} from "antd";
import CryptoJS from "crypto-js";
import React from "react";

export const ajaxCommon = (url: string, params: object, callback: Function, error=(data:any)=>{}) => {


  return request.post(url, {data: params}).then((data:any) => {
    if (data.code == 0) {
      callback(data)
    } else {
      error(data)
      message.error(data.msg)
    }
  }).catch(function (error) {
    error(error)
    console.log(error);
  })
}

//通用处理Form的columns
export const commonFormHandler = (columns: any, ajax: any) => {
  for (let i of columns) {
    let proConfig = i?.proConfig
    // 处理一下搜索框时，上面搜索就不要了，因为参数一致，会冲突导致上面的失效
    if(proConfig?.isKeyword){
      i.hideInSearch = true
    }



    // 树形和下拉的特殊处理
    if (!i.request) {
      if (i.valueType === "select" || i.valueType === "treeSelect") {

        // 选择多的时候，只在当前行展示最多的标签个数
        i.fieldProps={
          maxTagCount:'responsive',
          ...i.fieldProps
        }

        i.request = async (params: any, props: any) => {
          let arr: any = []
          await ajax(proConfig.url, {...params, ...(typeof proConfig.params === "function" ? proConfig.params(params, props) : (proConfig.params || {}))}, (data: any) => {
            arr = proConfig.setData(data)
          })
          return arr
        }
      }
    }
  }
  return columns
}


export const encrypted = (value: string, secretValue: string, ivValue: string) => {
  let secret = CryptoJS.enc.Utf8.parse(secretValue);
  let iv = CryptoJS.enc.Utf8.parse(ivValue);
  // 加密
  return CryptoJS.AES.encrypt(value, secret, {
    // iv: iv,
    // mode 支持 CBC, CFB,CTB,ECB,OFB,OFB, 默认CBC
    mode: CryptoJS.mode.ECB,

    // NoPadding, zeropadding 默认Pkcs7 即 pkcs5
    padding: CryptoJS.pad.Pkcs7
  }).toString();
}


// 解密，传入密文，密钥盒向量设置加密与填充模式
let decrypted = (encrypted: string, secretValue: string, ivValue: string) => {
  let secret = CryptoJS.enc.Utf8.parse(secretValue);
  let iv = CryptoJS.enc.Utf8.parse(ivValue);
  return CryptoJS.AES.decrypt(encrypted, secret, {
    // iv: iv,
    // mode 支持 CBC, CFB,CTB,ECB,OFB,OFB, 默认CBC
    mode: CryptoJS.mode.ECB,
    // NoPadding, zeropadding 默认Pkcs7 即 pkcs5
    padding: CryptoJS.pad.Pkcs7
  });
}

//根据提供的字段判断数组中是否包含
export const arrHasKey = (key:any,arr:any=[])=>{
  return arr.find((data: any) => {
    return key(data)
  })
}
