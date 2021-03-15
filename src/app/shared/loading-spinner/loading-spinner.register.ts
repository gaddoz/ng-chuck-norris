import { ElementRef, Injectable } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner.component';
@Injectable()
export class LoadingSpinnerRegisterService {
  private readonly existingBars: ElementRef<LoadingSpinnerComponent>[] = [];

  registerBar(newBar: ElementRef<LoadingSpinnerComponent>): void {
    this.existingBars.forEach((bar) => {
      const el = (bar.nativeElement as unknown) as HTMLElement;
      el.style.display = 'none';
      console.log('we register and hide bar', bar);
    });
    this.existingBars.push(newBar);
  }

  unregisterBar(bar: ElementRef<LoadingSpinnerComponent>): void {
    this.existingBars.splice(this.existingBars.indexOf(bar), 1);
    if (this.existingBars.length) {
      const lastEl = (this.existingBars[this.existingBars.length - 1]
        .nativeElement as unknown) as HTMLElement;
      lastEl.style.display = 'inherit';
      console.log('we unregisterBar and show last bar', this.existingBars);
    }
  }
}
