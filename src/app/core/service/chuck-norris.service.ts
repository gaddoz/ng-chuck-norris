import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiChuckNorrisService {
  constructor(protected http: HttpClient) {}

    getRandomJoke(): Observable<any> {
      const url = 'https://api.chucknorris.io/jokes/random';
      return this.http.get(url);
    }
}


