import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f5edeb',
      main: '#f0b5a8',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
), document.getElementById('root'));

