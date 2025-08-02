---
title: Mock 数据系统
order: 4
nav:
  title: Mock 数据
  order: 4
---

# Mock 数据系统

Durians 组件库内置了完整的 Mock 数据系统，为开发和演示提供真实的数据模拟。

## 🎯 系统特性

### 自动启用
- 开发环境自动启用 Mock 服务
- 生产环境自动禁用
- 支持环境变量控制：`REACT_APP_MOCK=true`

### 完整的 CRUD 操作
- 支持增删改查操作
- 分页、搜索、排序功能
- 数据持久化（会话级别）
- 真实的网络延迟模拟

### 丰富的数据类型
- 用户管理数据
- 产品管理数据
- 组织架构数据
- 登录认证数据

## 📋 可用的 Mock API

### 用户管理 API

#### 获取用户列表
```
GET /api/users?current=1&pageSize=10&keyword=搜索关键词
```

**响应示例：**
```json
{
  "code": 200,
  "success": true,
  "data": {
    "list": [
      {
        "id": 1,
        "name": "张三",
        "email": "zhangsan@example.com",
        "phone": "13800138000",
        "department": "技术部",
        "position": "前端工程师",
        "status": 1,
        "createTime": "2024-01-01 10:00:00"
      }
    ],
    "total": 50,
    "current": 1,
    "pageSize": 10
  },
  "msg": "操作成功"
}
```

#### 创建用户
```
POST /api/users
Content-Type: application/json

{
  "name": "李四",
  "email": "lisi@example.com",
  "phone": "13900139000",
  "department": "产品部",
  "position": "产品经理"
}
```

#### 更新用户
```
PUT /api/users/1
Content-Type: application/json

{
  "name": "张三（更新）",
  "email": "zhangsan_new@example.com"
}
```

#### 删除用户
```
DELETE /api/users/1
```

#### 批量删除用户
```
DELETE /api/users/batch
Content-Type: application/json

{
  "idList": [1, 2, 3]
}
```

### 产品管理 API

#### 获取产品列表
```
GET /api/products?current=1&pageSize=10&keyword=搜索关键词&category=分类
```

**响应示例：**
```json
{
  "code": 200,
  "success": true,
  "data": {
    "list": [
      {
        "id": 1,
        "name": "iPhone 15",
        "description": "苹果最新款智能手机",
        "price": 5999.00,
        "category": "电子产品",
        "brand": "Apple",
        "stock": 100,
        "sales": 500,
        "rating": 4.8,
        "images": ["https://example.com/image1.jpg"],
        "status": 1
      }
    ],
    "total": 30,
    "current": 1,
    "pageSize": 10
  }
}
```

#### 创建产品
```
POST /api/products
Content-Type: application/json

{
  "name": "新产品",
  "description": "产品描述",
  "price": 299.99,
  "category": "电子产品",
  "brand": "品牌名称",
  "stock": 50
}
```

### 部门管理 API

#### 获取部门树
```
GET /api/departments
```

**响应示例：**
```json
{
  "code": 200,
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "技术部",
      "code": "TECH",
      "manager": "张三",
      "phone": "13800138000",
      "email": "tech@example.com",
      "children": [
        {
          "id": 2,
          "name": "前端组",
          "code": "FE",
          "manager": "李四",
          "parentId": 1
        }
      ]
    }
  ]
}
```

#### 创建部门
```
POST /api/departments
Content-Type: application/json

{
  "name": "新部门",
  "code": "NEW",
  "manager": "负责人",
  "parentId": 1
}
```

### 树形选择 API

#### 获取树形选择数据
```
GET /api/tree?keyword=搜索关键词
```

**响应示例：**
```json
{
  "code": 200,
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "技术部",
      "value": "1",
      "key": "1",
      "children": [
        {
          "id": 11,
          "title": "前端组",
          "value": "11",
          "key": "11",
          "children": [
            {
              "id": 111,
              "title": "React 团队",
              "value": "111",
              "key": "111"
            }
          ]
        }
      ]
    }
  ]
}
```

#### 获取简化树形选择数据
```
GET /api/treeSelect?keyword=搜索关键词
```

**响应示例：**
```json
{
  "code": 200,
  "success": true,
  "data": [
    {
      "label": "技术部",
      "value": "tech",
      "children": [
        {
          "label": "前端组",
          "value": "frontend"
        }
      ]
    }
  ]
}
```

#### 获取组织架构树
```
GET /api/orgTree
```

**响应示例：**
```json
{
  "code": 200,
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "总公司",
      "type": "company",
      "children": [
        {
          "id": "1-1",
          "name": "技术部",
          "type": "department",
          "children": [
            {
              "id": "1-1-1",
              "name": "张三",
              "type": "user",
              "position": "前端工程师",
              "email": "zhangsan@example.com"
            }
          ]
        }
      ]
    }
  ]
}
```

### 登录认证 API

#### 用户登录
```
POST /api/login
Content-Type: application/json

{
  "username": "admin",
  "password": "123456"
}
```

**测试账号：**
- 管理员：`admin` / `123456`
- 普通用户：`user` / `123456`

**响应示例：**
```json
{
  "code": 200,
  "success": true,
  "data": {
    "id": 1,
    "username": "admin",
    "name": "管理员",
    "email": "admin@example.com",
    "avatar": "https://example.com/avatar.jpg",
    "roles": ["admin"],
    "permissions": ["*"],
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "msg": "登录成功"
}
```

#### 获取用户信息
```
GET /api/userinfo
Authorization: Bearer <token>
```

#### 用户退出
```
POST /api/logout
```

## 🔧 使用方式

### 在组件中使用

Mock 数据会自动拦截对应的 API 请求，无需额外配置：

```tsx
import { TablePro } from 'durians';

// 这个请求会被 Mock 拦截并返回模拟数据
<TablePro url="/api/users" />
```

### 自定义 Mock 数据

如果需要自定义 Mock 数据，可以修改 `src/mock/` 目录下的文件：

```typescript
// src/mock/api.ts
Mock.mock('/api/custom', 'get', () => {
  return createResponse({
    message: '自定义数据'
  });
});
```

### 控制 Mock 启用

通过环境变量控制 Mock 服务：

```bash
# 启用 Mock
REACT_APP_MOCK=true npm run dev

# 禁用 Mock
REACT_APP_MOCK=false npm run dev
```

## 📊 数据结构

### 用户数据结构
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  department: string;
  position: string;
  status: 0 | 1; // 0: 禁用, 1: 启用
  gender: 'male' | 'female';
  age: number;
  address: string;
  createTime: string;
  updateTime: string;
  salary: number;
  experience: number;
}
```

### 产品数据结构
```typescript
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  stock: number;
  sales: number;
  rating: number;
  images: string[];
  status: 0 | 1 | 2; // 0: 下架, 1: 上架, 2: 缺货
  createTime: string;
  updateTime: string;
}
```

### 部门数据结构
```typescript
interface Department {
  id: number;
  name: string;
  code: string;
  manager: string;
  phone: string;
  email: string;
  description: string;
  createTime: string;
  parentId: number;
  sort: number;
  status: 0 | 1;
  children?: Department[];
}
```

## 🎨 特性说明

### 真实的数据生成
- 使用 Mock.js 生成真实的中文姓名、地址、邮箱等
- 符合中国用户习惯的数据格式
- 合理的数据关联和约束

### 完整的业务逻辑
- 支持分页、搜索、排序
- 数据验证和错误处理
- 符合 RESTful API 规范

### 开发友好
- 自动启用，无需手动配置
- 控制台输出 API 列表
- 支持热更新和实时调试

Mock 数据系统让您可以在没有后端 API 的情况下，完整体验 Durians 组件库的所有功能！
