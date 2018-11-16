import React, { Component } from 'react';
import LoginScreen from './src/screens/login/LoginScreen';
import HomeScreen from './src/screens/home/HomeScreen';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading:true,
      logged:true,
    }
  }
  
  async componentWillMount() {
    await Expo.Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });

  }
  
  render() {
    
    if(this.state.loading){
      return <Expo.AppLoading/>
    }else{
      
      if(this.state.logged){
        return <HomeScreen/>
      }else{
        return <LoginScreen/>;
      }
    }
  }
}