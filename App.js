/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import Principal from './src/pages/Principal';
import Conversa from './src/pages/Conversa'

const Navegador = TabNavigator({
  Home:
  {
    screen: Principal
  },
  Conversa:
  {
    screen: Conversa
  }
},{
  tabBarOptions:
  {
    showIcon: true
  }
});

export default Navegador;