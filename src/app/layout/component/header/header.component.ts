import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    ':host {width: 100%};',
    '.dropdown > .dropdown-menu {margin-top: 0.2rem !important;}',
  ],
})
export class HeaderComponent {
  toggleNav(navpos: number): void {
    console.log(
      '🚀 ~ file: header.component.ts ~ line 9 ~ HeaderComponent ~ toggleNav:void ~ navpos',
      navpos
    );
  }
}
