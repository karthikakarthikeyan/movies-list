import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { CUSTOM_ELEMENTS_SCHEMA } from'@angular/core';
import { RouterTestingModule } from'@angular/router/testing';
import { provideMockStore } from'@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
import { HttpClientTestingModule } from'@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'assignment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('assignment');
  });
});
