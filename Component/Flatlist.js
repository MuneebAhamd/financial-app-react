import { Text, View,FlatList } from 'react-native'
import React, { Component } from 'react'

export class Flatlist extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                { name: 'muneeb', email: 'muneeb124@gamil.com' },
                { name: 'Anas', email: 'anas154@gamil.com' },
                { name: 'Adil', email: 'adil34@gamil.com' },
            ]
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 100 }}>Flatlist</Text>
                <Flatlist
                    data={this.state.data}
                    rederItem={({ item }) => <Text>{item.name} </Text>}
                />
            </View>
        )
    }
}

export default Flatlist