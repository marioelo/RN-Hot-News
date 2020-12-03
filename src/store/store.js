import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './newsStore';

const rootReducer = combineReducers({
    news: newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;