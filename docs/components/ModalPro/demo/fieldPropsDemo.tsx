import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const fieldProps = {
  // 模态框宽度
  width: 600,
  // 模态框高度
  height: 400,
  // 是否显示遮罩层
  mask: true,
  // 遮罩层样式
  maskStyle: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  // 模态框样式
  style: { top: 20 },
  // 自定义底部按钮
  footer: [
    <Button key="cancel">取消</Button>,
    <Button key="submit" type="primary">确定</Button>,
  ],
  // 自定义关闭图标
  closeIcon: <CloseOutlined />,
  // 是否显示关闭按钮
  closable: true,
  // 模态框层级
  zIndex: 1000,
  // 是否支持 ESC 键关闭
  keyboard: true,
  // 是否在关闭时销毁子元素
  destroyOnClose: true,
  // 是否居中显示
  centered: false,
  // 模态框类名
  className: 'custom-modal',
  // 模态框内容类名
  wrapClassName: 'custom-modal-wrap',
};

export default fieldProps; 