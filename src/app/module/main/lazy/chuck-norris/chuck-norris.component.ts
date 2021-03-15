import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { JokesCategory } from 'src/app/core/model/api/chuck-norris/jokesCategory';
import { Joke } from 'src/app/core/model/api/chuck-norris/joke';
import { ApiChuckNorrisService } from 'src/app/core/service/chuck-norris.service';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
})
export class ChuckNorrisComponent implements OnInit {
  randomJoke: Joke | undefined = undefined;
  jokeCategories: JokesCategory[] = [];

  constructor(private apiChuckService: ApiChuckNorrisService) {}

  ngOnInit(): void {
    this.loadAllForkJoin();
  }

  getItemsForEachCat(): Observable<JokesCategory[]> {
    return this.apiChuckService.getJokesCategories().pipe(
      mergeMap(categories => {
        const jokesSearch = categories.map(cat =>
          this.apiChuckService.getJokesByCategory(cat.name).pipe(
            map(jokes => {
              return { name: cat.name, jokes: jokes };
            }),
          ),
        );
        return forkJoin(jokesSearch);
      }),
    );
  }

  refreshRandomJoke(): void {
    this.loadAllForkJoin();
  }

  loadAllForkJoin(): void {
    forkJoin({
      randomJoke: this.apiChuckService.getRandomJoke(),
      jokeCategories: this.apiChuckService.getJokesCategories(),
      jokesCategories: this.getItemsForEachCat(),
    }).subscribe({
      next: res => {
        console.log(
          '🚀 ~ file: chuck-norris.component.ts ~ line 54 ~ refreshRandomJoke ~ res',
          res,
        );
        this.jokeCategories = res.jokesCategories;
        this.randomJoke = res.randomJoke;
      },
    });
  }
}
