import request from "umi-request";
import { message } from "antd";

export const cloneDeep = (data: any) => {
  return JSON.parse(JSON.stringify(data))
}

export const objToSort = (data: any) => {
  const arr: any = []
  for (const i in data) {
    arr.push(`${i} ${data[i]}`)
  }
  return arr.join(",")
}

export const arrHasKey = (fn: Function, arr: any) => {
  let data_: any = null
  for (let i = 0; i < arr.length; i++) {
    const data = fn(arr[i])
    if (data) {
      data_ = {
        ...arr[i],
        proData: data
      }
      break;
    }
  }
  return data_
}

export const commonFormHandler = (columns: any, ajax: any) => {
  return columns.map((data: any) => {
    const _data = { ...data }
    // 判断是否需要做联动
    if (_data.proConfig?.link) {
      const link = _data.proConfig?.link
      _data.fieldProps = {
        ...(_data.fieldProps || {}),
        onChange: (value: any) => {
          console.log('value', value)
          ajax(link.url, { [link.params || "id"]: value }, (data_1: any) => {
            link.onChange(data_1.data, data)
          })
        }
      }
    }

    // 判断是否是关键词搜索
    if (_data.proConfig?.isKeyword) {
      _data.search = {
        transform: (value: any) => {
          return {
            [_data.proConfig.isKeyword]: value,
          };
        },
        ...(_data.search || {})
      }
    }

    return _data
  })
}

export const ajaxCommon = (url: string, params: object, callback: Function, isApi = true) => {
  let api_ = "";
  if (isApi) {
    api_ = "api";
  }

  return request(api_ + url, { method: 'POST', data: params })
    .then((data) => {
      // 检查响应数据格式，兼容mock数据格式
      if (data.code == 0 || data.success === true) {
        callback(data)
      } else {
        message.error(data.msg || data.message || '请求失败')
      }
    })
    .catch(function (error) {
      console.error('请求出错:', error);
      message.error('网络请求异常');
    })
}

// 加密函数
export const encrypted = (data: string): string => {
  // 简单的Base64编码作为加密示例
  try {
    return btoa(encodeURIComponent(data));
  } catch (error) {
    console.error('加密失败:', error);
    return data;
  }
};

// 解密函数
export const decrypted = (data: string): string => {
  // 简单的Base64解码作为解密示例
  try {
    return decodeURIComponent(atob(data));
  } catch (error) {
    console.error('解密失败:', error);
    return data;
  }
};

// 安全的JSON解析
export function safeJsonParse<T>(jsonString: string, defaultValue: T): T {
  try {
    const parsed = JSON.parse(jsonString);
    return parsed !== null ? parsed : defaultValue;
  } catch (error) {
    console.warn('JSON解析失败:', error);
    return defaultValue;
  }
}

// 防抖函数
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) {
  let timeoutId: NodeJS.Timeout;

  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// 节流函数
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) {
  let lastCall = 0;

  return function (...args: Parameters<T>) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
