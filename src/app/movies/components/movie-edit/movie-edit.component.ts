import { Component, OnInit } from '@angular/core';
import { Movies } from '../../models/movies';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectMovieState } from 'src/app/movies/store/app.states';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MovieService} from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import {UpdateMovies, ListMovies} from '../../store/movie.action';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {
  id: number;
  movie: Movies;
  editform: FormGroup;
  getState: Observable<any>;

  constructor( public movieService: MovieService, private route: ActivatedRoute, public fb: FormBuilder,
    private router: Router, private store: Store<AppState>) {
      this.getState = this.store.select(selectMovieState);
    }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['movieId'];
      this.movieService.getById(this.id).subscribe((data: Movies)=>{
        this.movie = data;
      });

      this.editform = this.fb.group({
        id:[''],
        title: [''],
        description: [''],
        category: [''],
      })

      this.movieService.getById(this.id)
      .subscribe( data => {
        this.editform.setValue(data);
      });
  }

  submit(){
    this.movieService.update(this.id, this.editform.value).subscribe(res => {
         this.router.navigateByUrl('/movie');
    })

    // const payload = {
    //   index: this.id,
    //   newMovie: this.editform.value
    // };
    // this.store.dispatch(new UpdateMovies(payload));
    // this.store.dispatch(new ListMovies());
    // this.router.navigateByUrl('/');
  }
}
