import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './authentication/register/register.component';
import { StoreModule, Store, select } from '@ngrx/store';
import { userReducer } from './store/user/user.reducers';
import { UserState } from './store/user/user.state';
import { UserToken, UserTypeToken, isUserLoggedInToken } from './shared/tokens/user.token';
import { userDataSelector, userTypeSelector, isUserLoggedInSelector } from './store/user/user.selectors';
import { DispatcherToken } from './shared/tokens/dispatcher.token';
import { ChangeRolesComponent } from './authentication/change-roles/change-roles.component';
import { ArticleUserComponent } from './articles-feature/article-user/article-user.component';
import { ArticleAdminComponent } from './articles-feature/admin/article-admin/article-admin.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { UserStatusTypes } from './shared/enumerations/user-status';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user/user.effect';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminSearchComponent } from './articles-feature/admin/admin-search/admin-search.component';
import { AdminEffects } from './articles-feature/admin/admin-store/effect/admin.effects';
import { HeadersInterceptor } from './shared/interceptor/headers.interceptor';
import { ArticlesToken } from './shared/tokens/article.token';
import { selectArticles } from './store/app.selector';
import { AppState } from './store/app.state';
import { appReducers } from './store/app.reducer';
import { ListArticlesComponent } from './articles-feature/list-articles/list-articles.component';
import { ListArticlesAdminComponent } from './articles-feature/admin/list-articles-admin/list-articles-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: AuthenticationComponent },
  {
    path: 'articles/' + UserStatusTypes.regular,
    canActivate: [AuthGuard],
    component: ArticleUserComponent
  },
  {
    path: 'articles/' + UserStatusTypes.admin,
    canActivate: [AuthGuard],
    component: ArticleAdminComponent
  },
  {
    path: '**',
    redirectTo: '/register'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ChangeRolesComponent,
    ArticleUserComponent,
    ArticleAdminComponent,
    AuthenticationComponent,
    AdminSearchComponent,
    ListArticlesComponent,
    ListArticlesAdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(UserState.stateName, userReducer),
    StoreModule.forFeature(AppState.stateName, appReducers),
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([UserEffects, AdminEffects])
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
    },
    {
      provide: isUserLoggedInToken,
      useFactory: store => store.pipe(select(isUserLoggedInSelector)),
      deps: [Store]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    },
    {
      provide: ArticlesToken,
      useFactory: store => store.pipe(select(selectArticles)),
      deps: [Store]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
