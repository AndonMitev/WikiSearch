import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationComponent } from './authentication.component';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { UserToken, UserTypeToken } from '../shared/tokens/user.token';
import { DispatcherToken } from '../shared/tokens/dispatcher.token';
import { UserActionsTypes } from '../store/user/user.actions';

@Component({
  selector: 'app-register',
  template: ''
})
class AppRegisterMockComponent { }

const mockData = { username: 'gosho', userType: 'user' };

fdescribe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  let username$: Subject<string>;
  // tslint:disable-next-line:prefer-const
  let userType$: Subject<string>;
  // tslint:disable-next-line:prefer-const
  let dispatcher: any;
  let store: any;
  const dispatchedActions: any[] = [];

  beforeEach(async(() => {
    username$ = new Subject<string>();
    store = { dispatch: action => dispatchedActions.push(action) };
    TestBed.configureTestingModule({
      declarations: [AuthenticationComponent, AppRegisterMockComponent],
      providers: [
        {
          provide: UserToken,
          useValue: username$
        },
        {
          provide: DispatcherToken,
          useValue: dispatcher
        },
        {
          provide: UserTypeToken,
          useValue: userType$
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action', () => {
    const spyOnData = spyOn(component, 'registerUser');
    component.registerUser(mockData);
    fixture.detectChanges();

    expect(spyOnData).toHaveBeenCalled();
    expect(dispatchedActions[0].type).toEqual(UserActionsTypes.REGISTER_USER);
  });
});
