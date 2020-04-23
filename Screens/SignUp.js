import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View,Image,Text,TextInput,Button,TouchableHighlight,StyleSheet,Linking,} from 'react-native';
import {FormLabel,FormInput,FormValidationMessage,} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

state = {
    username: '',
    password: '',
    email: '',
    phone_number: '',
  };
  
  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };
  
  signUp = async () => {
    const {username, password, email, phone_number} = this.state;
    try {
      // here place your signup logic
      console.log('user successfully signed up!: ', success);
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };


export default function SignUp(){
    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="white"
            //onChangeText={val => this.onChangeText('username', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="white"
            // onChangeText={val => this.onChangeText('password', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="white"
            // onChangeText={val => this.onChangeText('email', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            autoCapitalize="none"
            placeholderTextColor="white"
            // onChangeText={val => this.onChangeText('phone_number', val)}
          />
          <Button
            title="Sign Up"
            // onPress={this.signUp}
          />
        </View>
      )

}

const styles1 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
    contentContainer: {
      paddingTop: 15,
    },
    optionIconContainer: {
      marginRight: 22,
    },
    option: {
      backgroundColor: '#fdfdfd',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: 0,
      borderColor: '#ededed',
    },
    welcomeImage: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
      marginTop: 3,
    },
    welcomeImageContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    lastOption: {
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
      fontSize: 15,
      alignSelf: 'flex-start',
      marginTop: 1,
    },
  });
  
  const styles = StyleSheet.create({
    input: {
      width: 350,
      height: 55,
      backgroundColor: '#42A5F5',
      margin: 10,
      padding: 8,
      color: 'white',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });