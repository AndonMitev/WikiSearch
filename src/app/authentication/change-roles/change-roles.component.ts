import { Component, Output, EventEmitter, Input } from '@angular/core';
import { UserStatusTypes } from '../../shared/enumerations/user-status';

@Component({
  selector: 'app-change-roles',
  templateUrl: './change-roles.component.html'
})
export class ChangeRolesComponent {

  @Input()
  dropdownValues: string[];

  @Output()
  changeValue = new EventEmitter();


  changeRole(selectMenu) {
    const selectedOption = selectMenu.target.value;

    if (selectedOption) {
      this.changeValue.emit(selectedOption);
    }
  }
}
