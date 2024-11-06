import React, { useEffect, useState } from 'react';
import { Button, Box, Typography, Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import DpsInput from 'design-system/DpsInput/DpsInput';
import DpsButton from 'design-system/DpsButton/DpsButton';
import { useAuthRedirect } from '../../hooks/useAuthRedirect';
import { useNavigate } from 'react-router-dom';
import { handleLogin } from './authSlice';
import { AppDispatch, AppState } from '../../redux/store';
import AlertComponent from '../../components/AlertComponent';
import SpinnerComponent from '../../components/SpinnerComponent';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [formError, setFormError] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const {
    loading: authLoading,
    error,
    token,
  } = useSelector((state: AppState) => state.auth);
  const navigate = useNavigate();

  useAuthRedirect(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError({});

    if (!email) {
      setFormError((prev) => ({
        ...prev,
        email: 'El correo es obligatorio.',
      }));
      return;
    }

    if (!email.includes('@')) {
      setFormError((prev) => ({
        ...prev,
        email: 'El correo es invalido. ejemplo@gmail.com',
      }));
      return;
    }
    if (!password) {
      setFormError((prev) => ({
        ...prev,
        password: 'La contraseña es obligatoria.',
      }));
      return;
    }

    dispatch(handleLogin({ email, password }));
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem('authToken', token);
      navigate('/guide');
    }
  }, [token, navigate]);

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
    <Container maxWidth="sm">
      {/* Display Error Alert if Login Fails */}
      {authLoading && <SpinnerComponent />}
      {error && (
        <AlertComponent
          kind="danger"
          message={'No fue posible iniciar sesión'}
          title="Error"
          visible={alertVisible}
          onClose={handleAlertClose}
        />
      )}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 4,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Grid container spacing={2}>
            {/* Email Input */}
            <Grid
              item
              xs={12}
              sx={{
                mt: 3,
              }}
            >
              <DpsInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              {formError.email && (
                <Typography
                  color="error"
                  sx={{
                    fontSize: '12px',
                  }}
                >
                  {formError.email}
                </Typography>
              )}
            </Grid>

            {/* Password Input */}
            <Grid
              item
              xs={12}
              sx={{
                mt: 3,
              }}
            >
              <DpsInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {formError.password && (
                <Typography
                  color="error"
                  sx={{
                    fontSize: '12px',
                  }}
                >
                  {formError.password}
                </Typography>
              )}
            </Grid>

            {/* Submit Button */}
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 4,
              }}
            >
              <DpsButton
                text={
                  isSubmitting || authLoading
                    ? 'Iniciando sesión..'
                    : 'Iniciar sesión'
                }
                variant="contained"
                loading={isSubmitting || authLoading}
                disabled={isSubmitting || authLoading}
                onClick={handleSubmit}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default LoginScreen;
