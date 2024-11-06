import React from 'react';
import theme from '../src/theme';
import { ThemeProvider } from '@emotion/react';
import '../src/styles/index.scss';
//import { CssBaseline } from '@mui/material';



export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};


export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      
      <Story />
    </ThemeProvider>
  ),
];