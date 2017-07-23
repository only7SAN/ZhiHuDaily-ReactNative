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
import StoryScreen from './StoryScreen';

const MainPage = StackNavigator({
  Main:{ screen : MainScreen },
  Story:{ screen : StoryScreen },
})

const ZhiHuDaily = DrawerNavigator({
  Home:{ screen : MainPage },
  Drawer:{ screen : DrawerPanel },
},{
    drawerWidth: 200, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: DrawerPanel,  // 自定义抽屉组件
    })

AppRegistry.registerComponent('ZhiHuDaily', () => ZhiHuDaily);
