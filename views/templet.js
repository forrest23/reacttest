'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';


var {height, width} = Dimensions.get('window');

export default class Templet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPdfDownload: false,
        };

    }

    componentDidMount() {

    }

    render() {
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pdfcontainer: {
        height: height
    },
    pdf: {
        height: 500
    }
});