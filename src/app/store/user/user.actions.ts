import { Action } from '@ngrx/store';
import { UserModel } from 'src/app/shared/models/user.model';

export const UserActionsTypes = {
  REGISTER_USER: '[USER] Register',
  SWITCH_ROLE: '[USER] Switch role',
  LOGGED_USER: '[USER] Logged in'
};

export class RegisterUserAction implements Action {
  readonly type: string = UserActionsTypes.REGISTER_USER;
  constructor(public payload: UserModel) { }
}

export class SwitchRoleAction implements Action {
  readonly type: string = UserActionsTypes.SWITCH_ROLE;
  constructor(public payload: string) { }
}

export class IsUserLoggedInAction implements Action {
  readonly type: string = UserActionsTypes.LOGGED_USER;
  constructor(public payload: boolean) { }
}
