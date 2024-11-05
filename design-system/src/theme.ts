import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
      custom: {
        lightGray: string;
        mediumGray: string;
        darkGray: string;
        translucentBlack: string;
        semiTransparent: string;
      };
    }
    interface PaletteOptions {
      custom?: {
        lightGray: string;
        mediumGray: string;
        darkGray: string;
        translucentBlack: string;
        semiTransparent: string;
      };
    }
  }

const theme = createTheme({
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
    primary: {
      main: '#086BB5',
      light: '#326BB5',
      dark: '#003C82',
    },
    secondary: {
      main: '#EE5A31', 
    },
    background: {
      default: '#E0E6E9', 
    },
    text: {
      primary: '#212121', 
      secondary: '#9E9E9E',
    },
    custom: {
      lightGray: '#0000001F',
      mediumGray: '#00000033',
      darkGray: '#00000061',
      translucentBlack: '#00000099',
      semiTransparent: '#0000008A',
    },
  },
  typography:{
    fontFamily: 'Roboto, Arial, sans-serif',
    fontWeightMedium: 600
  }
});

export default theme;
