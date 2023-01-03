import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'chuck-norris',
        loadChildren: () =>
          import(
            'src/app/module/main/lazy/chuck-norris/chuck-norris.module'
          ).then(m => m.ChuckNorrisModule),
      },
      {
        path: 'json-placeholder',
        loadChildren: () =>
          import(
            'src/app/module/main/lazy/json-placeholder/json-placeholder.module'
          ).then(m => m.JsonPlaceholderModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
