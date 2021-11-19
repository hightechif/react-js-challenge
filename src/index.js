import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import IndomaretTheme from './assets/Theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={IndomaretTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
