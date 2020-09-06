import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from './store/app.states';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movies/components/movie-list/movie-list.component';
import { MovieAddComponent } from './movies/components/movie-add/movie-add.component';
import { MovieEditComponent } from './movies/components/movie-edit/movie-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent,
    LogInComponent,
    HeaderComponent,
    MovieListComponent,
    MovieAddComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthEffects]),
    RouterModule.forRoot([
      { path: 'log-in', component: LogInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'movie', component: MovieListComponent },
      { path: 'addmovie', component: MovieAddComponent },
      { path: 'editmovie/:movieId', component: MovieEditComponent },
      { path: '**', redirectTo: '/log-in' },

    ])
  ],
  providers: [Store, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
