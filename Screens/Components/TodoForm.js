import React, { useState } from 'react';
import { View, Text, TextInput, ToastAndroid, Button, StyleSheet } from 'react-native';
import {Formik} from 'formik';

export default function TodoForm({addList}){

const [] = useState(false);

const showToast = () => {
        ToastAndroid.show("New list created", ToastAndroid.SHORT);
    };

    const cannotBeEmpty = () => {
        ToastAndroid.showWithGravityAndOffset(
          "Please add List name",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          250
        );
      };
    

    return(
            
        <View style={styles.centeredView}>

            <Formik 
                initialValues={{Name: '' }}
                onSubmit={(values) => {
                    if(values.Name.length > 2){
                    showToast();
                    addList(values);
                    console.log(values);
                    }
                    else{
                        cannotBeEmpty();
                    }
                }}
            >

                {(props) => ( 

                    <View style={styles.modalView}>
                        <Text>Add List</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="List Name"
                            autoCapitalize="none"
                            placeholderTextColor="black"
                            onChangeText={props.handleChange('Name')}
                            value = {props.values.Name}
                        />
                        {/* <CheckBox style={styles.checkbox}
                            title='Enable Notifications'
                            checked = 'true'
                        /> */}

                        <Button title='Add' color='grey' onPress={props.handleSubmit} />

                    </View>
                    )}
                </Formik>

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
            height: 2},
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
