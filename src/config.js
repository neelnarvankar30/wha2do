import firebase from "@react-native-firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBTMUIY1tvkv0770bwFOg4WpbyLzbJ3PCU",
    authDomain: "wha2do-swe632.firebaseapp.com",
    databaseURL: "https://wha2do-swe632.firebaseio.com",
    projectId: "wha2do-swe632",
    storageBucket: "wha2do-swe632.appspot.com",
    messagingSenderId: "353111282999",
    appId: "1:353111282999:web:c065ff801730236cb3f6b2",
    measurementId: "G-953M0RZXHY"
  };

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();