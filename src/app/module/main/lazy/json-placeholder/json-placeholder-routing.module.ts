import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './view/main/main.component';
import { JsonPlaceholderComponent } from './json-placeholder.component';
import { MapComponent } from './view/map/map.component';

const routes: Routes = [
  {
    path: '',
    component: JsonPlaceholderComponent,
    children: [
      {
        path: 'home',
        component: MainComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonPlaceholderRoutingModule {}
