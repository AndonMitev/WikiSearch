import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRolesComponent } from './change-roles.component';
import { By } from '@angular/platform-browser';

const mockDropdownValues: string[] = ['user', 'admin'];

fdescribe('ChangeRolesComponent', () => {
  let component: ChangeRolesComponent;
  let fixture: ComponentFixture<ChangeRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeRolesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRolesComponent);
    component = fixture.componentInstance;
    component.dropdownValues = mockDropdownValues;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have mocked dropdown values', () => {
    const options: HTMLElement[] = fixture.debugElement.query(By.css('select')).nativeElement['options'];

    expect(options.length).toEqual(3);
    expect(options[0].textContent).toEqual('');
    expect(options[1].textContent).toEqual('user');
    expect(options[2].textContent).toEqual('admin');
  });

  it('should dispatch event', () => {
    const spyOnChangeRole = spyOn(component, 'changeRole');
    const option: HTMLElement = fixture.debugElement.query(By.css('select')).nativeElement;
    option.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(spyOnChangeRole).toHaveBeenCalled();
  });

  it('should emit value', () => {
    const spyOnEmittingValue = spyOn(component.changeValue, 'emit');
    const option: HTMLElement = fixture.debugElement.query(By.css('select')).nativeElement;
    const options = fixture.debugElement.query(By.css('select')).nativeElement.children;

    options[2]['selected'] = true;
    option.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(spyOnEmittingValue).toHaveBeenCalled();
    expect(spyOnEmittingValue).toHaveBeenCalledWith('admin');
  });

  it('should not emit value if its empty option', () => {
    const spyOnEmittingValue = spyOn(component.changeValue, 'emit');
    const option: HTMLElement = fixture.debugElement.query(By.css('select')).nativeElement;
    const options = fixture.debugElement.query(By.css('select')).nativeElement.children;

    options[0]['selected'] = true;
    option.dispatchEvent(new Event('change'));

    expect(spyOnEmittingValue).not.toHaveBeenCalled();
  });
});
