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
import ShareDemo from './views/shareDemo'
import CodePush from "react-native-code-push";

export default class reacttest extends Component {
  componentDidMount() {
    CodePush.sync({
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE
    });
  }

  render() {
    return (
      <ShareDemo />
    );
  }
}

AppRegistry.registerComponent('reacttest', () => reacttest);
