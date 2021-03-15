import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: (): Promise<unknown> =>
      import('src/app/module/main/main.module').then((m) => m.MainModule),
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' },
];

const config: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
