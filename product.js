import React, { Component } from 'react'
import { StyleSheet, View, Text,TouchableOpacity  } from 'react-native'

class Product extends Component {
    componentWillUnmount()
    {
        // alert("Noback")
        const {params} = this.props.navigation.this.state;
        params.callHome(); 
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>Product Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'#F5FCFF',
        flex:1,
        justifyContent:'center',
    },
})