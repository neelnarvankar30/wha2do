import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet, ToastAndroid, Keyboard } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
// import firebase from '@react-native-firebase/app';
// import { db } from '../src/config';
import * as Firebase from '../src/firebaseAPI';
import firebase from 'firebase';
import { Button } from 'react-native-paper';


const userSchema = yup.object({
  username: yup.string().required("Username required").min(5),
  password: yup.string().required("Password required").min(8).max(16)
  // .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  // "One Uppercase, One Lowercase, One Number and one special case Character"
  // ),
  ,
  email: yup.string().email("Not a valid email address").required("Email is required"),
  phone_number: yup.string().required("Phone number is required").min(10, "Phone number must be 10 digits long")
})

const signUpToast = (message) => {
  ToastAndroid.show(message, 3000);
};


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
  try {
    // here place your signup logic
    console.log('user successfully signed up!: ', success);
  } catch (err) {
    console.log('error signing up: ', err);
  }
};

export default function SignUp(props) {
  const { navigation } = props;
  const [] = useState('');
  const [users, setUsers] = useState([
    { username: 'asdgh', password: 'lol', email: 'hsk@gmail.com', phone_number: '2341321' }
  ]);

  const addUser = (user) => {
    setUsers((currentUsers) => {
      return [user, ...currentUsers]
    });

    console.log(users);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./Icons/logo.png')}
        style={{ width: 120, height: 120, shadowColor: 'white', paddingBottom: 30 }}
      />
      <Text style={{ fontSize: 40, paddingBottom: 10 }}>Welcome</Text>

      <Formik
        initialValues={{ username: '', password: '', email: '', phone_number: '' }}
        validationSchema={userSchema}
        onSubmit={(values) => {

          // actions.resetForm();
          Keyboard.dismiss();
          addUser(values);
          // maybe write the logic to add the data into firebase over here
          Firebase.createUser(values.username, values.email, values.password);
          signUpToast("Signing you up...");

          setTimeout(() => {
            var user = firebase.auth().currentUser;
            if (user) {
              signUpToast("Sign up successful!");
              Firebase.addUserToDb(user.uid, values.username, values.email, values.password, values.phone_number);
              navigation.navigate('TodoList');
            }
            else {
              // signUpToast("Sign up failed!");
            }
          }, 2000);

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
              placeholder='Password (8 characters minimum)'
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
              placeholder='Phone Number (US only)'
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