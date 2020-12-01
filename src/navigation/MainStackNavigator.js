import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';
import NewsScreen from '../screens/NewsScreen';


const MainStackNavigator = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator mode="modal">
            <Stack.Screen
                name="MainTabNavigator"
                component={MainTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="News"
                component={NewsScreen} />
        </Stack.Navigator>
    );
}


export default MainStackNavigator;