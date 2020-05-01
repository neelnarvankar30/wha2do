import React, { Component, useState } from 'react';
import { View, FlatList, Image, Text, TextInput, ToastAndroid, TouchableHighlight, Button, TouchableOpacity, StyleSheet, Linking, Modal } from 'react-native';
import { CheckBox } from "react-native-elements";
import { FAB,CardActions, Title, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import TodoForm from './Components/TodoForm'
import Card from './Components/card'   

export default function TodoHome({ route, navigation }) {
    const { itemId } = route.params;
    const { otherParam } = route.params;
    const { UName } = route.params;
   // const [lname, setlname] = useState('');
    
    const [modalVisible, setModalVisible] = useState(false);

    const [list, setlist] = useState([
        { Name: 'Grocery', key: '1' },
        { Name: 'Gym', key: '2' },
        { Name: 'Home', key: '3' },
      ]);

      const addList =(list) => {
        list.key = Math.random().toString();
        setlist((currentlist) => {
          return[list, ...currentlist];
        })
        setModalVisible(false);
      }

    const listName = "Grocery";
    const date = "30 Apr 20";

    const showToast = () => {
        ToastAndroid.show("New list created!", ToastAndroid.SHORT);
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
                    <Text style={{ fontStyle: 'italic', fontSize: 25 }}>Todo Lists</Text>
                </View>

                <View style={{ flex: 2, flexDirection: 'column', backgroundColor: '#add8e6', justifyContent: "center" }}>
                    <View style={{ flex: 1, backgroundColor: '#add8e6', borderBottomWidth: 2 }}>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#add8e6' }}>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, backgroundColor: '#add8e6', alignItems: "center" }}>

                <Text>Welcome {(UName)}</Text>
            </View>

            

            <View style={{ flex: 4, backgroundColor: '#add8e6', alignItems: "center" }}>
            <FlatList  showsHorizontalScrollIndicator={false} horizontal={true} style={{width:350}} data={list} renderItem={({ item }) => (
            <TouchableOpacity style={{height:200}}   onPress={() => navigation.navigate('NewList',{LName: item.Name})}>
           <Card>
            <Text style={{width: 200, margin: 20, height:200}}>{ item.Name }</Text>
            </Card>
            </TouchableOpacity>
                )} />
                {/* <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}>

                    
                    <Card
                    onPress={() => navigation.navigate('NewList',{LName: listName})}
                     style={{width: 200, margin: 20}}>
                        <Card.Title title={listName} subtitle={"created on " + date} />
                        <Card.Content>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                        </Card.Content>
                    </Card>


                    <Card style={{width: 200, margin: 20}}>
                        <Card.Title title={listName} subtitle={"created on " + date} />
                        <Card.Content>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                        </Card.Content>
                    </Card>

                    <Card style={{width: 200, margin: 20}}>
                        <Card.Title title={listName} subtitle={"created on " + date} />
                        <Card.Content>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                        </Card.Content>
                    </Card>

                    <Card style={{width: 200, margin: 20}}>
                        <Card.Title title={listName} subtitle={"created on " + date} />
                        <Card.Content>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                        </Card.Content>
                    </Card>

                    <Card style={{width: 200, margin: 20}}>
                        <Card.Title title={listName} subtitle={"created on " + date} />
                        <Card.Content>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                            <Text>Task</Text>
                        </Card.Content>
                    </Card>


            </ScrollView> */}
            </View>

            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#add8e6', justifyContent: 'flex-end' }}>
                <FAB
                    style={styles.fab}
                    icon="plus"
                    onPress={() => {
                        console.log("hello");
                        setModalVisible(true);
                    }}
                    color="white"
                />

            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >

            <TodoForm  addList={addList} />
                
            </Modal>


        </View>

    )
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#4154FE'
    },
    input: {
        width: 300,
        height: 55,
        margin: 10,
        padding: 8,
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
        borderBottomWidth: 2
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
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
