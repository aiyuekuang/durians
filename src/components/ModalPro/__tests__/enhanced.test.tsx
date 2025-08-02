import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from 'antd';
import ModalPro from '../index';

describe('ModalPro Enhanced Features', () => {
  it('should support keyboard navigation', async () => {
    const user = userEvent.setup();
    
    render(
      <ModalPro 
        title="Test Modal" 
        keyboardNavigation={true}
      >
        <Button>Open Modal</Button>
      </ModalPro>
    );
    
    const trigger = screen.getByRole('button');
    
    // 测试 Enter 键
    await user.type(trigger, '{Enter}');
    await waitFor(() => {
      expect(screen.getByText('Test Modal')).toBeInTheDocument();
    });
  });

  it('should support custom keyboard event handling', async () => {
    const mockKeyDown = jest.fn();
    
    render(
      <ModalPro 
        title="Test Modal" 
        onKeyDown={mockKeyDown}
      >
        <Button>Open Modal</Button>
      </ModalPro>
    );
    
    const trigger = screen.getByRole('button');
    fireEvent.keyDown(trigger, { key: 'Tab' });
    
    expect(mockKeyDown).toHaveBeenCalledWith(
      expect.objectContaining({ key: 'Tab' })
    );
  });

  it('should support confirm on close', async () => {
    const user = userEvent.setup();
    
    render(
      <ModalPro 
        title="Test Modal" 
        confirmOnClose={true}
        confirmCloseText="Are you sure?"
      >
        <Button>Open Modal</Button>
      </ModalPro>
    );
    
    // 打开弹窗
    await user.click(screen.getByText('Open Modal'));
    
    await waitFor(() => {
      expect(screen.getByText('Test Modal')).toBeInTheDocument();
    });
    
    // 尝试关闭弹窗
    await user.click(screen.getByText('取消'));
    
    // 应该显示确认对话框
    await waitFor(() => {
      expect(screen.getByText('确认关闭')).toBeInTheDocument();
    });
  });

  it('should support auto focus', async () => {
    const user = userEvent.setup();
    
    render(
      <div>
        <ModalPro 
          title="Test Modal" 
          autoFocus="[data-testid='auto-focus-element']"
          Content={() => (
            <div>
              <input data-testid="auto-focus-element" placeholder="Auto focus" />
            </div>
          )}
        >
          <Button>Open Modal</Button>
        </ModalPro>
      </div>
    );
    
    await user.click(screen.getByText('Open Modal'));
    
    await waitFor(() => {
      const input = screen.getByPlaceholderText('Auto focus');
      expect(input).toHaveFocus();
    }, { timeout: 200 });
  });

  it('should support mask closable configuration', async () => {
    const user = userEvent.setup();
    
    render(
      <ModalPro 
        title="Test Modal" 
        maskClosable={false}
      >
        <Button>Open Modal</Button>
      </ModalPro>
    );
    
    await user.click(screen.getByText('Open Modal'));
    
    await waitFor(() => {
      expect(screen.getByText('Test Modal')).toBeInTheDocument();
    });
    
    // 点击遮罩层不应该关闭弹窗
    const modal = document.querySelector('.ant-modal-wrap');
    if (modal) {
      fireEvent.click(modal);
      
      // 弹窗应该仍然存在
      expect(screen.getByText('Test Modal')).toBeInTheDocument();
    }
  });

  it('should maintain backward compatibility', async () => {
    const user = userEvent.setup();
    const mockHandleOk = jest.fn((callback) => callback());
    
    // 使用旧的 API
    render(
      <ModalPro 
        title="Legacy Modal" 
        handleOk={mockHandleOk}
      >
        <Button>Open Modal</Button>
      </ModalPro>
    );
    
    await user.click(screen.getByText('Open Modal'));
    
    await waitFor(() => {
      expect(screen.getByText('Legacy Modal')).toBeInTheDocument();
    });
    
    await user.click(screen.getByText('确定'));
    
    expect(mockHandleOk).toHaveBeenCalled();
  });

  it('should handle enhanced props gracefully', () => {
    // 测试所有新增属性都是可选的
    expect(() => {
      render(
        <ModalPro 
          title="Enhanced Modal"
          keyboardNavigation={true}
          draggable={true}
          resizable={true}
          maximizable={true}
          fullscreen={true}
          maskClosable={false}
          confirmOnClose={true}
          confirmCloseText="Custom confirm text"
          autoFocus="#test-element"
          animation={{
            enter: 'fadeIn',
            exit: 'fadeOut',
            duration: 300,
          }}
        >
          <Button>Open Modal</Button>
        </ModalPro>
      );
    }).not.toThrow();
  });

  it('should render with default enhanced values', () => {
    render(
      <ModalPro>
        <Button>Default Modal</Button>
      </ModalPro>
    );
    
    expect(screen.getByText('Default Modal')).toBeInTheDocument();
  });
});
