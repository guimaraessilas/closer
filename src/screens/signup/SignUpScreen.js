import React, { Component } from 'react';
import { Text, Button, Icon, View, Form, Label, Item, Input, DatePicker } from 'native-base';
import { StyleSheet, ImageBackground } from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            result: false,
            msg: '',
            user: null,
            buttonLoading: false,
            username: '',
            fullname: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            formOk: false
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

    signup = async () => {
        this.setState({ buttonLoading: true });
        if (!this.state.email) {
            this.setState({ msg: 'Precisamos do seu email para te identificarmos e te ajudar caso você se esqueça sua senha!', formOk: false })
        } else if (!this.state.username) {
            this.setState({ msg: 'Seu nome de usuário é a principal forma como seus amigos podem te encontrar aqui!', formOk: false })
        } else if (!this.state.password) {
            this.setState({ msg: 'Sem a sua senha não vamos conseguir impedir que alguém além de você acesse seu perfil!', formOk: false })
        } else if (this.state.password === this.state.confirmPassword) {
            this.setState({ msg: 'As Senhas não correspondem', formOk: false });
        }
        if (this.state.formOk) {
            console.log('signup')
            fetch('http://192.168.43.46:8080/closer/api/service/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    username: this.state.username,
                    fullname: this.state.fullname,
                    phone: this.state.phone
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
                    this.setState({ msg: 'Error na conexão' });
                })

        }
        this.setState({ buttonLoading: false });
    }

    render() {

        if (this.state.loading) {
            return <Expo.AppLoading />
        } else {
            return (
                <ImageBackground source={require('../../../assets/login-background.jpg')} style={styles.backgroundImage} >

                    <Button transparent style={{ marginTop: 30, marginLeft: 5 }} onPress={() => { this.props.navigation.goBack() }}>
                        <Icon name="arrow-back" style={{ color: '#fff', fontWeight: 'bold' }} />
                        <Text style={styles.textStyle}>CADASTRO</Text>
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
                            <Form>
                                <Text style={{ color: 'orange', fontSize: 16, textAlign: 'center' }}>
                                    {this.state.msg}
                                </Text>
                                <Item floatingLabel style={{ marginRight: 15 }}>
                                    <Label style={styles.textStyle}>Email</Label>
                                    <Input style={styles.textStyle} keyboardType={'email-address'}
                                        selectTextOnFocus={true} returnKeyType={'next'}
                                        onChangeText={email => { this.setState({ email }) }}
                                    />
                                    <Icon name="mail" style={{ color: '#fff' }} />
                                </Item>

                                <Item floatingLabel style={{ marginRight: 15 }}>
                                    <Label style={styles.textStyle}>Nome Completo</Label>
                                    <Input style={styles.textStyle} selectTextOnFocus={true}
                                        returnKeyType={'next'}
                                        onChangeText={fullname => { this.setState({ fullname }) }}
                                    />
                                    <Icon name="person" style={{ color: '#fff' }} />
                                </Item>

                                <Item floatingLabel style={{ marginRight: 15 }}>
                                    <Label style={styles.textStyle}>Nome de usuario</Label>
                                    <Input style={styles.textStyle} selectTextOnFocus={true}
                                        returnKeyType={'next'}
                                        onChangeText={username => { this.setState({ username }) }}
                                    />
                                    <Icon name="person" style={{ color: '#fff' }} />
                                </Item>

                                <Item floatingLabel style={{ marginRight: 15 }}>
                                    <Label style={styles.textStyle}>Senha</Label>
                                    <Input style={styles.textStyle} secureTextEntry
                                        selectTextOnFocus={true} returnKeyType={'next'}
                                        onChangeText={password => { this.setState({ password }) }}
                                    />
                                    <Icon name="lock" style={{ color: '#fff' }} />
                                </Item>

                                <Item floatingLabel style={{ marginRight: 15 }}>
                                    <Label style={styles.textStyle}>Confirmar Senha</Label>
                                    <Input style={styles.textStyle} secureTextEntry
                                        selectTextOnFocus={true} returnKeyType={'done'}
                                        onChangeText={confirmPassword => { this.setState({ confirmPassword }) }}
                                    />
                                    <Icon name="lock" style={{ color: '#fff' }} />
                                </Item>

                            </Form>
                            <SpinnerButton
                                buttonStyle={{ marginTop: 15, marginLeft: 15, marginRight: 15, backgroundColor: '#066039' }}
                                isLoading={this.state.buttonLoading}
                                spinnerType='PacmanIndicator'
                                onPress={this.signup.bind(this)}
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
        flex: 1,
    },
    textStyle: {
        color: '#fff',
        fontSize: 16,
    },
    container: {
        justifyContent: 'center',
        marginTop: 10,
        paddingTop: 25,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 70,
        backgroundColor: '#000000AA',

    },

});