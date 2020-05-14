import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import App from 'components/App/App';
import { theme } from 'theme/theme';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
