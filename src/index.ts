import "./styles/index.less";

// 初始化简化的 Mock 服务
import './mock/simple';

// 组件导出
export { default as TablePro } from './components/TablePro';
export { default as ModalPro } from './components/ModalPro';
export { default as LoginPro } from './components/LoginPro';
export { default as FormPro } from './components/FormPro';
export { default as TreePro } from './components/TreePro';

// 类型导出
export type {
  TableProProps,
  FormProProps,
  ModalProProps,
  LoginProProps,
  TreeProProps,
  AjaxFunction,
  DataProcessor,
  LocalProTableProps,
  Columns,
  ColumnConfig,
  VirtualScrollOptions,
  CacheOptions,
  ErrorRetryOptions,
  DataTransformOptions,
  AccessibilityOptions,
  PerformanceMonitoringOptions,
} from './types';

// 工具函数导出
export {
  ajaxCommon,
  commonFormHandler,
  encrypted,
  decrypted,
  arrHasKey,
  safeJsonParse,
  debounce,
  throttle,
} from './utils/common';

// Hooks 导出
export { useErrorHandler } from './hooks/useErrorHandler';
export { useAsyncOperation } from './hooks/useAsyncOperation';

export {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  clearSessionStorage,
  cun,
  quObj,
  cuns,
} from './utils/storage';

// 常量导出
export { DEFAULT_CONFIG, API_STATUS, MESSAGE_TYPE, FORM_LAYOUT_TYPE, LOGIN_TYPE } from './utils/constants';
