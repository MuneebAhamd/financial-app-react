import { Text, View ,Button} from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export class FormValidation extends Component {
  constructor()
  {
    super()
    this.state={
        invalidAddress:'',
        address:''
    }
  }
  checkAdrs(e)
  {
    letrjx=/^[a-zA-Z]+$/
      this.setState({address:e})
    if(!rjx.test(e))
    {
        this.setState({invalidAddress:"Please prvide valid address"})
    }
    else
    {
        this.setState({invalidAddress:''})
    }
  }
  submit()
  {
    if(this.state.
        onaddress.length<1)
    {
        alert("empty address")
    }
  }
    render() {
    return (
      <View>
        <TextInput 
        maxLength={6}
        style={{borderColor:'skyblue',margin:5,borderWidth:2}}>
           </TextInput>
            <TextInput 
            keyboardType={'numeric'}
        style={{borderColor:'skyblue',margin:5,borderWidth:2}}>
            </TextInput>
            <TextInput 
            onBlur={()=>{this.submit()}}
            onChangeText={(e)=>{this.checkAdrs(e)}}
        style={{borderColor:'skyblue',margin:5,borderWidth:2}}>
           </TextInput>
    <Text>{this.state.invalidAddress}</Text>
      <Button onPress={()=>{this.submit()}} title='Submit'/>
      </View>
    )
  }
}

export default FormValidation