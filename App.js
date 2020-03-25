import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Image, Text, TextInput, Button, TouchableHighlight, StyleSheet, Linking } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Ionicons } from '@expo/vector-icons';
// import * as WebBrowser from 'expo-web-browser';


function someFunction(){
  alert('Button pressed')
}

function HomeScreen({ navigation }) {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() => navigation.navigate('Details')}
    //   />
    // </View>


    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 2, backgroundColor: 'powderblue', flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('./logo.png')} style={{ width: 100, height: 100, shadowColor: 'white' }} />
        </View>

        <View style={{ flex: 2, flexDirection: 'row', backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontStyle: 'italic', fontSize: 50 }}>wha2do</Text>
        </View>
      </View>

      <View style={{ flex: 6, flexDirection: 'row', backgroundColor: 'skyblue', alignItems: 'center' }}>
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableHighlight onPress={() => navigation.navigate('SignIn')}>
            <Image source={require('./signup.png')} style={{ width: 80, height: 80 }} />
          </TouchableHighlight>
          <Text>Sign in</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableHighlight onPress={() => navigation.navigate('SignUp')}>
            <Image source={require('./signin.png')} style={{ width: 80, height: 80 }} />
          </TouchableHighlight>
          <Text>Register</Text>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'steelblue' }}>
        <View style={{ flex: 1, backgroundColor: 'steelblue', justifyContent: 'center' }} >
          < Button onPress={() => navigation.navigate('SignIn')} title="INFO" />
        </View>
        <View style={{ flex: 1, backgroundColor: 'steelblue', justifyContent: 'center' }} >
          < Button onPress={() => navigation.navigate('AboutUs')} title="About Us" />
        </View>
      </View>
    </View>

  );
}


state = {
  username: '', password: '', email: '', phone_number: ''
}
onChangeText = (key, val) => {
  this.setState({ [key]: val })
}
signUp = async () => {
  const { username, password, email, phone_number } = this.state
  try {
    // here place your signup logic
    console.log('user successfully signed up!: ', success)
  } catch (err) {
    console.log('error signing up: ', err)
  }
}

const Stack = createStackNavigator();

function SignUpScreen() {
  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder='Username'
      autoCapitalize="none"
      placeholderTextColor='white'
      // onChangeText={val => this.onChangeText('username', val)}
    />
    <TextInput
      style={styles.input}
      placeholder='Password'
      secureTextEntry={true}
      autoCapitalize="none"
      placeholderTextColor='white'
      // onChangeText={val => this.onChangeText('password', val)}
    />
    <TextInput
      style={styles.input}
      placeholder='Email'
      autoCapitalize="none"
      placeholderTextColor='white'
      // onChangeText={val => this.onChangeText('email', val)}
    />
    <TextInput
      style={styles.input}
      placeholder='Phone Number'
      autoCapitalize="none"
      placeholderTextColor='white'
      // onChangeText={val => this.onChangeText('phone_number', val)}
    />
    <Button
      title='Sign Up'
      // onPress={this.signUp}
    />
  </View>
  );
}


function SignInScreen() {
  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder='Username'
      autoCapitalize="none"
      placeholderTextColor='white'
      // onChangeText={val => this.onChangeText('username', val)}
    />
    <TextInput
      style={styles.input}
      placeholder='Password'
      secureTextEntry={true}
      autoCapitalize="none"
      placeholderTextColor='white'
      // onChangeText={val => this.onChangeText('password', val)}
    />
    <Button
      title='Sign In'
      // onPress={this.signUp}
    />
  </View>
  );
}


function AboutUsScreen() {
  return (
    <ScrollView style={styles1.container} contentContainerStyle={styles1.contentContainer}>
      
      <View style={styles1.welcomeImageContainer}>
      <Image
        source={
          __DEV__
            ? require('./assets/images/profile_pic.jpg')
            : require('./assets/images/robot-prod.png')
        }
        style={styles1.welcomeImage}
      />
      </View>

      {/* <Button
      title='Sign In'
      // onPress={this.signUp}
    /> */}

      <OptionButton
        icon="github"
        label="Haramrit Singh Khurana (GitHub)"
        onPress={() => Linking.openURL('https://www.github.com/haramrit09k')}
      />

      <OptionButton
        icon="linkedin"
        label="Haramrit Singh Khurana (LinkedIn)"
        onPress={() => Linking.openURL('https://www.linkedin.com/in/haramrit09k')}
      />
<View style={styles1.welcomeImageContainer}>
<Image
        source={
          __DEV__
            ? require('./assets/images/neel.jpg')
            : require('./assets/images/robot-prod.png')
        }
        style={styles1.welcomeImage}
      />
</View>

      <OptionButton
        icon="github"
        label="Neel Narvankar (GitHub)"
        onPress={() => Linking.openURL('https://www.github.com/neelnarvankar30')}
      />

      <OptionButton
        icon="linkedin"
        label="Neel Narvankar (LinkedIn)"
        onPress={() => Linking.openURL('https://www.linkedin.com/in/neeln65')}
      />

    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles1.option, isLastOption && styles1.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles1.optionIconContainer}>
          <Icon name={icon} size={22} color="skyblue" />
          {/* <FontAwesome.Button name={icon} size={22} backgroundColor="#3b5998"> */}
          {/* </FontAwesome.Button> */}
        </View>
        <View style={styles1.optionTextContainer}>
          <Text style={styles1.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
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
    marginTop: 3
  },
  welcomeImageContainer: {
    flexDirection:'column',
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
    alignItems: 'center'
  }
})

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In' }} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} options={{ title: 'Meet the devs' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
