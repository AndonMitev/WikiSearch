import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RegisterUserAction, UserActionsTypes } from './user.actions';
import { Router } from '@angular/router';
import { tap, withLatestFrom } from 'rxjs/operators';
import { UserTypeToken } from 'src/app/shared/tokens/user.token';
import { Observable } from 'rxjs';

@Injectable()
export class UserEffects {

  @Effect({ dispatch: false })
  navigateUser = this.actions$
    .pipe(
      ofType<RegisterUserAction>(UserActionsTypes.REGISTER_USER),
      withLatestFrom(this.userStatus$),
      tap(res => console.log(res)),
      tap(([_, userType]) => this.router.navigate(['/articles/' + userType]))
    );

  constructor(
    private actions$: Actions,
    private router: Router,
    @Inject(UserTypeToken)
    public userStatus$: Observable<string>) { }
}
