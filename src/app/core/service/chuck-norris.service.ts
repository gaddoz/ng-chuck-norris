import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JokesCategory } from '../model/api/chuck-norris/jokesCategory';
import { Joke } from '../model/api/chuck-norris/joke';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiChuckNorrisService {
  constructor(protected http: HttpClient) {}

  getRandomJoke(): Observable<Joke> {
    const url = 'https://api.chucknorris.io/jokes/random';
    return this.http.get<Joke>(url);
  }

  getJokesCategories(): Observable<JokesCategory[]> {
    const url = 'https://api.chucknorris.io/jokes/categories';
    return this.http
      .get<string[]>(url)
      .pipe(map((res) => res.map((cat) => ({ name: cat, jokes: [] }))));
  }

  getRandomJokeByCategory(category: string): Observable<string[]> {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    return this.http.get<string[]>(url);
  }

  getJokesBySearch(query: string): Observable<Joke[]> {
    const url = `https://api.chucknorris.io/jokes/search?query=${query}`;
    return this.http.get<Joke[]>(url);
  }

  getJokesByCategory(category: string): Observable<Joke[]> {
    return this.getJokesBySearch(category);
  }
}
