/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry} from "react-native";
import {StackNavigator} from "react-navigation";
import MainScreen from "./js/MainScreen";
import GLScreen from "./js/GLScreen";

const AppNavigator = StackNavigator({
    MainScreen: {
        name: 'MainScreen',
        screen: MainScreen
    },
    GLScreen: {
        name: 'GLScreen',
        screen: GLScreen
    }
}, {
    initialRouteName: 'MainScreen'
});

export default class GLSample extends Component {
    render() {
        return <AppNavigator/>;
    }
}

AppRegistry.registerComponent('GLSample', () => GLSample);
