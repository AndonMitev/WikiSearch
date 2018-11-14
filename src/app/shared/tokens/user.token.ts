import { InjectionToken } from '@angular/core';

export const UserToken = new InjectionToken<string>('This will provide username');
export const UserTypeToken = new InjectionToken<string>('This will provide user type');
