import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DataRepository from './DataRepository';

class StoryScreen extends Component {
  static navigationOptions = {
    title: '故事'
  };

  constructor(props){
    super(props);
    this.state = { dataSource: {} }
  }

  componentDidMount(){
    let url = "https://news-at.zhihu.com/api/4/news/" + this.props.navigation.state.params.newId;
    let DataSource = new DataRepository();

    DataSource
        ._safeFetch(url)
        .then((res) => {
          console.log(res);
          this.setState({dataSource:res})
        })
        .catch((err) => {
          console.log(err);
        })
  }

  render() {
    console.log(this.props.navigation.state.params);
    return (
      <View>
        <Text>故事</Text>
      </View>
    );
  }
}

export default StoryScreen;