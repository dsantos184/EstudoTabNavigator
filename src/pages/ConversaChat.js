import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

export default class ConversaChat extends Component
{
    static navigationOptions = ({navigation}) =>({
        title: navigation.state.params.nome,
        tabBarLabel: 'Chat',        
    });

    render()
    {
        return(
            <View>
                <Text>Tela de Chat</Text>
            </View>
        );
    }
}