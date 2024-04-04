import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../card/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly api = "http://localhost:8080/filme/omdb";

  constructor(private http: HttpClient) { }

  getMovie(movie: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.api}/${movie}`);
  }


}
