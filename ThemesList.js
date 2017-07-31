import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import DataRepository from './DataRepository'

class ThemesList extends Component {
  static navigationOptions = {
    drawerLabel: '选项'
  }

  constructor(props){
    super(props);
    this.state = {dataSource:{}}
  }

  componentDidMount(){
    let DataSource = new DataRepository();

    DataSource
        ._safeFetch('https://news-at.zhihu.com/api/4/themes')
        .then((res) => {
      console.log(res);
          this.setState({dataSource:res})
        })
        .catch((err) => {
          console.log(err)
        })
  }

  render () {
    return (
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <TouchableHighlight>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 16}}>
              <Text style={styles.menuText}>
                请登录
              </Text>
            </View>
          </TouchableHighlight>
          <View style={styles.row}>
            <TouchableHighlight style={styles.rowItem}>
              <View style={styles.menuContainer}>
                <Text style={styles.menuText}>
                  我的收藏
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.rowItem}>
              <View style={styles.menuContainer}>
                <Text style={styles.menuText}>
                  离线下载
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <TouchableHighlight>
          <View style={styles.themeItem}>
            <Text style={styles.homeTheme}>
              首页
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  header: {

  },
  userInfo: {
    backgroundColor:'skyblue',
  },
  menuText:{
    flex:1,
    fontSize:18,
    color:'#ffffff',
  },
  row:{
    flexDirection:'row',
    height:30,
    alignItems:'center',
    justifyContent:'center',
  },
  rowItem:{
    flex:1,
    justifyContent:'center',
  },
  menuContainer:{
    flex:1,
    justifyContent:'center',
  }
})

export default ThemesList;