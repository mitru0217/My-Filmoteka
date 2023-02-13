import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { App } from 'components/App';
import { GlobalStyle } from 'components/UI/CommonStyled/GlobalStyle';
// import { theme } from './theme';
// import { ThemeProvider } from 'styled-components';
const firebaseConfig = {
  apiKey: 'AIzaSyByqvFRsYcvmbZkROHiH2lUvVJCl0yFe7o',
  authDomain: 'my-filmoteka.firebaseapp.com',
  databaseURL:
    'https://my-filmoteka-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'my-filmoteka',
  storageBucket: 'my-filmoteka.appspot.com',
  messagingSenderId: '870099302872',
  appId: '1:870099302872:web:f3cdd4cda7cf3f8be9daad',
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const fbDatabase = getDatabase(app);
export const fStore = getFirestore(app);
export const fStorage = getStorage(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/my-filmoteka">
      <Provider store={store}>
        <App />
      </Provider>
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
