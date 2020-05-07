import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight, StyleSheet, Linking, ActionSheetIOS,ToastAndroid } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import * as yup from 'yup';
import database from '@react-native-firebase/database';
// import firebase from '@react-native-firebase/app';
// import { db } from '../src/config';
import * as Firebase from '../src/firebaseAPI';
import firebase from 'firebase';
import { Button } from 'react-native-paper';
// const firebaseConfig = {
//   apiKey: "AIzaSyBTMUIY1tvkv0770bwFOg4WpbyLzbJ3PCU",
//   authDomain: "wha2do-swe632.firebaseapp.com",
//   databaseURL: "https://wha2do-swe632.firebaseio.com",
//   projectId: "wha2do-swe632",
//   storageBucket: "wha2do-swe632.appspot.com",
//   messagingSenderId: "353111282999",
//   appId: "1:353111282999:web:c065ff801730236cb3f6b2",
//   measurementId: "G-953M0RZXHY"
// };

// if (!firebase.apps.length)
// {
//   const app = firebase.initializeApp(firebaseConfig);
// }

//   const db = firebase.database();

const userSchema = yup.object({
  username: yup.string().required("Username required").min(5),
  password: yup.string().required("Password required").min(8).max(16).matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain atleast 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ),
  email: yup.string().email("Not a valid email address").required("Email is required"),
  phone_number: yup.string().required("Phone number is required").min(10, "Phone number must be 10 digits long")
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

export default function SignUp(props) {
  const { navigation } = props;
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([
    { username: 'asdgh', password: 'lol', email: 'hsk@gmail.com', phone_number: '2341321' }
  ]);

  const addUser = (user) => {
    setUsers((currentUsers) => {
      return [user, ...currentUsers]
    });

    console.log(users);
  }
  const cannotBeEmpty = () => {
    ToastAndroid.showWithGravityAndOffset(
        "Password cannot be less than eight characters",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        250
    );
};

  return (
    <View style={styles.container}>
      <Image
        source={require('./Icons/logo.png')}
        style={{ width: 120, height: 120, shadowColor: 'white', paddingBottom: 30 }}
      />
      <Text style={{ fontSize: 40, paddingBottom: 10 }}>Welcome</Text>

      <Formik
        initialValues={{ username: '', password: '', email: '', phone_number: '' }}
        //validationSchema={userSchema}
        onSubmit={(values, actions) => {
          if(values.password.length > 8){
          navigation.navigate('TodoList', { UName: '' })
          actions.resetForm();
          addUser(values);
          // maybe write the logic to add the data into firebase over here
          Firebase.createUser(values.username, values.email, values.password);
          Firebase.addTest(values.username, values.email, values.password, values.phone_number);
          
          firebase.auth().onAuthStateChanged(user => {
            navigation.navigate(user ? 'TodoList' : 'SignUp')
          })
          // so currently, I am able to add new users inside the users json array (declared on line 36)
          // hopefully we're able to send this data to firebase as well          
          // console.log(values);
        }
        else{
          cannotBeEmpty();
        }
        }}
        
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='Username'
              onChangeText={props.handleChange('username')}
              value={props.values.username}
              onBlur={() => props.setFieldTouched('username')}
              autoFocus
            >

            </TextInput>

            {props.touched.username && props.errors.username &&
              <Text style={{ fontSize: 10, color: 'red' }}>{props.errors.username}</Text>
            }

            <TextInput
              style={styles.input}
              placeholder='Password'
              secureTextEntry={true}
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              onBlur={() => props.setFieldTouched('password')}

            >
            </TextInput>

            {props.touched.password && props.errors.password &&
              <Text style={{ fontSize: 10, color: 'red' }}>{props.errors.password}</Text>
            }


            <TextInput
              style={styles.input}
              placeholder='Email'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              keyboardType='email-address'
              onBlur={() => props.setFieldTouched('email')}
            >
            </TextInput>

            {props.touched.email && props.errors.email &&
              <Text style={{ fontSize: 10, color: 'red' }}>{props.errors.email}</Text>
            }

            <TextInput
              style={styles.input}
              placeholder='Phone Number (10 digits)'
              onChangeText={props.handleChange('phone_number')}
              value={props.values.phone_number}
              keyboardType='phone-pad'
              onBlur={() => props.setFieldTouched('phone_number')}
              maxLength={10}
            >
            </TextInput>

            {props.touched.phone_number && props.errors.phone_number &&
              <Text style={{ fontSize: 10, color: 'red' }}>{props.errors.phone_number}</Text>
            }

            <Button
              mode='outlined'
              color='black'
              onPress={props.handleSubmit}
            >
              Continue
             </Button>


          </View>
        )}

      </Formik>

    </View>
  )

}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6'
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