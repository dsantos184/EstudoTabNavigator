import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

export default class Principal extends Component
{
    static navigationOptions = ({navigation}) =>({
        tabBarLabel: 'Inicial',
        tabBarIcon:({tintColor, focused}) =>{
            
            if( focused )
            {
                return(
                    <Image source={require("../assets/img/home_on.png")} style={{width:26, height:26}} />
                )
            }
            else
            {
                return(
                    <Image source={require("../assets/img/home_off.png")} style={{width:26, height:26}} />
                )
            }
        }
    });

    render()
    {
        return(
            <View>
                <Text>Tela Principal</Text>
            </View>
        );
    }
}