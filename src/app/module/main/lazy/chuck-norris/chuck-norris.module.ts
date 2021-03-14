import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckNorrisComponent } from './chuck-norris.component';
import { ChuckNorrisRoutingModule } from './chuck-norris-routing.module';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ChuckNorrisComponent,
  ],
  imports: [
    CommonModule,
    ChuckNorrisRoutingModule,
    ClarityModule,
    SharedModule,
  ],
})
export class ChuckNorrisModule {}
