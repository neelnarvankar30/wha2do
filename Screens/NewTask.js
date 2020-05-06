import 'react-native-gesture-handler';
import React, { Component, useState, useEffect } from 'react';
import { View, Image, Text, Alert, TextInput, Button, TouchableHighlight, StyleSheet, Linking, Modal, FlatList, TouchableWithoutFeedback, Keyboard, ToastAndroid, RecyclerViewBackedScrollView } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { FAB } from 'react-native-paper';
import TodoItem from './Components/todoItem';
import AddTodo from './Components/addTodo';
import NewTaskForm from './Components/NewTaskForm'
import Card from './Components/card';
import { addTask } from '../src/firebaseAPI';
import SwipeToDelete from 'react-swipe-to-delete-component';
import Swipeout from 'react-native-swipeout';
import firebase from 'firebase';


export default function NewTask({ route, navigation }) {

  const { LName } = route.params;
  const { username } = route.params;

  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const { currentUser } = firebase.auth()
    setCurrentUser(currentUser)
    console.log("current user in newtask is ->>>>> ", currentUser.uid)
  })
  console.log("current user outside wala in newtask is ->>>>> ", currentUser.uid)


  const [modalVisible, setModalVisible] = useState(false);
  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "New Task Created",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      25,
      50
    );
  };

  const cannotBeEmpty = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Task name cannot be empty",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  const [todos, setTodos] = useState([
    { Name: 'buy coffee', key: '1' },
    { Name: 'create an app', key: '2' },
    { Name: 'play on the switch', key: '3' },
  ]);

  const addTodo = (Todo) => {
    Todo.key = Math.random().toString();
    setTodos((currentTodos) => {
      return [Todo, ...currentTodos];
    })
    console.log("List name is ", LName);
    console.log("User name is ", username);
    setModalVisible(false);
    addTask(Todo.Name, LName, currentUser.displayName, currentUser.uid)

  }

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      cannotBeEmpty();
    }
  };

  const swipeoutBtns = (item) => {
    return {
      autoClose: true,
      right: [
        {
          text: 'Delete',
          backgroundColor: 'red',
          height: 20,
          buttonWidth: 50,
          onPress: () => {
            console.log(item.key);
            pressHandler(item.key);
            //pressHandler(key);
          }
        }
      ]
    };
  };


  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#add8e6', padding: 25 }}>

        <View style={{ flex: 2, flexDirection: 'column', backgroundColor: '#add8e6', justifyContent: "center" }}>
          <View style={{ flex: 1, backgroundColor: '#add8e6', borderBottomWidth: 2 }}>
          </View>
          <View style={{ flex: 1, backgroundColor: '#add8e6' }}>
          </View>
        </View>

        <View style={{ flex: 3, backgroundColor: '#add8e6', justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontStyle: 'italic', fontSize: 25 }}>{(LName)}</Text>
        </View>

        <View style={{ flex: 2, flexDirection: 'column', backgroundColor: '#add8e6', justifyContent: "center" }}>
          <View style={{ flex: 1, backgroundColor: '#add8e6', borderBottomWidth: 2 }}>
          </View>
          <View style={{ flex: 1, backgroundColor: '#add8e6' }}>
          </View>
        </View>

      </View>


      <View style={{ flex: 4, backgroundColor: '#add8e6', alignItems: "center" }}>


        <FlatList showsVerticalScrollIndicator={false} style={{ width: 300 }} data={todos} renderItem={({ item }) => (
          <Swipeout style={{ backgroundColor: '#add8e6' }} buttonWidth={100} {...swipeoutBtns(item)} >
            <Card>
              <View>
                <Text style={{ ...styles.textTitle }}>{item.Name}</Text>
              </View>
            </Card>
          </Swipeout>
        )} />

      </View>

      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#add8e6' }}>


        <View style={{ flex: 1, backgroundColor: '#add8e6', alignItems: 'flex-end', justifyContent: "center", padding: 10 }}>
          <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => {
              console.log("Route params are these bitchesssss: ", route.params)
              console.log("hello");
              setModalVisible(true);
            }}
            color="white"
          />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <NewTaskForm addTodo={addTodo} />

        <View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },

  input: {
    width: 250,
    borderBottomWidth: 2,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width: 325,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
