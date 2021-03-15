import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '../model/api/chuck-norris/joke';

@Injectable()
export class ApiChuckNorrisService {
  constructor(protected http: HttpClient) {}

  getRandomJoke(): Observable<Joke> {
    const url = 'https://api.chucknorris.io/jokes/random';
    return this.http.get<Joke>(url);
  }

  getJokesCategories(): Observable<string[]> {
    const url = 'https://api.chucknorris.io/jokes/categories';
    return this.http.get<string[]>(url);
  }

  getRandomJokeByCategory(category: string): Observable<string[]> {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    return this.http.get<string[]>(url);
  }

  getJokesBySearch(category: string): Observable<Joke[]> {
    const url = `https://api.chucknorris.io/jokes/search?query={query}`;
    return this.http.get<Joke[]>(url);
  }

  getJokesByCategory(category: string): Observable<Joke[]> {
    return this.getJokesBySearch(category);
  }

}


