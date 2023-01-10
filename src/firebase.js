import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyDZZEYu_7g0hbCAGpsHoeEnfEiUkS9ga4Q",
  
    authDomain: "react-crud0.firebaseapp.com",
  
    projectId: "react-crud0",
  
    storageBucket: "react-crud0.appspot.com",
  
    messagingSenderId: "885874216062",
  
    appId: "1:885874216062:web:659477b8699fb500341c2f"
  
  };
  
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();