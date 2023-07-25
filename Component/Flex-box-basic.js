import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: "",
      address: '',
    }
  }

  render() {
    return (
      <View style={{flexWrap:'wrap', flex:1,alignItems:'flex-start',justifyContent:'space-between', flexDirection:'row'}}>
        <View style={{width:120,height:120,backgroundColor:'red'}}></View>
        <View style={{width:120,height:120,backgroundColor:'green'}}></View>
        <View style={{width:120,height:120,backgroundColor:'blue'}}></View>
        {/* <View style={{width:150,height:150,backgroundColor:'skyblue'}}></View> */}
        {/* <View style={{width:150,height:150,backgroundColor:'yellow'}}></View> */}
      </View>
    );
  }
}



export default App;