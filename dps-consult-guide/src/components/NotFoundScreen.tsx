import React from 'react';
import { Box, Typography } from '@mui/material';
import { SentimentDissatisfied as NotFoundIcon } from '@mui/icons-material';
import DpsButton from 'design-system/DpsButton/DpsButton';
import { useNavigate } from 'react-router-dom';

const NotFoundScreen: React.FC = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <NotFoundIcon sx={{ fontSize: 100, color: 'gray', mb: 2 }} />
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 'bold', color: 'gray' }}
      >
        Página No Encontrada
      </Typography>
      <Typography variant="body1" sx={{ color: 'gray', mb: 3 }}>
        Lo sentimos, la página que buscas no existe.
      </Typography>
      <DpsButton
        variant="contained"
        onClick={handleRedirect}
        text={'Volver al Inicio'}
      ></DpsButton>
    </Box>
  );
};

export default NotFoundScreen;
