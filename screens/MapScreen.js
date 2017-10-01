import React, { Component } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { MapView } from 'expo'

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

  componentDidMount() { this.setState({ mapLoaded: true }) }

  onRegionChangeComplete = (region) => {
    this.setState({ region })
    console.log(region)
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
      </View>
    )
  }
}

export default MapScreen
