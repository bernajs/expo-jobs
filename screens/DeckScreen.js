import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { connect } from 'react-redux'
import Swipe from '../components/Swipe'
import { MapView } from 'expo'
import { Button, Card, Icon } from 'react-native-elements'
import * as actions from '../actions'


class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Jobs',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="description" size={30} color={tintColor}></Icon>
    }
  }

  renderCard(job){
    const initialRegion = {
      latitude: job.latitude,
      longitude: job.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    }

    return(
      <Card title={job.jobtitle}>
        <View style={{height: 300}}>
          <MapView scrollEnabled={false}
            style={{flex: 1}}
            initialRegion={initialRegion}
            cacheEnabled={Platform.OS === 'android' ? true : false}></MapView>
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>
          {job.snippet.replace(/<b>/g, '').replace(/<\/b>/g, '')}
        </Text>
      </Card>
    )
  }

  renderNoMoreCards = () => {
    return(
      <Card title="No more jobs">
        <Button
          title="Back to map"
          large
          icon={{ name: 'my-location' }}
          backgroundColor='#03A9F4'
          onPress={() => this.props.navigation.navigate('map')}></Button>
      </Card>
    )
  }
  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
          keyProp='jobkey'></Swipe>
      </View>
    )
  }
}

const styles = {
  detailWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

function mapStateToPros({ jobs }){
  return { jobs: jobs.results }
}

export default connect(mapStateToPros, actions)(DeckScreen)
