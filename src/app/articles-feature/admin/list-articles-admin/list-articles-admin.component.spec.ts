import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticlesAdminComponent } from './list-articles-admin.component';

describe('ListArticlesAdminComponent', () => {
  let component: ListArticlesAdminComponent;
  let fixture: ComponentFixture<ListArticlesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListArticlesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArticlesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
