import React, { Component } from "react";
import { Header, Right, Button, Icon, Body, Title, Container, Input, View, Thumbnail, Text } from "native-base";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


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
        console.log(this.state.user);
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
                            {
                                (this.state.editable === false) ?
                                    <Button transparent onPress={() => { this.setState({ editable: !this.state.editable }); }}>
                                        <Icon name="create" style={{ color: '#fff', fontSize: 32, marginTop: 20 }} />
                                    </Button>
                                    :
                                    <Button transparent onPress={this.updateUser.bind(this)}>
                                        <Icon name="md-checkmark" style={{ color: '#fff', fontSize: 32, marginTop: 20 }} />
                                    </Button>
                            }
                        </Right>
                    </Header>
                    <View >
                        <View style={{ backgroundColor: '#06864E', height: 100, width: null }} />
                        <View style={{ backgroundColor: '#fff', borderColor: '#8492A6', borderRadius: 20, borderWidth: 1, width: 300, height: 300, alignSelf: 'center', position: 'absolute', marginTop: 40 }}>
                            <KeyboardAwareScrollView
                                keyboardShouldPersistTaps="handled"
                                resetScrollToCoords={{ x: 0, y: 0 }}
                                keyboardOpeningTime={0}
                                scrollEnabled={true}
                                enableOnAndroid={true}
                                enableAutomaticScroll={true}
                            >
                                <Input onChangeText={(fullname) => this.setState({user: _.extend(this.state.user,{fullname})})} editable={this.state.editable} placeholder='Nome Completo' style={{ fontSize: 22, alignSelf: 'center', marginTop: 60, color: ((this.state.editable === false) ? '#5A6978' : '#06864E') }}>{this.state.user.fullname}</Input>
                                <Input onChangeText={(email) => this.setState({user: _.extend(this.state.user,{email})})} editable={this.state.editable} placeholder='Email' style={{ fontSize: 14, alignSelf: 'center', color: ((this.state.editable === false) ? '#8492A6' : '#06864E') }}>{this.state.user.email}</Input>
                                <Input onChangeText={(username) => this.setState({user: _.extend(this.state.user,{username})})} editable={this.state.editable} placeholder='Username' style={{ fontSize: 14, alignSelf: 'center', color: ((this.state.editable === false) ? '#8492A6' : '#06864E') }}>{this.state.user.username}</Input>
                                <Input onChangeText={(bio) => this.setState({user: _.extend(this.state.user,{bio})})} editable={this.state.editable} placeholder='Biografia' style={{ fontSize: 16, alignSelf: 'center', minWidth: 75, color: ((this.state.editable === false) ? '#5A6978' : '#06864E') }}>{this.state.user.bio}</Input>
                            </KeyboardAwareScrollView>
                        </View>
                        <Thumbnail style={{ alignSelf: 'center', position: 'absolute', width: 100, height: 100, borderRadius: 50 }} source={require('../../../assets/user.jpeg')} />

                    </View>
                </Container>
            );
        }
    }
}