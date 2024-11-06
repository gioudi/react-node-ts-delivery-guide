import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';

import { handleGuideById } from './guideSlice';
import { Box, Typography, Button, CircularProgress, Alert } from '@mui/material';
import DpsTimeLine from 'design-system/DpsTimeLineMenu/DpsTimeLine';
import DpsTabsMenu from 'design-system/DpsTabsMenu/DpsTabsMenu'; 
import { AppDispatch, AppState } from '../redux/store';
import { useAuthRedirect } from '../../hooks/useAuthRedirect';

const GuideDetailScreen: React.FC = () => {
   useAuthRedirect(true);
  const { id } = useParams(); 
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector((state: AppState) => state.guide);

  useEffect(() => {
    if (id) {
      dispatch(handleGuideById(id)); 
    }
  }, [id, dispatch]);

  const handleAlertClose = () => {
    
  };

  const tabsData = [
    { label: 'Información General', content: <></>  },
    { label: 'Información de facturación', content: <></> },
    { label: 'Información de entrega', content: <></> },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Typography variant="h6" sx={{ color: '#086BB5', fontWeight: 'bold' }}>
          Guía Detalle
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" onClose={handleAlertClose}>
          No fue posible cargar la guía.
        </Alert>
      )}

      {data && (
        <>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <Box>
              <Typography variant="body1" sx={{ color: '#212121', fontWeight: 'bold' }}>
                Guia nivel 1: {data.guia || 'No disponible'}
              </Typography>
              <Typography variant="body2" sx={{ color: '#212121' }}>
                Unidades: {data.total_unidades || 'No disponible'}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body1" sx={{ color: '#212121', fontSize: 14 }}>
                Macroestado: {data.estado_tracking || 'No disponible'}
              </Typography>
              <Typography variant="body2" sx={{ color: '#00000099' }}>
                Estado Tracking Guía: {data.estado_tracking || 'No disponible'}
              </Typography>
              <Button variant="outlined" sx={{ marginTop: 2 }}>
                Ver Guía Digital
              </Button>
            </Box>
          </Box>

       
     {/*      <DpsTimeLine tabs={tabsData} />

          <DpsTabsMenu tabs={defaultTabs} variant="text" />
        </> */}
      )}
    </Box>
  );
};

export default GuideDetailScreen;
