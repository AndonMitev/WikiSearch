import { InjectionToken } from '@angular/core';

export const UserToken = new InjectionToken<string>('This will provide username');
export const UserTypeToken = new InjectionToken<string>('This will provide user type');
export const isUserLoggedInToken = new InjectionToken<boolean>('This will provide if used is logged in');
