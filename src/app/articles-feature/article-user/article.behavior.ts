import { Injectable, Inject } from '@angular/core';
import { ArticlesViewModel } from 'src/app/shared/models/articles.view-model';
import { Observable } from 'rxjs';
import { ArticlesToken, ArticleIndexToken } from 'src/app/shared/tokens/article.token';
import { map, combineLatest } from 'rxjs/operators';
import { ArticleModel } from 'src/app/shared/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleBehavior {
  public articlesViewModel$: Observable<ArticlesViewModel[]>;

  constructor(
    @Inject(ArticlesToken) private articles$: Observable<ArticleModel[]>,
    @Inject(ArticleIndexToken) private articleIdx$: Observable<number>
  ) {
    this.articlesViewModel$ = this.articles$
      .pipe(
        combineLatest(this.articleIdx$),
        map(([elem, articleId]) => {
          return elem.map((article, idx) => ({
            articles: article.info,
            title: article.title,
            isEditable: idx === articleId,
            titleColor: idx % 2 !== 0,
            index: idx
          }) as ArticlesViewModel);
        }
        )
      );
  }
}
