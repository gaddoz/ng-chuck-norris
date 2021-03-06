import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentsService, PostsService, UsersService, } from 'generated-sources/api/jsonpl';
import { JsonPlaceholderComponent } from './json-placeholder.component';
import { JsonPlaceholderRoutingModule } from './json-placeholder-routing.module';
import { MainComponent } from './view/main/main.component';
import {  } from 'generated-sources/api/jsonpl/api/comments.service';
import { SampleFormComponent } from './component/sample-form/sample-form.component';
import { SampleFormElementFooComponent } from './component/sample-form-element-foo/sample-form-element-foo.component';
import { MapDemoComponent } from './component/map-demo/map-demo.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './view/map/map.component';
@NgModule({
  declarations: [
    JsonPlaceholderComponent,
    SampleFormComponent,
    SampleFormElementFooComponent,
    MainComponent,
    MapDemoComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ClarityModule,
    JsonPlaceholderRoutingModule,
    LeafletModule,
  ],
  providers: [CommentsService, PostsService, UsersService],
})
export class JsonPlaceholderModule {}
