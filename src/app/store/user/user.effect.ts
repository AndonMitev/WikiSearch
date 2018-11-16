import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RegisterUserAction, UserActionsTypes, IsUserLoggedInAction, SwitchRoleAction } from './user.actions';
import { Router } from '@angular/router';
import { tap, withLatestFrom, map } from 'rxjs/operators';
import { UserTypeToken } from 'src/app/shared/tokens/user.token';
import { Observable } from 'rxjs';
import { UserStatusTypes } from '../../shared/enumerations/user-status';

@Injectable()
export class UserEffects {

  @Effect()
  authenticateUser = this.actions$
    .pipe(
      ofType<RegisterUserAction>(UserActionsTypes.REGISTER_USER),
      withLatestFrom(this.userStatus$),
      map(([_, userType]) => {
        return new IsUserLoggedInAction(true);
      }));


  @Effect({ dispatch: false })
  navigateUser = this.actions$
    .pipe(
      ofType<IsUserLoggedInAction>(UserActionsTypes.LOGGED_USER),
      map(action => {
        if (action.payload) {
          this.router.navigate([`/articles/${UserStatusTypes.regular}`]);
        }
      })
    );

  @Effect({ dispatch: false })
  changeUserType = this.actions$
    .pipe(
      ofType<SwitchRoleAction>(UserActionsTypes.SWITCH_ROLE),
      map(action => {
        this.router.navigate([`/articles/${action.payload}`]);
      })
    );

  constructor(
    private actions$: Actions,
    private router: Router,
    @Inject(UserTypeToken)
    public userStatus$: Observable<string>,
  ) { }
}
