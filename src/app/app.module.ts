import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { StoreModule, Store, select } from '@ngrx/store';
import { userReducer } from './store/user/user.reducers';
import { UserState } from './store/user/user.state';
import { UserToken, UserTypeToken } from './shared/tokens/user.token';
import { userDataSelector, userTypeSelector } from './store/user/user.selectors';
import { DispatcherToken } from './shared/tokens/dispatcher.token';
import { ChangeRolesComponent } from './components/change-roles/change-roles.component';
import { ArticleUserComponent } from './components/articles-feature/article-user/article-user.component';
import { ArticleAdminComponent } from './components/articles-feature/article-admin/article-admin.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UserStatusTypes } from './shared/enumerations/user-status';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user/user.effect';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: AuthenticationComponent },
  { path: 'articles/' + UserStatusTypes.regular, component: ArticleUserComponent },
  { path: 'articles/' + UserStatusTypes.admin, component: ArticleAdminComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ChangeRolesComponent,
    ArticleUserComponent,
    ArticleAdminComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(UserState.stateName, userReducer),
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [
    {
      provide: UserToken,
      useFactory: store => store.pipe(select(userDataSelector)),
      deps: [Store]
    },
    {
      provide: DispatcherToken,
      useFactory: store => action => store.dispatch(action),
      deps: [Store]
    },
    {
      provide: UserTypeToken,
      useFactory: store => store.pipe(select(userTypeSelector)),
      deps: [Store]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
