import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import App from './App';

import './index.css'

import { 
  brown,
  grey
} from '@material-ui/core/colors/'

const theme = createTheme({
  palette: {
    primary: {
      main: brown[800],
    },
    secondary: {
      main: grey[900]
    }
  },
});


ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
