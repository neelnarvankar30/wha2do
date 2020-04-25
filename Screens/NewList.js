import 'react-native-gesture-handler';
import React, {Component, useState} from 'react';
import {View,Image,Text,TextInput,Button,TouchableHighlight,StyleSheet,Linking,Modal, ToastAndroid} from 'react-native';
import {FormLabel,FormInput,FormValidationMessage,} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RectButton, ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { CheckBox } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NewList(){
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
    return(
        <View style ={{flex: 1 , flexDirection:'column'}}>
    <View style= {{flex: 1, flexDirection: 'row', backgroundColor: '#add8e6', padding: 25}}>
        
        <View style = {{flex: 2, flexDirection:'column', backgroundColor:'#add8e6',  justifyContent: "center"}}>
            <View style ={{flex: 1, backgroundColor:'#add8e6', borderBottomWidth:2}}>
            </View>
            <View style ={{flex: 1, backgroundColor:'#add8e6'}}>
            </View>
        </View>

        <View style = {{flex: 3, backgroundColor:'#add8e6', justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontStyle: 'italic',fontSize: 25 }}>List Name</Text>
        </View>

        <View style = {{flex: 2,flexDirection:'column', backgroundColor:'#add8e6',  justifyContent: "center"}}>
        <View style ={{flex: 1, backgroundColor:'#add8e6', borderBottomWidth:2}}>
            </View>
            <View style ={{flex: 1, backgroundColor:'#add8e6'}}>
            </View>
        </View>

    </View>

    <View style = {{flex:2, backgroundColor: '#add8e6', alignItems: "center"}}>

    </View>

    <View style = {{flex:4, backgroundColor: '#add8e6', alignItems: "center"}}>
        
    </View>

    <View style = {{flex:1,flexDirection:'row', backgroundColor: '#add8e6'}}>
        <View style = {{flex:1, backgroundColor:'#add8e6', alignItems: 'flex-end',justifyContent: "center", padding:10}}>
        <TouchableOpacity onPress={() => {
                    console.log("hello");
                    setModalVisible(true);
                }}><Image
            source={require('./add-icon.png')}
            style={{width: 50, height: 50, shadowColor: 'white'}}
          />
          </TouchableOpacity>
        </View>

        <View style = {{flex:1, backgroundColor:'#add8e6',alignItems: 'flex-start',justifyContent: "center", padding:10}}>
            <Image 
            source={require('./home.png')}
            style={{width: 50, height: 50, shadowColor: 'white'}}
            />
        </View>
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
                        <Text>Add Task</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Task Name"
                            autoCapitalize="none"
                            placeholderTextColor="black"
                        // onChangeText={val => this.onChangeText('username', val)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Time-Start"
                            autoCapitalize="none"
                            placeholderTextColor="black"
                        // onChangeText={val => this.onChangeText('username', val)}
                        />
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Time-End"
                            autoCapitalize="none"
                            placeholderTextColor="black"
                    
                        // onChangeText={val => this.onChangeText('username', val)}
                        />

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                showToastWithGravityAndOffset();
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
}

const styles = StyleSheet.create({
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
