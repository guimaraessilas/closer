import React, { Component } from 'react';
import { View, Container, Text, Form, Content, Item, Input, Label, Header, Title } from 'native-base';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        })
            .then(this.setState({ loading: false }));
    }

    render() {

        if (this.state.loading) {
            return <Spinner />
        } else {
            return <Container>
                        <Header><Title>Entre ou Cadastre-se!</Title></Header>
                        <Content>
                            <Form>
                                <Item floatingLabel>
                                    <Label>Email:</Label>
                                    <Input/>
                                </Item>
                            </Form>
                        </Content>
                    </Container>
        }
    }
}