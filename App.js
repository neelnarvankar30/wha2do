/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
// import * as WebBrowser from 'expo-web-browser';
// import Navigator from './Routes/HomeStack';
import HomeStack from './Routes/HomeStack';
import firebase from 'firebase';
// import database from '@react-native-firebase/database';
// import firebase from '@react-native-firebase/app';

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

// firebase.database().setPersistenceEnabled(true)
// .then(() => console.log("realtime database persistence enabled"));

export default function App(){

return <HomeStack/>

};