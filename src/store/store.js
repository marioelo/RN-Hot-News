import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './newsStore';
import favoritesReducer from './favoritesStore';

const rootReducer = combineReducers({
    news: newsReducer,
    favorites: favoritesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;