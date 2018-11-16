import { Injectable, Inject } from '@angular/core';
import { CanActivate } from '@angular/router';
import { isUserLoggedInToken } from '../tokens/user.token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    @Inject(isUserLoggedInToken)
    private isUserLoggedIn: Observable<boolean>
  ) { }

  canActivate(): Observable<boolean> {
    return this.isUserLoggedIn;
  }
}
