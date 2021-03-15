import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { IconsService } from './service/icons.service';
import { CoreRoutingModule } from './routing/core-routing.module';
import { ApiChuckNorrisService } from './service/chuck-norris.service';

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
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
