import * as actionTypes from './actionTypes';
import {storeData, getData} from '../utilities/localStorage';

const initialState = {
    articles: [],
}


// Action creators
export const getArticles = () => dispatch => {
    getData().then(data => {
        dispatch(setArticles(data));
    }).catch(error => {
        console.log('Error getting the favorite article:', error);
    });
}


export const addArticle = article => (dispatch, getState) => {
    const {favorites: {articles}} = getState();
    const newArticles = [article, ...articles];
    
    dispatch(updateArticles(newArticles));
}


export const removeArticle = article => (dispatch, getState) => {
    const {favorites: {articles}} = getState();
    
    const newArticles = [...articles];
    const index = newArticles.findIndex(el => {
        return el.url === article.url;
    });
    newArticles.splice(index, 1);
    
    dispatch(updateArticles(newArticles));
}


const updateArticles = articles => dispatch =>{
    storeData(articles).then(() => {
        dispatch(setArticles(articles));
    }).catch(error => {
        console.log('Error storing the favorite articles:', error);
    });
}


const setArticles = articles => ({
    type: actionTypes.SET_ARTICLES,
    articles,
});


// Reducer functions
const setArticlesReducer = (state, action) => ({
    ...state,
    articles: action.articles
});


const removeArticleReducer = (state, action) => {
    const articles = [...state.articles];
    const index = articles.findIndex(el => {
        return el.url === action.article.url;
    });
    articles.splice(index, 1);
    return {articles: articles}
}


// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ARTICLES:
            return setArticlesReducer(state, action);
        default:
            return state;
    }
}


export default reducer;