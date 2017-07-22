/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { StackNavigator,DrawerNavigator } from 'react-navigation';

import MainScreen from './MainScreen';
import DrawerPanel from './DrawerPanel';

const ZhiHuDaily = DrawerNavigator({
  Home:{ screen : MainScreen },
  Drawer:{ screen : DrawerPanel },
},{
    drawerWidth: 200, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
    contentOptions: {
      initialRouteName: MainScreen, // 默认页面组件
      activeTintColor: 'white',  // 选中文字颜色
      activeBackgroundColor: '#ff8500', // 选中背景颜色
      inactiveTintColor: '#666',  // 未选中文字颜色
      inactiveBackgroundColor: 'skyblue', // 未选中背景颜色
      style: {  // 样式
      }
    }
    })

AppRegistry.registerComponent('ZhiHuDaily', () => ZhiHuDaily);
