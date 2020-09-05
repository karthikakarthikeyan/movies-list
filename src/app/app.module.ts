import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent,
    LogInComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthEffects]),
    RouterModule.forRoot([
      { path: 'log-in', component: LogInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '', component: LandingComponent },
      { path: '**', redirectTo: '/' }
    ])
  ],
  providers: [Store, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
