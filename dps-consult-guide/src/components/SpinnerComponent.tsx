import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const SpinnerComponent: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress size={64} thickness={4} />
    </Box>
  );
};

export default SpinnerComponent;
