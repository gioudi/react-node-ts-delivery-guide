import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import QrCodeIcon from '@mui/icons-material/QrCode';
import DpsTabsMenu from 'design-system/DpsTabsMenu/DpsTabsMenu';
import DpsInput from 'design-system/DpsInput/DpsInput';
import DpsButton from 'design-system/DpsButton/DpsButton';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuthRedirect } from '../../hooks/useAuthRedirect';

const ContentGuide = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  useAuthRedirect(true);

  const handleSubmit = () => {
    const guideId = '36390004411';
    navigate(`/guide-detail/${guideId}`);
  };

  return (
    <DpsInput
      type="text"
      value={value}
      onChange={handleChange}
      onKeyDown={(e: { key: string }) => {
        if (e.key === 'Enter') handleSubmit();
      }}
      placeholder="Escanea la etiqueta 1d..."
    />
  );
};

const tabsRoundedData = [
  {
    label: 'Guías',
    icon: <SearchIcon />,
    content: <ContentGuide />,
  },
  {
    label: 'Etiqueta',
    icon: <QrCodeIcon />,
    content: (
      <DpsInput
        type="email"
        value={''}
        disabled={true}
        onChange={() => {}}
        placeholder="Escanea la etiqueta 1d..."
      />
    ),
  },
];

const GuideScreen = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'white',
          padding: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {/* Tabs Menu */}
        <DpsTabsMenu
          value={value}
          onChange={handleTabChange}
          tabs={tabsRoundedData}
          variant="icon"
        />

        <Box sx={{ mt: 2 }}>
          <DpsButton
            variant="text"
            text="Buscar múltiples guías"
            icon={<ArrowForward />}
            onClick={() => navigate('/multiple-guides')}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default GuideScreen;
