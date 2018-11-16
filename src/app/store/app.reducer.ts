import { AppState } from 'src/app/store/app.state';
import { LoadArticlesAction, AppActions, UpdateArticlesAction } from './app.actions';
import { Action } from '@ngrx/store';
import { MapReducers } from '../shared/enumerations/reducers.interface';

const initialState: AppState = {
  articles: []
};

function loadArticles(state: AppState, action: LoadArticlesAction) {
  const newState = Object.assign({}, state);
  newState.articles.push(action.payload);
  return newState;
}

function updateArticles(state: AppState, action: UpdateArticlesAction) {
  console.log('here');
  const newState = Object.assign({}, state);
  newState.articles = action.payload;
  return newState;
}

const mapAppReducers: MapReducers<AppState> = {
  [AppActions.LOAD_ARTICLES]: loadArticles,
  [AppActions.UPDATE_ARTICLES]: updateArticles
};

export function appReducers(state = initialState, action: Action) {
  return mapAppReducers[action.type] != null ?
  mapAppReducers[action.type](state, action) :
    state;
}
