import React, {Component} from 'react';
import {View,Image,Text,TextInput,Button,TouchableHighlight,StyleSheet,Linking,} from 'react-native';

export default function TodoHome(){
return(

<View style ={{flex: 1 , flexDirection:'column'}}>
    <View style= {{flex: 1, flexDirection: 'row', backgroundColor: '#add8e6', padding: 25}}>
        
        <View style = {{flex: 2, backgroundColor:'#add8e6',  justifyContent: "center"}}>
            <Text style= {{fontSize: 27}}>_______</Text>
        </View>

        <View style = {{flex: 3, backgroundColor:'#add8e6', justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontStyle: 'italic',fontSize: 25 }}>Todo Lists</Text>
        </View>

        <View style = {{flex: 2, backgroundColor:'#add8e6',  justifyContent: "center"}}>
            <Text style= {{fontSize: 27}}>_______</Text>
        </View>

    </View>

    <View style = {{flex:2, backgroundColor: '#add8e6', alignItems: "center"}}>

     <Image
            source={require('./add-icon.png')}
            style={{width: 50, height: 50, shadowColor: 'white'}}
          />
        <Text>Add New List </Text>
    </View>

    <View style = {{flex:4, backgroundColor: '#add8e6', alignItems: "center"}}>
        
    </View>

    <View style = {{flex:1, backgroundColor: '#add8e6'}}>

    </View>

</View>
)
}