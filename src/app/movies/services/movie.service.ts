import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Movies } from "../models/movies";
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getMovies(): Observable<Movies[]> {
    const url = `${this.baseUrl}/movies`; 
    return this.http.get<Movies[]>(url);

 }

  getById(id): Observable<Movies> {
    return this.http.get<Movies>(this.baseUrl + '/movies/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.baseUrl + '/movies/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  addmovie(movie): Observable<Movies> {
    return this.http.post<Movies>(this.baseUrl + '/movies/', JSON.stringify(movie), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  update(id, movie): Observable<Movies> {
    return this.http.put<Movies>(this.baseUrl + '/movies/' + id, JSON.stringify(movie), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.http.delete<Movies>(this.baseUrl + '/movies/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
