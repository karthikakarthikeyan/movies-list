import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAddComponent } from './movie-add.component';
import { CUSTOM_ELEMENTS_SCHEMA } from'@angular/core';
import { RouterTestingModule } from'@angular/router/testing';
import { provideMockStore } from'@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
import { HttpClientTestingModule } from'@angular/common/http/testing';

describe('MovieAddComponent', () => {
  let component: MovieAddComponent;
  let fixture: ComponentFixture<MovieAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieAddComponent ],
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
    fixture = TestBed.createComponent(MovieAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
