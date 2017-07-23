import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const HomeNav = (HeaderProps) => {
  console.log(HeaderProps);
  console.log("123")
  return (
  <View style={styles.HomeNav}>
    <Button title="选项" style={styles.NavLeftBtn} onPress={() => {HeaderProps.navigation.navigate('DrawerOpen')}} ></Button>
    <Text style={styles.NavTitle}>首页</Text>
  </View>
  )
}

class MainScreen extends Component {
  static navigationOptions = {
    title: '首页',
    header:HomeNav,
    headerTintColor:'skyblue',  
  }

  render() {
    console.log(this.props.navigation);
    console.log("2")
    return (
      <View>
        <Text>哈哈哈</Text>
        <Button title="故事" onPress={() => {this.props.navigation.navigate('Story')}} ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HomeNav:{
    height:50,
    overflow:'hidden',
    flexDirection:"row",
    alignItems: 'center'
  },
  NavLeftBtn:{
    display:'inline-block',
    position: 'absolute',
    width:30,
    height:50,
    left:20,
    top:10,
  },
  NavTitle:{
    fontSize:20,
    textAlign:'center',
    flex:1,
    color:'skyblue'
  }
})

export default MainScreen;