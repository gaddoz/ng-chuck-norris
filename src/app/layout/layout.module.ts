import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { LayoutTopSideComponent } from './view/default/top-side/top-side.component';

@NgModule({
  declarations: [ LayoutTopSideComponent, SidebarComponent, HeaderComponent ],
  imports: [ CommonModule, RouterModule, ClarityModule ],
  exports: [ LayoutTopSideComponent ],
  providers: [],
})
export class LayoutModule {}
