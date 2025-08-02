/**
 * Mock 服务初始化
 * 确保在所有组件渲染前启用 Mock 数据拦截
 */

// 强制启用 Mock（在文档环境中）
const enableMock = true;

// Mock 服务状态
let mockInitialized = false;

// 初始化 Mock 服务
const initMockService = async () => {
  if (mockInitialized) {
    return;
  }

  try {
    // 确保在浏览器环境中运行
    if (typeof window !== 'undefined') {
      // 动态导入 Mock API
      await import('./api');

      mockInitialized = true;

      // 延迟输出，确保 Mock 完全初始化
      setTimeout(() => {
        console.log('%c🎭 Mock 服务已启动', 'color: #52c41a; font-weight: bold; font-size: 14px;');
        console.log('%c📋 可用的 Mock API:', 'color: #1890ff; font-weight: bold;');
        console.log('  🔹 GET    /api/users - 获取用户列表');
        console.log('  🔹 POST   /api/users - 创建用户');
        console.log('  🔹 PUT    /api/users/:id - 更新用户');
        console.log('  🔹 DELETE /api/users/:id - 删除用户');
        console.log('  🔹 DELETE /api/users/batch - 批量删除用户');
        console.log('  🔹 GET    /api/products - 获取产品列表');
        console.log('  🔹 POST   /api/products - 创建产品');
        console.log('  🔹 GET    /api/departments - 获取部门树');
        console.log('  🔹 POST   /api/departments - 创建部门');
        console.log('  🔹 GET    /api/tree - 获取树形选择数据');
        console.log('  🔹 GET    /api/treeSelect - 获取简化树形数据');
        console.log('  🔹 GET    /api/orgTree - 获取组织架构树');
        console.log('  🔹 POST   /api/login - 用户登录');
        console.log('  🔹 GET    /api/userinfo - 获取用户信息');
        console.log('  🔹 POST   /api/logout - 用户退出');
        console.log('%c💡 提示: 打开浏览器开发者工具的 Network 面板查看 Mock 请求', 'color: #faad14;');
      }, 100);
    }
  } catch (error) {
    console.error('❌ Mock 服务启动失败:', error);
  }
};

// 立即初始化
if (enableMock) {
  initMockService();
}

export { enableMock, initMockService };
