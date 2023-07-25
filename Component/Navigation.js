import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from'react-navigation-stacks'
import FlexBasics from './Component/FlexBasics'
class App extends React.Component {

  render() {
    return (
      <View>
       {/* <View style={{flex:1,alignItems:'center',justifyContent:'center'}}> */}
        {/* <Text style={{fontSize:80}}>React Navigation</Text> */}
       <FlexBasics/>
      </View>
    )
  }
}

const AppNavigator= createStackNavigator({
  Home:{
    screen:App
  }
})



export default createAppContainer(AppNavigator);
