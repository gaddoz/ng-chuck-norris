import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout-top-side',
  templateUrl: './top-side.component.html',
})
export class LayoutTopSideComponent {
  @Input() sidebarNavCollapsible = true;
  @Input() sidebarNavEnabled = true;
  @Input() toolbarNavCollapsible = true;
  @Input() toolbarNavEnabled = true;
}
