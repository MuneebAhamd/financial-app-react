import React from 'react'
import { StyleSheet, TextInput, Button, Image, ScrollView, View, Pressable } from 'react-native'
import { Text } from "./Text"
import { colors } from './Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
// import { ScrollView } from 'react-native-gesture-handler'
// import Icon from 'react-native-vector-icons/Ionicons'
const MyForm = () => {
  return (
    <ScrollView>
      <View>
        {/* <TextInput placeholder='Enter name'
      style={[style.card]}
    //   onChangeText={(text) => {this.setState({name:text})}}
      >
    </TextInput> */}
        <View style={[ { alignItems: 'center', flex: 1 }]}>
          <Image source={require('./Elevate.png')} />
        </View>
        <TextInput placeholder='Email'
          style={[style.card]}
        >
        </TextInput>

        <TextInput placeholder='Password'
          style={[style.card]}
          secureTextEntry={true}
        >
        </TextInput>
        <Pressable onPress={() => { alert('your password has been reset') }}>
          <Text text='Forgot Pasword?' plan />
        </Pressable>
        <View style={style.btn}>
          <Pressable onPress={() => { alert('Login Successfully') }}>
            <Text text='Login' heading />
          </Pressable>
        </View>
        <Text text='or' main />
        <View style={[style.btn]}>

          <Pressable style={style.card1} onPress={() => { alert('Sign in with Facbook') }} backgroundColor={'#54B7E1'}>
            <Icon size={30}
            name='facebook' color={'#000'} />
            <Text  text='Sign in with Facebook'  heading />
          </Pressable>
        </View>
        <View style={[style.btn]}>
<Pressable style={style.card1} onPress={() => { alert('Sign in with Apple') }}>
            <Icon  size={30}  name='apple' color={'#000'} />
            <Text text='Sign in with Apple' heading />
          </Pressable>
        </View>
        <View style={[style.line]}></View>
        <Text text='Not yet registered?' main />
        <View style={[style.btn]}>

<Pressable onPress={() => { alert('Create Account Successfully ') }}>
            <Text text='Create Account' heading />
          </Pressable>

        </View>
        <View style={[style.card1, { alignItems: 'center' }]}>
          <Image style={style.img} source={require('./TrueSKy-logo-Retina-01.png')} />
        </View>
        <View style={[style.footer]}>
        </View>
      </View>
    </ScrollView>
  )
}

export default MyForm

const style = StyleSheet.create({

  card: {
    margin: 10,
    backgroundColor: 'white',
    fontWeight: "bold",
  },
  card1: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    fontWeight:60,
  },
  btn: {
    margin: 8,
    backgroundColor: 'white',
  },
  img :{
    height:100,
    width:190,
    marginVertical:20,
  },
  footer:{
    // marginVertical:60,
    marginBottom:10
  },
  line:{
    borderBottomWidth: 3,
    margin:8,
    borderColor:'white',
  }
})