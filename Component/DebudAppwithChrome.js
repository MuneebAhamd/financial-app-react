import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export class DebudAppwithChrome extends Component {
  submit(){
    console.log("test submit function")
    console.log("test 1v1 2submit function")

    console.log("test submit function")
  }
  
    render() {
    return (
      <View style={{flex:1}}>
        <TextInput 
           maxLength={5}
           placeholder='enter name'
        style={{borderColor:'skyblue',margin:5,borderWidth:2}}>
            </TextInput>
            <TextInput 
           maxLength={5}
           placeholder='enter password'
        style={{borderColor:'skyblue',margin:5,borderWidth:2}}>
            </TextInput>
        <Text>DebudAppwithChrome</Text>
      </View>
    )
  }
}

export default DebudAppwithChrome