import React, { useRef } from 'react';
import { height, styled, width } from '@mui/system';
import { Box, Typography, IconButton } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import FactoryIcon from '@mui/icons-material/Factory';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import StoreIcon from '@mui/icons-material/Store';
import DoneIcon from '@mui/icons-material/Done';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SyncIcon from '@mui/icons-material/Sync';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import theme from '../../theme';



const statusIconMap = {
    'Recogida': <InventoryIcon />,
    'Terminal Origen': <FactoryIcon />,
    'En transporte': <AirportShuttleIcon />,
    'Terminal Destino': <FactoryIcon />,
    'Terminal Enlace': <CorporateFareIcon />,
    'En distribución': <AirportShuttleIcon />,
    'En distribución Parcial': <AirportShuttleIcon />,
    'En punto Droop': <StoreIcon />,
    'Entrega parcial': <DoneIcon />,
    'Cerrado por incidencia': <WarningAmberIcon />,
    'Entregada': <DoneIcon />,
    'Cambio de destino': <SyncIcon />,
    'En proceso de busqueda': <FindInPageIcon />,
    'Devolución': <AssignmentReturnIcon />,
};

type CurrentState = 
  | 'Recogida'
  | 'Terminal Origen'
  | 'En transporte'
  | 'Terminal Destino'
  | 'Terminal Enlace'
  | 'En distribución'
  | 'En distribución Parcial'
  | 'En punto Droop'
  | 'Entrega parcial'
  | 'Terminal Enlace'
  | 'En proceso de busqueda'
  | 'Cambio de destino'
  | 'Entregada'
  | 'Cerrado por incidencia'
  | 'Devolución';

interface SpotItem {
    label: string;
    date: string;
    status: CurrentState;
    isError?: boolean;
}

interface DpsTimeLineProps {
    tabs: SpotItem[];
}


const TimelineWrapper = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    overflowX: 'hidden',
    justifyContent: 'center',
    padding: '20px 50px',
    boxSizing: 'border-box'
}));

const TimelineContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    overflowX: 'hidden',
    scrollBehavior: 'smooth', 
}));

const StepContainer = styled(Box)(() => ({
    position: 'relative',
    marginRight: '50px', 
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    flexShrink: 0,
}));

const Circle = styled(Box)(({ isActive, isError, isLast }) => ({
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    backgroundColor: isActive ? theme.palette.primary?.dark : isError ? theme.palette.secondary?.main : '#E1EDFB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: isActive || isError ? theme.palette.common?.white : theme.palette.primary?.dark,
    fontSize: '30px',
    position: 'relative',

    '&:before': isLast
        ? {} 
        : {
              content: '""',
              position: 'absolute',
              top: '50%',
              height: '1px',
              left: 0,
              background: `${
                  isActive
                      ? theme.palette.primary?.dark
                      : theme.palette.primary?.light
              }`,
              zIndex: -1,
              minWidth: '190px',
    },
    '&:after': {
              content: '""',
              position: 'absolute',
              bottom: '-15px',
              width: '1px',
              left: '50%',
              height: '50px',
              background: theme.palette.background?.default,
              zIndex: -1,
    },
}));

const StatusText = styled(Typography)(() => ({
    fontWeight: 600,
    color: '#707070',
    fontSize: '14px',
    margin: '0'
}));

const DateText = styled(Typography)(() => ({
    marginTop: '20px',
    color: '#707070',
    fontSize: '14px',
    fontWeight: '400',
    marginBottom: '2px'
}));

const ScrollButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '30%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    backgroundColor: theme.palette.custom?.mediumGray,
    borderRadius: '50%',
    padding: '10px',
    color: theme.palette.primary?.dark
}));

const DpsTimeLine: React.FC<DpsTimeLineProps> = ({ tabs }) => {
    const timelineRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (timelineRef.current) {
            timelineRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (timelineRef.current) {
            timelineRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <TimelineWrapper>

            <ScrollButton onClick={scrollLeft} style={{ left: '0' }}>
                <ArrowBackIosNew />
            </ScrollButton>
            
            <TimelineContainer ref={timelineRef}>
                {tabs.map((tab, index) => {
                    const isActive = index === tabs.length - 1 && !tab?.isError;
                    const isError = tab.status === 'Cerrado por incidencia' || tab?.isError; 
                    const isLast = index === tabs.length - 1;

                  

                    return (
                        <StepContainer key={index}>
                            <Circle isActive={isActive} isError={isError} isLast={isLast}>
                                {statusIconMap[tab.status]}
                            </Circle>
                            <DateText>{tab.date}</DateText>
                            <StatusText>{tab.status}   {tab?.isError}</StatusText>
                        </StepContainer>
                    );
                })}
            </TimelineContainer>

            <ScrollButton onClick={scrollRight} style={{ right: '0' }}>
                <ArrowForwardIos />
            </ScrollButton>
        </TimelineWrapper>
    );
};

export default DpsTimeLine;
