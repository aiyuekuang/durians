/**
 * 简化的 Mock 数据系统
 * 确保在浏览器中正常工作
 */

// 检查是否在浏览器环境
if (typeof window !== 'undefined') {
  // 动态导入 Mock.js
  import('mockjs').then((Mock) => {
    const MockJS = Mock.default;
    
    // 配置 Mock
    MockJS.setup({
      timeout: '200-600'
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

    // 生成用户数据
    const generateUsers = (count = 50) => {
      const users = [];
      for (let i = 1; i <= count; i++) {
        users.push({
          id: i,
          name: MockJS.Random.cname(),
          email: MockJS.Random.email(),
          phone: MockJS.Random.string('number', 11),
          department: MockJS.Random.pick(['技术部', '产品部', '运营部', '市场部', '人事部']),
          position: MockJS.Random.pick(['前端工程师', '后端工程师', '产品经理', 'UI设计师', '测试工程师']),
          status: MockJS.Random.pick([0, 1]),
          createTime: MockJS.Random.datetime(),
          updateTime: MockJS.Random.datetime(),
          avatar: MockJS.Random.image('100x100'),
          age: MockJS.Random.integer(22, 60),
          address: MockJS.Random.county(true)
        });
      }
      return users;
    };

    // 用户数据
    let userData = generateUsers(50);

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
    const filterData = (data: any[], keyword: string) => {
      if (!keyword) return data;
      return data.filter(item => 
        item.name.includes(keyword) || 
        item.email.includes(keyword) ||
        item.department.includes(keyword)
      );
    };

    // 用户列表 API
    MockJS.mock(/\/api\/users(\?.*)?$/, 'get', (options: any) => {
      console.log('🌐 Mock API: GET /api/users');
      
      const url = new URL(options.url, 'http://localhost');
      const current = parseInt(url.searchParams.get('current') || '1');
      const pageSize = parseInt(url.searchParams.get('pageSize') || '10');
      const keyword = url.searchParams.get('keyword') || '';

      let filteredData = filterData(userData, keyword);
      const result = paginate(filteredData, current, pageSize);

      console.log(`📊 返回用户数据: ${result.list.length}/${result.total} 条记录`);
      return createResponse(result);
    });

    // 创建用户 API
    MockJS.mock('/api/users', 'post', (options: any) => {
      console.log('🌐 Mock API: POST /api/users');
      
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
        
        const newUser = {
          id: userData.length + 1,
          ...body,
          createTime: new Date().toISOString(),
          updateTime: new Date().toISOString(),
          avatar: MockJS.Random.image('100x100')
        };
        
        userData.unshift(newUser);
        console.log(`✅ 用户创建成功: ${newUser.name}`);
        return createResponse(newUser, '用户创建成功');
      } catch (error) {
        console.error('❌ 创建用户失败:', error);
        return createErrorResponse('请求数据格式错误', 400);
      }
    });

    // 更新用户 API
    MockJS.mock(/\/api\/users\/(\d+)$/, 'put', (options: any) => {
      console.log('🌐 Mock API: PUT /api/users/:id');
      
      try {
        const id = parseInt(options.url.match(/\/api\/users\/(\d+)$/)[1]);
        const body = JSON.parse(options.body);
        const userIndex = userData.findIndex(item => item.id === id);
        
        if (userIndex !== -1) {
          userData[userIndex] = {
            ...userData[userIndex],
            ...body,
            updateTime: new Date().toISOString()
          };
          console.log(`✅ 用户更新成功: ${userData[userIndex].name}`);
          return createResponse(userData[userIndex], '用户更新成功');
        } else {
          return createErrorResponse('用户不存在', 404);
        }
      } catch (error) {
        console.error('❌ 更新用户失败:', error);
        return createErrorResponse('请求数据格式错误', 400);
      }
    });

    // 删除用户 API
    MockJS.mock(/\/api\/users\/(\d+)$/, 'delete', (options: any) => {
      console.log('🌐 Mock API: DELETE /api/users/:id');
      
      const id = parseInt(options.url.match(/\/api\/users\/(\d+)$/)[1]);
      const userIndex = userData.findIndex(item => item.id === id);
      
      if (userIndex !== -1) {
        const deletedUser = userData.splice(userIndex, 1)[0];
        console.log(`✅ 用户删除成功: ${deletedUser.name}`);
        return createResponse(null, '用户删除成功');
      } else {
        return createErrorResponse('用户不存在', 404);
      }
    });

    // 批量删除用户 API
    MockJS.mock('/api/users/batch', 'delete', (options: any) => {
      console.log('🌐 Mock API: DELETE /api/users/batch');
      
      try {
        const body = JSON.parse(options.body);
        const { idList } = body;
        
        if (Array.isArray(idList)) {
          let deletedCount = 0;
          idList.forEach(id => {
            const index = userData.findIndex(item => item.id === id);
            if (index !== -1) {
              userData.splice(index, 1);
              deletedCount++;
            }
          });
          console.log(`✅ 批量删除成功: ${deletedCount} 个用户`);
          return createResponse(null, `成功删除 ${deletedCount} 个用户`);
        } else {
          return createErrorResponse('参数错误', 400);
        }
      } catch (error) {
        console.error('❌ 批量删除失败:', error);
        return createErrorResponse('请求数据格式错误', 400);
      }
    });

    // 树形数据 API
    MockJS.mock(/\/api\/tree(\?.*)?$/, 'get', () => {
      console.log('🌐 Mock API: GET /api/tree');
      
      const treeData = [
        {
          id: 1,
          title: '技术部',
          value: '1',
          key: '1',
          children: [
            { id: 11, title: '前端组', value: '11', key: '11' },
            { id: 12, title: '后端组', value: '12', key: '12' },
          ]
        },
        {
          id: 2,
          title: '产品部',
          value: '2',
          key: '2',
          children: [
            { id: 21, title: '产品设计', value: '21', key: '21' },
            { id: 22, title: '产品运营', value: '22', key: '22' },
          ]
        }
      ];
      
      return createResponse(treeData);
    });

    // 登录 API
    MockJS.mock('/api/login', 'post', (options: any) => {
      console.log('🌐 Mock API: POST /api/login');
      
      try {
        const body = JSON.parse(options.body);
        const { username, password } = body;
        
        if (username === 'admin' && password === '123456') {
          const userInfo = {
            id: 1,
            username: 'admin',
            name: '管理员',
            email: 'admin@example.com',
            avatar: MockJS.Random.image('100x100'),
            roles: ['admin'],
            permissions: ['*'],
            token: MockJS.Random.string('upper', 32)
          };
          console.log('✅ 登录成功: admin');
          return createResponse(userInfo, '登录成功');
        } else {
          return createErrorResponse('用户名或密码错误', 401);
        }
      } catch (error) {
        console.error('❌ 登录失败:', error);
        return createErrorResponse('请求数据格式错误', 400);
      }
    });

    // 输出启动信息
    console.log('%c🎭 Durians Mock Service Started!', 'color: #52c41a; font-weight: bold; font-size: 16px;');
    console.log('%c📡 Mock APIs are ready:', 'color: #1890ff; font-weight: bold;');
    console.log('  🔹 GET    /api/users - 获取用户列表');
    console.log('  🔹 POST   /api/users - 创建用户');
    console.log('  🔹 PUT    /api/users/:id - 更新用户');
    console.log('  🔹 DELETE /api/users/:id - 删除用户');
    console.log('  🔹 DELETE /api/users/batch - 批量删除');
    console.log('  🔹 GET    /api/tree - 获取树形数据');
    console.log('  🔹 POST   /api/login - 用户登录');
    console.log('%c💡 打开浏览器开发者工具查看 Mock 请求日志', 'color: #faad14;');

  }).catch(error => {
    console.error('❌ Mock 服务启动失败:', error);
  });
}
