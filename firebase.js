import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDGotJhZhgdJ-hnp0uA3emPs9F_5XroTgM",
  authDomain: "twotter-aac81.firebaseapp.com",
  projectId: "twotter-aac81",
  storageBucket: "twotter-aac81.appspot.com",
  messagingSenderId: "378451334772",
  appId: "1:378451334772:web:c4c276ecee3bd0ce526321",
  measurementId: "G-GHEGVHE6BP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();