import 'react-native-gesture-handler';
import React, {  } from 'react';
import {BackHandler, Alert, View, Image, Text, } from 'react-native';
import { Button } from 'react-native-paper';
import firebase from 'firebase';
import { useEffect } from 'react';


export default function Home(props) {
  const { navigation } = props

  console.disableYellowBox = true;


  const backAction = () => {
    Alert.alert("Exit app?", "Are you sure you want to exit?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };


  // uncomment when implemented Login button
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    // firebase.auth().onAuthStateChanged(user => {

    var user = firebase.auth().currentUser
    console.log("HELLLLLLLLLLLOOOOOOOOOOO \n\n\n",user);

    if(user){
      navigation.navigate('TodoList')
    }
    else{
      navigation.navigate('Home')
    }
      // navigation.navigate(user ? 'TodoList' : 'Home')

      // })
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);

  }, [])

  return (

    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View
        style={{
          flex: 2,
          backgroundColor: '#3254a8e',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#add8e6',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>

        </View>

        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            backgroundColor: '#add8e6',
            justifyContent: 'center',
            alignItems: 'center',
          }}>

        </View>
      </View>

      <View
        style={{
          flex: 6,
          flexDirection: 'column',
          backgroundColor: '#add8e6',
          alignItems: 'center',
        }}>

        <Image
          source={require('./Icons/logo.png')}
          style={{ width: 120, height: 120, shadowColor: 'white', padding: 20 }}
        />

        <Text style={{ padding: 20, paddingBottom: 25, fontSize: 50, fontStyle: 'italic' }}>wha2do</Text>
        <Button mode="contained" color='white' width="60%" onPress={() => navigation.navigate('Login')}>Login</Button>
        <Text> </Text>
        <Button
          contentStyle={{}}
          mode='outlined'
          color='black'
          width="60%"
          onPress={() => navigation.navigate('SignUp')}>
          Sign-Up
        </Button>
      </View>

      <View
        style={{ flex: 1, flexDirection: 'row', backgroundColor: 'steelblue' }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#add8e6',
            justifyContent: 'center',
          }}>
          <Button
            onPress={() => navigation.navigate('AboutUs')}
            color='black'
          >
            Info
          </Button>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#add8e6',
            justifyContent: 'center',
          }}>
          <Button
            onPress={() => navigation.navigate('AboutUs')}
            color='black'>
            About Us
          </Button>
        </View>
      </View>
    </View>
  )
}