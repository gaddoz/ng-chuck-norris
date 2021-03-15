import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() open = false;
  @Input() showCancelButton = false;
  @Input() showOkButton = true;
  @Input() title = '';

  public closeModal(): void {
    this.open = false;
  }

  public openModal(): void {
    this.open = true;
  }
}
