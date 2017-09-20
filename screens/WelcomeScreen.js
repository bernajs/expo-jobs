import React, { Component } from 'react'
import { View, Text } from 'react-native'

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Bienvenidos',
  }
  render() {
    return (
      <View>
        <Text>Welcome Screen</Text>
        <Text>Welcome Screen</Text>
        <Text>Welcome Screen</Text>
        <Text>Welcome Screen</Text>
      </View>
    )
  }
}

export default WelcomeScreen
