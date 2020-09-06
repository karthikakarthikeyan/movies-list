import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { AppState } from '../store/app.states';
import { LogOut } from '../store/actions/auth.actions';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme = 'light';
  isloggedin = false;
  constructor(public themeService: ThemeService, private authService: AuthService,private store: Store<AppState>,private router: Router) {
    
   }

  ngOnInit(): void {
    if (this.authService.getToken()){
      this.isloggedin=true;
    }
  }

  logOut(): void {
    this.store.dispatch(new LogOut());
    this.router.navigateByUrl('/log-in');


  }
  changeTheme(){
    if (this.theme === 'light'){
      this.themeService.setLightTheme();
    } else{
      this.themeService.setDarkTheme();
    }
  }

}
