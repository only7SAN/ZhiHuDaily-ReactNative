import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class StoryScreen extends Component {
  static navigationOptions = {
    title: '故事'
  }

  render() {
    return (
      <View>
        <Text>故事</Text>
      </View>
    );
  }
}

export default StoryScreen;