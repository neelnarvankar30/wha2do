import 'react-native-gesture-handler';
import React, {  } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Keyboard, ToastAndroid } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as Firebase from '../../src/firebaseAPI'

export default function Forgot({ hideModal }) {
    // const [modalVisible, setModalVisible] = useState(false);


    const userSchema = yup.object({
        email: yup.string().email("Not a valid email address").required("Email is required"),
    })

    return (

        <View style={styles.centeredView}>

            <Formik
                initialValues={{ email: '' }}
                validationSchema={userSchema}
                onSubmit={(values) => {
                    Firebase.passwordReset(values.email);
                    console.log(values);
                    Keyboard.dismiss();
                    hideModal();
                }}
            >

                {(props) => (

                    <View style={styles.modalView}>
                        <Text>Please enter your registered email:</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            autoCapitalize="none"
                            placeholderTextColor="black"
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                            autoFocus
                        />

                        {
                            <Text style={{ fontSize: 10, color: 'red' }}>{props.errors.email}</Text>
                        }

                        <Button title='Send' color='grey' onPress={props.handleSubmit} />

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
