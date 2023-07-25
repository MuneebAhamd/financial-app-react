import { View, Text } from 'react-native'
import React from 'react'

const Card = () => {
  return (
      <View style={[style.card1,{ alignItems:'center'}]}>
        <Image   source={require('./Component/Image3.png')} />
        </View>
  )
}

const style=StyleSheet.create({
    card:{
        borderRadius: 20,
        
    }
})

export default Card