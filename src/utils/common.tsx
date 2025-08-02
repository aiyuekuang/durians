import request from "umi-request";
import { message } from "antd";
import CryptoJS from "crypto-js";
import { API_STATUS } from "./constants";
import type { AjaxFunction } from "../types";

/**
 * 通用的 Ajax 请求函数
 * @param url 请求地址
 * @param params 请求参数
 * @param callback 成功回调
 * @param errorCallback 错误回调
 * @returns Promise
 */
export const ajaxCommon: AjaxFunction = (
  url: string,
  params: Record<string, any>,
  callback: (data: any) => void,
  errorCallback = (data: any) => {
    console.error('Ajax request failed:', data);
  }
) => {
  if (!url) {
    console.warn("请求URL不能为空");
    return Promise.reject(new Error("请求URL不能为空"));
  }

  return request.post(url, { data: params })
    .then((data: any) => {
      if (data.code === API_STATUS.SUCCESS) {
        callback(data);
      } else {
        errorCallback(data);
        message.error(data.msg || '请求失败');
      }
      return data;
    })
    .catch((error) => {
      errorCallback(error);
      console.error('Ajax request error:', error);
      message.error('网络请求失败，请稍后重试');
      throw error;
    });
};

/**
 * 通用处理Form的columns
 * @param columns 列配置
 * @param ajax Ajax请求函数
 * @param isEdit 是否为编辑模式
 * @returns 处理后的列配置
 */
export const commonFormHandler = (columns: any[], ajax: AjaxFunction, isEdit = false) => {
  if (!Array.isArray(columns)) {
    console.warn('columns should be an array');
    return [];
  }

  return columns.map(column => {
    const proConfig = column?.proConfig;
    let fieldProps = { ...column.fieldProps };

    // 处理搜索框时，上面搜索就不要了，因为参数一致，会冲突导致上面的失效
    if (proConfig?.isKeyword) {
      column.hideInSearch = true;
    }

    // 是否允许编辑，并且要是false，不是空
    if (column.editable === false) {
      fieldProps = {
        ...fieldProps,
        disabled: isEdit
      };
    }

    // 树形和下拉的特殊处理
    if (!column.request && proConfig?.url) {
      if (column.valueType === "select" || column.valueType === "treeSelect") {
        // 选择多的时候，只在当前行展示最多的标签个数
        fieldProps = {
          ...fieldProps,
          maxTagCount: 'responsive',
          ...column.fieldProps,
        };

        column.request = async (params: any, props: any) => {
          try {
            let arr: any[] = [];
            const requestParams = {
              ...params,
              ...(typeof proConfig.params === "function"
                ? proConfig.params(params, props)
                : (proConfig.params || {}))
            };

            await ajax(proConfig.url, requestParams, (data: any) => {
              arr = proConfig.setData ? proConfig.setData(data) : data;
            });

            return arr;
          } catch (error) {
            console.error('Failed to load options:', error);
            return [];
          }
        };
      }
    }

    return {
      ...column,
      fieldProps
    };
  });
};


/**
 * AES 加密函数
 * @param value 要加密的值
 * @param secretValue 密钥
 * @param ivValue 初始向量（当前实现中未使用）
 * @returns 加密后的字符串
 */
export const encrypted = (value: string, secretValue: string, ivValue?: string): string => {
  try {
    const secret = CryptoJS.enc.Utf8.parse(secretValue);
    // 使用 ECB 模式加密
    const encrypted = CryptoJS.AES.encrypt(value, secret, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  } catch (error) {
    console.error('Encryption failed:', error);
    throw new Error('加密失败');
  }
};

/**
 * AES 解密函数
 * @param encryptedValue 要解密的密文
 * @param secretValue 密钥
 * @param ivValue 初始向量（当前实现中未使用）
 * @returns 解密后的字符串
 */
export const decrypted = (encryptedValue: string, secretValue: string, ivValue?: string): string => {
  try {
    const secret = CryptoJS.enc.Utf8.parse(secretValue);
    const decrypted = CryptoJS.AES.decrypt(encryptedValue, secret, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error('Decryption failed:', error);
    throw new Error('解密失败');
  }
};

/**
 * 根据提供的条件判断数组中是否包含符合条件的元素
 * @param predicate 判断条件函数
 * @param arr 要搜索的数组
 * @returns 找到的第一个符合条件的元素，如果没有找到则返回 undefined
 */
export const arrHasKey = <T>(predicate: (item: T) => boolean, arr: T[] = []): T | undefined => {
  if (!Array.isArray(arr)) {
    console.warn('arrHasKey: arr should be an array');
    return undefined;
  }

  return arr.find(predicate);
};

/**
 * 安全的 JSON 解析
 * @param jsonString JSON 字符串
 * @param defaultValue 解析失败时的默认值
 * @returns 解析结果或默认值
 */
export const safeJsonParse = <T>(jsonString: string, defaultValue: T): T => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.warn('JSON parse failed:', error);
    return defaultValue;
  }
};

/**
 * 防抖函数
 * @param func 要防抖的函数
 * @param delay 延迟时间（毫秒）
 * @returns 防抖后的函数
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * 节流函数
 * @param func 要节流的函数
 * @param delay 延迟时间（毫秒）
 * @returns 节流后的函数
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

//{roles: 'descend'}
//  将这个对象拆成{sortBy:"roles",sortOrder:"descend"}
export const objToSort = (obj: any) => {
  let sortBy = Object.keys(obj)[0]
  let sortOrder = obj[sortBy]
  return {sortBy, sortOrder}
}
