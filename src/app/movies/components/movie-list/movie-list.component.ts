import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';

import { AppState, selectMovieState } from '../../store/app.states';
import { ListMovies } from '../../store/movie.action';
import { Movies } from "../../models/movies";
import { MovieService } from "../../services/movie.service";
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  // movies: Movies[] = [];
  public movies:any;
  getState: Observable<any>;
  errorMessage: string | null;
  isloggedin = false;

  constructor( private MovieService: MovieService,   private store: Store<AppState>, private authService: AuthService
    ) { 
      this.getState = this.store.select(selectMovieState);
    }

  ngOnInit() {

    if (this.authService.getToken()) {
      this.isloggedin = true;
    }
    this.MovieService.getMovies().subscribe((data) =>
      {
        this.movies = data;
      });
  }

  deleteProduct(id){
    this.MovieService.delete(id).subscribe(res => {
         this.movies = this.movies.filter(item => item.id !== id);
    })
  }

}
