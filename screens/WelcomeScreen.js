import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import Slides from '../components/Slides'
import _ from 'lodash'
import { AppLoading } from 'expo'

const SLIDE_DATA = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location then swipe away', color: '#03A9F4' }
]

class WelcomeScreen extends Component {
  static navigationOptions = { title: 'Bienvenido' }

  state = { token: null }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token')
    token ? this.props.navigation.navigate('map') : this.setState({ token: false })
  }

  onSlideComplete = () => { this.props.navigation.navigate('auth') }

  render() {
    if(_.isNull(this.state.token)){ return <AppLoading></AppLoading> }
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete}></Slides>
    )
  }
}

export default WelcomeScreen
