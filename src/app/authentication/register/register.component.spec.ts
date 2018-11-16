import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { By } from '@angular/platform-browser';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let inputElement: HTMLElement;
  let buttonElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call register', () => {
    const spyOnRegister = spyOn(component, 'register');

    inputElement['value'] = 'gosho';
    fixture.detectChanges();
    buttonElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(spyOnRegister).toHaveBeenCalled();
  });

  it('should emit username', () => {
    const spyOnEventEmitter = spyOn(component.output, 'emit');

    inputElement['value'] = 'gosho';
    fixture.detectChanges();
    buttonElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(spyOnEventEmitter).toHaveBeenCalled();
    expect(spyOnEventEmitter).toHaveBeenCalledWith({ username: 'gosho' });
  });

  it('should not call if username is empty', () => {
    const spyOnEventEmitter = spyOn(component.output, 'emit');

    inputElement['value'] = '';
    fixture.detectChanges();
    buttonElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(spyOnEventEmitter).not.toHaveBeenCalled();
  });
});
