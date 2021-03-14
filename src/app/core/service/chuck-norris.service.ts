import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiChuckNorrisService {
  constructor(protected http: HttpClient) {}

    getRandomJoke() {
        return this.http.get('https://api.chucknorris.io/jokes/random');
    }
}


