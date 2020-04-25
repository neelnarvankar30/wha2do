import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View,Image,Text,TextInput,TouchableHighlight,StyleSheet,Linking,} from 'react-native';
import {FormLabel,FormInput,FormValidationMessage,} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';

export default function Login(props){
  const [modalVisible, setModalVisible] = useState(false);
  const { navigation } = props
    return (  
        <View style={styles.container}>
         <Image
            source={require('./logo.png')}
            style={{width: 120, height: 120, shadowColor: 'white', paddingBottom:30}}
          />
         <Text style={{fontSize:40, paddingBottom:10}}>Welcome.</Text>
         
        
          <TextInput
            style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="black"
            // onChangeText={val => this.onChangeText('username', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="black"
            // onChangeText={val => this.onChangeText('password', val)}
          />
          <Button 
          onPress={() => navigation.navigate('TodoHome')}
          mode='outlined'
          color='black'>
          Log In
          </Button>
      
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
      width:250,
            borderBottomWidth:2,
            padding:10,
            margin:10,
            borderWidth:2,
            borderRadius:20
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#add8e6'
    },
  });