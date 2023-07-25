import { View, Text } from 'react-native'
import React from 'react'

class App extends React.Component {
    constructor(){
        super();
        console.warn('constructor')
    }
      componentDidMount(){
        console.warn('componentDidMount') 
      }
      render(){
        console.warn('render')
        return(
            <View>
                <Text style={{fontSize:100}}>Life Cycle Method</Text>
            </View>
        )
      }
}

export default LifecycleMethod