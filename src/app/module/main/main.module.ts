import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeModule } from './view/home/home.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    MainRoutingModule,
    CommonModule,
    LayoutModule,
    ClarityModule,
    HomeModule,
  ],
})
export class MainModule {}
