import React, {useEffect, useState, useMemo} from 'react';
import {
    FlatList,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import NewsItem from '../components/NewsItem';
import ErrorView from '../components/ErrorView';
import { fetchNews } from '../store/newsStore';
import * as statusCode from '../utilities/constants/statusCode';


const NewsScreen = props => {

    const isLoading = useMemo(() => props.status === statusCode.LOADING, [props.status]);

    useEffect(() => {
        props.fetchNews();
    }, []);

    
    const renderItem = ({ item }) => (
        <NewsItem
            article={item}
            onPress={() => props.navigation.navigate('NewsWebView', {
                url: item.url,
                source: item.source.name
            })}
        />
    );


    const listView = (
        <FlatList
            data={props.articles}
            renderItem={renderItem}
            contentContainerStyle={styles.container}
            keyExtractor={(_, index) => index.toString()}
            refreshing={isLoading}
            onRefresh={() => props.fetchNews()}
        />
    );


    const errorView = (
        <ErrorView onPress={() => props.fetchNews()} />
    );


    switch (props.status) {
        case statusCode.LOADING:
        case statusCode.SUCCESS:
            return listView;
        default:
            return errorView;
    }
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


export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);