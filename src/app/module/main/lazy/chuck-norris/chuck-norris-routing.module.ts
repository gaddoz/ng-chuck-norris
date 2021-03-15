import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckNorrisComponent } from './chuck-norris.component';

const routes: Routes = [
  {
    path: '',
    component: ChuckNorrisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChuckNorrisRoutingModule {}
