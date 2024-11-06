import { render, fireEvent, screen } from '@testing-library/react';
import DpsButton from './DpsButton';
import { Add as AddIcon } from '@mui/icons-material';
import '@testing-library/jest-dom'; 
import React from "react";

jest.useFakeTimers();

describe('Test of DpsButton', () => {
  
  test('Renders with text', () => {
    render(<DpsButton text="Click me" onClick={() => {}} />);
    expect(screen.getAllByText('Click me'))    
  });

  test('Ensure onClick is working', () => {
    const onClickMock = jest.fn();
    render(<DpsButton text="Click me" onClick={onClickMock} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('does not display loading while loading value is false', () => {
    render(<DpsButton text="Submit" loading={false} onClick={() => {}} />);
    
    const loadingSpinner = screen.queryByRole('status');
    expect(loadingSpinner).not.toBeInTheDocument();
  });

  test('check if button renders with an icon', () => {
    render(<DpsButton text="Add new item" icon={<AddIcon />} onClick={() => {}} />);
  
    const icon = screen.getByTestId('add-icon');
    expect(icon).toBeInTheDocument();
  });
});

