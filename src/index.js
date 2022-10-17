import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lime, teal } from '@material-ui/core/colors'

import { AuthProvider } from './state/auth';

import App from './App';
import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: {
     main: lime[800],
    },
    secondary: {
      main: teal[800],
     }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


