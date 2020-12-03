import React, {useEffect, useMemo, useLayoutEffect} from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from '../utilities/constants/colors';


const NewsWebViewScreen = props => {

    const { url, source, origin } = props.route.params;

    const iconName = useMemo(() => {
        return origin === 'News' ? 'add' : 'remove'
    }, []);

    useEffect(() => {
        props.navigation.setOptions({title: source});
    }, []);


    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => alert('test')}
                    style={styles.favoriteButton}>
                    <Ionicons name={iconName} size={22} color={'#fff'} />
                </TouchableOpacity>
            ),
        });
      }, [props.navigation]);


    return (
        <WebView
            source={{ uri: url }}
            startInLoadingState
            originWhitelist={["*"]}
            mediaPlaybackRequiresUserAction
        />
      );
}


const styles = StyleSheet.create({
    favoriteButton: {
        backgroundColor: colors.PRIMARY,
        marginRight: 10,
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    }
});


export default NewsWebViewScreen;