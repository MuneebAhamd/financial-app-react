import { View, Text,Button } from 'react-native'
import React,{useState} from 'react'
function App(){
const [count,setCount ] = useState(1)
  return (
    <View>
        <Button title='-State' onPress={()=>setCount(count-1)}/>
      <Text style={{FontSize:100}}>
{count}
        </Text>
        <Button title='+State' onPress={()=>setCount(count-1)}/>
    </View>
  )
}

export default App;