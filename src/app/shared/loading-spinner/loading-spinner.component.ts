import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/service/loader.service';
import { LoadingSpinnerRegisterService } from 'src/app/shared/loading-spinner/loading-spinner.register';
@Component({
  selector: 'app-shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {
  @Input() mode: 'svg' | 'svg-negative-top' | 'progress' | 'compact-progress' | 'spinner' = 'svg-negative-top';
  @Input() singleRegistrySkip: boolean = false;
  enabled = true;

  constructor(
    public loaderService: LoaderService,
    private register: LoadingSpinnerRegisterService,
    private readonly self: ElementRef<LoadingSpinnerComponent>
  ) {}

  hide(): void {
    this.enabled = false;
  }

  show(): void {
    this.enabled = true;
  }

  ngOnDestroy(): void {
    if(!this.singleRegistrySkip){
      this.register.unregisterBar(this.self);
      console.log("🚀 ~ file: loading-spinner.component.ts ~ line 31 ~ LoadingSpinnerComponent ~ ngOnDestroy ~ this.self", this.self)
    }
  }

  ngOnInit(): void {
    if(!this.singleRegistrySkip){
      this.register.registerBar(this.self);
      console.log("🚀 ~ file: loading-spinner.component.ts ~ line 38 ~ LoadingSpinnerComponent ~ ngOnInit ~ this.self", this.self)
    }
  }
}
