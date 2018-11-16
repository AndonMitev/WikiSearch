import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.scss']
})
export class AdminSearchComponent {

  @Output()
  sendValue = new EventEmitter();

  searchData(inputData) {
    this.sendValue.emit(inputData);
  }
}
