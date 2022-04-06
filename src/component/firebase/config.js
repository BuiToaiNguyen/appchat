import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyCKoOO-BBKogh4PIjPIByeSWBEJlrEZUMc",
//     authDomain: "app-chat-7f245.firebaseapp.com",
//     projectId: "app-chat-7f245",
//     storageBucket: "app-chat-7f245.appspot.com",
//     messagingSenderId: "1079246432145",
//     appId: "1:1079246432145:web:b387eee160460eadc39c30",
//     measurementId: "G-LHQDXW2J91"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyCc6Q9D3s-I_TN6zmKTw0SIq1_6rezQ94I",
  authDomain: "chat-eab91.firebaseapp.com",
  databaseURL: "https://chat-eab91-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-eab91",
  storageBucket: "chat-eab91.appspot.com",
  messagingSenderId: "254484787539",
  appId: "1:254484787539:web:c3d5ed55333cdca7fa31a6",
  measurementId: "G-4CZ0JWRQ1Z"
}
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics(); 

  const auth= firebase.auth();
  const db = firebase.firestore();
  export {db,auth};
  export default firebase;
