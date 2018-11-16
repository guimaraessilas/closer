import React, { Component } from 'react';
import { Text, List, Container, Content } from 'native-base';
import ListFriendsItem from '../../components/ListFriendsItem';

export default class TabFriends extends Component {
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
        return <Content scrollEnabled>
                    <List>
                        <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"}/>
                        <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"}/>
                        <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"}/>
                        <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"}/>
                    </List>
               </Content>

    }
}