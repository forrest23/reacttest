'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, Animated, Image } from 'react-native';


var {height, width} = Dimensions.get('window');

export default class AnimatedDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anim: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.spring(this.state.anim, {
            toValue: 1,
            velocity: 6,
            tension: -20,
            friction: 3,
        }).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={[styles.content, {
                        transform: [
                            {
                                scale: this.state.anim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.5, 1],
                                })
                            },
                            {
                                translateX: this.state.anim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [300, 0],
                                })
                            },
                            {
                                rotate: this.state.anim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [
                                        '0deg', '720deg'
                                    ],
                                })
                            },
                        ]
                    }
                    ]}>
                    <Image source={require('../imgs/logo.jpg')} style={{ width: 50, height: 50 }} />
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    content: {
        backgroundColor: 'red',
        borderWidth: 1,
        padding: 5,
        margin: 20,
        alignItems: 'center',
    },
});
