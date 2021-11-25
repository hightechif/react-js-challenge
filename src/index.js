import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import IndomaretTheme from './assets/Theme';
import App from './App';
import './assets/css/Main.css';
import GlobalStyles from './Global.styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={IndomaretTheme}>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
