import React, { Component } from 'react';
import LoginScreen from './src/screens/login/LoginScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import SignUpScreen from './src/screens/signup/SignUpScreen';
import EditProfile from './src/screens/profile/EditProfile';
import Profile from './src/screens/profile/Profile';
import { createStackNavigator } from 'react-navigation'

const Navigation = createStackNavigator({
  login:{
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  signup:{
    screen: SignUpScreen,
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
  editprofile:{
    screen: EditProfile,
    navigationOptions: {
      header: null
    }
  },
});

export default Navigation;