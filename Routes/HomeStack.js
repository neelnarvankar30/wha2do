import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
import AboutUs from '../Screens/AboutUs';
import Info from '../Screens/Info';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import TodoHome from '../Screens/TodoHome';
import NewList from '../Screens/NewList';
const Stack = createStackNavigator()

export default function HomeStack(){
    return (

        <NavigationContainer>
          <Stack.Navigator headerMode = 'none'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='TodoHome' component={TodoHome} />
          
          <Stack.Screen name='Add New List' component={NewList} />   
            <Stack.Screen name='AboutUs' component={AboutUs} />
            <Stack.Screen name='Info' component={Info} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='SignUp' component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>

      )


}




