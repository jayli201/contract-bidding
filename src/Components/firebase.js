import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXhrhvYUYRSkrKjnXvNH6rBq999TrYu5s",
  authDomain: "contract-bidding.firebaseapp.com",
  databaseURL: "https://contract-bidding.firebaseio.com",
  projectId: "contract-bidding",
  storageBucket: "contract-bidding.appspot.com",
  messagingSenderId: "18871062059",
  appId: "1:18871062059:web:65357280efb87cb6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

