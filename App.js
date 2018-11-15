import React, { Component } from 'react';
import { Spinner } from 'native-base';
import LoginScreen from './src/screens/login/LoginScreen';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading:true,
    }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    .then(this.setState({loading:false}));
  }
  
  render() {
    
    if(this.state.loading){
      return <Spinner/>
    }else{
      return <LoginScreen/>
    }
  }
}