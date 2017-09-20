import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

class ReviewScreen extends Component{
  static navigationOptions = ({ navigation: { navigate }}) => ({
    title: 'Review Jobs',
    headerRight: <Button title="Settings" onPress={ ()=> navigate('settings') }></Button>
  })
  render(){
    return(
      <View>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
        <Text>Review Screen</Text>
      </View>
    )
  }
}

export default ReviewScreen
