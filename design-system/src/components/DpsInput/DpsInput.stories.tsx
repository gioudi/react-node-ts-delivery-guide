import React, { useState } from 'react';
import DpsInput from './DpsInput';

export default {
  title: 'Components/DpsInput', 
  component: DpsInput, 
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export const DefaultDpsInput = () => {
  const [value, setValue] = useState('');
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <DpsInput
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter a text to prove"
    />
  );
};

export const PasswordDpsInput = () => {
  const [password, setPassword] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <DpsInput
      type="password"
      value={password}
      onChange={handleChange}
      placeholder="Enter your password"
    />
  );
};

