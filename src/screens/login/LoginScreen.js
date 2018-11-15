import React, { Component } from 'react';
import { Text, Button, Icon, View, Form, Label, Item, Input } from 'native-base';
import { StyleSheet, ImageBackground } from 'react-native';

export default class LoginScreen extends Component {
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
                <ImageBackground source={require('../../../assets/login-background.jpg')} style={styles.backgroundImage} >

                    <Button transparent style={{ marginTop: 22, marginLeft: 5 }}>
                        <Icon name="add" style={{ color: '#fff', fontWeight: 'bold' }} />
                        <Text style={styles.textStyle}>Criar uma conta</Text>
                    </Button>

                    <View style={styles.container}>
                        <Form>
                            <Item floatingLabel style={{ marginRight: 15 }}>
                                <Label style={styles.textStyle}>Username or Email</Label>
                                <Input style={styles.textStyle}/>
                                <Icon name="mail" style={{color: '#fff'}}/>
                            </Item>
                            <Item floatingLabel style={{ marginRight: 15 }}>
                                <Label style={styles.textStyle}>Password</Label>
                                <Input style={styles.textStyle}/>
                                <Icon name="lock" style={{color: '#fff'}}/>
                            </Item>
                        </Form>
                        <Button full style={{ marginTop: 10, marginLeft: 15, marginRight: 15, backgroundColor: '#066039' }} onPress={() => { console.log('entrar') }}>
                            <Text> Entrar </Text>
                        </Button>
                    </View>
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
        marginTop: 30,
        paddingTop: 100,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 100,
        backgroundColor: '#00000055',

    },

});