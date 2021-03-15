import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ModalComponent } from './modal/modal.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [ModalComponent, LoadingSpinnerComponent],
  imports: [CommonModule, ClarityModule],
  exports: [ModalComponent, LoadingSpinnerComponent],
})
export class SharedModule {}
