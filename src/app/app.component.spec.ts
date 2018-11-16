import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';
import { Action } from '@ngrx/store';
import { DispatcherToken } from './shared/tokens/dispatcher.token';
import { By } from '@angular/platform-browser';
import { UserActionsTypes } from './store/user/user.actions';

@Component({
  selector: 'app-change-roles',
  template: ''
})
class ChangeRolesMockComponent {
  @Input()
  dropdownValues: any[];
}

fdescribe('AppComponent', () => {
  // let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dispatcher$: Subject<Function>;
  let store: any;
  const dispatchedActions: any[] = [];

  beforeEach(async(() => {
    dispatcher$ = new Subject<Function>();
    store = { dispatch: action => dispatchedActions.push(action) };

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ChangeRolesMockComponent
      ],
      providers: [
        {
          provide: DispatcherToken,
          useValue: dispatcher$
        }
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
