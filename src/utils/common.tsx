import request from "umi-request";
import {message} from "antd";
import CryptoJS from "crypto-js";

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
      if (i.valueType === "select" || i.valueType === "treeSelect") {
        i.request = async (params: any, props: any) => {
          console.log(22122,params,proConfig.params)
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
