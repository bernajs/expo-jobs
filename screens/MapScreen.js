import React, { Component } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { MapView } from 'expo'
import { Button, Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import * as actions from '../actions'

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      latitude: 37,
      longitude: -122,
      latitudeDelta: 0.04,
      longitudeDelta: 0.09
    }
  }

  static navigationOptions = {
    title: 'Map',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="my-location" size={30} color={tintColor}></Icon>
    }
  }

  componentDidMount() { this.setState({ mapLoaded: true }) }

  onRegionChangeComplete = (region) => { this.setState({ region }) }

  searchJobs(){
    this.props.fetchJobs(this.state.region,
      () => this.props.navigation.navigate('deck'))
  }

  render() {
    if(!this.state.mapLoaded){
      return(
        <View>
          <ActivityIndicator size="large"></ActivityIndicator>
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
          region={this.state.region}
          style={{ flex: 1 }}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View>
          <Button
            title="Search jobs"
            backgroundColor="#009688"
            large
            icon={{ name: 'search' }}
            onPress={this.searchJobs.bind(this)}
            style={styles.button}>
          </Button>
        </View>
      </View>
    )
  }
}
 const styles = {
   button: {
     position: 'absolute',
     bottom: 20,
     left: 0,
     right: 0
   }
 }
export default connect(null, actions)(MapScreen)
