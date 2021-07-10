import firebase from 'firebase'
require('@firebase/firestore')

 var firebaseConfig = {
    apiKey: "AIzaSyDIXA8eSfNRhTn6xAIESISTuTtF186Bb1M",
    authDomain: "bedtime-stories-84a9d.firebaseapp.com",
    projectId: "bedtime-stories-84a9d",
    storageBucket: "bedtime-stories-84a9d.appspot.com",
    messagingSenderId: "933814968148",
    appId: "1:933814968148:web:5b20601c54e4e32b6af2c1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();