import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ToastAndroid } from 'react-native';
import { Formik } from 'formik';
import firebase from 'firebase';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function NewTaskForm({ addTodo }) {

    const [, setCurrentUser] = useState('');

    useEffect(() => {
        const { currentUser } = firebase.auth()
        setCurrentUser(currentUser)
        console.log("current user in newtask form is ->>>>> ", currentUser.displayName)
    })

    const showToast = () => {
        ToastAndroid.show("New Task created", ToastAndroid.SHORT);
    };

    const cannotBeEmpty = () => {
        ToastAndroid.showWithGravityAndOffset(
            "Please add a task name",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            250
        );
    };

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onSelect = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        testing();
        
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };


    const showTimepicker = () => {
        showMode('time');
    };

    const testing=() =>{    
    var a = date.getHours();
    var b = date.getMinutes();
    var c = a + ':' + b;
    return[c]
    }

    return (
        <View style={styles.centeredView}>

            <Formik
                initialValues={{ Name: '', time: testing(), comp:'To be Completed' }}
                onSubmit={(values) => {
                    if (values.Name.length > 2) {
                        showToast();
                        addTodo(values);
                        // addTask(values.Name, );

                        console.log(values);
                    }

                    else {
                        cannotBeEmpty();
                    }
                }}
            >

                {(props) => (

                    <View style={styles.modalView}>
                        <Text>Add Task</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Task Name"
                            autoCapitalize="none"
                            placeholderTextColor="black"
                            onChangeText={props.handleChange('Name')}
                            value={props.values.Name}
                        />
                        <Button title='Add' color='grey' onPress={props.handleSubmit} />
                        {/* <Text> </Text>
                        <Button onPress={showDatepicker} color='grey' title="Pick a date" /> */}
                        <Text> </Text>
                        <Button onPress={showTimepicker} color='grey' title="pick a time to start" />
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                timeZoneOffsetInMinutes={0}
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onSelect}
                            />
                        )}

                    </View>

                )}


            </Formik>



        </View>

    )
}

const styles = StyleSheet.create({
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
