import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppDispatch, AppState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  AccountCircle,
  GridOn as GridIcon,
  Padding,
} from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  Switch,
  Container,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  fetchTerminals,
  setSelectedTerminal,
} from '../features/Terminal/terminalSlice';
import AlertComponent from '../components/AlertComponent';
import SpinnerComponent from '../components/SpinnerComponent';


const MainLayout: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { token } = useSelector((state: AppState) => state.auth);
  const { terminals, selectedTerminal, loading, error } = useSelector(
    (state: AppState) => state.terminals
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const date = new Date().getFullYear();

  console.log(terminals);

  useEffect(() => {
    if (token) {
      dispatch(fetchTerminals());
    }
  }, [dispatch, token]);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleTerminalSelect = (terminal: string) => {
    dispatch(setSelectedTerminal(terminal));
    handleMenuClose();
  };

  useEffect(() => {
    if (error) {
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 5000);
    }
  }, [error]);

  const handleAlertClose = () => {
    setAlertVisible(false);
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'white',
        boxShadow: 1,
        margin: 0,
        width: '100%',
        p: 0,
      }}
    >
      {loading && <SpinnerComponent />}
      {error && (
        <AlertComponent
          kind="danger"
          message={'No fue posible cargar las terminales'}
          title="Error"
          visible={alertVisible}
          onClose={handleAlertClose}
        />
      )}
      {/* Header */}
      <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Logo
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              Nombre de usuario
            </Typography>
            <Avatar sx={{ width: 32, height: 32, mr: 2 }}></Avatar>
            {token && (
            <>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {terminals.map((terminal: any, index: number) => (
                  <MenuItem
                    key={index}
                    onClick={() => handleTerminalSelect(terminal.nombre)}
                    sx={{
                      backgroundColor: selectedTerminal === terminal.nombre ? '#f0f0f0' : 'transparent',
                      '&:hover': {
                        backgroundColor: '#e0e0e0',
                      },
                    }}
                  >
                    {terminal.nombre}
                  </MenuItem>
                ))}
              </Menu>

              <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                <Typography variant="body2" sx={{ color: selectedTerminal ? '#000' : '#9e9e9e', mr: 1 }}>
                  Terminal
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: selectedTerminal ? '#000' : '#9e9e9e',
                    fontWeight: 'bold',
                    mr: 1,
                  }}
                >
                  {selectedTerminal || 'Seleccione una terminal'}
                </Typography>
                <IconButton onClick={handleMenuClick} color="inherit">
                <ExpandMoreIcon sx={{ color: '#000', fontSize: '1rem' }}  /></IconButton>
              </Box>
            </>
          )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <main style={{ height: '90vh' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: 'white',
          width: '100%',
          boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.12)',
          marginTop: 'auto',
        }}
      >
        <Container maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0,  height: '40px'}}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left' }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: 'center', sm: 'left' }}
              >
                © {date}{' '}
                <Link
                  href="https://gioudi.github.io/portfolio/"
                  target="_blank"
                  color="inherit"
                >
                  Sergio Penagos
                </Link>
                . Derechos reservados.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%'
                }}
              >
                <Link
                  href="https://github.com/gioudi"
                  target="_blank"
                  sx={{
                    color: 'text.secondary', margin: 0,
                    '&:hover': { color: 'text.primary' },
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    width="20"
                    height="20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Github</span>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
