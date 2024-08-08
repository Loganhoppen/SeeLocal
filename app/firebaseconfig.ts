// firebaseConfig.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDwwL7LqbB3yvU-RgTJX97NSNsd1jHSAZQ',
  authDomain: 'myseelocalapp.firebaseapp.com',
  projectId: 'myseelocalapp',
  storageBucket: 'myseelocalapp.appspot.com',
  messagingSenderId: '1075930549187',
  appId: '1:1075930549187:android:55c979b991d0a49f828b76',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { firebase, auth };
