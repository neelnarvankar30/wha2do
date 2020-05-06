import 'react-native-gesture-handler';
import React, {Component, useState} from 'react';
import {View,Image,Text,TextInput,TouchableHighlight,StyleSheet,Linking,} from 'react-native';
import {FormLabel,FormInput,FormValidationMessage, ThemeConsumer,} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';
import TodoList from "../Screens/TodoList"
import firebase from 'firebase';
import { useEffect } from 'react';


export default function Home(props){
  const { navigation } = props

  // uncomment when implemented Login button
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     navigation.navigate(user ? 'TodoList' : 'Home')
  //   })
  // })
  
return (
    
    <View style={{flex: 1, flexDirection: 'column'}}>
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
            style={{width: 120, height: 120, shadowColor: 'white', padding:20}}
          />

        <Text style={{padding:20, paddingBottom:25, fontSize:50,fontStyle:'italic'}}>wha2do</Text>
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
        style={{flex: 1, flexDirection: 'row', backgroundColor: 'steelblue'}}>
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