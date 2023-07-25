import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '/Component./AppHeader'
import { Colors } from '../constants/Colors'


const Home = ({navigation}) => {
  return (
    <View>
   <AppHeader
   title="Home" headerBg={Colors.green} iconColor={Colors.bleck}
   menu
   right="more-vertical" rightFunction={()=>console.log('right')}
   optionalIcon="bell" optionalFunc={()=>console.console.log('optional')}
  />
    </View>
  )
}

export default Home



