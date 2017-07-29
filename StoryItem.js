import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

class StoryItem extends Component {
  touchItem = () => {
    this.props.navigation.navigate('Story');
  }

  render() {
    let { title, id, images } = this.props;
    return (
      <TouchableHighlight onPress={this.touchItem} underlayColor="#D5D5D5">
        <View style={styles.row}>
          <Text style={styles.newsTitle} numberOfLines={3}>{title}</Text>
          <Image style={styles.image} source={{uri:images[0]}} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  row:{
    flex: 1,
    flexDirection: 'row',
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
  newsTitle:{
    flex:1,
    fontSize: 16,
    color: '#777777',
  },
  image:{
    height:60,
    width:80,
    backgroundColor: '#dddddd',
    marginLeft:10,
  },
})

export default StoryItem;