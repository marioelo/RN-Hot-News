import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';


const NewsItem = props => {

    const imageSource = props.article.urlToImage ? {
        uri: props.article.urlToImage
    } : require('../assets/breaking-news.jpg');
    
    
    return (
        <TouchableOpacity style={styles.card} onPress={props.onPress}>
            <Image
                source={imageSource}
                style={styles.image}
                resizeMode="cover" />
            <View style={styles.content}>
                <Text style={styles.sourceName}>{props.article.source.name}</Text>
                <Text numberOfLines={3} style={styles.articleTitle}>{props.article.title}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginHorizontal: '5%',
        marginVertical: 10,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,
    },
    image: {
        height: 90,
        width: 90,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    sourceName: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    articleTitle: {
        fontSize: 12,
    }
});


export default NewsItem;