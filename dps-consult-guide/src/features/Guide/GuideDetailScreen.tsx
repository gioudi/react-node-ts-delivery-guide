import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { handleGuideById } from './guideSlice';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Grid,
} from '@mui/material';
import DpsTimeLine from 'design-system/DpsTimeLineMenu/DpsTimeLine';
import DpsTabsMenu from 'design-system/DpsTabsMenu/DpsTabsMenu';
import { AppDispatch, AppState } from '../../redux/store';
import { useAuthRedirect } from '../../hooks/useAuthRedirect';
import DpsButton from 'design-system/DpsButton/DpsButton';
import SpinnerComponent from '../../components/SpinnerComponent';
import { fetchReferrals } from '../Referral/referralSlice';

const GuideDetailScreen: React.FC = () => {
  useAuthRedirect(true);
  const { id } = useParams();
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const {
    data,
    loading: authLoading,
    error,
  } = useSelector((state: AppState) => state.guide);

  useEffect(() => {
    if (id) {
      dispatch(handleGuideById(id));
    }
  }, [id, dispatch]);

  const { tabs, loading: referralLoading} = useSelector((state: AppState) => state.referral);

  console.log(tabs)

  useEffect(() => {
    dispatch(fetchReferrals(['36390004411']));
  }, [dispatch]);

  const [value, setValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useAuthRedirect(true);

  const handleAlertClose = () => {
    setAlertVisible(false);
  };

  


  const GeneralInfo = ()=> {
    return (
      <Grid container spacing={2} sx={{ padding: 2 }}>
      {/* Row 1 */}
      <Grid item xs={4}>
        <Typography variant="subtitle2">Cliente</Typography>
        <Typography variant="body2">{data?.cliente?.razon_social || 'Almacenes Éxito'}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle2">Remitente</Typography>
        <Typography variant="body2">{data?.remitente?.nombre || 'No disponible'}</Typography>
        <Typography variant="body2">{data?.remitente?.zonificacion?.direccion || 'Dirección no disponible'}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle2">Destinatario</Typography>
        <Typography variant="body2">{data?.destinatario?.nombre || 'No disponible'}</Typography>
        <Typography variant="body2">{data?.destinatario?.zonificacion?.direccion || 'Dirección no disponible'}</Typography>
      </Grid>

      {/* Row 2 */}
      <Grid item xs={4}>
        <Typography variant="subtitle2">Terminal de Origen</Typography>
        <Typography variant="body2">{data?.zonificacion?.ciudad || 'No disponible'}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle2">Terminal de Destino</Typography>
        <Typography variant="body2">{data?.destinatario?.zonificacion?.ciudad || 'No disponible'}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle2">Nivel de Servicio</Typography>
        <Typography variant="body2">{data?.servicio?.descripcion || 'No disponible'}</Typography>
      </Grid>

      {/* Row 3 */}
      <Grid item xs={4}>
        <Typography variant="subtitle2">Teléfono Remitente</Typography>
        <Typography variant="body2">{data?.remitente?.telefono || 'No disponible'}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle2">Teléfono Destinatario</Typography>
        <Typography variant="body2">{data?.destinatario?.telefono || 'No disponible'}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle2">Observaciones</Typography>
        <Typography variant="body2">{data?.observaciones || 'No disponible'}</Typography>
      </Grid>

      {/* Row 4 */}
      <Grid item xs={4}>
        <Typography variant="subtitle2">Producto</Typography>
        <Typography variant="body2">{data?.producto?.abreviado_producto || 'No disponible'}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle2">Contenido</Typography>
        <Typography variant="body2">{data?.contenido || 'No disponible'}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle2">Referencia</Typography>
        <Typography variant="body2">{data?.referencia || 'No disponible'}</Typography>
      </Grid>
    </Grid>
    )
  }

  const tabsData = [
    { label: 'Información General', content: <GeneralInfo/> },
    { label: 'Información de facturación', content: <div /> },
    { label: 'Novedades y soluciones', content: <div /> },
    { label: 'Novedades y soluciones', content: <div /> },
    { label: 'Información de entrega', content: <div /> },
  ];

  return (authLoading || referralLoading) ? (
    <SpinnerComponent />
  ) : (
    <>
      <Box sx={{ padding: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: '#086BB5', fontWeight: 'bold' }}
          >
            Guía Detalle
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" onClose={handleAlertClose}>
            No fue posible cargar la guía.
          </Alert>
        )}

        {data && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 2,
            }}
          >
            <Box>
              <Typography
                variant="body1"
                sx={{ color: '#212121', fontWeight: 'bold' }}
              >
                Guía nivel 1: {data.guia || 'No disponible'}
              </Typography>
              <Typography variant="body2" sx={{ color: '#212121' }}>
                Unidades: {data.total_unidades || 'No disponible'}
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="body1"
                sx={{ color: '#212121', fontSize: 14 }}
              >
                Macroestado: {data.estado_tracking || 'No disponible'}
              </Typography>
              <Typography variant="body2" sx={{ color: '#00000099' }}>
                Estado Tracking Guía: {data.estado_tracking || 'No disponible'}
              </Typography>
              <DpsButton text="Ver Guía Digital" onClick={() => {}} />
            </Box>
          </Box>
        )}



        <Box
          sx={{
            display: 'flex',
          
            marginBottom: 2,
          }}
        >
          <DpsTimeLine tabs={tabs}/>
        </Box>
        <Box
          sx={{
            display: 'flex',
          
            marginBottom: 2,
          }}
        >
        {/* Tabs Menu */}
        <DpsTabsMenu
          value={value}
          onChange={handleTabChange}
          tabs={tabsData}
        />
        </Box>
      </Box>
    </>
  );
};

export default GuideDetailScreen;
