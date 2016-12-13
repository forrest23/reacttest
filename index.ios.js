/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import PdfDemo from './views/pdfDemo'
import AnimatedDemo from './views/animatedDemo'
import AnimatedDemoTwo from './views/animatedDemoTwo'


export default class reacttest extends Component {
  render() {
    return (
      <AnimatedDemo />
    );
  }
}

AppRegistry.registerComponent('reacttest', () => reacttest);
