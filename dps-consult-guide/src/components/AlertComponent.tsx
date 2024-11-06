import React from 'react';
import { Snackbar, Alert, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

type AlertType = 'danger' | 'success' | 'info';

interface AlertProps {
  message: string;
  title: string;
  kind: AlertType;
  visible: boolean;
  onClose: () => void;
}

const AlertComponent: React.FC<AlertProps> = ({
  title,
  message,
  kind,
  visible,
  onClose,
}) => {
  if (!visible) return null;

  const alertSeverity: Record<AlertType, 'error' | 'success' | 'info'> = {
    danger: 'error',
    success: 'success',
    info: 'info',
  };

  return (
    <Snackbar
      open={visible}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        severity={alertSeverity[kind]}
        sx={{ width: '100%' }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <strong>{title}!</strong> {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
