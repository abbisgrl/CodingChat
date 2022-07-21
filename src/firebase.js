// Importing the require files for firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//create the firebase config from firebase and paste here
const firebaseConfig = {
    apiKey: "AIzaSyCFcnEokgULUo2jt8mjYBy5w08E1cAsfcE",
    authDomain: "coding-chat-9bb43.firebaseapp.com",
    projectId: "coding-chat-9bb43",
    storageBucket: "coding-chat-9bb43.appspot.com",
    messagingSenderId: "277682566160",
    appId: "1:277682566160:web:339ee18b6e25923775c695",
    measurementId: "G-QLRJB93VGZ"
  };
 
  //initialize the firebase app and pass the firebase config to that
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // setting the database in firebase
  const db = firebaseApp.firestore();
  //for sign in  processs
  const auth= firebase.auth();

  //for google authentication we set provider to google auth provider
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider};
  export default db;
  