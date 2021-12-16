import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDQIQutxKMH7JLpEuNE3tMP2rDzbTyzdRI',
  authDomain: 'crwn-db-d3cb4.firebaseapp.com',
  projectId: 'crwn-db-d3cb4',
  storageBucket: 'crwn-db-d3cb4.appspot.com',
  messagingSenderId: '515973748366',
  appId: '1:515973748366:web:a921729f1d6d26d18bdbdf',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;