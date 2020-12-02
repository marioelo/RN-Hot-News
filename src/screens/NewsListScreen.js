import React, {useEffect, useState} from 'react';
import {
    FlatList,
    StyleSheet,
} from 'react-native';
import NewsItem from '../components/NewsItem';


const NewsListScreen = props => {

    const [newsList, setNewsList] = useState([]);


    useEffect(() => {
        fetchNews();
    }, []);

    
    const renderItem = ({ item }) => (
        <NewsItem article={item} onPress={() => props.navigation.navigate('News')} />
    );


    const fetchNews = () => {

        const apiKey = 'bb320b7c35b444fcb9f357a1bf360040';
        const query = '+chile NOT ají';
        const pageSize = 100;
        const language = 'es'

        const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&language=${language}&apiKey=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.totalResults)
                setNewsList(data.articles)
            });
    }


    return (
        <FlatList
            data={newsList}
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


export default NewsListScreen;