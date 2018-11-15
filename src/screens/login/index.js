import React, { Component } from 'react';
import Login from "./LoginScreen";
import { createStackNavigator } from 'react-navigation';


const LoginScreen = createStackNavigator(
    {
        Login: { screen: LoginScreen },
    }
);

export default HomeScreenRouter;