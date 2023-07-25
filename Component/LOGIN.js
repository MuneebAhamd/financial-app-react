import React, { Component } from "react";
import {View,Text,BackHandler} from 'react-native';

export default class Login extends Component
{
    disableBackButton=()=>{
        BackHandler.exitApp();
        return true;
    }
    componentWillUnmount()
    {
           BackHandler.addEventListener('hardwareBackPress',this.disableBackButton);
    }
    componentWillUnmount()
    {
         BackHandler.removeEventListener('hardwareBackPress',this.disableBackButton);
    }
render()
{
    return(
        <View style={{flex:1,padding:10,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:30}}>Login Screen</Text>
        </View>
          
    
        )
}

}