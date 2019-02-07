import React, { Component } from 'react';
import { Container, Icon, Button, FooterTab, Footer, Content, StyleProvider, Text } from 'native-base';

import Profile from '../profile/Profile';
import FriendList from '../friendsList/FriendList';
import Map from '../map/Map';
import Search from '../search/Search';
import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/platform';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            scroll: false,
            user: this.props.navigation.state.params.user,
            tab: null
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false, tab: <Profile user={this.props.navigation.state.params.user}/> });

    }

    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <Container>
                    <Content scrollEnabled={false}>
                        {this.state.tab}
                    </Content>

                    <Footer>
                        <FooterTab>
                            <Button onPress={() => { this.setState({ tab: <Profile navigate={this.props.navigation} user={this.state.user}/>}); }}>
                                <Icon name="person" style={{ color: '#fff' }}/>
                            </Button>
                            <Button onPress={() => { this.setState({ tab: <FriendList id={this.state.user.id}/>}); }}>
                                <Icon name="people" style={{ color: '#fff' }}/>
                            </Button>
                            <Button onPress={() => { this.setState({ tab: <Map/>}); }}>
                                <Icon name="map" style={{ color: '#fff' }}/>
                            </Button>
                            <Button onPress={() => { this.setState({ tab: <Search/>}); }}>
                                <Icon name="search" style={{ color: '#fff' }}/>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </StyleProvider>
        );
    }
}
