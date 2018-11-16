import React, { Component } from 'react';
import { Container, ListItem, Thumbnail, Body, Text, Left, Right } from 'native-base';

export default class ListFriendsItem extends Component {
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

    render() {
        return (
            <ListItem avatar>
                <Left><Thumbnail source={require('../../assets/user.jpeg')} /></Left>
                <Body>
                    <Text>{this.props.name}</Text>
                    <Text note>{this.props.distance}</Text>
                </Body>
                
            </ListItem>
        )
    }
}