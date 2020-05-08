import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function AddNewList(props) {

    const [] = useState(false);

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




