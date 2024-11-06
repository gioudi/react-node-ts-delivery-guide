import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AlertComponent from '../components/AlertComponent';

describe('AlertComponent', () => {
  const defaultProps = {
    title: 'Test Title',
    message: 'Test message',
    kind: 'danger' as const,
    visible: true,
    onClose: ()=>{},
  };

  test('renders alert correctly', () => {
    render(<AlertComponent {...defaultProps} />);

    expect(screen.getByText('Test Title!')).toBeInTheDocument();
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  test('alert is not visible while it value is false', () => {
    render(<AlertComponent {...defaultProps} visible={false} />);

    expect(screen.queryByText('Test Title!')).not.toBeInTheDocument();
  });
});
