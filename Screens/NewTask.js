import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {BackHandler, View, Text, StyleSheet, Modal, FlatList, ToastAndroid } from 'react-native';
import { FAB } from 'react-native-paper';
import NewTaskForm from './Components/NewTaskForm'
import Card from './Components/card';
import { addTask } from '../src/firebaseAPI';
import Swipeout from 'react-native-swipeout';
import firebase from 'firebase';


export default function NewTask({ route, navigation }) {

  const { LName } = route.params;
  const { username } = route.params;

  const [, setCurrentUser] = useState('');

  const backAction = () => {
    navigation.goBack(null);
    return true;
};


  useEffect(() => {
    const { currentUser } = firebase.auth()
    setCurrentUser(currentUser)
    console.log("current user in newtask is ->>>>> ", currentUser.displayName)

    BackHandler.addEventListener("hardwareBackPress", backAction);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [])

  const [modalVisible, setModalVisible] = useState(false);

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
    { Name: 'buy coffee', key: '1', time:'3:15', comp:'To be Completed' },
    { Name: 'create an app', key: '2', time:'10:20', comp:'To be Completed' },
    { Name: 'play on the switch', key: '3', time:'11:11', comp:'To be Completed' },
  ]);

  const addTodo = (Todo) => {
    Todo.key = Math.random().toString();
    setTodos((currentTodos) => {
      return [Todo, ...currentTodos];
    })
    console.log("List name is ", LName);
    console.log("User name is ", username);
    setModalVisible(false);
    addTask(Todo.Name, LName, username.displayName, username.uid)

  }

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };


  const addBottom = (Todo) => {
    //Todo.key = Math.random().toString();
    setTodos((currentTodos) => {
      if(Todo.comp == 'Completed'){
      Todo.comp = 'To be Completed'
      return[Todo, ...currentTodos]
      }
      else{
        Todo.comp = 'Completed'
      }
      return [...currentTodos,Todo];
    })
  }


  const swipeoutBtns = (item) => {
   if(item.comp == 'To be Completed')
   {
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
      ],
      left: [
        {
          text: 'Completed',
          backgroundColor: 'green',
          height: 20,
          buttonWidth: 50,
          onPress: () => {
            console.log(item.key);
            pressHandler(item.key);
            addBottom(item);
            
            //pressHandler(key);
          }
        }
      ]
    };
    }
    else{
      return{
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
        ],
        left: [
          {
            text: 'Undo',
            backgroundColor: '#DAA520',
            height: 20,
            buttonWidth: 50,
            onPress: () => {
              console.log(item.key);
              pressHandler(item.key);
              addBottom(item);     
              //pressHandler(key);
            }
          }
        ]   
      };
    }
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
            <Text style={{...styles.textTitle}}>{ item.Name }</Text>
            <Text>Start by: {item.time}</Text>
            <Text>Status: {item.comp}</Text>
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#4154FE'
  },
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
