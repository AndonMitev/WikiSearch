import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserToken, UserTypeToken } from '../shared/tokens/user.token';
import { DispatcherToken } from '../shared/tokens/dispatcher.token';
import { RegisterUserAction } from '../store/user/user.actions';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  constructor(
    @Inject(UserToken)
    public username$: Observable<string>,
    @Inject(DispatcherToken)
    public dispatch: Function,
    @Inject(UserTypeToken)
    public userStatus$: Observable<string>
  ) {
  }

  registerUser({ username, userType }) {
    this.dispatch(new RegisterUserAction({ username, userType }));
  }
}
