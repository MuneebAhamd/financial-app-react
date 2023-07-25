import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet, Image } from 'react-native'
import AppHeader from './Component/AppHeader';
import { colors } from './Component/Colors';
import { Text } from "./Component/Text";
import {Card} from "./Component/Card"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: "",
      address: '',
    }
  }
    submit() {
      console.warn("all values",this.state)
    }
    render() {
      return (
        
      <View>
        {/* <AppHeader/> */}
           
        <Text text='Name' title/>
        <TextInput placeholder='Enter name'
          style={[style.card]}
          onChangeText={(text) => {this.setState({name:text})}}>
        </TextInput>
        <Text text='Password' title/>
        <TextInput  placeholder='Enter password'
          style={[style.card]}
          secureTextEntry={true}
          onChangeText={(text) => { this.setState({password:text})}}>
        </TextInput>
        <Text text='Address' title/>
        <TextInput placeholder='Enter address'
          style={[style.card]}
          onChangeText={(text) => { this.setState({address:text})}}>
        </TextInput>
        <View style={[style.card1,{ alignItems:'center'}]}>
        <Image   source={require('./Component/Image3.png')} />
        </View>
        <View style={[style.btn]}>
        <Button   style={[style.btn]} onPress={() => { this .submit()}} title='Save' />
        </View>
      </View>
    );
  }
}
const style=StyleSheet.create({
 
  card:{
    borderWidth:2,
    borderColor:'black',
    margin:8,

  },
  card1:{
    backgroundColor:'white',
    borderRadius: 20,
    borderWidth:2,
    margin:8
  },
  btn:{
    margin:8,
    borderWidth:2,
  }
})


export default App;


