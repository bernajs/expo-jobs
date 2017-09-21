/* @flow */

import React, { Component } from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import { Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

export default class Slides extends Component {
  renderLastSlide(i){
    if(i === this.props.data.length - 1){
      return ( <Button title="Onwards!!!"
        raised
        buttonStyle={styles.buttonStyle}
        onPress={this.props.onComplete}
        ></Button> )
    }
  }

  renderSlides(){
    return this.props.data.map((slide, i) => {
      return (
        <View key={i} style={[ styles.slideStyle, { backgroundColor: slide.color } ]}>
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(i)}
        </View>
      )
    })
  }

  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30,
    color: 'white'
  },
  buttonStyle:{
    backgroundColor: '#0288D1',
  }
}
