import React, { Component } from 'react';
import { Text, Button, Icon, View, Form, Label, Item, Input, DatePicker } from 'native-base';
import { StyleSheet, ImageBackground } from 'react-native';

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataNascimento: new Date()
        }
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({ dataNascimento: newDate })
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

                    <Button transparent style={{ marginTop: 30, marginLeft: 5 }} onPress={() => { this.props.navigation.goBack() }}>
                        <Icon name="arrow-back" style={{ color: '#fff', fontWeight: 'bold' }} />
                        <Text style={styles.textStyle}>CADASTRO</Text>
                    </Button>

                    <View style={styles.container}>
                        <Form>
                            <Item floatingLabel style={{ marginRight: 15 }}>
                                <Label style={styles.textStyle}>Email</Label>
                                <Input keyboardType={"email-address"} style={styles.textStyle} />
                                <Icon name="mail" style={{ color: '#fff' }} />
                            </Item>

                            <Item floatingLabel style={{ marginRight: 15 }}>
                                <Label style={styles.textStyle}>Nome de Usuário</Label>
                                <Input style={styles.textStyle} />
                                <Icon name="person" style={{ color: '#fff' }} />
                            </Item>

                            <Item floatingLabel style={{ marginRight: 15 }}>
                                <Label style={styles.textStyle}>Data de Nascimento</Label>
                                <Input keyboardType={"numeric"} maxLength={10} style={styles.textStyle}/>
                                <Icon name="calendar" style={{ color: '#fff' }} />
                            </Item>

                            <Item floatingLabel style={{ marginRight: 15 }}>
                                <Label style={styles.textStyle}>Password</Label>
                                <Input style={styles.textStyle} />
                                <Icon name="lock" style={{ color: '#fff' }} />
                            </Item>
                        </Form>
                        <Button full style={{ marginTop: 10, marginLeft: 15, marginRight: 15, backgroundColor: '#066039' }} onPress={() => { this.props.navigation.navigate('home') }}>
                            <Text> Cadastrar </Text>
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
        marginTop: 10,
        paddingTop: 25,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 70,
        backgroundColor: '#000000AA',

    },

});