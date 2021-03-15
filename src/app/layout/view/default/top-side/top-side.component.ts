import { Component, Input } from '@angular/core';
import { LoadingSpinnerDisplayMode } from 'src/app/shared/loading-spinner/loading-spinner.mode.enum';

@Component({
  selector: 'app-layout-top-side',
  templateUrl: './top-side.component.html',
})
export class LayoutTopSideComponent {
  @Input() sidebarNavCollapsible = true;
  @Input() sidebarNavEnabled = true;
  @Input() toolbarNavCollapsible = true;
  @Input() toolbarNavEnabled = true;
  loadingSpinnerDisplayMode = LoadingSpinnerDisplayMode;
}
