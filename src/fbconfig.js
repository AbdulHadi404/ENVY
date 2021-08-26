import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCQmt1v24SU0cxerozjPm0ubT5yCD8Gqiw',
  authDomain: 'envy-e9d82.firebaseapp.com',
  projectId: 'envy-e9d82',
  storageBucket: 'envy-e9d82.appspot.com',
  messagingSenderId: '147023038686',
  appId: '1:147023038686:web:dd0e67a8d8fa514d9d9a4f',
  measurementId: 'G-TP0PDWJGYS',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export { db };
export default firebase;
