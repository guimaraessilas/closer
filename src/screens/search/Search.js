import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Content, Text } from 'native-base';
import { FlatList } from 'react-native';
import ListFriendsItem from '../../components/ListFriendsItem';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            search: '',
            result: false,
            msg: ''
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

    find(lsearch) {
        
        console.log(`http://192.168.43.46:8080/closer/api/service/user/${lsearch}`);

        return fetch(`http://192.168.43.46:8080/closer/api/service/user/${lsearch}`)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    users: responseJson.json,
                    msg: responseJson.message,
                    result: responseJson.result
                });
            }).catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <Container>
                <Header searchBar rounded style={{ height: 80, paddingTop: 20 }}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Encontre novas pessoas..." 
                            onChangeText={search => { this.setState({search}); this.find(this.state.search) }}
                        />
                    </Item>
                </Header>
                <Content scrollEnabled>
                    {
                        (this.state.result === false) ? <Text>{this.state.msg}</Text>
                            :
                            <FlatList data={this.state.users}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) =>
                                    <ListFriendsItem data={item} />
                                }
                            />
                    }
                </Content>
            </Container>

        );
    }
}