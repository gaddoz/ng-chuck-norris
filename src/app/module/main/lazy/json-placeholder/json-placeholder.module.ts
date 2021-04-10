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

@NgModule({
  declarations: [
    JsonPlaceholderComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ClarityModule,
    JsonPlaceholderRoutingModule,
  ],
  providers: [CommentsService, PostsService, UsersService],
})
export class JsonPlaceholderModule {}
