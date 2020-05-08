import 'react-native-gesture-handler';
import React, {} from 'react';
import {View,Text,TextInput,Button,StyleSheet} from 'react-native';
import {Formik} from 'formik';
import { addTask } from '../../src/firebaseAPI';

export default function NewListForm({addTodo}){
    
    return(
         
        <View style={styles.centeredView}>

            <Formik 
                initialValues={{Name: '' }}
                onSubmit={(values) => {
                    addTodo(values);
                    addTask(values.Name);
                    console.log(values);
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
                    value = {props.values.Name}
                />

                <Button title='Add' color='grey' onPress={props.handleSubmit} />
                
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
