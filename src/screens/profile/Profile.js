import React, { Component } from "react";
import { Header, Right, Button, Icon, Body, Title, Container, Content, View, Thumbnail, Text } from "native-base";

export default class Profile extends Component {
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
        if (this.state.loading) {
            return <Expo.AppLoading />
        } else {
            return (
                <Container>
                    <Header style={{ height: 90, paddingBottom: 10 }}>
                        <Body><Title style={{ fontSize: 20, color: '#fff', marginLeft: 16.5, marginTop: 25 }}>Perfil Pessoal</Title></Body>
                        <Right><Button transparent><Icon name="create" style={{ color: '#fff', fontSize: 32, marginTop: 20 }} /></Button></Right>
                    </Header>

                    <View >
                        <View style={{ backgroundColor: '#06864E', height: 100, width: null }} />
                        <View style={{ backgroundColor: '#fff', borderColor: '#8492A6', borderRadius: 20, borderWidth: 1, width: 300, height: 300, alignSelf: 'center', position: 'absolute', marginTop: 40 }}>
                            <Text style={{ fontSize: 22, alignSelf: 'center', marginTop: 60, color: '#5A6978' }}>{this.props.user.fullname}</Text>
                            <Text style={{ fontSize: 14, alignSelf: 'center', marginTop: 10, color: '#8492A6' }}>{this.props.user.username}</Text>
                            <Text style={{ fontSize: 16, alignSelf: 'center', margin: 10, color: '#5A6978' }}>{this.props.user.bio}</Text>
                        </View>
                        <Thumbnail style={{ alignSelf: 'center', position: 'absolute', width: 100, height: 100, borderRadius: 50 }} source={require('../../../assets/user.jpeg')} />
                    </View>
                </Container>
            );
        }
    }
}