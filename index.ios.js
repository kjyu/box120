/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

// import TabNavigator from 'react-native-tab-navigator';
import Header from './components/header';
import MainScreen from './views/mainScreen';

export default class box120 extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{name: 'main', index: 0, id:'main'}}
            renderScene={(route, navigator) => box120._renderPage(route,navigator)}
        />
    );
  }

  static _renderPage(route, nav) {
    switch (route.id) {
        case 'main':
            return (<MainScreen nav={nav}/>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('box120', () => box120);
