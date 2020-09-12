import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../models/user';
import { AppState , selectAuthState } from '../../store/app.states';
import { LogIn } from '../../store/actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from '../../services/theme.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  theme = 'light';
  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;
  public incorrectError = false;


  constructor(private store: Store<AppState>, private authService: AuthService, public themeService: ThemeService) { 
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    // this.getState.subscribe((state) => {
    //   this.errorMessage = state.errorMessage;
    // });
  };

  onSubmit(): void {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.authService.logIn(this.user.email,this.user.password).subscribe((response) => {
      if(response.length >= 1){
        this.store.dispatch(new LogIn(payload));
      }else{
        this.incorrectError = true;
      }
    });
  }

  changeTheme(){
    if (this.theme === 'light'){
      this.themeService.setLightTheme();
    } else{
      this.themeService.setDarkTheme();
    }
  }

}
