import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/service/loader.service';
import { LoadingSpinnerRegisterService } from 'src/app/shared/loading-spinner/loading-spinner.register';
import { LoadingSpinnerDisplayMode } from './loading-spinner.mode.enum';

@Component({
  selector: 'app-shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {
  @Input() mode: LoadingSpinnerDisplayMode = LoadingSpinnerDisplayMode.Svg;
  show = true;
  modeEnum = LoadingSpinnerDisplayMode;

  constructor(
    public loaderService: LoaderService,
    private register: LoadingSpinnerRegisterService,
    private readonly self: ElementRef<LoadingSpinnerComponent>
  ) {}

  hide(): void {
    this.show = false;
  }
  ngOnDestroy(): void {
    this.register.unregisterBar(this.self);
  }

  ngOnInit(): void {
    this.register.registerBar(this.self);
  }
}
