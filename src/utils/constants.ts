// 默认配置常量
export const DEFAULT_CONFIG = {
  // TablePro 默认配置
  TABLE_PRO: {
    DELETE_FIELDS: 'idList',
    DELETE_FIELD: 'id',
    DELETE_FIELD_IS_ARR: false,
    DELETE_PARAMS: {},
    DELETE_BATCH_HIDDEN: false,
    ACTION_WIDTH: 100,
    ADD_TEXT: '新增',
    EDIT_TEXT: '编辑',
    DELETE_TEXT: '删除',
    DETAIL_TEXT: '详情',
    HAS_ADD: true,
    HAS_EDIT: true,
    HAS_DELETE: true,
    HAS_DETAIL: true,
    HAS_LEFT_TREE: false,
    KEYWORD_PLACEHOLDER: '请输入关键词搜索',
  },

  // FormPro 默认配置
  FORM_PRO: {
    LAYOUT_TYPE: 'ModalForm',
    IS_EDIT: false,
  },

  // ModalPro 默认配置
  MODAL_PRO: {
    TITLE: '基础',
  },

  // LoginPro 默认配置
  LOGIN_PRO: {
    HAS_SMS_LOGIN: false,
    HAS_ACCOUNT_LOGIN: true,
    USERNAME_FIELD: 'username',
    PASSWORD_FIELD: 'password',
    PHONE_FIELD: 'phone',
    CAPTCHA_FIELD: 'captcha',
    TOKEN_FIELD: 'token',
    AUTO_LOGIN: 'autoLogin',
    EXTRA_PASSWORD_TEXT: '',
  },

  // TreePro 默认配置
  TREE_PRO: {
    TITLE: '选择',
    DELETE_FIELDS: 'idList',
    DELETE_FIELD: 'id',
    DELETE_FIELD_IS_ARR: false,
    DELETE_PARAMS: {},
    EDIT_FIELD: 'id',
    IS_SELECT: false,
    DETAIL: true,
    ROW_KEY: 'id',
    IS_LOAD_DATA: false,
    FIELD_NAMES: { title: 'title', key: 'key', children: 'children' },
  },
} as const;

// API 响应状态码
export const API_STATUS = {
  SUCCESS: 0,
  ERROR: 1,
} as const;

// 消息类型
export const MESSAGE_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
} as const;

// 表单布局类型
export const FORM_LAYOUT_TYPE = {
  MODAL: 'ModalForm',
  DRAWER: 'DrawerForm',
} as const;

// 登录类型
export const LOGIN_TYPE = {
  ACCOUNT: 'account',
  PHONE: 'phone',
} as const;
