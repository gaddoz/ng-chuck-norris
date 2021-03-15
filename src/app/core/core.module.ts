import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { IconsService } from './service/icons.service';
import { CoreRoutingModule } from './routing/core-routing.module';
import { ApiChuckNorrisService } from './service/chuck-norris.service';
import { LoaderService } from './service/loader.service';
import { LoaderInterceptor } from './service/interceptor/loader.interceptor';
import { LoadingSpinnerRegisterService } from '../shared/loading-spinner/loading-spinner.register';

const initIcon = (icon: IconsService) => (): void => icon.load();

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    LayoutModule,
    HttpClientModule,
    CoreRoutingModule,
  ],
  exports: [
    HttpClientModule,
    CoreRoutingModule,
    LayoutModule,
    CoreRoutingModule,
  ],
  providers: [
    IconsService,
    ApiChuckNorrisService,
    {
      provide: APP_INITIALIZER,
      useFactory: initIcon,
      deps: [IconsService],
      multi: true,
    },
    LoaderService,
    LoadingSpinnerRegisterService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
