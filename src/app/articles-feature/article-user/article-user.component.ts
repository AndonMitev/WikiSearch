import { Component, Inject } from '@angular/core';
import { ArticlesToken } from 'src/app/shared/tokens/article.token';
import { ArticleBehavior } from './article.behavior';
import { DispatcherToken } from 'src/app/shared/tokens/dispatcher.token';
import { EditArticleAction, ChangeArticleAction } from 'src/app/store/app.actions';

@Component({
  selector: 'app-article-user',
  templateUrl: './article-user.component.html',
  styleUrls: ['./article-user.component.scss']
})
export class ArticleUserComponent {

  constructor(
    @Inject(ArticleBehavior) public data$: ArticleBehavior,
    @Inject(DispatcherToken) public dispatch: Function
  ) {
  }

  getArticleIdx(idx) {
    this.dispatch(new EditArticleAction(idx));
  }

  sendDataToAction(data) {
    const {newTitle, index} = data;
    this.dispatch(new ChangeArticleAction({newTitle, index}));
    this.dispatch(new EditArticleAction(-1));
  }
}
