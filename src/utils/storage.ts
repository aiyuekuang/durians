/**
 * 本地存储工具函数
 */

/**
 * 设置 localStorage
 * @param key 键名
 * @param value 值
 */
export const setLocalStorage = (key: string, value: any): void => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Failed to set localStorage:', error);
  }
};

/**
 * 获取 localStorage
 * @param key 键名
 * @param defaultValue 默认值
 * @returns 存储的值或默认值
 */
export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    if (item === null) {
      return defaultValue;
    }
    return JSON.parse(item);
  } catch (error) {
    console.error('Failed to get localStorage:', error);
    return defaultValue;
  }
};

/**
 * 删除 localStorage
 * @param key 键名
 */
export const removeLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Failed to remove localStorage:', error);
  }
};

/**
 * 清空 localStorage
 */
export const clearLocalStorage = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Failed to clear localStorage:', error);
  }
};

/**
 * 设置 sessionStorage
 * @param key 键名
 * @param value 值
 */
export const setSessionStorage = (key: string, value: any): void => {
  try {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Failed to set sessionStorage:', error);
  }
};

/**
 * 获取 sessionStorage
 * @param key 键名
 * @param defaultValue 默认值
 * @returns 存储的值或默认值
 */
export const getSessionStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = sessionStorage.getItem(key);
    if (item === null) {
      return defaultValue;
    }
    return JSON.parse(item);
  } catch (error) {
    console.error('Failed to get sessionStorage:', error);
    return defaultValue;
  }
};

/**
 * 删除 sessionStorage
 * @param key 键名
 */
export const removeSessionStorage = (key: string): void => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error('Failed to remove sessionStorage:', error);
  }
};

/**
 * 清空 sessionStorage
 */
export const clearSessionStorage = (): void => {
  try {
    sessionStorage.clear();
  } catch (error) {
    console.error('Failed to clear sessionStorage:', error);
  }
};

// 兼容旧版本的函数名
export const cun = setLocalStorage;
export const quObj = getLocalStorage;
export const cuns = setSessionStorage;
