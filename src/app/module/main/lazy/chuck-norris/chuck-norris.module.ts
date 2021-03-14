import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckNorrisComponent } from './chuck-norris.component';
import { ChuckNorrisRoutingModule } from './chuck-norris-routing.module';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    ChuckNorrisComponent,
  ],
  imports: [
    CommonModule,
    ChuckNorrisRoutingModule,
    ClarityModule,
  ],
})
export class ChuckNorrisModule {}
