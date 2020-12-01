import React from 'react';
import {
    Text,
    SafeAreaView,
    Button,
} from 'react-native';

const FavoritesScreen = props => {

    return (
        <SafeAreaView>
            <Text style={{textAlign: "center"}}>Favorites Screen</Text>
            <Button
                onPress={() => props.navigation.navigate('News')}
                title="Open News"
            />
        </SafeAreaView>
    );
}


export default FavoritesScreen;