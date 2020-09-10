import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from'@angular/router/testing';
import { provideMockStore,MockStore } from'@ngrx/store/testing';
import { HttpClientTestingModule } from'@angular/common/http/testing';
import { AuthService } from 'src/app/services/auth.service';
import { ThemeService } from '../services/theme.service';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore;
  let service: ThemeService;

  const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [provideMockStore({ initialState }), AuthService],
    })
    .compileComponents();
    service = TestBed.inject(ThemeService);
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('change theme to be called', () => {
    component.changeTheme();
    spyOn(service, 'setLightTheme');
    spyOn(service, 'setDarkTheme');
    fixture.whenStable().then(() => {
      expect(component.changeTheme).toBeCalledTimes(1);
      expect(component.theme).toBe('light');
      expect(service.setLightTheme).toBeCalledTimes(1);
      expect(service.setDarkTheme).not.toHaveBeenCalled();
    });
  });

  it('change theme to be called', () => {
    component.theme = 'dark';
    component.changeTheme();
    spyOn(component.themeService, 'setLightTheme');
    spyOn(component.themeService, 'setDarkTheme');
    fixture.whenStable().then(() => {
      expect(component.changeTheme).toBeCalled();
      expect(component.theme).toBe('');
      expect(component.themeService.setLightTheme).not.toHaveBeenCalled();
      expect(component.themeService.setDarkTheme).toBeCalledTimes(1);
    });
  });

});
