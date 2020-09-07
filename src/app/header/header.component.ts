import { Component, OnInit } from '@angular/core';
import { AppState,selectAuthState } from '../store/app.states';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { LogOut } from '../store/actions/auth.actions';
import { AuthService } from '../services/auth.service';
import { ThemeService } from '../services/theme.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme = 'light';
  isloggedin = false;
  isAuthenticated: false;
    user = null;
  errorMessage = null;

  getState: Observable<any>;

  constructor(public themeService: ThemeService, private authService: AuthService,private store: Store<AppState>,private router: Router) {
    this.getState = this.store.select(selectAuthState);
   }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  public logOut(): void {
    this.store.dispatch(new LogOut());
    this.router.navigateByUrl('/');
  }

  public gotoLogin(): void {
    this.router.navigateByUrl('log-in');
  }

  public gotoSignUp(): void {
    this.router.navigateByUrl('sign-up');
  }

  changeTheme(){
    if (this.theme === 'light'){
      this.themeService.setLightTheme();
    } else{
      this.themeService.setDarkTheme();
    }
  }

}
