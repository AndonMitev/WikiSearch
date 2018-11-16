import { Action } from '@ngrx/store';

export const AppActions = {
  LOAD_ARTICLES: '[APP] Load all articles',
  UPDATE_ARTICLES: '[APP] Update articles',
  EDIT_ARTICLE: '[APP] Edit article',
  CHANGE_ARTICLE: '[APP] Change article'
};

export class LoadArticlesAction implements Action {
  readonly type: string = AppActions.LOAD_ARTICLES;
  constructor(public payload: any) { }
}

export class UpdateArticlesAction implements Action {
  readonly type: string = AppActions.UPDATE_ARTICLES;
  constructor(public payload: any) { }
}

export class EditArticleAction implements Action {
  readonly type: string = AppActions.EDIT_ARTICLE;
  constructor(public payload: number) { }
}

export class ChangeArticleAction implements Action {
  readonly type: string = AppActions.CHANGE_ARTICLE;
  constructor(public payload: any) { }
}
