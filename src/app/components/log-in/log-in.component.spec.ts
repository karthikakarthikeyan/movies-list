import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInComponent } from './log-in.component';    

import { CUSTOM_ELEMENTS_SCHEMA } from'@angular/core';
import { RouterTestingModule } from'@angular/router/testing';
import { provideMockStore } from'@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from'@angular/forms';
import { HttpClientTestingModule } from'@angular/common/http/testing';



describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInComponent ],
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
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
