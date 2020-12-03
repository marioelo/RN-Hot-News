import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from '../utilities/constants/colors';
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
        activeTintColor: colors.PRIMARY,
        inactiveTintColor: colors.SECONDARY,
    }


    return (
        <Tab.Navigator
            screenOptions={configureScreenOptions}
            tabBarOptions={tabBarOptions}
        >
            <Tab.Screen name="News" component={NewsScreen} options={{title: "Noticias"}} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} options={{title: "Favoritas"}} />
        </Tab.Navigator>
    );
}


export default MainTabNavigator;