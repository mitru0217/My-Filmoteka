import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

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
