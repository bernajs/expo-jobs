import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Swipe from '../components/Swipe'
import { MapView } from 'expo'
import { Button, Card } from 'react-native-elements'


class DeckScreen extends Component {
  renderCards(job){
    return(
      <Card title={job.jobtitle}>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>
          {job.snippet.replace(/<b>/g, '').replace(/</b>/g, '')}
        </Text>
      </Card>
    )
  }
  render() {
    return (
      <View>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}></Swipe>
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

export default connect(mapStateToPros)(DeckScreen)
