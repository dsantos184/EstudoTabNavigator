/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class Con extends Component
{
    static navigationOptions = ({navigation}) =>({
        tabBarIcon:({tintColor, focused}) =>{
            
            if( focused )
            {
                return(
                    <Image source={require("../assets/img/config_on.png")} style={{width:26, height:26}} />
                )
            }
            else
            {
                return(
                    <Image source={require("../assets/img/config_off.png")} style={{width:26, height:26}} />
                )
            }
        }
    });

    render()
    {
        return(
            <View style={styles.container}>
                <Text>Tela de Configurações</Text>
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