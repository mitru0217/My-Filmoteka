import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import * as firebase from 'firebase';
import './firebase/compat/auth';
import './firebase/compat/firestore';
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
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

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
