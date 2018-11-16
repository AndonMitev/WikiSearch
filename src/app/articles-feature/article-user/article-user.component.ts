import { Component, Inject } from '@angular/core';
import { ArticlesToken } from 'src/app/shared/tokens/article.token';

@Component({
  selector: 'app-article-user',
  templateUrl: './article-user.component.html',
  styleUrls: ['./article-user.component.scss']
})
export class ArticleUserComponent {
  constructor(@Inject(ArticlesToken) public data$) { }
}
