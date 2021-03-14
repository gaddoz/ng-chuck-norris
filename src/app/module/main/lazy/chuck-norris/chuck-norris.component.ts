import { Component, OnInit } from '@angular/core';
import { ApiChuckNorrisService } from 'src/app/core/service/chuck-norris.service';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
})
export class ChuckNorrisComponent implements OnInit {
  randomJoke = '';

  constructor(apiChuckService: ApiChuckNorrisService) {
    apiChuckService.getRandomJoke().subscribe((res: any) => {
      console.log('🚀 ~ file: chuck-norris.component.ts ~ line 11 ~ ChuckNorrisComponent ~ x ~ res', res);
      this.randomJoke = res.value;
    });
  }

  ngOnInit(): void {}
}
