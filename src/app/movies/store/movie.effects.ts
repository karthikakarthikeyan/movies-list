import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map,  mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

import { ListDataSucess, LIST_MOVIES, ListMovies,AddMovie, ADD_MOVIES,UpdateMovies,UPDATE_MOVIES } from './movie.action';
import { Movies } from '../models/movies';
import { MovieService } from "../services/movie.service";

@Injectable()
export class MovieEffects {
    constructor(
        private actions: Actions,
        private movieService: MovieService,
        private router: Router
      ) {}

      @Effect({dispatch: true})
      ListMovies: Observable<any> =  this.actions.pipe(
                ofType(LIST_MOVIES),
                map((action: ListMovies) => action),
                mergeMap(payload => {
                    return this.movieService.getAll().pipe(
                        map((data) => new ListDataSucess(data)));
                }));

                @Effect({dispatch: true})
                CreateQuotes: Observable<any> =  this.actions.pipe(
                        ofType(ADD_MOVIES),
                        map((action: AddMovie) => action.payload),
                        mergeMap(payload => {
                            return this.movieService.addmovie(payload).pipe(
                                map((data) => {
                                    if (data) {
                                        return new AddMovie(data);
                                    }
                                }));
                        }));
                        
                        @Effect({dispatch: true})
                        UpdateQuotes: Observable<any> =  this.actions.pipe(
                                ofType(UPDATE_MOVIES),
                                map((action: UpdateMovies) => action.payload),
                                mergeMap(payload => {
                                    return this.movieService.update(1,payload).pipe(
                                        map((data) => {
                                            if (data) {
                                                return data;
                                            }
                                        }));
                                }));

}