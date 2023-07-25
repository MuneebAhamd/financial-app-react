import { Text, View, FlatList } from 'react-native'
import React, { Component } from 'react'

export class Callapi extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.callApi();
  }
  async callApi() {
    let resp = await fetch('https://reactnative.dev/movies.json')
    let respJson = await resp.json();
    this.setState({ data: respJson.movies })
    //  console.warn("respJson",respJson)
  }
  render() {
    console.warn("render", this.state.data)
    return (
      <View>
        <Text style={{ fontSize: 100 }}>Callapi</Text>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <Text style={{ fontSize: 30, margin: 10, borderColor: 'skyblue' }}>{item.title}</Text>}
        />
      </View>
    )
  }
}

export default Callapi