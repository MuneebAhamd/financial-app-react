import { StyleSheet, View,Image } from 'react-native'
import React from 'react'
import { Text } from "./Component/Text"
import { colors } from './Component/Colors'
import MyForm from './Component/MyForm'
import Flatlist from './Component/Flatlist'
import Callapi from './Component/Callapi'
import FormValidation from './Component/FormValidation'
import DebudAppwithChrome from './Component/DebudAppwithChrome'




const App = () => {
  return (
    <View >     
     <MyForm/>
     {/* <Flatlist/> */}
     {/* <Callapi/> */}
     {/* < FormValidation/> */}
     {/* <DebudAppwithChrome/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'skyblue'
  }
})

