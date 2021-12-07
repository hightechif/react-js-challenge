import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import IndomaretTheme from './assets/Theme';
import GlobalStyles from './assets/css/Global.styles';
import './assets/css/Main.css';
import './assets/css/Tailwind.css';

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
