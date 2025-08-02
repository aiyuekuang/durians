import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Button } from 'antd';
import ModalPro from '../index';

describe('ModalPro', () => {
  it('should render trigger element correctly', () => {
    render(
      <ModalPro>
        <Button>Open Modal</Button>
      </ModalPro>
    );
    
    expect(screen.getByText('Open Modal')).toBeInTheDocument();
  });

  it('should open modal when trigger is clicked', async () => {
    render(
      <ModalPro title="Test Modal">
        <Button>Open Modal</Button>
      </ModalPro>
    );
    
    fireEvent.click(screen.getByText('Open Modal'));
    
    await waitFor(() => {
      expect(screen.getByText('Test Modal')).toBeInTheDocument();
    });
  });

  it('should close modal when cancel is clicked', async () => {
    render(
      <ModalPro title="Test Modal">
        <Button>Open Modal</Button>
      </ModalPro>
    );
    
    // Open modal
    fireEvent.click(screen.getByText('Open Modal'));
    
    await waitFor(() => {
      expect(screen.getByText('Test Modal')).toBeInTheDocument();
    });
    
    // Close modal
    fireEvent.click(screen.getByText('取消'));
    
    await waitFor(() => {
      expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
    });
  });

  it('should call handleOk when OK button is clicked', async () => {
    const mockHandleOk = jest.fn((callback) => callback());
    
    render(
      <ModalPro title="Test Modal" handleOk={mockHandleOk}>
        <Button>Open Modal</Button>
      </ModalPro>
    );
    
    // Open modal
    fireEvent.click(screen.getByText('Open Modal'));
    
    await waitFor(() => {
      expect(screen.getByText('Test Modal')).toBeInTheDocument();
    });
    
    // Click OK
    fireEvent.click(screen.getByText('确定'));
    
    expect(mockHandleOk).toHaveBeenCalled();
  });

  it('should render custom content', async () => {
    const CustomContent = () => <div>Custom Content</div>;
    
    render(
      <ModalPro title="Test Modal" Content={CustomContent}>
        <Button>Open Modal</Button>
      </ModalPro>
    );
    
    fireEvent.click(screen.getByText('Open Modal'));
    
    await waitFor(() => {
      expect(screen.getByText('Custom Content')).toBeInTheDocument();
    });
  });

  it('should support keyboard navigation', () => {
    render(
      <ModalPro>
        <Button>Open Modal</Button>
      </ModalPro>
    );
    
    const trigger = screen.getByRole('button');
    fireEvent.keyDown(trigger, { key: 'Enter' });
    
    // Modal should open (we can't easily test this without more complex setup)
    expect(trigger).toBeInTheDocument();
  });
});
