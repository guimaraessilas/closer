import React, { Component } from 'react';
import LoginScreen from './src/screens/login/LoginScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import SignUpScreen from './src/screens/signup/SignUpScreen';
import { createStackNavigator } from 'react-navigation'

const Navigation = createStackNavigator({
  login:{
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  home:{
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  signup:{
    screen: SignUpScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default Navigation;