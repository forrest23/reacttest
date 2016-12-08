/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './views/Pdf'

export default class reacttest extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('reacttest', () => reacttest);
