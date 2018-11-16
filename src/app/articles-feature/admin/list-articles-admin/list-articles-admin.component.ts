import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListViewModel } from 'src/app/shared/models/list.model';

@Component({
  selector: 'app-list-articles-admin',
  templateUrl: './list-articles-admin.component.html',
  styleUrls: ['./list-articles-admin.component.scss']
})
export class ListArticlesAdminComponent {

  @Input()
  viewModel: ListViewModel;

  @Output()
  removeArticle = new EventEmitter();

  deleteItem(itemIndex) {
    this.removeArticle.emit(itemIndex);
  }
}
