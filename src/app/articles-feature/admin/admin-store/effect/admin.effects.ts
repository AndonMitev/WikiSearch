import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from 'selenium-webdriver/http';
import { Injectable, Inject } from '@angular/core';
import { SearchArticleAction, AdminActions, DeleteArticleAction } from '../action/admin.action';
import { LoadArticlesAction, UpdateArticlesAction } from '../../../../store/app.actions';
import { switchMap, tap, map, withLatestFrom } from 'rxjs/operators';
import { SearchArticlesService } from '../../services/admin.services';
import { ArticlesToken } from 'src/app/shared/tokens/article.token';

@Injectable()
export class AdminEffects {

  @Effect()
  searchArticle = this.actions$
    .pipe(
      ofType<SearchArticleAction>(AdminActions.SEARCH_ARTICLE),
      switchMap(action =>
        this.searchService.searchArticle(action.payload)
          .pipe(
            map(res => {
              const [title, info] = [res[0], res[1]];
              return new LoadArticlesAction({ title, info });
            })
          )
      )
    );

  @Effect()
  deleteArticle = this.actions$
    .pipe(
      ofType<DeleteArticleAction>(AdminActions.DELETE_ARTICLE),
      withLatestFrom(this.articles$),
      map(([action, articles]) => {
        const index = action.payload;
        const newArticles = articles.filter((value, idx) => idx !== index);
        return new UpdateArticlesAction(newArticles);
      })
    );

  constructor(
    private actions$: Actions,
    private searchService: SearchArticlesService,
    @Inject(ArticlesToken) private articles$: any
  ) { }
}
