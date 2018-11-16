import { Action } from '@ngrx/store';

export const AppActions = {
  LOAD_ARTICLES: '[APP] Load all articles',
  UPDATE_ARTICLES: '[APP] Update articles'
};

export class LoadArticlesAction implements Action {
  readonly type: string = AppActions.LOAD_ARTICLES;
  constructor(public payload: any) { }
}

export class UpdateArticlesAction implements Action {
  readonly type: string = AppActions.UPDATE_ARTICLES;
  constructor(public payload: any) { }
}
