import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Button,
  FlatList
} from 'react-native';

import DataRepository from './DataRepository';

const HomeNav = (HeaderProps) => {
    let dataSource = new DataRepository();
    console.log(HeaderProps);
    console.log("123")
    let toolbarActions = [
      {title: '提醒', icon: require('./img/ic_message_white.png'), show: 'always'},
      {title: '夜间模式', show: 'never'},
      {title: '设置选项', show: 'never'},
    ];
    return (
        <ToolbarAndroid
            style={styles.HomeNav}
            navIcon={require('./img/ic_menu_white.png')}
            title="首页"
            titleColor="#FFFFFF"
            actions={toolbarActions}
            onIconClicked={() => {HeaderProps.navigation.navigate('DrawerOpen')}} />
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
        <Text>今日新闻</Text>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  HomeNav:{
    height:50,
    overflow:'hidden',
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#39ACFB',
  },
  NavLeftBtn:{
    margin:30
  },
  NavTitle:{
    fontSize:20,
    textAlign:'center',
    marginRight:50,
    flex:2,
    color:'#FFFFFF'
  }
})

export default MainScreen;