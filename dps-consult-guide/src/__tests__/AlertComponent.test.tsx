import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AlertComponent from 'src/components/AlertComponent';


describe('AlertComponent', () => {
  const defaultProps = {
    title: 'Test Title',
    message: 'Test message',
    kind: 'danger' as const,
    visible: true,
    onClose: jest.fn(),
  };

  test('renders alert correctly', () => {
    render(<AlertComponent {...defaultProps} />);
    
    expect(screen.getByText('Test Title!')).toBeInTheDocument();
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  test('does not render alert while visible is false', () => {
    render(<AlertComponent {...defaultProps} visible={false} />);
    
    expect(screen.queryByText('Test Title!')).not.toBeInTheDocument();
  });
});
