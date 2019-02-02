import React, { Component } from 'react';
import { Container, Content, Header, Body, Title, Text } from 'native-base';
import { FlatList } from 'react-native';
import ListFriendsItem from '../../components/ListFriendsItem';

export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            msg: '',
            result: false,
            friendList: []
        }
    }

    componentDidMount(){
        return fetch(`http://192.168.43.46:8080/closer/api/service/contact/${this.props.id}`)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)
            this.setState({ 
                friendList: responseJson.json,  
                msg: responseJson.message,
                result: responseJson.result
            });
        }).catch((err) => {
            console.log(err)
        })
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
        return (
            <Container>
                <Header style={{ height: 90, paddingBottom: 10 }}>
                    <Body><Title style={{ fontSize: 20, color: '#fff', marginLeft: 16.5, marginTop: 25 }}>Mais Próximos</Title></Body>
                </Header>
                <Content scrollEnabled>
                    {
                        (this.state.result === false) ? <Text>{this.state.msg}</Text> 
                            : 
                        <FlatList data={this.state.friendList}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>
                                <ListFriendsItem data={item} />
                            }
                        />
                    }
                </Content>
            </Container>
        )
    }
}