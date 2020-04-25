import React, { Component, useState } from 'react';
import { View, Image, Text, TextInput, ToastAndroid, Button, TouchableHighlight, TouchableOpacity, StyleSheet, Linking, Modal } from 'react-native';
import { CheckBox } from "react-native-elements";
import { FloatingAction } from "react-native-floating-action";



export default function TodoHome() {

    const [modalVisible, setModalVisible] = useState(false);

    const showToast = () => {
        ToastAndroid.show("New list created!", ToastAndroid.SHORT);
    };

    return (

        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#add8e6', padding: 25 }}>
            <View style = {{flex: 2, flexDirection:'column', backgroundColor:'#add8e6',  justifyContent: "center"}}>
            <View style ={{flex: 1, backgroundColor:'#add8e6', borderBottomWidth:2}}>
            </View>
            <View style ={{flex: 1, backgroundColor:'#add8e6'}}>
            </View>
        </View>

                <View style={{ flex: 3, backgroundColor: '#add8e6', justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontStyle: 'italic', fontSize: 25 }}>Todo Lists</Text>
                </View>

                <View style = {{flex: 2, flexDirection:'column', backgroundColor:'#add8e6',  justifyContent: "center"}}>
            <View style ={{flex: 1, backgroundColor:'#add8e6', borderBottomWidth:2}}>
            </View>
            <View style ={{flex: 1, backgroundColor:'#add8e6'}}>
            </View>
        </View>
            </View>

            <View style={{ flex: 2, backgroundColor: '#add8e6', alignItems: "center" }}>

                <TouchableOpacity onPress={() => {
                    console.log("hello");
                    setModalVisible(true);
                }}>
                    <Image
                        source={require('./add-icon.png')}
                        style={{ width: 50, height: 50, shadowColor: 'white' }}

                    />
                </TouchableOpacity>


                <Text>Add New List </Text>
            </View>

            <View style={{ flex: 4, backgroundColor: '#add8e6', alignItems: "center" }}>

            </View>

            <View style={{ flex: 1,flexDirection:'row', backgroundColor: '#add8e6', justifyContent:'flex-end' }}>
            <Image
                        source={require('./Plus.png')}
                        style={{ width: 50, height: 50, shadowColor: 'white' }}

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
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Add List</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="List Name"
                            autoCapitalize="none"
                            placeholderTextColor="black"
                        // onChangeText={val => this.onChangeText('username', val)}
                        />
                        <CheckBox style={styles.checkbox}
                            title='Enable Notifications'
                        // checked={this.state.checked}
                        />

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                console.log("New list created!");
                                showToast();
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>OK</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </TouchableHighlight>

                    </View>
                </View>
            </Modal>



        </View>

    )
};

const styles = StyleSheet.create({
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
