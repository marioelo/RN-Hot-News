import React, {useEffect, useState} from 'react';
import {
    FlatList,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import NewsItem from '../components/NewsItem';
import { fetchNews } from '../store/newsStore';


const NewsListScreen = props => {

    useEffect(() => {
        props.fetchNews();
    }, []);

    
    const renderItem = ({ item }) => (
        <NewsItem article={item} onPress={() => props.navigation.navigate('News')} />
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
    status: state.news.status,
    articles: state.news.articles
});


const mapDispatchToProps = dispatch => ({
    fetchNews: () => dispatch(fetchNews()),
})


export default connect(mapStateToProps, mapDispatchToProps)(NewsListScreen);