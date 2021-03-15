import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
})
export class LoadingSpinnerComponent {
  @Input() loading = false;
}
