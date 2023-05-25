import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyAjtiw92rRWJuIq6Pz2VtScS5aHK8QpFIU",
    authDomain: "projectotiendalien.firebaseapp.com",
    projectId: "projectotiendalien",
    storageBucket: "projectotiendalien.appspot.com",
    messagingSenderId: "968571559384",
    appId: "1:968571559384:web:1cc704de948f5c228d66ad"
  };

firebase.initializeApp(firebaseConfig, 'test');

export default firebase;