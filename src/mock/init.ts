/**
 * Mock 服务初始化入口
 * 确保在浏览器环境中正确启动 Mock 服务
 */

// 检查是否在浏览器环境
const isBrowser = typeof window !== 'undefined';

// Mock 服务初始化状态
let mockServiceReady = false;

// 初始化 Mock 服务
export const initializeMockService = async (): Promise<boolean> => {
  if (!isBrowser) {
    console.warn('⚠️ Mock 服务只能在浏览器环境中运行');
    return false;
  }

  if (mockServiceReady) {
    console.log('✅ Mock 服务已经初始化');
    return true;
  }

  try {
    // 动态导入 Mock.js
    const MockJS = await import('mockjs');
    
    // 设置 Mock 配置
    MockJS.default.setup({
      timeout: '300-800' // 模拟网络延迟
    });

    // 导入 API 定义
    await import('./api');
    
    mockServiceReady = true;
    
    // 输出启动信息
    console.log('%c🎭 Durians Mock Service Started!', 'color: #52c41a; font-weight: bold; font-size: 16px;');
    console.log('%c📡 Mock APIs are now intercepting requests...', 'color: #1890ff; font-weight: bold;');
    
    // 测试 Mock 服务
    setTimeout(() => {
      testMockService();
    }, 500);
    
    return true;
  } catch (error) {
    console.error('❌ Mock 服务初始化失败:', error);
    return false;
  }
};

// 测试 Mock 服务是否正常工作
const testMockService = async () => {
  try {
    const response = await fetch('/api/users?current=1&pageSize=5');
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Mock 服务测试成功:', data);
      console.log(`📊 测试数据: 获取到 ${data.data?.list?.length || 0} 条用户记录`);
    } else {
      console.warn('⚠️ Mock 服务测试失败: HTTP', response.status);
    }
  } catch (error) {
    console.error('❌ Mock 服务测试异常:', error);
  }
};

// 获取 Mock 服务状态
export const isMockServiceReady = (): boolean => {
  return mockServiceReady;
};

// 等待 Mock 服务就绪
export const waitForMockService = (timeout = 5000): Promise<boolean> => {
  return new Promise((resolve) => {
    if (mockServiceReady) {
      resolve(true);
      return;
    }

    const startTime = Date.now();
    const checkInterval = setInterval(() => {
      if (mockServiceReady) {
        clearInterval(checkInterval);
        resolve(true);
      } else if (Date.now() - startTime > timeout) {
        clearInterval(checkInterval);
        console.warn('⚠️ 等待 Mock 服务超时');
        resolve(false);
      }
    }, 100);
  });
};

// 自动初始化（在浏览器环境中）
if (isBrowser) {
  // 确保在 DOM 加载后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initializeMockService();
    });
  } else {
    // DOM 已经加载完成，立即初始化
    initializeMockService();
  }
}

export default {
  initializeMockService,
  isMockServiceReady,
  waitForMockService
};
