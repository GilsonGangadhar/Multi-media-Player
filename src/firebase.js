import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA0QjxLiGFMu8PKKnd81KTkhJMn2ni0Ex8",
    authDomain: "multi-media-player285.firebaseapp.com",
    projectId: "multi-media-player285",
    storageBucket: "multi-media-player285.appspot.com",
    messagingSenderId: "613929072462",
    appId: "1:613929072462:web:530a872cea6d2a7667101f"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()