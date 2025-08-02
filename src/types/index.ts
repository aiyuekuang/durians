import { ProTableProps } from '@ant-design/pro-components';
import { PaginationProps } from 'antd';
import { ReactNode } from 'react';

// 通用的 Ajax 函数类型
export type AjaxFunction = (
  url: string,
  params: Record<string, any>,
  callback: (data: any) => void,
  errorCallback?: (error: any) => void
) => Promise<any>;

// 通用的数据处理函数类型
export type DataProcessor<T = any> = (data: any) => T;

// 扩展的 ProTable 属性类型
export type LocalProTableProps = Omit<ProTableProps<any, any>, 'pagination'> & {
  pagination?: PaginationProps;
} & any;

// 列配置类型
export type ColumnConfig = {
  proConfig?: {
    url?: string;
    setData?: DataProcessor;
    isKeyword?: boolean;
    params?: Record<string, any> | ((params: any, props: any) => Record<string, any>);
  };
};

export type Columns = LocalProTableProps['columns'] & ColumnConfig;

// 新增功能接口
export interface VirtualScrollOptions {
  /** 每行高度 */
  itemHeight?: number;
  /** 启用虚拟滚动的阈值 */
  threshold?: number;
  /** 缓冲区大小 */
  bufferSize?: number;
}

export interface CacheOptions {
  /** 是否启用缓存 */
  enabled?: boolean;
  /** 缓存时间（毫秒） */
  ttl?: number;
  /** 缓存键 */
  key?: string;
}

export interface ErrorRetryOptions {
  /** 是否启用重试 */
  enabled?: boolean;
  /** 最大重试次数 */
  maxRetries?: number;
  /** 重试延迟（毫秒） */
  retryDelay?: number;
}

export interface DataTransformOptions {
  /** 请求数据转换 */
  request?: (params: any) => any;
  /** 响应数据转换 */
  response?: (data: any) => { list: any[]; total: number };
}

export interface AccessibilityOptions {
  /** 是否启用键盘导航 */
  keyboardNavigation?: boolean;
  /** 是否宣布变更 */
  announceChanges?: boolean;
}

export interface PerformanceMonitoringOptions {
  /** 是否启用性能监控 */
  enabled?: boolean;
  /** 渲染时间回调 */
  onRenderTime?: (time: number) => void;
  /** 数据处理时间回调 */
  onDataProcessTime?: (time: number) => void;
}

// TablePro 组件属性类型（增强版）
export interface TableProProps<T = any> {
  /** 通用ajax实现方法 */
  ajax?: AjaxFunction;
  /** 获取数据的URL */
  url?: string;
  /** 新增数据的URL */
  addUrl?: string;
  /** 编辑数据的URL */
  editUrl?: string;
  /** 删除数据的URL */
  deleteUrl?: string;
  /** 批量删除数据的字段名 */
  deleteField?: string;
  /** 批量删除需要传递的字段 */
  deleteFields?: string;
  /** 单个删除的时候是不是需要传递数组 */
  deleteFieldIsArr?: boolean;
  /** 删除需要传递的额外参数 */
  deleteParams?: Record<string, any>;
  /** 隐藏批量删除 */
  deleteBatchHidden?: boolean;
  /** pro-table的props参数 */
  fieldProps?: Omit<LocalProTableProps, 'columns'> & {
    columns: Columns | ((type: 'table' | 'add') => Columns);
  };
  /** BetaSchemaForm的props参数 */
  addFormProFieldProps?: any;
  /** 获取查询数据后的中间件 */
  setData?: DataProcessor;
  /** 获取查询数据总数的中间件 */
  setTotal?: DataProcessor<number>;
  /** 新增表单提交成功后的消息处理 */
  setMsg?: DataProcessor<string>;
  /** 表格后面的操作组 */
  actionBar?: any[];
  /** 表格操作列的宽度 */
  actionWidth?: number;
  /** 额外的参数 */
  params?: Record<string, any>;
  /** 新增表单提交成功之后的回调 */
  finishFun?: (data: any, values: any) => void;
  /** 编辑字段上传接口的字段 */
  editField?: string;
  /** 是否有新增按钮 */
  hasAdd?: boolean;
  /** 是否有编辑按钮 */
  hasEdit?: boolean;
  /** 是否有删除按钮 */
  hasDelete?: boolean;
  /** 是否有详情按钮 */
  hasDetail?: boolean;
  /** 新增按钮的文字 */
  addText?: string;
  /** 编辑按钮的文字 */
  editText?: string;
  /** 删除按钮的文字 */
  deleteText?: string;
  /** 详情按钮的文字 */
  detailText?: string;
  /** 是否有左侧树 */
  hasLeftTree?: boolean;
  /** 左侧树的配置 */
  leftTreeConfig?: any;
  /** 选中的值 */
  value?: any;
  /** 选中值变化时的回调 */
  onSelectChange?: (value: any) => void;
  /** 关键词字段 */
  keywordField?: string;
  /** 关键词占位符 */
  keywordPlaceholder?: string;

  // 新增功能属性（可选，保持向后兼容）
  /** 是否启用虚拟滚动 */
  virtual?: boolean;
  /** 虚拟滚动配置 */
  virtualScrollOptions?: VirtualScrollOptions;
  /** 缓存配置 */
  cache?: CacheOptions;
  /** 错误重试配置 */
  errorRetry?: ErrorRetryOptions;
  /** 数据转换配置 */
  dataTransform?: DataTransformOptions;
  /** 可访问性配置 */
  accessibilityOptions?: AccessibilityOptions;
  /** 性能监控配置 */
  performanceMonitoring?: PerformanceMonitoringOptions;
  /** ARIA 标签 */
  ariaLabel?: string;
  /** ARIA 描述 */
  ariaDescribedBy?: string;
  /** 是否启用调试模式 */
  debug?: boolean;
  /** 调试信息回调 */
  onDebugInfo?: (info: any) => void;
  /** 国际化文本 */
  locale?: Record<string, string>;
}

// FormPro 组件属性类型
export interface FormProProps {
  /** 高级表单类型 */
  layoutType?: 'ModalForm' | 'DrawerForm';
  /** 表单的子组件 */
  children?: ReactNode;
  /** 高级表单自带的参数 */
  fieldProps?: any;
  /** 提交表单数据的 URL */
  url?: string;
  /** 获取表单详情数据的 URL */
  detailUrl?: string;
  /** 表单的初始数据 */
  record?: Record<string, any>;
  /** 自定义的 AJAX 请求函数 */
  ajax?: AjaxFunction;
  /** 表单提交成功后的回调函数 */
  finishFun?: (data: any, values: any) => void;
  /** 获取详情数据后的中间件 */
  detailSetData?: DataProcessor;
  /** 表单提交成功后的消息处理 */
  setMsg?: DataProcessor<string>;
  /** 是否为编辑模式 */
  isEdit?: boolean;
  /** 表单提交之前的钩子函数 */
  beforeSubmit?: (values: any, record: any, originalValues: any) => any;
}

// ModalPro 组件属性类型（增强版）
export interface ModalProProps {
  /** 标题 */
  title?: string;
  /** 点击OK的回调函数 */
  handleOk?: (callback: () => void) => void;
  /** 弹窗里的内容 */
  Content?: React.ComponentType<any> | ReactNode;
  /** 触发点击事件弹窗包裹的内容 */
  children?: ReactNode;
  /** antd中modal的fieldProps */
  fieldProps?: Record<string, any>;

  // 新增功能属性（可选，保持向后兼容）
  /** 是否启用键盘导航 */
  keyboardNavigation?: boolean;
  /** 自定义键盘事件处理 */
  onKeyDown?: (e: React.KeyboardEvent) => void;
  /** 是否可拖拽 */
  draggable?: boolean;
  /** 是否可调整大小 */
  resizable?: boolean;
  /** 最大化支持 */
  maximizable?: boolean;
  /** 全屏支持 */
  fullscreen?: boolean;
  /** 动画配置 */
  animation?: {
    enter?: string;
    exit?: string;
    duration?: number;
  };
  /** 是否启用遮罩层点击关闭 */
  maskClosable?: boolean;
  /** 自动聚焦元素选择器 */
  autoFocus?: string;
  /** 关闭时的确认提示 */
  confirmOnClose?: boolean;
  /** 确认关闭的提示文本 */
  confirmCloseText?: string;
}

// LoginPro 组件属性类型
export interface LoginProProps {
  /** 通用ajax实现方法 */
  ajax?: AjaxFunction;
  /** 点击登录的url */
  url?: string;
  /** 发送短信验证码的url */
  captchaUrl?: string;
  /** antd-pro登录表单的props */
  loginFormFieldProps?: Record<string, any>;
  /** 是否有短信登录模式 */
  hasSmsLogin?: boolean;
  /** 是否有账号密码登录模式 */
  hasAccountLogin?: boolean;
  /** 用户名字段名 */
  usernameField?: string;
  /** 密码字段名 */
  passwordField?: string;
  /** 手机号字段名 */
  phoneField?: string;
  /** 验证码字段名 */
  captchaField?: string;
  /** token字段名 */
  tokenField?: string;
  /** 自动登录字段名 */
  autoLogin?: string;
  /** 密码加密密钥 */
  secretKey?: string;
  /** 密码额外文本 */
  extraPasswordText?: string;
  /** 自定义加密函数 */
  encrypt?: (password: string) => string;
  /** 登录成功后的数据处理 */
  setData?: DataProcessor;
  /** 登录成功后的回调 */
  callback?: (data: any) => void;
}

// TreePro 组件属性类型
export interface TreeProProps {
  /** 名称 */
  title?: string;
  /** 表单的参数 */
  addFormProFieldProps?: any;
  /** 请求数据的ajax */
  ajax?: AjaxFunction;
  /** 获取数据的URL */
  url?: string;
  /** 获取详情数据的URL */
  detailUrl?: string;
  /** 新增的表单URL */
  addUrl?: string;
  /** 编辑的表单URL */
  editUrl?: string;
  /** 删除数据的URL */
  deleteUrl?: string;
  /** 批量删除数据的字段名 */
  deleteField?: string;
  /** 批量删除需要传递的字段 */
  deleteFields?: string;
  /** 单个删除的时候是不是需要传递数组 */
  deleteFieldIsArr?: boolean;
  /** 删除需要传递的额外参数 */
  deleteParams?: Record<string, any>;
  /** 获取查询数据后的中间件 */
  setData?: DataProcessor;
  /** 额外的参数 */
  params?: Record<string, any> | ((data: any) => Record<string, any>);
  /** 表单的字段属性 */
  fieldProps?: any;
  /** 设置消息的函数 */
  setMsg?: DataProcessor<string>;
  /** 编辑字段上传接口的字段 */
  editField?: string;
  /** 是否选择 */
  isSelect?: boolean;
  /** 是否显示详情 */
  detail?: boolean;
  /** 行的唯一标识字段 */
  rowKey?: string;
  /** 是否按需加载树子的数据 */
  isLoadData?: boolean;
}
