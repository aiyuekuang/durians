# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- 完整的 TypeScript 类型定义
- 单元测试覆盖
- 改进的错误处理机制
- 新的工具函数：`debounce`, `throttle`, `safeJsonParse`
- 本地存储工具函数
- 常量配置文件
- 完善的文档和示例

### Changed
- 重构组件架构，移除循环依赖
- 优化组件性能，添加 React.memo
- 改进代码质量和可维护性
- 统一错误处理和日志记录
- 更新构建配置和开发工具链

### Fixed
- 修复 TablePro 组件的循环依赖问题
- 修复类型安全问题
- 改进组件的可访问性支持

### Security
- 改进密码加密函数的错误处理
- 添加输入验证和安全检查

## [0.0.103] - 2024-01-XX

### Added
- TablePro 高级表格组件
- FormPro 高级表单组件
- ModalPro 高级弹窗组件
- LoginPro 登录组件
- TreePro 树形组件
- 基础工具函数和样式

### Features
- 基于 Ant Design Pro 的组件库
- 支持 CRUD 操作
- 响应式设计
- 主题定制支持
