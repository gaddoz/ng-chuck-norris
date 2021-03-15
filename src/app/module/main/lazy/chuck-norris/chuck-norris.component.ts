import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Joke } from 'src/app/core/model/api/chuck-norris/joke';
import { ApiChuckNorrisService } from 'src/app/core/service/chuck-norris.service';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
})
export class ChuckNorrisComponent implements OnInit {
  randomJoke: Joke | undefined = undefined;
  jokeCategories: string[] = [];

  constructor(apiChuckService: ApiChuckNorrisService) {
    forkJoin({
      randomJoke: apiChuckService.getRandomJoke(),
      jokeCategories: apiChuckService.getJokesCategories(),
    }).subscribe({
      next: res => {
        console.log(
          '🚀 ~ file: chuck-norris.component.ts ~ line 19 ~ ChuckNorrisComponent ~ }).subscribe ~ res',
          res,
        );
        this.jokeCategories = res.jokeCategories;
        this.randomJoke = res.randomJoke;
      },
    });
  }

  ngOnInit(): void {}
}
