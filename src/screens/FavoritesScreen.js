import React from 'react';
import {
    FlatList,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import NewsItem from '../components/NewsItem';

const FavoritesScreen = props => {

    const renderItem = ({ item }) => (
        <NewsItem
            article={item}
            onPress={() => props.navigation.navigate('NewsWebView', {
                url: item.url,
                source: item.source.name,
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
    fetchNews: () => dispatch(fetchNews()),
});


export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);