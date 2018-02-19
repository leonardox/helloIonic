import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseAPI = "https://api.themoviedb.org/3";
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getPopularMovies(page) {
    return this.http.get(this.baseAPI + "/movie/popular?page=" + page + "&api_key=cae5de19d4ea4edb25b3998787e11ce3");
  }

  getMovieDetail(movie_id:string) {
    return this.http.get(this.baseAPI + "/movie/" + movie_id + "?api_key=cae5de19d4ea4edb25b3998787e11ce3");
  }
}
