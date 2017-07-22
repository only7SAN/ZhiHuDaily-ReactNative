import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class MainScreen extends Component {
  static navigationOptions = {
    drawerLabel: '首页'
  }

  render() {
    return (
      <View>
        <Text>哈哈哈</Text>
        <Button title="ahahah" onPress={() => {this.props.navigation.navigate('DrawerOpen')}} >点着</Button>
      </View>
    );
  }
}

export default MainScreen;