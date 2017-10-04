import React, { Component } from 'react'
import { View, Platform, Text, ScrollView, Linking } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { connect } from 'react-redux'

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation: { navigate }}) => ({
    title: 'Review Jobs',
    headerRight: (
      <Button title="Settings" onPress={ () => navigate('settings') }
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0, 122, 255, 1)"></Button>
      )
    })

    renderLikedJobs() {
      return this.props.likedJobs.map((job, i) => {
        const { company, formattedRelativeTime, url } = job
        return (
          <Card key={i}>
            <View style={{ height: 200 }}>
              <View style={styles.detailWrapper}>
                <Text style={styles.italics}>{company}</Text>
                <Text style={styles.italics}>{formattedRelativeTime}</Text>
              </View>
              <Button title="Apply now"
                onPress={ ()=> Linking.openURL(url) }
                style={{ backgroundColor: '#03A9F4' }}></Button>
            </View>
          </Card>
        )
      })
    }

    render() {
      return(
        <ScrollView>
          {this.renderLikedJobs()}
        </ScrollView>
      )
    }
  }

  const styles = {
    detailWrapper: {
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    italics: { fontStyle: 'italic' }
  }

  function mapStateToProps({ likedJobs }){ return { likedJobs } }

  export default connect(mapStateToProps)(ReviewScreen)
