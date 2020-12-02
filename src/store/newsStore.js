import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as statusCode from '../utilities/constants/statusCode';

const initialState = {
    status: statusCode.LOADING,
    articles: []
}


export const fetchNews = () => (dispatch) => {
    const apiKey = 'bb320b7c35b444fcb9f357a1bf360040';
    const query = '+chile NOT ají';
    const pageSize = 100;
    const language = 'es'

    const url = `https://newsapi.org/v2/everything`;

    axios.get(url, {
        params: {
            q: query,
            language,
            pageSize,
            apiKey
        }
    }).then(response => {
        dispatch(setNews(response.data, response.status));
    }).catch(error => {
        console.log('Error while fetching news:', error);
        const {response: {status}} = error;
        dispatch(setStatus(status));
    })
}


// Action creators
const setNews = (payload, status) => ({
    type: actionTypes.SET_NEWS,
    payload,
    status,
});


const setStatus = status => ({
    type: actionTypes.SET_NEWS_STATUS,
    status,
});


// Reducer functions
const setNewsReducer = (state, action) => ({
    ...state,
    articles: action.payload.articles,
    status: action.status,
});


const setStatusReducer = (state, action) => ({
    ...state,
    status: action.status,
});


// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_NEWS:
            return setNewsReducer(state, action);
        case actionTypes.SET_NEWS_STATUS:
            return setStatusReducer(state, action);
        default:
            return state;
    }
}


export default reducer;