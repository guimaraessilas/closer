import React, { Component } from "react";
import { Header, Right, Button, Icon, Body, Title, Container, Input, View, Thumbnail } from "native-base";


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            editable: false,
            user: this.props.user,            
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
                        <Right>
                            <Button transparent onPress={() => { this.props.navigate.navigate('editprofile', {user: this.state.user}); }}>
                                <Icon name="create" style={{ color: '#fff', fontSize: 32, marginTop: 20 }} />
                            </Button>
                        </Right>
                    </Header>
                    <View >
                        <View style={{ backgroundColor: '#06864E', height: 100, width: null }} />
                        <View style={{ backgroundColor: '#fff', borderColor: '#8492A6', borderRadius: 20, borderWidth: 1, width: 300, height: 300, alignSelf: 'center', position: 'absolute', marginTop: 40 }}>
                            <Input editable={false} placeholder='Nome Completo' style={{ fontSize: 22, alignSelf: 'center', marginTop: 60, color: '#5A6978' }}>{this.state.user.fullname}</Input>
                            <Input editable={false} placeholder='Email' style={{ fontSize: 14, alignSelf: 'center', color: '#8492A6' }}>{this.state.user.email}</Input>
                            <Input editable={false} placeholder='Username' style={{ fontSize: 14, alignSelf: 'center', color: '#8492A6' }}>{this.state.user.username}</Input>
                            <Input editable={false} placeholder='Biografia' style={{ fontSize: 16, alignSelf: 'center', minWidth: 75, color: '#5A6978' }}>{this.state.user.bio}</Input>
                        </View>
                        <Thumbnail style={{ alignSelf: 'center', position: 'absolute', width: 100, height: 100, borderRadius: 50 }} source={require('../../../assets/user.jpeg')} />

                    </View>
                </Container>
            );
        }
    }
}