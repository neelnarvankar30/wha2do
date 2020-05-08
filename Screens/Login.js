import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet, Keyboard, Modal, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import firebase from 'firebase';
import Forgot from './Components/Forgot'
export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { navigation } = props
  const hideModal = () => {
    setModalVisible(false)
  }
  
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
          .catch(function (error) {
            console.log(error);
            if(error.code == 'auth/user-not-found'){
                ToastAndroid.show("Email not registered, please signup first", ToastAndroid.LONG);
            }
            else if(error.code == 'auth/wrong-password'){
              ToastAndroid.show("Password seems to be incorrect", ToastAndroid.LONG);
            }
            else{
                ToastAndroid.show("Login failed!", ToastAndroid.LONG);
            }
        })
        }
      )}}
        mode='outlined'
        color='black'>
        Log In
          </Button>
          <Text></Text>
          <TouchableOpacity onPress={() => {setModalVisible(true);}}>
          <Text style={{fontWeight:"bold", textDecorationLine: 'underline'}}>Forgot Password?</Text>
        </TouchableOpacity>

          <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >

                <Forgot hideModal = {hideModal} />

            </Modal>


    </View>
  )
}


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