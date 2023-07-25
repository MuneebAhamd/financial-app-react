import { StyleSheet,  View } from 'react-native'
import {  Text} from "./Text";

import React from 'react'

const Input = () => {
  return (
    <View>
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
    <Image   source={require('./Component/Image1.png')} />
    </View>
    </View>
  )
}

const style=StyleSheet.create({
  
    card:{
      borderWidth:2,
      borderColor:'black',
      // backgroundColor:colors.quaternary,
      margin:8,
      // borderRadius: 20,
      // flex: 0,
      // justifyContent: 'space-around'
  

    },
    card1:{
      backgroundColor:'white',
      borderRadius: 20,
      border:2,
    }
  })
  
  
  
  
  
  export default Input
  