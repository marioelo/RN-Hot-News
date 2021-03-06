import React, {useEffect} from 'react';
import {
    FlatList,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import NewsItem from '../components/NewsItem';
import {getArticles} from '../store/favoritesStore';

const FavoritesScreen = props => {

    useEffect(() => {
        props.getArticles()
    }, []);

    const renderItem = ({ item }) => (
        <NewsItem
            article={item}
            onPress={() => props.navigation.navigate('NewsWebView', {
                article: item,
                origin: 'Favorites',
            })}
        />
    );


    return (
        <FlatList
            data={props.articles}
            renderItem={renderItem}
            contentContainerStyle={styles.container}
            keyExtractor={(_, index) => index.toString()}
        />
    );
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
});


const mapStateToProps = state => ({
    articles: state.favorites.articles
});


const mapDispatchToProps = dispatch => ({
    getArticles: () => dispatch(getArticles()),
});


export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);