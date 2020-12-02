import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    SafeAreaView,
    Button,
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
        <NewsItem article={item} />
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
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Noticias de Chile</Text>
            {/* <Button
                onPress={() => props.navigation.navigate('News')}
                title="Open News"
            /> */}

            <FlatList
                data={newsList}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});


export default NewsListScreen;