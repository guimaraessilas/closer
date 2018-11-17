import React, { Component } from 'react';
import TabFriends from '../tabs/TabFriends';
import TabMap from '../tabs/TabMap';
import { Container, Icon, Button, FooterTab, Footer, Content, StyleProvider, Text } from 'native-base';
import TabProfile from '../tabs/TapProfile';

import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            tab: <TabProfile />,
            scroll: false,
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
            <StyleProvider style={getTheme(platform)}>
                <Container>
                    <Content scrollEnabled={this.state.scroll}>
                        {this.state.tab}
                    </Content>

                    <Footer>
                        <FooterTab>
                            <Button onPress={() => { this.setState({ tab: <TabProfile />, scroll: false }); }}>
                                <Icon name="person" style={{ color: '#fff' }}/>
                            </Button>
                            <Button onPress={() => { this.setState({ tab: <TabFriends />, scroll: true }); }}>
                                <Icon name="people" style={{ color: '#fff' }}/>
                            </Button>
                            <Button onPress={() => { this.setState({ tab: <TabMap /> }); }}>
                                <Icon name="map" style={{ color: '#fff' }}/>
                            </Button>
                            <Button onPress={() => { this.setState({ tab: <TabMap /> }); }}>
                                <Icon name="search" style={{ color: '#fff' }}/>
                            </Button>
                            <Button onPress={() => { this.setState({ tab: <TabMap /> }); }}>
                                <Icon name="options" style={{ color: '#fff' }} />
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </StyleProvider>
        );
    }
}
