import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './components/Redux/store';
// import './firbase';
import { App } from 'components/App';
import { GlobalStyle } from 'components/UI/GlobalStyle';
// import { theme } from './theme';
// import { ThemeProvider } from 'styled-components';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/my-filmoteka">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
