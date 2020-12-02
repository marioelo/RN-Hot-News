import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import RootStackNavigator from './navigation/RootStackNavigator';
import store from './store/store';

const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStackNavigator />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
