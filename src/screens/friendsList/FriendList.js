import React, { Component } from 'react';
import { Text, List, Container, Content, Header, Body, Title } from 'native-base';
import ListFriendsItem from '../../components/ListFriendsItem';

export default class FriendList extends Component {
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
                <Container>
                    <Header style={{ height: 90, paddingBottom: 10 }}>
                        <Body><Title style={{ fontSize: 20, color: '#fff', marginLeft: 16.5, marginTop: 25 }}>Mais Próximos</Title></Body>
                    </Header>
                    <Content scrollEnabled>
                        <List style={{ marginBottom: 35}}>
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                            <ListFriendsItem name={"Silas Guimarães Ribeiro"} distance={"Menos de 1 km"} />
                        </List>
                    </Content>
                </Container>
            )
    }
}