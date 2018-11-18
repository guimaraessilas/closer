import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Tabs, Tab, Content, List } from 'native-base';
import ListFriendsItem from '../../components/ListFriendsItem';

export default class Search extends Component {
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
                <Header searchBar rounded style={{ height: 80, paddingTop: 20 }}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Encontre novas pessoas..." />
                    </Item>
                </Header>
                {/*<Tabs>
                    <Tab heading="Pessoas">*/}
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
                            </List>
                        </Content>
                    {/*</Tab>
                    <Tab heading="Lugares">

                    </Tab>
                    </Tabs>*/}

            </Container>

        );
    }
}