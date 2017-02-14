//关于
'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, WebView, Platform, Share, TouchableHighlight, Text, ToastAndroid, NativeAppEventEmitter } from 'react-native';
import GATFingerprint from 'react-native-fingerprint';
var subscriptionFingerprint;

export default class FingerPrint extends Component {
    componentDidMount() {
        subscriptionFingerprint = NativeAppEventEmitter.addListener(
            'fingerprintCallBack',
            (reminder) => {
                console.log('Fingerprint:'+ JSON.stringify(reminder))
                alert(reminder.errorMessage)
            }
        );
    }

    componentWillUnMount() {
        subscriptionFingerprint.remove();
    }

    async _isSupport() {
        try {
            var {
                isSupport,
                errorCode,
                errorMessage,
                } = await GATFingerprint.isSupport();
            console.log(isSupport + '   ' + errorCode + '   ' + errorMessage);
            if (isSupport) {
                GATFingerprint.startTouch('通过Home键验证已有手机指纹');
            } else {
                //TouchID没有设置指纹
                // 关闭密码（系统如果没有设置密码TouchID无法启用）
                console.log('TouchID 设备不可用');
            }
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => {
                        this._isSupport();
                    }}>
                    <View style={styles.button}>
                        <Text>指纹</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 64 : 51,
    },
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
});