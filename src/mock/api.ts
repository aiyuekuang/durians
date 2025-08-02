import Mock from 'mockjs';
import {
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
} from './index';

// 配置 Mock 拦截
Mock.setup({
  timeout: '200-800' // 模拟真实网络延迟
});

// 添加请求日志
const logRequest = (url: string, method: string, body?: any) => {
  console.log(`%c🌐 Mock API: ${method.toUpperCase()} ${url}`, 'color: #722ed1; font-weight: bold;');
  if (body) {
    console.log('📤 Request Body:', JSON.parse(body));
  }
};

// ==================== 用户管理 API ====================

// 获取用户列表
Mock.mock(/\/api\/users(\?.*)?$/, 'get', (options: any) => {
  logRequest(options.url, 'GET');

  const url = new URL(options.url, 'http://localhost');
  const current = parseInt(url.searchParams.get('current') || '1');
  const pageSize = parseInt(url.searchParams.get('pageSize') || '10');
  const keyword = url.searchParams.get('keyword') || '';
  const sortField = url.searchParams.get('sortField');
  const sortOrder = url.searchParams.get('sortOrder') as 'asc' | 'desc';

  let filteredData = filterData(userData, keyword, ['name', 'email', 'department']);
  filteredData = sortData(filteredData, sortField, sortOrder);
  const result = paginate(filteredData, current, pageSize);

  console.log(`📊 返回用户数据: ${result.list.length}/${result.total} 条记录`);
  return createResponse(result);
});

// 获取用户详情
Mock.mock(/\/api\/users\/(\d+)$/, 'get', (options: any) => {
  const id = parseInt(options.url.match(/\/api\/users\/(\d+)$/)[1]);
  const user = userData.find(item => item.id === id);

  if (user) {
    return createResponse(user);
  } else {
    return createErrorResponse('用户不存在', 404);
  }
});

// 新增用户
Mock.mock('/api/users', 'post', (options: any) => {
  logRequest('/api/users', 'POST', options.body);

  try {
    const body = JSON.parse(options.body);

    // 验证必填字段
    if (!body.name || !body.email) {
      return createErrorResponse('姓名和邮箱为必填字段', 400);
    }

    // 检查邮箱是否已存在
    const existingUser = userData.find(user => user.email === body.email);
    if (existingUser) {
      return createErrorResponse('邮箱已存在', 409);
    }

    const newUser = Mock.mock({
      ...userTemplate,
      ...body,
      id: userData.length + 1,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    });

    userData.unshift(newUser);
    console.log(`✅ 用户创建成功: ${newUser.name} (${newUser.email})`);
    return createResponse(newUser, '用户创建成功');
  } catch (error) {
    console.error('❌ 创建用户失败:', error);
    return createErrorResponse('请求数据格式错误', 400);
  }
});

// 更新用户
Mock.mock(/\/api\/users\/(\d+)$/, 'put', (options: any) => {
  const id = parseInt(options.url.match(/\/api\/users\/(\d+)$/)[1]);
  const body = JSON.parse(options.body);
  const userIndex = userData.findIndex(item => item.id === id);

  if (userIndex !== -1) {
    userData[userIndex] = {
      ...userData[userIndex],
      ...body,
      updateTime: new Date().toISOString()
    };
    return createResponse(userData[userIndex], '用户更新成功');
  } else {
    return createErrorResponse('用户不存在', 404);
  }
});

// 删除用户
Mock.mock(/\/api\/users\/(\d+)$/, 'delete', (options: any) => {
  const id = parseInt(options.url.match(/\/api\/users\/(\d+)$/)[1]);
  const userIndex = userData.findIndex(item => item.id === id);

  if (userIndex !== -1) {
    userData.splice(userIndex, 1);
    return createResponse(null, '用户删除成功');
  } else {
    return createErrorResponse('用户不存在', 404);
  }
});

// 批量删除用户
Mock.mock('/api/users/batch', 'delete', (options: any) => {
  const body = JSON.parse(options.body);
  const { idList } = body;

  if (Array.isArray(idList)) {
    idList.forEach(id => {
      const index = userData.findIndex(item => item.id === id);
      if (index !== -1) {
        userData.splice(index, 1);
      }
    });
    return createResponse(null, `成功删除 ${idList.length} 个用户`);
  } else {
    return createErrorResponse('参数错误');
  }
});

// ==================== 产品管理 API ====================

// 获取产品列表
Mock.mock(/\/api\/products(\?.*)?$/, 'get', (options: any) => {
  const url = new URL(options.url, 'http://localhost');
  const current = parseInt(url.searchParams.get('current') || '1');
  const pageSize = parseInt(url.searchParams.get('pageSize') || '10');
  const keyword = url.searchParams.get('keyword') || '';
  const category = url.searchParams.get('category');

  let filteredData = filterData(productData, keyword, ['name', 'description', 'brand']);

  if (category) {
    filteredData = filteredData.filter(item => item.category === category);
  }

  const result = paginate(filteredData, current, pageSize);
  return createResponse(result);
});

// 新增产品
Mock.mock('/api/products', 'post', (options: any) => {
  const body = JSON.parse(options.body);
  const newProduct = Mock.mock({
    ...productTemplate,
    ...body,
    id: productData.length + 1,
    createTime: new Date().toISOString(),
    updateTime: new Date().toISOString()
  });

  productData.unshift(newProduct);
  return createResponse(newProduct, '产品创建成功');
});

// ==================== 部门管理 API ====================

// 获取部门树
Mock.mock('/api/departments', 'get', () => {
  return createResponse(departmentData);
});

// 获取部门详情
Mock.mock(/\/api\/departments\/(\d+)$/, 'get', (options: any) => {
  const id = parseInt(options.url.match(/\/api\/departments\/(\d+)$/)[1]);

  const findDepartment = (list: any[]): any => {
    for (const item of list) {
      if (item.id === id) return item;
      if (item.children) {
        const found = findDepartment(item.children);
        if (found) return found;
      }
    }
    return null;
  };

  const department = findDepartment(departmentData);

  if (department) {
    return createResponse(department);
  } else {
    return createErrorResponse('部门不存在', 404);
  }
});

// 新增部门
Mock.mock('/api/departments', 'post', (options: any) => {
  const body = JSON.parse(options.body);
  const newDepartment = Mock.mock({
    id: Date.now(),
    ...body,
    createTime: new Date().toISOString(),
    children: []
  });

  if (body.parentId) {
    // 添加到指定父部门
    const addToParent = (list: any[]): boolean => {
      for (const item of list) {
        if (item.id === body.parentId) {
          if (!item.children) item.children = [];
          item.children.push(newDepartment);
          return true;
        }
        if (item.children && addToParent(item.children)) {
          return true;
        }
      }
      return false;
    };
    addToParent(departmentData);
  } else {
    // 添加为根部门
    departmentData.push(newDepartment);
  }

  return createResponse(newDepartment, '部门创建成功');
});

// ==================== 树形选择 API ====================

// 获取树形选择数据（用于表格的树形选择功能）
Mock.mock(/\/api\/tree(\?.*)?$/, 'get', (options: any) => {
  const url = new URL(options.url, 'http://localhost');
  const keyword = url.searchParams.get('keyword') || '';

  // 生成树形选择数据
  const treeData = [
    {
      id: 1,
      title: '技术部',
      value: '1',
      key: '1',
      children: [
        {
          id: 11,
          title: '前端组',
          value: '11',
          key: '11',
          children: [
            { id: 111, title: 'React 团队', value: '111', key: '111' },
            { id: 112, title: 'Vue 团队', value: '112', key: '112' },
          ]
        },
        {
          id: 12,
          title: '后端组',
          value: '12',
          key: '12',
          children: [
            { id: 121, title: 'Java 团队', value: '121', key: '121' },
            { id: 122, title: 'Node.js 团队', value: '122', key: '122' },
          ]
        },
      ]
    },
    {
      id: 2,
      title: '产品部',
      value: '2',
      key: '2',
      children: [
        {
          id: 21,
          title: '产品设计组',
          value: '21',
          key: '21',
          children: [
            { id: 211, title: 'UI 设计师', value: '211', key: '211' },
            { id: 212, title: 'UX 设计师', value: '212', key: '212' },
          ]
        },
        {
          id: 22,
          title: '产品运营组',
          value: '22',
          key: '22',
          children: [
            { id: 221, title: '用户运营', value: '221', key: '221' },
            { id: 222, title: '内容运营', value: '222', key: '222' },
          ]
        },
      ]
    },
    {
      id: 3,
      title: '市场部',
      value: '3',
      key: '3',
      children: [
        {
          id: 31,
          title: '市场推广组',
          value: '31',
          key: '31',
          children: [
            { id: 311, title: '线上推广', value: '311', key: '311' },
            { id: 312, title: '线下推广', value: '312', key: '312' },
          ]
        },
        {
          id: 32,
          title: '商务合作组',
          value: '32',
          key: '32',
          children: [
            { id: 321, title: '渠道合作', value: '321', key: '321' },
            { id: 322, title: '品牌合作', value: '322', key: '322' },
          ]
        },
      ]
    },
  ];

  // 如果有搜索关键词，进行过滤
  const filterTree = (tree: any[], keyword: string): any[] => {
    if (!keyword) return tree;

    return tree.reduce((filtered: any[], node: any) => {
      const matchesKeyword = node.title.toLowerCase().includes(keyword.toLowerCase());
      const filteredChildren = node.children ? filterTree(node.children, keyword) : [];

      if (matchesKeyword || filteredChildren.length > 0) {
        filtered.push({
          ...node,
          children: filteredChildren.length > 0 ? filteredChildren : node.children
        });
      }

      return filtered;
    }, []);
  };

  const filteredData = filterTree(treeData, keyword);
  return createResponse(filteredData);
});

// 获取树形选择数据的另一种格式（兼容不同的调用方式）
Mock.mock(/\/api\/treeSelect(\?.*)?$/, 'get', (options: any) => {
  const url = new URL(options.url, 'http://localhost');
  const keyword = url.searchParams.get('keyword') || '';

  // 简化的树形数据格式
  const treeSelectData = [
    {
      label: '技术部',
      value: 'tech',
      children: [
        { label: '前端组', value: 'frontend' },
        { label: '后端组', value: 'backend' },
        { label: '测试组', value: 'qa' },
      ]
    },
    {
      label: '产品部',
      value: 'product',
      children: [
        { label: '产品设计', value: 'design' },
        { label: '产品运营', value: 'operation' },
      ]
    },
    {
      label: '市场部',
      value: 'marketing',
      children: [
        { label: '市场推广', value: 'promotion' },
        { label: '商务合作', value: 'business' },
      ]
    },
  ];

  // 搜索过滤
  const filterTreeSelect = (tree: any[], keyword: string): any[] => {
    if (!keyword) return tree;

    return tree.reduce((filtered: any[], node: any) => {
      const matchesKeyword = node.label.toLowerCase().includes(keyword.toLowerCase());
      const filteredChildren = node.children ? filterTreeSelect(node.children, keyword) : [];

      if (matchesKeyword || filteredChildren.length > 0) {
        filtered.push({
          ...node,
          children: filteredChildren.length > 0 ? filteredChildren : node.children
        });
      }

      return filtered;
    }, []);
  };

  const filteredData = filterTreeSelect(treeSelectData, keyword);
  return createResponse(filteredData);
});

// 获取组织架构树（用于人员选择等场景）
Mock.mock(/\/api\/orgTree(\?.*)?$/, 'get', (options: any) => {
  const orgTreeData = [
    {
      id: '1',
      name: '总公司',
      type: 'company',
      children: [
        {
          id: '1-1',
          name: '技术部',
          type: 'department',
          children: [
            {
              id: '1-1-1',
              name: '张三',
              type: 'user',
              position: '前端工程师',
              email: 'zhangsan@example.com'
            },
            {
              id: '1-1-2',
              name: '李四',
              type: 'user',
              position: '后端工程师',
              email: 'lisi@example.com'
            }
          ]
        },
        {
          id: '1-2',
          name: '产品部',
          type: 'department',
          children: [
            {
              id: '1-2-1',
              name: '王五',
              type: 'user',
              position: '产品经理',
              email: 'wangwu@example.com'
            }
          ]
        }
      ]
    }
  ];

  return createResponse(orgTreeData);
});

// ==================== 登录认证 API ====================

// 登录
Mock.mock('/api/login', 'post', (options: any) => {
  const body = JSON.parse(options.body);
  const { username, password } = body;

  // 模拟登录验证
  if (username === 'admin' && password === '123456') {
    const userInfo = {
      id: 1,
      username: 'admin',
      name: '管理员',
      email: 'admin@example.com',
      avatar: Mock.Random.image('100x100'),
      roles: ['admin'],
      permissions: ['*'],
      token: Mock.Random.string('upper', 32)
    };
    return createResponse(userInfo, '登录成功');
  } else if (username === 'user' && password === '123456') {
    const userInfo = {
      id: 2,
      username: 'user',
      name: '普通用户',
      email: 'user@example.com',
      avatar: Mock.Random.image('100x100'),
      roles: ['user'],
      permissions: ['read'],
      token: Mock.Random.string('upper', 32)
    };
    return createResponse(userInfo, '登录成功');
  } else {
    return createErrorResponse('用户名或密码错误', 401);
  }
});

// 获取用户信息
Mock.mock('/api/userinfo', 'get', () => {
  const userInfo = {
    id: 1,
    username: 'admin',
    name: '管理员',
    email: 'admin@example.com',
    avatar: Mock.Random.image('100x100'),
    roles: ['admin'],
    permissions: ['*']
  };
  return createResponse(userInfo);
});

// 退出登录
Mock.mock('/api/logout', 'post', () => {
  return createResponse(null, '退出成功');
});

export default Mock;
