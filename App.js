import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Counter } from './counter';
import { HomeScreen } from './home';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Counter: {
      screen: Counter,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#009966',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

AppRegistry.registerComponent('App', () => App);