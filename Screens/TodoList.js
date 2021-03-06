import React, { useState } from 'react';
import { BackHandler, Alert, View, FlatList, Text, ToastAndroid, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { FAB } from 'react-native-paper';
import TodoForm from './Components/TodoForm'
import Card from './Components/card'
import firebase from 'firebase';
import { useEffect } from 'react';
import { signOut } from '../src/firebaseAPI';

export default function TodoList({ navigation }) {
    //const { itemId } = route.params;
    //const { otherParam } = route.params;
    // const { UName } = route.params;
    // const [lname, setlname] = useState('');

    const [currentUser, setCurrentUser] = useState('');

    const toastMessage = (message, time) => {
        ToastAndroid.show(message, time);
      };


    const backAction = () => {
        Alert.alert("Exit app?", "Are you sure you want to exit?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
    };

    // state = { currentUser: null }
    useEffect(() => {
        const { currentUser } = firebase.auth()
        setCurrentUser(currentUser)
        console.log("current user is ->>>>> ", currentUser.displayName)

        BackHandler.addEventListener("hardwareBackPress", backAction);
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [])


    const [modalVisible, setModalVisible] = useState(false);

    const [list, setlist] = useState([
        { Name: 'Grocery', key: '1' },
        { Name: 'Gym', key: '2' },
        { Name: 'Home', key: '3' },
    ]);

    const addList = (list) => {
        list.key = Math.random().toString();
        setlist((currentlist) => {
            return [list, ...currentlist];
        })
        setModalVisible(false);
    }



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

                <Text style={{fontSize: 25}}>Welcome, <Text style={{fontWeight: "bold"}}>{currentUser.displayName}</Text></Text>
            </View>



            <View style={{ flex: 4, backgroundColor: '#add8e6', alignItems: "center" }}>
                <FlatList showsHorizontalScrollIndicator={false} horizontal={true} style={{ width: 350 }} data={list} renderItem={({ item }) => (
                    <TouchableOpacity style={{ height: 200 }} onPress={() => navigation.navigate('NewTask', { LName: item.Name, username: currentUser })}>
                        <Card>
                            <Text style={{ width: 200, margin: 20, height: 200, top: 90, left: 50, fontSize: 25 }}>{item.Name}</Text>
                        </Card>
                    </TouchableOpacity>
                )} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row-reverse', backgroundColor: '#add8e6'}}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#add8e6', justifyContent: 'flex-start' }}>
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
                <View style={{left:120, flex: 1, backgroundColor: '#add8e6', justifyContent: 'center', alignContent:'center' }}>
                <FAB
                            style={styles.fab}
                            icon="logout"
                            onPress={() => {
                                toastMessage("Signing out...", 2000)
                                signOut()
                                navigation.navigate('Home');
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

                <TodoForm addList={addList} />

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
    fab_logout: {
        position: 'absolute',
        // margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#add8e6'
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
