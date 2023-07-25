
import React from 'react'
import { View,  StyleSheet } from 'react-native'
import {Text} from './Text'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from './Colors';
const AppHeader = (props) => {
  return (
    <View style={[styles.header]}>
      <View style={[styles.view]}>
        <Icon.Button
          name="chevron-left"
          onPress={() => alert('Back')}>
        </Icon.Button>
      </View>
      <View style={[styles.view, styles.font]}>
        <Text text='Muneeb' title />
      </View>
      <View style={styles.view}>
        <Icon.Button
          name="home"
          onPress={() => alert('Home')}>
        </Icon.Button>
      </View>
    </View>
  )
}
export default AppHeader
const styles = StyleSheet.create({
  header: {
    height: 100,
    elivation: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.tertiary,
  },
  view: {
    margin: 10
  },
  font: {
    fontSize: 40,
    fontStyle: 'bold'
  },
  color: {
    backgroundColor: 'green'
  }
})