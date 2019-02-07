import React, { Component } from "react";
import { Header, Right, Button, Icon, Body, Title, Container, Input, View, Thumbnail, Left } from "native-base";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { _ } from 'underscore';

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
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

    updateUser = async () => {
        console.log('user')
        fetch('http://192.168.43.46:8080/closer/api/service/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.user)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.result) {
                    this.setState({ user: responseJson.json });
                }
            }).catch((error) => {
                console.log(error)
            })
        this.setState({ editable: false });
        this.props.navigation.navigate('home', { user: this.state.user });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />
        } else {
            return (
                <Container>
                    <Header style={{ height: 90, paddingBottom: 10 }}>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.goBack() }>
                                <Icon name="close" style={{ color: '#fff', fontSize: 32, marginTop: 20 }} />
                            </Button>
                        </Left>
                        <Body><Title style={{ fontSize: 20, color: '#fff', marginLeft: 16.5, marginTop: 25 }}>Editar Perfil</Title></Body>
                        <Right>
                            <Button transparent onPress={this.updateUser.bind(this)}>
                                <Icon name="md-checkmark" style={{ color: '#fff', fontSize: 32, marginTop: 20 }} />
                            </Button>
                        </Right>
                    </Header>
                    <View >
                        <KeyboardAwareScrollView
                            keyboardShouldPersistTaps="handled"
                            resetScrollToCoords={{ x: 0, y: 0 }}
                            keyboardOpeningTime={0}
                            scrollEnabled={true}
                            enableOnAndroid={true}
                            enableAutomaticScroll={true}
                        >
                            <View style={{ backgroundColor: '#fff', borderColor: '#8492A6', borderRadius: 20, borderWidth: 1, width: 300, height: 300, alignSelf: 'center', position: 'absolute', marginTop: 40 }}>

                                <Item>
                                <Label>Nome completo</Label>
                                    <Input onChangeText={(fullname) => this.setState({ user: _.extend(this.state.user, { fullname }) })} placeholder='Nome Completo' style={{ fontSize: 14, alignSelf: 'center', marginTop: 60, color: '#5A6978'}}>{this.state.user.fullname}</Input>
                                </Item>
                                <Item>
                                    <Label>Email</Label>
                                    <Input onChangeText={(email) => this.setState({ user: _.extend(this.state.user, { email }) })} placeholder='Email' style={{ fontSize: 14, alignSelf: 'center', color: '#06864E' }}>{this.state.user.email}</Input>
                                </Item>
                                <Item>
                                    <Label>Username</Label>
                                    <Input onChangeText={(username) => this.setState({ user: _.extend(this.state.user, { username }) })} placeholder='Username' style={{ fontSize: 14, alignSelf: 'center', color: '#06864E' }}>{this.state.user.username}</Input>
                                </Item>
                                <Item>
                                    <Label>Biografia</Label>
                                    <Input onChangeText={(bio) => this.setState({ user: _.extend(this.state.user, { bio }) })} placeholder='Biografia' style={{ fontSize: 14, alignSelf: 'center', color: '#5A6978'}}>{this.state.user.bio}</Input>
                                </Item>
                            </View>
                        </KeyboardAwareScrollView>
                        <Thumbnail style={{ alignSelf: 'center', position: 'absolute', width: 100, height: 100, borderRadius: 50 }} source={require('../../../assets/user.jpeg')} />

                    </View>
                </Container >
            );
        }
    }
}