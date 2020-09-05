import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../models/user';
import { AppState , selectAuthState } from '../../store/app.states';
import { LogIn } from '../../store/actions/auth.actions';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  user: User = new User();
  getState: Observable<any>;
  errorMessage: string | null;
  public incorrectError = false;


  constructor(private store: Store<AppState>, private AuthService: AuthService) { 
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
    });
  };

  onSubmit(): void {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.AuthService.logIn(this.user.email,this.user.password).subscribe((response) => {
      if(response.length >= 1){
        this.store.dispatch(new LogIn(payload));
      }else{
        this.incorrectError = true;
      }
    });
  }

}
