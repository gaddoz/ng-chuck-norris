import { ElementRef, Injectable } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner.component';

@Injectable()
export class LoadingSpinnerRegisterService {
  private readonly existingBars: ElementRef<LoadingSpinnerComponent>[] = [];

  /**
   * Registers a new bar to the existing bars array
   * @param newBar: the component to register
   */
  registerBar(newBar: ElementRef<LoadingSpinnerComponent>): void {
    this.existingBars.forEach((bar) => {
      bar.nativeElement.hide();
    });
    this.existingBars.push(newBar);
  }

  /**
   * Called when a component that contains an ngx-progress is destroyed
   * @param bar: the bar to unregister
   */
  unregisterBar(bar: ElementRef<LoadingSpinnerComponent>): void {
    this.existingBars.splice(this.existingBars.indexOf(bar), 1);
    if (this.existingBars.length) {
      // tslint:disable-next-line:ban-ts-ignore
      // @ts-ignore
      this.existingBars[this.existingBars.length - 1].nativeElement['style'][
        'display'
      ] = 'inherit';
    }
  }
}
