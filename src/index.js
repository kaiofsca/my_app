import React from 'react';
import ReactDOM from 'react-dom/client';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lime, teal } from '@material-ui/core/colors'

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


