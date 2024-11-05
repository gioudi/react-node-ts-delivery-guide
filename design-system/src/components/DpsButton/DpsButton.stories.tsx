import React, { useState } from 'react';
import DpsButton from './DpsButton';
import { Add as AddIcon } from '@mui/icons-material';
import { ArrowForward } from '@mui/icons-material';
export default {
  component: DpsButton,
  title: 'Components/DpsButton',
};

export const DefaultDpsButton = () => {
  return (
    <DpsButton
      text="Click on me"
      onClick={() => alert('Button clicked!')}
    />
  );
};

export const ButtonWithIconDpsButton = () => {
  return (
    <DpsButton
      text="Add new item"
      onClick={() => alert('Add clicked!')}
      icon={<AddIcon />}
    />
  );
};

export const ButtonWithLoadingDpsButton = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); 
  };

  return (
    <DpsButton
      text="Submit"
      onClick={handleClick}
      loading={loading}
    />
  );
};

export const ButtonWithIconAndLoadingDpsButton = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <DpsButton
      text="Add Item"
      onClick={handleClick}
      icon={<AddIcon />}
      loading={loading}
    />
  );
};

export const TextDpsButton = () => {

  
    return (
      <DpsButton
        variant='text'
        icon={<ArrowForward/>}
        text="Link"
        onClick={() => alert('Link clicked!')}
      />
    );
  };
