import { Action } from '@ngrx/store';

import { AppState } from 'src/app/store/app.state';
import { LoadArticlesAction, AppActions, UpdateArticlesAction, ChangeArticleAction } from './app.actions';
import { MapReducers } from '../shared/enumerations/reducers.interface';
import { DeleteArticleAction } from '../articles-feature/admin/admin-store/action/admin.action';
import { ArticleModel } from '../shared/models/article.model';

const initialState: AppState = {
  articles: [],
  articleIdx: null
};

function loadArticles(state: AppState, action: LoadArticlesAction) {
  const newState = Object.assign({}, state);
  newState.articles = [...state.articles, action.payload];
  return newState;
}

function updateArticles(state: AppState, action: UpdateArticlesAction) {
  const newState = Object.assign({}, state);
  newState.articles = action.payload;
  return newState;
}

function editArticle(state: AppState, action: DeleteArticleAction) {
  const newState = Object.assign({}, state);
  newState.articleIdx = action.payload;
  return newState;
}

function changeTitleArticle(state: AppState, action: ChangeArticleAction) {
  const newState = Object.assign({}, state);
  const { newTitle, index } = action.payload;
  const article = newState.articles[index];
  article.title = newTitle;
  newState.articles[index] = article;
  return newState;
}

const mapAppReducers: MapReducers<AppState> = {
  [AppActions.LOAD_ARTICLES]: loadArticles,
  [AppActions.UPDATE_ARTICLES]: updateArticles,
  [AppActions.EDIT_ARTICLE]: editArticle,
  [AppActions.CHANGE_ARTICLE]: changeTitleArticle
};

export function appReducers(state = initialState, action: Action) {
  return mapAppReducers[action.type] != null ?
    mapAppReducers[action.type](state, action) :
    state;
}
