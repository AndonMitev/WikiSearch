import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ArticlesViewModel } from 'src/app/shared/models/articles.view-model';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss']
})
export class ListArticlesComponent {

  @Input()
  public viewModel: ArticlesViewModel;

  @Output()
  articleIdx = new EventEmitter();

  @Output()
  newArticleData = new EventEmitter();

  deleteArticle(idx) {
    this.articleIdx.emit(idx);
  }

  sendData(newTitle, index) {
    this.newArticleData.emit({newTitle, index});
  }
}
