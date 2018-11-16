import React, { Component } from 'react';
import TabFriends from '../tabs/TabFriends';
import TabMap from '../tabs/TabMap';
import { Container, Tabs, Tab, TabHeading, Icon, Header, Body, Title, Button, Right, Left, Badge, Text, Item, Input, FooterTab, Footer, Content } from 'native-base';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            tab: <TabFriends/>,
            tabFriendsActive: true,
            tabMapActive: false
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
                <Header searchBar rounded style={{ paddingTop: 60, paddingBottom: 30 }}>
                    <Item>
                        <Icon name="search" />
                        <Input placeholder="Search " />
                        <Right>
                            <Button>
                                <Icon name="md-more" />
                            </Button>
                        </Right>
                    </Item>
                </Header>
                <Content>
                    {this.state.tab}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button active={this.state.tabFriendsActive} onPress={() => {this.setState({tab: <TabFriends/>, tabFriendsActive: true, tabMapActive: false});}}>
                            <Icon name="person"/>
                        </Button>
                        <Button active={this.state.tabMapActive} onPress={() => {this.setState({tab: <TabMap/>, tabMapActive: true, tabFriendsActive: false});}}>
                            <Icon name="map"/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
