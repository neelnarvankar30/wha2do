import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View,Image,Text,TextInput,Button,TouchableHighlight,StyleSheet,Linking,} from 'react-native';
import {FormLabel,FormInput,FormValidationMessage,} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AboutUs(){

    return (
        <ScrollView
          style={styles1.container}
          contentContainerStyle={styles1.contentContainer}>
          <View style={styles1.welcomeImageContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/profile_pic.jpg')
                  : require('../assets/images/robot-prod.png')
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
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/haramrit09k')
            }
          />
          <View style={styles1.welcomeImageContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/neel.jpg')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles1.welcomeImage}
            />
          </View>
    
          <OptionButton
            icon="github"
            label="Neel Narvankar (GitHub)"
            onPress={() =>
              Linking.openURL('https://www.github.com/neelnarvankar30')
            }
          />
    
          <OptionButton
            icon="linkedin"
            label="Neel Narvankar (LinkedIn)"
            onPress={() => Linking.openURL('https://www.linkedin.com/in/neeln65')}
          />
        </ScrollView>
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