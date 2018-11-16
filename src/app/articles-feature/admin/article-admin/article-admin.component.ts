import { Component, Inject } from '@angular/core';
import { DispatcherToken } from 'src/app/shared/tokens/dispatcher.token';
import { SearchArticleAction, DeleteArticleAction } from '../admin-store/action/admin.action';
import { ArticlesToken } from 'src/app/shared/tokens/article.token';
import { Observable } from 'rxjs';
import { ListBehavior } from '../list-behavior';

@Component({
  selector: 'app-article-admin',
  templateUrl: './article-admin.component.html',
  styleUrls: ['./article-admin.component.scss']
})
export class ArticleAdminComponent {

  constructor(
    @Inject(DispatcherToken)
    private dispatcher: Function,
    @Inject(ListBehavior)
    public articles$: ListBehavior
  ) {}

  searchData(inputValue) {
    this.dispatcher(new SearchArticleAction(inputValue));
  }

  deleteArticle(index) {
    this.dispatcher(new DeleteArticleAction(index));
  }
}
