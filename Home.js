import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native'
class App extends React.Component {
//    const {params}  = this.props.navigation.state;

  proFun()
  {
    alert("Home screen function")
  }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate ("Products",{callHome:this.proFun.bind(this)})}}
                style={styles.btn}>
                <Text>Home Screen</Text>
            </TouchableOpacity>
      </View >
    )
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: App
    }
})



export default createAppContainer(AppNavigator);
