import { Action } from '@ngrx/store';
import {Movies} from '../models/movies';



export const LIST_MOVIES = '[Movies] Fetch Movies';
export const LIST_DATA_SUCCESS='[Movies] List Success';
export const UPDATE_MOVIES = '[Movies] Update Movies';



export class ListMovies implements Action {
  readonly type = LIST_MOVIES;
}

export class UpdateMovies implements Action {
  readonly type = UPDATE_MOVIES;

  constructor(public payload: { index: number; newMovie: Movies }) {}
}

  export class ListDataSucess implements Action {
    readonly type = LIST_DATA_SUCCESS;
    constructor(public payload: Movies[]) {}
  }

 


export type MoviesActions =
  | ListMovies
  | ListDataSucess
  | UpdateMovies;

