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
import Swiper from 'react-native-swiper';

import DataRepository from './DataRepository';

import StoryItem from './StoryItem';

const HomeNav = (HeaderProps) => {
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
    console.log("2");
    let dataSource = new DataRepository();
    let dataLatest = {};
    dataSource
    ._safeFetch("https://news-at.zhihu.com/api/4/news/latest")
    .then((res) => {
      dataLatest = res;
      console.log(res);
      console.log(dataLatest);
    })
    .catch((err) => {
      console.log(err);
    })
    return (
      <View>
        <Swiper style={styles.wrapper} autoplay={true} showsButtons={true} height={250}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <Text>今日新闻</Text>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <StoryItem id={item.key} navigation={this.props.navigation} />}
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
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default MainScreen;