import { Observable } from 'rxjs';
import { ArticlesToken } from 'src/app/shared/tokens/article.token';
import { Inject, Injectable } from '@angular/core';
import { ListViewModel } from 'src/app/shared/models/list.model';
import { map, tap } from 'rxjs/operators';
import { DecisionMakerToken } from 'src/app/shared/tokens/desicion-maker.token';
import { decisionMakerSetDisabledOnOddElements, decisionMakerSetTitleToRed } from 'src/app/shared/decision-makers';

@Injectable({
  providedIn: 'root'
})
export class ListBehavior {
  public listBehavior$: Observable<ListViewModel[]>;

  constructor(
    @Inject(ArticlesToken) private articles$: Observable<any>
  ) {
    this.listBehavior$ = this.articles$
      .pipe(
        map(articles => {
          const vms: ListViewModel[] = articles
            .map((art, idx) => ({
              title: art.title,
              data: art.info,
              disabled: false,
              isRed: false,
              index: idx
            }));
          return vms;
        }),
        map(decisionMakerSetDisabledOnOddElements),
        map(decisionMakerSetTitleToRed)
      );
  }
}
