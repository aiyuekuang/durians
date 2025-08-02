# 贡献指南

感谢您对 Durians 的关注和贡献！本指南将帮助您了解如何参与项目开发。

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0

### 本地开发

1. **Fork 并克隆仓库**

```bash
git clone https://github.com/your-username/durians.git
cd durians
```

2. **安装依赖**

```bash
npm install
# 或
yarn install
```

3. **启动开发服务器**

```bash
npm run dev
```

4. **运行测试**

```bash
npm run test
```

## 📝 开发流程

### 分支管理

- `main`: 主分支，用于发布稳定版本
- `develop`: 开发分支，用于集成新功能
- `feature/*`: 功能分支，用于开发新功能
- `bugfix/*`: 修复分支，用于修复 bug
- `hotfix/*`: 热修复分支，用于紧急修复

### 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**类型 (type):**
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建工具或辅助工具的变动

**示例:**
```
feat(TablePro): 添加批量操作功能

- 支持批量删除
- 支持批量编辑
- 添加选择状态管理

Closes #123
```

### 代码规范

1. **TypeScript**: 使用 TypeScript 编写代码，确保类型安全
2. **ESLint**: 遵循项目的 ESLint 配置
3. **Prettier**: 使用 Prettier 格式化代码
4. **测试**: 为新功能编写单元测试

### 开发步骤

1. **创建功能分支**

```bash
git checkout -b feature/your-feature-name
```

2. **编写代码**
   - 遵循代码规范
   - 添加必要的类型定义
   - 编写单元测试
   - 更新文档

3. **运行检查**

```bash
# 类型检查
npm run type-check

# 代码检查
npm run lint

# 测试
npm run test

# 格式化
npm run format
```

4. **提交代码**

```bash
git add .
git commit -m "feat: 添加新功能"
```

5. **推送分支**

```bash
git push origin feature/your-feature-name
```

6. **创建 Pull Request**

## 🧪 测试

### 运行测试

```bash
# 运行所有测试
npm run test

# 监听模式
npm run test:watch

# 生成覆盖率报告
npm run test:coverage
```

### 编写测试

- 为新组件编写单元测试
- 测试文件放在 `__tests__` 目录下
- 使用 Jest 和 React Testing Library
- 确保测试覆盖率不低于 80%

## 📚 文档

### 组件文档

- 使用 Dumi 编写组件文档
- 文档文件为 `index.md`
- 包含 API 说明和使用示例

### API 文档

- 使用 JSDoc 注释
- 包含参数说明、类型定义和示例

## 🐛 问题报告

### Bug 报告

请包含以下信息：

1. **环境信息**
   - 操作系统
   - Node.js 版本
   - 浏览器版本
   - 组件库版本

2. **重现步骤**
   - 详细的操作步骤
   - 预期结果
   - 实际结果

3. **代码示例**
   - 最小可重现示例
   - 相关配置

### 功能建议

请描述：

1. **功能描述**: 详细说明建议的功能
2. **使用场景**: 什么情况下需要这个功能
3. **解决方案**: 建议的实现方案
4. **替代方案**: 其他可能的解决方案

## 📋 发布流程

1. **更新版本号**

```bash
npm version patch|minor|major
```

2. **更新 CHANGELOG**
   - 记录新功能、修复和破坏性变更

3. **创建 Release**
   - 在 GitHub 创建 Release
   - 包含变更说明

4. **发布到 NPM**

```bash
npm publish
```

## 💡 最佳实践

1. **组件设计**
   - 遵循单一职责原则
   - 提供合理的默认值
   - 支持自定义配置

2. **性能优化**
   - 使用 React.memo 避免不必要的重渲染
   - 合理使用 useCallback 和 useMemo
   - 避免在渲染函数中创建对象

3. **可访问性**
   - 支持键盘导航
   - 提供合适的 ARIA 属性
   - 确保颜色对比度

4. **国际化**
   - 支持多语言
   - 使用语义化的文本

## 📞 联系我们

- 提交 Issue: [GitHub Issues](https://github.com/aiyuekuang/durians/issues)
- 讨论: [GitHub Discussions](https://github.com/aiyuekuang/durians/discussions)

感谢您的贡献！🎉
