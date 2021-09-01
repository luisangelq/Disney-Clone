import firebase from 'firebase';
// import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBGZ3G-DmHVSSH34x0lfpRTH9fHjRW6-Vs",
    authDomain: "disney-clone-a8b09.firebaseapp.com",
    projectId: "disney-clone-a8b09",
    storageBucket: "disney-clone-a8b09.appspot.com",
    messagingSenderId: "275881379943",
    appId: "1:275881379943:web:672ddb492e43561dccacc2"
  };
  // Initialize Firebase    
  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  const auth = firebase.getAuth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db