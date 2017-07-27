import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button
} from 'react-native';

class DrawerPanel extends Component {
  static navigationOptions = {
    drawerLabel: '选项'
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
            <TouchableHighlight>
              <View style={styles.menuContainer}>
                <Text style={styles.menuText}>
                  我的收藏
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
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

})

export default DrawerPanel;