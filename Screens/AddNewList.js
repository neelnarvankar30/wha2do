import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { View, Image, Text, TextInput, Button, TouchableHighlight, StyleSheet, Linking, Modal } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, CheckBox } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddNewList(props) {

    const [modalVisible, setModalVisible] = useState(false);

    const { navigation } = props
    return (
        <View style={styles.container}>
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
            <Button title="Add New List" onPress={() => navigation.navigate('TodoHome')} />
        </View>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        backgroundColor: '#add8e6'
    },
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#fafafa',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#add8e6'
    },
});



const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#add8e6',
    },
    contentContainer: {
        paddingTop: 15,
    },
    optionIconContainer: {
        marginRight: 22,
    },
    option: {
        backgroundColor: '#add8e6',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 0,
        borderColor: '#ededed',
    },
    welcomeImage: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginTop: 3,
    },
    welcomeImageContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lastOption: {
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
        fontSize: 15,
        alignSelf: 'flex-start',
        marginTop: 1,
    },
});

