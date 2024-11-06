import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';

interface InputProps {
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: '4px',
  fontSize: '12px',
  textAlign: 'left',
  border: 'none',
  '& .MuiInputBase-root': {
    backgroundColor: theme.palette.custom ?? theme.palette.custom?.lightGray,
    borderRadius: '25px',
    fontSize: '12px',
    height: '32px',
    padding: '8px 16px',
    color: theme.palette.text?.secondary,
    fontWeight: '600',
    boxSizing: 'border-box',
    border: 'none',
    '&:hover' : {
        borderColor: theme.palette.blue?.light,
     },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
        borderColor: 'transparent', 
    }
  },
  '& .MuiOutlinedInput-root': {
    borderColor: theme.palette.blue?.light,
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    borderColor: theme.palette.blue?.light, 
  },
 
  '& .MuiInputBase-input': {
    color: theme.palette.text?.primary,
  },
}));

const DpsInput: React.FC<InputProps> = ({ type, value, onChange, onKeyDown, placeholder,disabled }) => {
  return (
    <StyledTextField
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      disabled={disabled}
    />
  );
};

export default DpsInput;
