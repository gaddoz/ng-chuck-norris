import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ModalComponent } from './modal/modal.component';


@NgModule({
    declarations: [ModalComponent],
    imports: [CommonModule, ClarityModule],
    exports: [ModalComponent],
})
export class SharedModule { }
