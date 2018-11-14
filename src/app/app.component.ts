import { Component, ContentChild, Inject } from '@angular/core';
import { UserToken, UserTypeToken } from './shared/tokens/user.token';
import { Observable } from 'rxjs';
import { DispatcherToken } from './shared/tokens/dispatcher.token';
import { RegisterUserAction, SwitchRoleAction } from './store/user/user.actions';
import { dropdownValues } from './app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
