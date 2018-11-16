import { createFeatureSelector, createSelector} from '@ngrx/store';
import { AppState } from './app.state';

export const AppSelector = createFeatureSelector<AppState>(AppState.stateName);

export const selectArticles = createSelector(
  AppSelector,
  state => state.articles
);
