import React, {useEffect, useState, useMemo} from 'react';
import {
    FlatList,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import NewsItem from '../components/NewsItem';
import { fetchNews } from '../store/newsStore';
import * as statusCode from '../utilities/constants/statusCode';


const NewsListScreen = props => {

    const isLoading = useMemo(() => props.status === statusCode.LOADING, [props.status]);

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
            refreshing={isLoading}
            onRefresh={() => props.fetchNews()}
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