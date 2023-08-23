import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBMpilWRKzP_arBC1v94tsFmrEs24mejmo",
    authDomain: "olxx-e7f1a.firebaseapp.com",
    projectId: "olxx-e7f1a",
    storageBucket: "olxx-e7f1a.appspot.com",
    messagingSenderId: "451472347024",
    appId: "1:451472347024:web:55af16aeeae675d7b5ad15",
    measurementId: "G-44LRHFC9FB"
  };

export default  firebase.initializeApp(firebaseConfig)