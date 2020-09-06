import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map,  mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

import { ListDataSucess, LIST_MOVIES, ListMovies } from './movie.action';
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


}