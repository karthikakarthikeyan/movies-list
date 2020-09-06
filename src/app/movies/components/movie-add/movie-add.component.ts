import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MovieService} from '../../services/movie.service';


@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {
  movieForm: FormGroup;
  public submitted = false;

  constructor(public fb: FormBuilder,
    private router: Router,
    public movieService: MovieService) { }

  ngOnInit(){
    this.movieForm = this.fb.group({
      title: ['',  Validators.required],
      description: ['',  Validators.required],
      category: ['',  Validators.required],    
    })
  }

  get addFormControl() {
    return this.movieForm.controls;
  }

  submitForm() {
    this.submitted = true;
    if (this.movieForm.valid) {
      this.movieService.addmovie(this.movieForm.value).subscribe(res => {
        this.router.navigateByUrl('/movie');
    });
    }
  }
}
