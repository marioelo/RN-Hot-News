import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NewsScreen from '../screens/NewsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const MainTabNavigator = () => {
    
    const Tab = createBottomTabNavigator();

    const configureScreenOptions = ({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
                case 'News':
                    iconName = focused ? 'newspaper' : 'newspaper-outline';
                    break;
                case 'Favorites':
                    iconName = focused ? 'star' : 'star-outline';
                    break;
                default:
                    break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
        },
    });


    const tabBarOptions = {
        activeTintColor: '#ff6666',
        inactiveTintColor: '#575151',
    }


    return (
        <Tab.Navigator
            screenOptions={configureScreenOptions}
            tabBarOptions={tabBarOptions}
        >
            <Tab.Screen name="News" component={NewsScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
    );
}


export default MainTabNavigator;