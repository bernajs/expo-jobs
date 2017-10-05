import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { connect } from 'react-redux'
import { clearLikedJobs } from '../actions'
import { Button, Icon } from 'react-native-elements'

class SettingsScreen extends Component{
  static navigationOptions = {
    title: 'Ajustes',
    headerStyle: { marginTop: Platform.OS === 'android' ? 24 : 0 },
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="settings" size={30} color={tintColor}></Icon>
    }
  }

  render(){
    return(
      <View>
        <Button
          title="Eliminar todos los favoritos"
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={this.props.clearLikedJobs}
          ></Button>
      </View>
    )
  }
}

export default connect(null, { clearLikedJobs })(SettingsScreen)
