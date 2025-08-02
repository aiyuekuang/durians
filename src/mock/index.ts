import Mock from 'mockjs';

// 配置 Mock
Mock.setup({
  timeout: '200-600' // 模拟网络延迟
});

// 通用响应格式
const createResponse = (data: any, message = '操作成功') => ({
  code: 200,
  data,
  msg: message,
  success: true,
  timestamp: Date.now()
});

const createErrorResponse = (message = '操作失败', code = 500) => ({
  code,
  data: null,
  msg: message,
  success: false,
  timestamp: Date.now()
});

// 用户数据模板
const userTemplate = {
  'id|+1': 1,
  'name': '@cname',
  'email': '@email',
  'phone': /^1[3-9]\d{9}$/,
  'avatar': '@image("100x100", "@color", "@cname")',
  'department': '@pick(["技术部", "产品部", "运营部", "市场部", "人事部"])',
  'position': '@pick(["前端工程师", "后端工程师", "产品经理", "UI设计师", "测试工程师"])',
  'status|1': [0, 1], // 0: 禁用, 1: 启用
  'gender|1': ['male', 'female'],
  'age|18-65': 25,
  'address': '@county(true)',
  'createTime': '@datetime',
  'updateTime': '@datetime',
  'salary|5000-50000': 8000,
  'experience|1-10': 3
};

// 产品数据模板
const productTemplate = {
  'id|+1': 1,
  'name': '@ctitle(5, 15)',
  'description': '@cparagraph(1, 3)',
  'price|100-9999.2': 299.99,
  'category': '@pick(["电子产品", "服装鞋帽", "家居用品", "图书音像", "运动户外"])',
  'brand': '@pick(["Apple", "Samsung", "Huawei", "Xiaomi", "Nike", "Adidas"])',
  'stock|0-1000': 100,
  'sales|0-10000': 500,
  'rating|1-5.1': 4.5,
  'images': ['@image("300x300")', '@image("300x300")', '@image("300x300")'],
  'status|1': [0, 1, 2], // 0: 下架, 1: 上架, 2: 缺货
  'createTime': '@datetime',
  'updateTime': '@datetime'
};

// 部门/组织架构数据模板
const departmentTemplate = {
  'id|+1': 1,
  'name': '@pick(["技术部", "产品部", "运营部", "市场部", "人事部", "财务部"])',
  'code': '@word(3, 5)',
  'manager': '@cname',
  'phone': /^1[3-9]\d{9}$/,
  'email': '@email',
  'description': '@cparagraph(1, 2)',
  'createTime': '@datetime',
  'parentId|0-3': 0,
  'sort|1-100': 1,
  'status|1': [0, 1]
};

// 存储数据
let userData: any[] = [];
let productData: any[] = [];
let departmentData: any[] = [];

// 初始化数据
const initData = () => {
  // 生成用户数据
  userData = Mock.mock({
    'list|50': [userTemplate]
  }).list;

  // 生成产品数据
  productData = Mock.mock({
    'list|30': [productTemplate]
  }).list;

  // 生成部门数据
  const departments = Mock.mock({
    'list|10': [departmentTemplate]
  }).list;

  // 构建树形结构
  departmentData = buildTree(departments);
};

// 构建树形结构
const buildTree = (list: any[]) => {
  const rootNodes: any[] = [];
  const nodeMap: Record<number, any> = {};

  // 创建节点映射
  list.forEach(item => {
    nodeMap[item.id] = { ...item, children: [] };
  });

  // 构建树结构
  list.forEach(item => {
    if (item.parentId === 0) {
      rootNodes.push(nodeMap[item.id]);
    } else {
      const parent = nodeMap[item.parentId];
      if (parent) {
        parent.children.push(nodeMap[item.id]);
      }
    }
  });

  return rootNodes;
};

// 分页处理
const paginate = (data: any[], current = 1, pageSize = 10) => {
  const start = (current - 1) * pageSize;
  const end = start + pageSize;
  return {
    list: data.slice(start, end),
    total: data.length,
    current,
    pageSize
  };
};

// 搜索过滤
const filterData = (data: any[], keyword: string, fields: string[]) => {
  if (!keyword) return data;
  return data.filter(item =>
    fields.some(field =>
      item[field] && item[field].toLowerCase().includes(keyword.toLowerCase())
    )
  );
};

// 排序处理
const sortData = (data: any[], sortField: string | null, sortOrder: 'asc' | 'desc' | undefined) => {
  if (!sortField || !sortOrder) return data;

  return [...data].sort((a, b) => {
    const aVal = a[sortField];
    const bVal = b[sortField];

    if (aVal < bVal) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (aVal > bVal) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });
};

// 树形数据过滤
const filterTreeData = (tree: any[], keyword: string): any[] => {
  if (!keyword) return tree;

  return tree.reduce((filtered: any[], node: any) => {
    const matchesKeyword = node.title?.toLowerCase().includes(keyword.toLowerCase()) ||
                          node.name?.toLowerCase().includes(keyword.toLowerCase());
    const filteredChildren = node.children ? filterTreeData(node.children, keyword) : [];

    if (matchesKeyword || filteredChildren.length > 0) {
      filtered.push({
        ...node,
        children: filteredChildren.length > 0 ? filteredChildren : node.children
      });
    }

    return filtered;
  }, []);
};

// 初始化数据
initData();

// 确保在浏览器环境中初始化 Mock
if (typeof window !== 'undefined') {
  // 动态导入并初始化 API
  import('./api').then(() => {
    console.log('%c🎭 Mock 服务初始化完成', 'color: #52c41a; font-weight: bold;');
  }).catch(error => {
    console.error('❌ Mock API 导入失败:', error);
  });
}

export {
  createResponse,
  createErrorResponse,
  userData,
  productData,
  departmentData,
  paginate,
  filterData,
  sortData,
  userTemplate,
  productTemplate
};