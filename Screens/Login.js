import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, StyleSheet, Linking,Keyboard, Modal } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RectButton, ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';
import firebase from 'firebase';
import Forgot from './Components/Forgot'
export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Image
        source={require('./Icons/logo.png')}
        style={{ width: 120, height: 120, shadowColor: 'white', paddingBottom: 30 }}
      />
      <Text style={{ fontSize: 40, paddingBottom: 10 }}>Welcome back!</Text>


      <TextInput
        style={styles.input}
        placeholder="Email address"
        autoCapitalize="none"
        placeholderTextColor="black"
        onChangeText={username => setUsername(username)}
        autoFocus
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="black"
        onChangeText={password => setPassword(password)}
      />
      
    
    
      <Button
        onPress={() => {
          Keyboard.dismiss();
          firebase
          .auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(
        () => {
          return firebase.auth().signInWithEmailAndPassword(username, password)
          .then(() => {
            console.log("logged in!   -> ", username);
            Keyboard.dismiss();
            navigation.navigate('TodoList');

          })
          .catch(error => this.setState({ errorMessage: error.message }))
              // navigation.navigate('TodoList', { UName: username });
        }
      )}}
        mode='outlined'
        color='black'>
        Log In
          </Button>
          <Text></Text>
          <TouchableOpacity onPress={() => {setModalVisible(true);}}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>

          <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >

                <Forgot />

            </Modal>


    </View>
  )
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
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
    width: 250,
    borderBottomWidth: 2,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6'
  },
});