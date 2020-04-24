import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View,Image,Text,TextInput,Button,TouchableHighlight,StyleSheet,Linking,} from 'react-native';
import {FormLabel,FormInput,FormValidationMessage,} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home(props){
    const { navigation } = props
return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() => navigation.navigate('Details')}
    //   />
    // </View>

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
          <Image
            source={require('./logo.png')}
            style={{width: 100, height: 100, shadowColor: 'white'}}
          />
        </View>

        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            backgroundColor: '#add8e6',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontStyle: 'italic', fontSize: 50}}>wha2do</Text>
        </View>
      </View>

      <View
        style={{
          flex: 6,
          flexDirection: 'row',
          backgroundColor: '#add8e6',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#add8e6',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableHighlight onPress={() => navigation.navigate('Login')}>
            <Image
              source={require('./signup.png')}
              style={{width: 80, height: 80}}
            />
          </TouchableHighlight>
          <Text>Sign in</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#add8e6',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableHighlight onPress={() => navigation.navigate('SignUp')}>
            <Image
              source={require('./signin.png')}
              style={{width: 80, height: 80}}
            />
          </TouchableHighlight>
          <Text>Register</Text>
        </View>
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
            onPress={() => navigation.navigate('TodoHome')}
            title="INFO"
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#add8e6',
            justifyContent: 'center',
          }}>
          <Button
            onPress={() => navigation.navigate('AboutUs')}
            title="About Us"
          />
        </View>
      </View>
    </View>
  )
}