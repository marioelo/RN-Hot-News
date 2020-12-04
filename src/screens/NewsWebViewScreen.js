import React, {useEffect, useLayoutEffect} from 'react';
import {
    Alert,
    View,
    Text,
    Button,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import * as colors from '../utilities/constants/colors';
import {addArticle, removeArticle} from '../store/favoritesStore';


const NewsWebViewScreen = props => {

    const { article, origin } = props.route.params;


    useEffect(() => {
        props.navigation.setOptions({title: article.source.name});
    }, []);


    useLayoutEffect(() => {
        const iconName = origin === 'News' ? 'add' : 'remove'; 

        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => handleFavitoresButtonPressed()}
                    style={styles.favoriteButton}>
                    <Ionicons name={iconName} size={22} color={'#fff'} />
                </TouchableOpacity>
            ),
        });
    }, [props.navigation]);


    const handleFavitoresButtonPressed = () => {
        let title;
        let message;
        if (origin === 'News') {
            props.addArticle(article);
            title = 'Agregado a favotiros';
            message = 'El articulo se ha agregado a tus favoritos.';
        } else {
            props.removeArticle(article);
            title = 'Eliminado de favotiros';
            message = 'El articulo se ha eliminado a tus favoritos.';
        }

        Alert.alert(title, message, [
            {text: "OK", onPress: () => props.navigation.goBack()}
        ], {cancelable: false});
    }


    return (
        <WebView
            source={{ uri: article.url }}
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


const mapDispatchToProps = dispatch => ({
    addArticle: (article) => dispatch(addArticle(article)),
    removeArticle: (article) => dispatch(removeArticle(article)),
});


export default connect(null, mapDispatchToProps)(NewsWebViewScreen);