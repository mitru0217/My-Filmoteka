import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './components/Redux/store';
// import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
// import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/my-filmoteka">
        <App />
      </BrowserRouter>
      <GlobalStyle />
    </Provider>
  </React.StrictMode>
);
