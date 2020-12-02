import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import MainTabNavigator from './MainTabNavigator';
import NewsScreen from '../screens/NewsScreen';


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
                options={{headerBackTitle: "Back"}}
                component={NewsScreen} />
        </Stack.Navigator>
    );
}


export default RootStackNavigator;