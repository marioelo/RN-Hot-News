import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import MainTabNavigator from './MainTabNavigator';
import NewsWebViewScreen from '../screens/NewsWebViewScreen';


const RootStackNavigator = () => {

    const Stack = createStackNavigator();

    
    const getHeaderTitle = route => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'NewsList';
      
        switch (routeName) {
            case 'NewsList':
                return 'Noticias de Chile';
            case 'Favorites':
                return 'Favoritas';
        }
    }


    return (
        <Stack.Navigator mode="modal">
            <Stack.Screen
                name="MainTabNavigator"
                component={MainTabNavigator}
                options={({ route }) => ({
                    headerTitle: getHeaderTitle(route),
                })} />
            <Stack.Screen
                name="News"
                options={{headerBackTitle: "Volver"}}
                component={NewsWebViewScreen} />
        </Stack.Navigator>
    );
}


export default RootStackNavigator;