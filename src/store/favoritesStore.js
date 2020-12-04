import * as actionTypes from './actionTypes';

const initialState = {
    articles: [],
}


// Action creators
export const addArticle = (article) => ({
    type: actionTypes.ADD_ARTICLE,
    article,
});


export const removeArticle = (article) => ({
    type: actionTypes.REMOVE_ARTICLE,
    article,
});


// Reducer functions
const addArticleReducer = (state, action) => ({
    articles: [action.article, ...state.articles],
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
        case actionTypes.ADD_ARTICLE:
            return addArticleReducer(state, action);
        case actionTypes.REMOVE_ARTICLE:
            return removeArticleReducer(state, action);
        default:
            return state;
    }
}


export default reducer;