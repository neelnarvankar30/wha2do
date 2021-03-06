import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View,Text,StyleSheet,Modal,FlatList,ToastAndroid} from 'react-native';
import { FAB } from 'react-native-paper';
import NewListForm from './Components/NewListForm'
import Card from './Components/card';
import { addTask } from '../src/firebaseAPI';

export default function NewList({route}){

    const {LName} = route.params;
    const {username} = route.params;

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
        { Name: 'buy coffee', key: '1' },
        { Name: 'create an app', key: '2' },
        { Name: 'play on the switch', key: '3' },
      ]);

      const addTodo =(Todo) => {
        Todo.key = Math.random().toString();
        setTodos((currentTodos) => {
          return[Todo, ...currentTodos];
        })
        console.log("List name is ",LName);
        console.log("User name is ",username);
        addTask(Todo.Name, LName, username)
        setModalVisible(false);
      }
    
    

    return(
        // <TouchableWithoutFeedback onPress={() => {
        //     Keyboard.dismiss();
        //     console.log('dismissed');
        //   }}>
        <View style ={{flex: 1 , flexDirection:'column'}}>
          <View style= {{flex: 1, flexDirection: 'row', backgroundColor: '#add8e6', padding: 25}}>
        
              <View style = {{flex: 2, flexDirection:'column', backgroundColor:'#add8e6',  justifyContent: "center"}}>
                <View style ={{flex: 1, backgroundColor:'#add8e6', borderBottomWidth:2}}>
                </View>
              <View style ={{flex: 1, backgroundColor:'#add8e6'}}>
          </View>
        </View>

        <View style = {{flex: 3, backgroundColor:'#add8e6', justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontStyle: 'italic',fontSize: 25 }}>{(LName)}</Text>
        </View>

        <View style = {{flex: 2,flexDirection:'column', backgroundColor:'#add8e6',  justifyContent: "center"}}>
          <View style ={{flex: 1, backgroundColor:'#add8e6', borderBottomWidth:2}}>
            </View>
              <View style ={{flex: 1, backgroundColor:'#add8e6'}}>
              </View>
          </View>

        </View>


        <View style = {{flex:4, backgroundColor: '#add8e6', alignItems: "center"}}>
       
          <FlatList   showsVerticalScrollIndicator={false} style={{width:300}} data={todos} renderItem={({ item }) => (
           <Card>
           
            <Text style={{...styles.textTitle}}>{ item.Name }</Text>
            </Card>
        
      )} />

        </View>

    <View style = {{flex:1,flexDirection:'row', backgroundColor: '#add8e6'}}>
       

        <View style = {{flex:1, backgroundColor:'#add8e6',alignItems: 'flex-end',justifyContent: "center", padding:10}}>
        <FAB
                    style={styles.fab}
                    icon="plus"
                    onPress={() => {
                        console.log("Route params are these bitchesssss: ",route.params)
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
            <NewListForm addTodo={addTodo} />

            <View>
            </View>
            </Modal>
            {/* <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3", top:-90, width:200, left:80 }}
                    onPress={() => {
                        showToastWithGravityAndOffset();
                        setModalVisible(!modalVisible);
                    }}
                >
                    <Text style={styles.textStyle}>ADD</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3", top:-80, width:200, left:80 }}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <Text style={styles.textStyle}>Cancel</Text>
                </TouchableHighlight> */}
                


</View>
 //</TouchableWithoutFeedback>
)
}

const styles = StyleSheet.create({
  textTitle:{
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
            width:250,
            borderBottomWidth:2,
            padding:10,
            margin:10,
            borderWidth:2,
            borderRadius:20
    },
    
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width:325,
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
