import { Text, View } from 'react-native'
import React, { Component } from 'react'
class FlexBasics extends Component {
  render() {
    return (
      <View style={{flexWrap:'wrap', flex:1,alignItems:'flex-start',justifyContent:'space-between', flexDirection:'row'}}>
       {/* <View style={{flex:1,flexDirection:'row-reverse'}}>
      <View style={{flex:1,flexDirection:'column-reverse'}}> */}
      {/* <View style={{flex:1,flexDirection:'row-reverse'}}> */ }
      <View style={{flex:1,backgroundColor:'red'}}></View>
      <View style={{flex:2,backgroundColor:'green'}}></View>
    <View style={{flex:3,backgroundColor:'pink'}}></View>
      <View style={{flex:4,backgroundColor:'yellow'}}></View>
      <Text>hello</Text>
      </View >
    );
  }
}
export default FlexBasics;