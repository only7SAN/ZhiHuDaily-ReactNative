import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class StoryItem extends Component {
  touchItem = () => {
    this.props.navigation.navigate('Story');
  }

  render() {
    console.log(this.props);
    return (
      <TouchableHighlight onPress={this.touchItem} underlayColor="#D5D5D5">
        <View style={styles.row}>
          <Text>{this.props.id}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  row:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 5,
    borderColor: '#dddddd',
    borderStyle: null,
    borderWidth: 0.5,
    borderRadius: 2,
  },
})

export default StoryItem;