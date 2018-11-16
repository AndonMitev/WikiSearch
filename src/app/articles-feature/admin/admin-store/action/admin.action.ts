import { Action } from '@ngrx/store';

export const AdminActions = {
  SEARCH_ARTICLE: '[ADMIN] Search articles',
  DELETE_ARTICLE: '[ADMIN] Delete articles'
};

export class SearchArticleAction implements Action {
  readonly type: string = AdminActions.SEARCH_ARTICLE;
  constructor(public payload: string) { }
}

export class DeleteArticleAction implements Action {
  readonly type: string = AdminActions.DELETE_ARTICLE;
  constructor(public payload: number) { }
}

