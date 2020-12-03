import React, {useEffect, useMemo} from 'react';
import {
    View,
    Text,
    Button,
    ActivityIndicator
} from 'react-native';
import { WebView } from 'react-native-webview';


const NewsWebViewScreen = props => {

    const { url, source } = props.route.params;

    useEffect(() => {
        props.navigation.setOptions({title: source});
    }, []);


    return (
        <WebView
            source={{ uri: url }}
            startInLoadingState
            originWhitelist={["*"]}
        />
      );
}


export default NewsWebViewScreen;