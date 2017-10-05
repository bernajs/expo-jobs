import React, { Component } from 'react'
import { View, Platform, Text, ScrollView, Linking } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'
import { MapView } from 'expo'
import { connect } from 'react-redux'

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation: { navigate }}) => ({
    title: 'Favoritos',
    headerRight: (
      <Button title="Ajustes" onPress={ () => navigate('settings') }
        backgroundColor="rgba(0,0,0,0)"
        color="rgba(0, 122, 255, 1)"></Button>
      ),
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="favorite" size={30} color={tintColor}></Icon>
    }
    })

    renderLikedJobs() {
      return this.props.likedJobs.map((job, i) => {
        const { company, formattedRelativeTime, url, jobtitle } = job
        const initialRegion = {
          latitude: job.latitude,
          longitude: job.longitude,
          latitudeDelta: 0.042,
          longitudeDelta: 0.02
        }

        return (
          <Card key={i} title={jobtitle}>
            <View style={{ height: 300 }}>
              <MapView
                scrollEnabled={false}
                initialRegion={initialRegion}
                cacheEnabled={false}
                style={{ flex: 1 }}
                ></MapView>
            </View>
            <View style={{ height: 100 }}>
              <View style={styles.detailWrapper}>
                <Text style={styles.italics}>{company}</Text>
                <Text style={styles.italics}>{formattedRelativeTime}</Text>
              </View>
              <Button title="Ver más"
                onPress={ ()=> Linking.openURL(url) }
                backgroundColor='#03A9F4'></Button>
            </View>
          </Card>
        )
      })
    }

    render() {
      if(this.props.likedJobs.length == 0){
        return(
          <View>
            <Text>No tienes ningún trabajo en favoritos</Text>
          </View>
        )
      }
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
      justifyContent: 'space-around',
      marginTop: 5
    },
    italics: { fontStyle: 'italic' }
  }

  function mapStateToProps({ likedJobs }){ return { likedJobs } }

  export default connect(mapStateToProps)(ReviewScreen)
