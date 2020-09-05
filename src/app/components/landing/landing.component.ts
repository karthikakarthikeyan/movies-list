import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service';

import { AppState, selectAuthState } from '../../store/app.states';
import { LogOut } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Update';
  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  errorMessage = null;
  public movies:any;

  constructor(
    private store: Store<AppState>, private _movieservice:AuthService
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });

    console.log('ddd',this._movieservice.getMovies());
    this._movieservice.getMovies().subscribe((data) =>
      {
        console.log('datasss',data);
        this.movies = data;
      });
  }

  logOut(): void {
    this.store.dispatch(new LogOut);
  }
  
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Update";
    else
      this.buttonName = "Update";
  }
  
  


}

