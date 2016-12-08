'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import PDFView from 'react-native-pdf-view';
import RNFS from 'react-native-fs';

const pdfDownloadURL = 'http://image.tianjimedia.com/imagelist/2009/190/caq4z56jadof.pdf';
var {height, width} = Dimensions.get('window');

export default class Pdf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPdfDownload: false,
            pageCount: 1
        };
        this.pdfView = null;
        this.pdfPath = RNFS.DocumentDirectoryPath + '/test.pdf'
    }

    componentDidMount() {
        var DownloadFileOptions = {
            fromUrl: pdfDownloadURL,          // URL to download file from
            toFile: this.pdfPath         // Local filesystem path to save the file to
        }
        var result = RNFS.downloadFile(DownloadFileOptions);
        console.log(result);

        var _this = this;
        result.then(function (val) {
            _this.setState({
                isPdfDownload: true,
            });
        }, function (val) {
            console.log('Error Result:' + JSON.stringify(val));
        }
        ).catch(function (error) {
            console.log(error.message);
        });
    }

    //3秒之后缩放1.5倍
    zoom(val = 2.0) {
        this.pdfView && setTimeout(() => {
            this.pdfView.setNativeProps({ zoom: val });
        }, 3000);
    }

    render() {
        if (!this.state.isPdfDownload) {
            return (
                <View style={styles.container}>
                    <Text>Downloading</Text>
                </View>
            );
        }

        var pages = [];
        for (var i = 2; i < this.state.pageCount + 1; i++) {
            pages.push(
                <PDFView ref={(pdf) => { this.pdfView = pdf; } }
                    key={"sop" + i}
                    path={this.pdfPath}
                    pageNumber={i}
                    style={styles.pdf} />
            );
        }

        return (
            <ScrollView style={styles.pdfcontainer}>
                <PDFView ref={(pdf) => { this.pdfView = pdf; } }
                    key="sop"
                    path={this.pdfPath}
                    pageNumber={1}
                    onLoadComplete={(pageCount) => {
                        this.setState({ pageCount: pageCount });
                        console.log(`pdf共有: ${pageCount}页`);
                    } }
                    style={styles.pdf} />

                {pages.map((elem, index) => {
                    return elem;
                })}
            </ScrollView>
        )
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