import { Observable } from 'rxjs';
import { ArticlesToken } from 'src/app/shared/tokens/article.token';
import { Inject, Injectable } from '@angular/core';
import { ListViewModel } from 'src/app/shared/models/list.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListBehavior {
  public listBehavior$: Observable<ListViewModel[]>;

  constructor(@Inject(ArticlesToken) private articles$: Observable<any>) {
    this.listBehavior$ = this.articles$
      .pipe(
        tap(e => console.log(e)),
        map(articles => {
          console.log(articles);
          const vms: ListViewModel[] = articles
            .map((art, idx) => ({
              title: art.title,
              data: art.info,
              disabled: false,
              isRed: true,
              index: idx
            }));
          return vms;
        })
      );
  }
}
