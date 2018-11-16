import React, { Component } from 'react';
import { Text } from 'native-base';

export default class TabMap extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
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

    render(){
        return <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>TAB Map</Text>
    }
}