/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import ConversaList from './ConversaList';
import ConversaChat from './ConversaChat';


const Navegador = StackNavigator({
    ConversaList:
    {
        screen: ConversaList
    },

    ConversaChat:
    {
        screen: ConversaChat
    }
});

export default Navegador;