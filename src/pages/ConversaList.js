import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from 'react-native';

export default class ConversaList extends Component
{
    static navigationOptions = ({navigation}) =>({
        title: 'Conversas',
        tabBarLabel: 'Chat',
        tabBarIcon:({tintColor, focused}) =>{
            
            if( focused )
            {
                return(
                    <Image source={require("../assets/img/chat_on.png")} style={{width:26, height:26}} />
                )
            }
            else
            {
                return(
                    <Image source={require("../assets/img/chat_off.png")} style={{width:26, height:26}} />
                )
            }
        }
    });

    render()
    {
        return(
            <View style={styles.container}>
                <Text>Lista de conversa</Text>
                <Button title="Paulo" onPress={()=>this.props.navigation.navigate('ConversaChat', {nome: 'Paulo'})} />
                <Button title="João" onPress={()=>this.props.navigation.navigate("ConversaChat", {nome:"João"})} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,

    }
});