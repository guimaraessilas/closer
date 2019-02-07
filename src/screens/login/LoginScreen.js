import React, { Component } from 'react';
import { Text, Button, Icon, View, Form, Label, Item, Input } from 'native-base';
import { StyleSheet, ImageBackground } from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            email: 'godysila',
            password: '1234',
            result: false,
            msg: '',
            user: null,
            buttonLoading: false
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

    login = async () => {
        this.setState({ buttonLoading: true });
        console.log('login')
        fetch('http://192.168.43.46:8080/closer/api/service/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.result) {
                    this.setState({ user: responseJson.json[0] });
                    this.props.navigation.navigate('home', { user: this.state.user });
                } else {
                    this.setState({ msg: responseJson.message });
                }
            }).catch((error) => {
                this.setState({ msg: error });
            })
        this.setState({ buttonLoading: false });
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />
        } else {
            return (
                <ImageBackground source={require('../../../assets/login-background.jpg')} style={styles.backgroundImage} >

                    <Button transparent style={{ marginTop: 30, marginLeft: 5 }} onPress={() => { this.props.navigation.navigate('signup'); }}>
                        <Icon name="add" style={{ color: '#fff', fontWeight: 'bold' }} />
                        <Text style={styles.textStyle}>Criar uma conta</Text>
                    </Button>
                    <KeyboardAwareScrollView
                        keyboardShouldPersistTaps="handled"
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        keyboardOpeningTime={0}
                        scrollEnabled={true}
                        enableOnAndroid={true}
                        enableAutomaticScroll={true}
                    >
                        <View style={styles.container}>
                            <Form   >
                                <Text style={{ color: 'orange', fontSize: 16, textAlign: 'center' }}>
                                    {this.state.msg}
                                </Text>

                                <Item floatingLabel style={{ marginRight: 15 }}>
                                    <Label style={styles.textStyle}>Username or Email</Label>
                                    <Input style={styles.textStyle} keyboardType={'email-address'}
                                        selectTextOnFocus={true} returnKeyType={'next'}
                                        onChangeText={email => { this.setState({ email }) }}
                                        value='godysila' />
                                    <Icon name="mail" style={{ color: '#fff' }} />
                                </Item>
                                <Item floatingLabel style={{ marginRight: 15 }}>
                                    <Label style={styles.textStyle}>Password</Label>
                                    <Input style={styles.textStyle} secureTextEntry selectTextOnFocus={true}
                                        returnKeyType={'done'}
                                        onChangeText={password => { this.setState({ password }) }}
                                        value='1234'
                                    />
                                    <Icon name="lock" style={{ color: '#fff' }} />
                                </Item>
                            </Form>
                            <SpinnerButton
                                buttonStyle={{ marginTop: 15, marginLeft: 15, marginRight: 15, backgroundColor: '#066039' }}
                                isLoading={this.state.buttonLoading}
                                spinnerType='PacmanIndicator'
                                onPress={this.login.bind(this)}
                            >
                                <Text style={styles.textStyle}>Entrar</Text>
                            </SpinnerButton>
                        </View>
                    </KeyboardAwareScrollView>
                </ImageBackground >
            );
        }
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        backgroundColor: '#00000022',
        flex: 1
    },
    textStyle: {
        color: '#fff',
        fontSize: 16
    },
    container: {
        justifyContent: 'center',
        marginTop: 50,
        paddingTop: 80,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 100,
        backgroundColor: '#000000AA'
    },
});