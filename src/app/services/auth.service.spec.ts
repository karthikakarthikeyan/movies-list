import { TestBed,async,inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  let loginDummyPosts = [];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.get(HttpTestingController);
    loginDummyPosts = [
      { id: '1', email: 'test@test.com', password: '123'},
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have BASE_URL', () => {
    expect(service.BASE_URL).toBeDefined();
  });

  it(`should have BASE_URL contain 'http://localhost:3000'`, () => {
    expect(service.BASE_URL).toContain('http://localhost:3000');
  });

  
  it('Get token should be caled', () => {
    spyOn(service, 'getToken').and.returnValue('abc');
    expect(service.getToken()).toEqual('abc');
  });
});
