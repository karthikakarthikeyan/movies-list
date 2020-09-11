import * as auth from './../../store/reducers/auth.reducers';
import { createFeatureSelector } from '@ngrx/store';
import * as movie from 'src/app/movies/store/movie.reducer';

export interface AppState {
  
  authState: auth.State,
  movie:movie.State
}
  export const reducers = {
    auth: auth.reducer,
    movie:movie.movieReducer
  };

  export const selectAuthState = createFeatureSelector<AppState>('auth');
  export const selectMovieState = createFeatureSelector<AppState>('movie');