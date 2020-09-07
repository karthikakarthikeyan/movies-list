import { Action } from '@ngrx/store';
import {Movies} from '../models/movies';



export const LIST_MOVIES = '[Movies] Fetch Movies';
export const LIST_DATA_SUCCESS='[Movies] List Success';
export const UPDATE_MOVIES = '[Movies] Update Movies';
export const ADD_MOVIES = '[Movies] ADD';



export class ListMovies implements Action {
  readonly type = LIST_MOVIES;
  constructor() {}
}

export class UpdateMovies implements Action {
  readonly type = UPDATE_MOVIES;

  constructor(public payload: { index: number; newMovie: Movies }) {}
}

  export class ListDataSucess implements Action {
    readonly type = LIST_DATA_SUCCESS;
    constructor(public payload: Movies[]) {}
  }

  export class AddMovie implements Action {
    readonly type = ADD_MOVIES;
    constructor(public payload: Movies) {
    }
}

 
export type MoviesActions =
  | ListMovies
  | ListDataSucess
  | UpdateMovies
  | AddMovie;

