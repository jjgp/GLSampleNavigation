/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import MainScreen from "./MainScreen";
import GLScreen from "./GLScreen";

const AppNavigator = StackNavigator(
  {
    MainScreen: {
      name: "MainScreen",
      screen: MainScreen
    },
    GLScreen: {
      name: "GLScreen",
      screen: GLScreen
    }
  },
  {
    initialRouteName: "MainScreen"
  }
);

export default class GLSample extends Component {
  render() {
    return <AppNavigator />;
  }
}
