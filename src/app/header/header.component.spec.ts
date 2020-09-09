import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from'@angular/core';
import { RouterTestingModule } from'@angular/router/testing';
import { provideMockStore } from'@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
import { HttpClientTestingModule } from'@angular/common/http/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have theme 'light'`, () => {
    fixture.detectChanges();
    expect(component.theme).toContain('light');
  }); 

  it(`should have isloggedin is False`, () => {
    fixture.detectChanges();
    expect(component.isloggedin).toBeFalsy();
  });

  it(`should have isAuthenticated is False`, () => {
    fixture.detectChanges();
    expect(component.isAuthenticated).toBeFalsy();
  });

  it(`should have user declared`, () => {
    fixture.detectChanges();
    expect(component.user).toBeUndefined();
  });

  it(`should have errorMessage declared`, () => {
    fixture.detectChanges();
    expect(component.errorMessage).toBeUndefined();
  });

  it(`should have call ngOnInit is False`, () => {
    fixture.detectChanges();
    expect(component.ngOnInit()).toBeFalsy();
  });

});
