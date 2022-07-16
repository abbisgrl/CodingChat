import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFcnEokgULUo2jt8mjYBy5w08E1cAsfcE",
    authDomain: "coding-chat-9bb43.firebaseapp.com",
    projectId: "coding-chat-9bb43",
    storageBucket: "coding-chat-9bb43.appspot.com",
    messagingSenderId: "277682566160",
    appId: "1:277682566160:web:339ee18b6e25923775c695",
    measurementId: "G-QLRJB93VGZ"
  };
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider};
  export default db;
  