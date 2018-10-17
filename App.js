/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Image} from 'react-native';

import { TabNavigator } from 'react-navigation';

import Principal from './src/pages/Principal';
import Conversa from './src/pages/Conversa'
import Config from './src/pages/Config'

const Navegador = TabNavigator({
  Home:
  {
    screen: Principal
  },
  Conversa: {
    screen:Conversa,
    navigationOptions: 
    {
      title:"Conversas",
      tabBarLabel:"Conversas",
      tabBarIcon:({tintColor, focused}) => {
        if(focused) 
        {
			    return (
            <Image source={require("./src/assets/img/chat_on.png")} style={{width:26, height:26}} />
			   );
        } 
        else 
        {
			    return (
				    <Image source={require("./src/assets/img/chat_off.png")} style={{width:26, height:26}} />
			    );
			  }					
      }
    }    
  },
  Config:
  {
    screen: Config
  }

},{
  tabBarOptions:
  {
    showIcon: true
  }
});

export default Navegador;