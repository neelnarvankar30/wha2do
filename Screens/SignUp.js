import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { View, Image, Text, TextInput, Button, TouchableHighlight, StyleSheet, Linking, ActionSheetIOS, } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import * as yup from 'yup';

const userSchema = yup.object({
  username: yup.string().required().min(5),
  password: yup.string().required().min(8).max(16).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
  email: yup.string().email().required(),
  phone_number: yup.string().required().min(10).max(10)
})

state = {
  username: '',
  password: '',
  email: '',
  phone_number: '',
};

onChangeText = (key, val) => {
  this.setState({ [key]: val });
};

signUp = async () => {
  const { username, password, email, phone_number } = this.state;
  try {
    // here place your signup logic
    console.log('user successfully signed up!: ', success);
  } catch (err) {
    console.log('error signing up: ', err);
  }
};

export default function SignUp() {

  const [users, setUsers] = useState([
    {username: 'asdgh', password: 'lol', email: 'hsk@gmail.com', phone_number: '2341321'}
  ]);
  
  const addUser = (user) => {
    setUsers((currentUsers) => {
      return [user, ...currentUsers]
    });
    console.log(users);
  }

  return (
    <View style={styles.container}>

      <Formik
        initialValues={{ username: '', password: '', email: '', phone_number: '' }}
        //validationSchema={userSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addUser(values);
          // maybe write the logic to add the data into firebase over here
          
          // so currently, I am able to add new users inside the users json array (declared on line 36)
          // hopefully we're able to send this data to firebase as well
          
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder='Username'
              onChangeText={props.handleChange('username')}
              value={props.values.username}
            >

            </TextInput>

            <TextInput
              placeholder='Password'
              onChangeText={props.handleChange('password')}
              value={props.values.password}

            >
            </TextInput>

            <TextInput
              placeholder='Email'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              keyboardType='email-address'
            >
            </TextInput>

            <TextInput
              placeholder='Phone Number (10 digits)'
              onChangeText={props.handleChange('phone_number')}
              value={props.values.phone_number}
              keyboardType='phone-pad'
            >
            </TextInput>

            <Button title='submit' color='maroon' onPress={props.handleSubmit}></Button>

          </View>
        )}

      </Formik>

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