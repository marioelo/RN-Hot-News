import React from 'react';
import {
    Text,
    SafeAreaView,
    Button,
} from 'react-native';

const NewsListScreen = props => {

    return (
        <SafeAreaView>
            <Text style={{textAlign: "center"}}>News Screen</Text>
            <Button
                onPress={() => props.navigation.navigate('News')}
                title="Open News"
            />
        </SafeAreaView>
    );
}


export default NewsListScreen;