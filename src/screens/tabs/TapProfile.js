import React, { Component } from "react";
import { Header, Right, Button, Icon, Body, Title, Container, Content, View, Thumbnail, Text } from "native-base";

export default class TabProfile extends Component {
    render() {
        return (
            <Container>
                <Header style={{ height: 90, paddingBottom: 10 }}>
                    <Body><Title style={{ fontSize: 20, color: '#fff', marginLeft: 16.5, marginTop: 25 }}>Perfil Pessoal</Title></Body>
                    <Right><Button transparent><Icon name="create" style={{ color: '#fff', fontSize: 32, marginTop: 20 }} /></Button></Right>
                </Header>

                <View >
                    <View style={{ backgroundColor: '#06864E', height: 100, width: null }} />
                    <View style={{ backgroundColor: '#fff', borderColor: '#8492A6', borderRadius: 20, borderWidth: 1, width: 300, height: 300, alignSelf: 'center', position: 'absolute', marginTop: 40 }}>
                        <Text style={{ fontSize: 22, alignSelf: 'center', marginTop: 45, color: '#5A6978' }}>Silas Guimarães Ribeiro</Text>
    
                        <Text style={{ fontSize: 14, alignSelf: 'center', marginTop: 10, color: '#8492A6' }}>CTO at Marvel Prototyping</Text>
    
                        <Text style={{ fontSize: 16, alignSelf: 'center',  margin: 10, color: '#5A6978' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

                        <Text style={{ fontSize: 14, alignSelf: 'center', marginTop: 10, color: '#8492A6'}}>Atualmente em Londres, Reino Unido</Text>
                    </View>
                    <Thumbnail large style={{ alignSelf: 'center', position: 'absolute' }} source={require('../../../assets/user.jpeg')} />
                </View>



            </Container>
        );
    }
}