import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { HeaderSubNavComponent } from './component/header-subnav/header-subnav.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ToolbarNavComponent } from './component/toolbar-nav/toolbar-nav.component';
import { LayoutTopSideComponent } from './view/default/top-side/top-side.component';

@NgModule({
  declarations: [
    LayoutTopSideComponent,
    SidebarComponent,
    HeaderSubNavComponent,
    HeaderComponent,
    ToolbarNavComponent,
  ],
  imports: [CommonModule, RouterModule, ClarityModule],
  exports: [LayoutTopSideComponent],
  providers: [],
})
export class LayoutModule {}
