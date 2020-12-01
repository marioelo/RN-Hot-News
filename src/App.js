import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainTabNavigator from './navigation/MainTabNavigator';

const App: () => React$Node = () => {
    return (
        <NavigationContainer>
            <MainTabNavigator />
        </NavigationContainer>
    );
};

export default App;
