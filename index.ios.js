/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Image
} from 'react-native';
import Home from './home.ios.js';
import Settings from './settings.ios.js';
import Search from './search.ios.js';
import Icon from 'react-native-vector-icons/Ionicons';
import Alerts from './alerts.ios.js';

var home = './home.png';

export default class CheeseboardIOS extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTabButton: 'home'
    };
  }
  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTabButton}>

        <Icon.TabBarItem
          iconName="ios-home-outline"
          selectedIconName='ios-home'
          onPress={() => this.setState({selectedTabButton: 'home'})}
          selected={this.state.selectedTabButton === 'home'}
          >
          <Home selectedTab={this.state.selectedTabButton} />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          iconName="ios-search-outline"
          selectedIconName='ios-search'
          onPress={() => this.setState({selectedTabButton: 'search'})}
          selected={this.state.selectedTabButton === 'search'}
          >
          <Search />

        </Icon.TabBarItem>

        <Icon.TabBarItem
          iconName='ios-notifications-outline'
          selectedIconName='ios-notifications'
          onPress={() => this.setState({selectedTabButton: 'alerts'})}
          selected={this.state.selectedTabButton === 'alerts'}
          >
          <Alerts />
        </Icon.TabBarItem>


        <Icon.TabBarItem
          iconName="ios-settings-outline"
          selectedIconName='ios-settings'

          onPress={() => this.setState({selectedTabButton: 'settings'})}
          selected={this.state.selectedTabButton === 'settings'}
          >
          <Settings />

        </Icon.TabBarItem>


      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
  }
});

AppRegistry.registerComponent('CheeseboardIOS', () => CheeseboardIOS);
