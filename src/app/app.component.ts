import { Component, Inject } from '@angular/core';
import { dropdownValues } from './app-config';
import { DispatcherToken } from './shared/tokens/dispatcher.token';
import { SwitchRoleAction } from './store/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public dropdownValues: string[] = dropdownValues;

  constructor(@Inject(DispatcherToken) public dispatch: Function) { }

  changeStatus(userStatus) {
    this.dispatch(new SwitchRoleAction(userStatus));
  }
}
